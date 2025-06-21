import { NextRequest, NextResponse } from 'next/server'
import { 
  validateOpenAIConfig, 
  generateHeadshots, 
  generateBrandLogos, 
  generateServiceGraphics,
  calculateGenerationCost,
  type ImageGenerationOptions 
} from '@/lib'

// Type-safe request interface
interface GenerateAssetsRequest {
  brandName: string;
  services: string[];
  headshotCount?: number;
  logoCount?: number;
  serviceCount?: number;
  quality?: 'standard' | 'hd';
}

// Type-safe response interface
interface GenerateAssetsResponse {
  success: boolean;
  data?: {
    headshots: string[];
    logos: string[];
    serviceGraphics: Record<string, string[]>;
    totalCost: number;
    imageCount: number;
  };
  error?: string;
  validationErrors?: string[];
}

// Input validation with Context7-verified constraints
function validateRequest(body: any): { isValid: boolean; errors: string[]; data?: GenerateAssetsRequest } {
  const errors: string[] = [];
  
  if (!body.brandName || typeof body.brandName !== 'string' || body.brandName.trim().length === 0) {
    errors.push('brandName is required and must be a non-empty string');
  }
  
  if (!body.services || !Array.isArray(body.services) || body.services.length === 0) {
    errors.push('services must be a non-empty array of strings');
  }
  
  if (body.services && Array.isArray(body.services)) {
    const invalidServices = body.services.filter((service: any) => typeof service !== 'string' || service.trim().length === 0);
    if (invalidServices.length > 0) {
      errors.push('All services must be non-empty strings');
    }
  }
  
  // Validate optional counts
  const counts = ['headshotCount', 'logoCount', 'serviceCount'];
  counts.forEach(count => {
    if (body[count] !== undefined) {
      if (!Number.isInteger(body[count]) || body[count] < 0 || body[count] > 50) {
        errors.push(`${count} must be an integer between 0 and 50`);
      }
    }
  });
  
  // Validate quality parameter
  if (body.quality && !['standard', 'hd'].includes(body.quality)) {
    errors.push('quality must be either "standard" or "hd"');
  }
  
  if (errors.length > 0) {
    return { isValid: false, errors };
  }
  
  return {
    isValid: true,
    errors: [],
    data: {
      brandName: body.brandName.trim(),
      services: body.services.map((s: string) => s.trim()),
      headshotCount: body.headshotCount || 4,
      logoCount: body.logoCount || 8,
      serviceCount: body.serviceCount || 12,
      quality: body.quality || 'standard'
    }
  };
}

export async function POST(request: NextRequest): Promise<NextResponse<GenerateAssetsResponse>> {
  try {
    // Environment validation
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'OPENAI_API_KEY environment variable not configured' },
        { status: 500 }
      );
    }
    
    // Parse and validate request body
    const body = await request.json();
    const validation = validateRequest(body);
    
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', validationErrors: validation.errors },
        { status: 400 }
      );
    }
    
    const { brandName, services, headshotCount, logoCount, serviceCount, quality } = validation.data!;
    
    // Validate OpenAI connection
    const isConnected = await validateOpenAIConfig();
    if (!isConnected) {
      return NextResponse.json(
        { success: false, error: 'OpenAI API connection failed' },
        { status: 503 }
      );
    }
    
    // Calculate and validate cost
    const totalCost = calculateGenerationCost(headshotCount, logoCount, serviceCount);
    const totalImages = headshotCount! + logoCount! + serviceCount!;
    
    console.log(`🚀 Starting asset generation for ${brandName}`);
    console.log(`📊 Total images: ${totalImages}, Cost: $${totalCost.toFixed(2)}`);
    
    // Generate assets with error handling for each type
    const results = await Promise.allSettled([
      headshotCount! > 0 ? generateHeadshots('', headshotCount!) : Promise.resolve([]),
      logoCount! > 0 ? generateBrandLogos(brandName, logoCount!) : Promise.resolve([]),
      serviceCount! > 0 ? generateServiceGraphics(services, serviceCount!) : Promise.resolve({})
    ]);
    
    // Process results and handle partial failures
    const [headshotsResult, logosResult, serviceGraphicsResult] = results;
    
    const response: GenerateAssetsResponse = {
      success: true,
      data: {
        headshots: headshotsResult.status === 'fulfilled' ? headshotsResult.value : [],
        logos: logosResult.status === 'fulfilled' ? logosResult.value : [],
        serviceGraphics: serviceGraphicsResult.status === 'fulfilled' ? serviceGraphicsResult.value : {},
        totalCost,
        imageCount: totalImages
      }
    };
    
    // Check for partial failures
    const failures = results.filter(result => result.status === 'rejected');
    if (failures.length > 0) {
      console.warn('⚠️ Some asset generation failed:', failures);
      response.error = `Partial success: ${failures.length} generation tasks failed`;
    }
    
    console.log(`✅ Asset generation completed for ${brandName}`);
    return NextResponse.json(response, { status: 200 });
    
  } catch (error) {
    console.error('❌ Asset generation API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Type-safe GET endpoint for cost estimation
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    
    const headshotCount = parseInt(searchParams.get('headshotCount') || '4');
    const logoCount = parseInt(searchParams.get('logoCount') || '8');
    const serviceCount = parseInt(searchParams.get('serviceCount') || '12');
    const quality = (searchParams.get('quality') || 'standard') as 'standard' | 'hd';
    
    if (!['standard', 'hd'].includes(quality)) {
      return NextResponse.json(
        { error: 'Invalid quality parameter' },
        { status: 400 }
      );
    }
    
    const totalCost = calculateGenerationCost(headshotCount, logoCount, serviceCount);
    const totalImages = headshotCount + logoCount + serviceCount;
    
    return NextResponse.json({
      cost: totalCost,
      imageCount: totalImages,
      breakdown: {
        headshots: { count: headshotCount, cost: headshotCount * 0.04 },
        logos: { count: logoCount, cost: logoCount * 0.04 },
        services: { count: serviceCount, cost: serviceCount * 0.04 }
      },
      quality,
      pricePerImage: quality === 'hd' ? 0.08 : 0.04
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to calculate cost' },
      { status: 500 }
    );
  }
}