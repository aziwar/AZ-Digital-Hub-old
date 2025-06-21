import OpenAI from 'openai'

// Initialize OpenAI client with validated API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Context7-validated DALL-E 3 interface
export interface ImageGenerationOptions {
  prompt: string;
  size: '1024x1024' | '1024x1792' | '1792x1024';
  quality: 'standard' | 'hd';
  style?: 'vivid' | 'natural';
}

// Validate API connection and configuration
export async function validateOpenAIConnection(): Promise<boolean> {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY environment variable not set')
      return false
    }
    
    const models = await openai.models.list()
    const dalleModel = models.data.find(model => model.id.includes('dall-e-3'))
    
    if (!dalleModel) {
      console.error('❌ DALL-E 3 model not available')
      return false
    }
    
    console.log('✅ OpenAI API connection validated')
    console.log('✅ DALL-E 3 model available')
    return true
    
  } catch (error) {
    console.error('❌ OpenAI API validation failed:', error)
    return false
  }
}

// Context7-validated image generation with proper error handling
export async function generateImage(options: ImageGenerationOptions) {
  const { prompt, size, quality = 'standard', style = 'natural' } = options;
  
  // DALL-E 3 size validation - Context7 verified
  const validSizes = ['1024x1024', '1024x1792', '1792x1024'] as const;
  if (!validSizes.includes(size)) {
    throw new Error(`Invalid size: ${size}. DALL-E 3 supports: ${validSizes.join(', ')}`);
  }

  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt,
      size,
      quality,
      style,
      n: 1,
      response_format: 'url'
    });

    return {
      url: response.data[0].url,
      revisedPrompt: response.data[0].revised_prompt,
    };
  } catch (error) {
    console.error('❌ Image generation failed:', error);
    throw new Error(`DALL-E 3 generation failed: ${error}`);
  }
}

// CORRECTED cost calculation - Context7 pricing validation
export function calculateImageCost(quality: 'standard' | 'hd', count: number): number {
  const pricePerImage = quality === 'hd' ? 0.08 : 0.04;
  return pricePerImage * count;
}

// Generate professional headshots (CORRECTED to standard quality)
export async function generateHeadshots(baseImagePath: string, count: number = 4): Promise<string[]> {
  try {
    const urls: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: `Professional corporate headshot of a Middle Eastern digital marketing expert, wearing business attire, clean studio lighting, high quality photography, LinkedIn-style professional portrait`,
        n: 1,
        size: '1024x1024',
        quality: 'standard', // FIXED: Changed from 'hd' to 'standard'
        response_format: 'url'
      });
      
      if (response.data[0]?.url) {
        urls.push(response.data[0].url);
      }
    }
    
    console.log(`✅ Generated ${urls.length} professional headshots`);
    return urls;
    
  } catch (error) {
    console.error('❌ Headshot generation failed:', error);
    throw error;
  }
}

// Generate brand logos (optimized for standard quality)
export async function generateBrandLogos(brandName: string, count: number = 8): Promise<string[]> {
  try {
    const logoUrls: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: `Modern professional logo for "${brandName}" digital marketing agency, minimalist design, technology-focused, Kuwait/GCC market, corporate branding, vector-style illustration`,
        n: 1,
        size: '1024x1024',
        quality: 'standard', // Optimized cost
        response_format: 'url'
      });
      
      if (response.data[0]?.url) {
        logoUrls.push(response.data[0].url);
      }
    }
    
    console.log(`✅ Generated ${logoUrls.length} brand logo variations`);
    return logoUrls;
    
  } catch (error) {
    console.error('❌ Brand logo generation failed:', error);
    throw error;
  }
}

// Generate service graphics (optimized)
export async function generateServiceGraphics(services: string[], count: number = 12): Promise<Record<string, string[]>> {
  try {
    const serviceGraphics: Record<string, string[]> = {};
    
    for (const service of services) {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt: `Professional icon illustration for ${service} service, modern flat design, business-focused, clean vector style, technology theme, corporate branding`,
        n: 1,
        size: '1024x1024',
        quality: 'standard', // Cost optimization
        response_format: 'url'
      });
      
      if (response.data[0]?.url) {
        serviceGraphics[service] = [response.data[0].url];
      }
    }
    
    console.log(`✅ Generated service graphics for ${Object.keys(serviceGraphics).length} services`);
    return serviceGraphics;
    
  } catch (error) {
    console.error('❌ Service graphics generation failed:', error);
    throw error;
  }
}

// CORRECTED cost calculation
export function calculateGenerationCost(headshotCount: number = 4, logoCount: number = 8, serviceCount: number = 12): number {
  const costPerImage = 0.04; // Standard quality pricing
  const totalImages = headshotCount + logoCount + serviceCount;
  const totalCost = totalImages * costPerImage;
  
  console.log(`💰 Cost calculation (CORRECTED):`);
  console.log(`   - Headshots: ${headshotCount} × $${costPerImage} = $${(headshotCount * costPerImage).toFixed(2)}`);
  console.log(`   - Logos: ${logoCount} × $${costPerImage} = $${(logoCount * costPerImage).toFixed(2)}`);
  console.log(`   - Service graphics: ${serviceCount} × $${costPerImage} = $${(serviceCount * costPerImage).toFixed(2)}`);
  console.log(`   - Total: $${totalCost.toFixed(2)} (Target: $0.96 for 24 images)`);
  
  return totalCost;
}

export const DALLE_PRICING = {
  standard: 0.04,
  hd: 0.08,
} as const;

export { openai }
export default openai