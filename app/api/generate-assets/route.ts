import { NextRequest, NextResponse } from 'next/server'
import { 
  validateOpenAIConnection,
  generateHeadshots,
  generateBrandLogos,
  generateServiceGraphics,
  calculateGenerationCost
} from '@/lib/openai'

export async function GET(request: NextRequest) {
  try {
    // Validate OpenAI connection
    const isConnected = await validateOpenAIConnection()
    
    if (!isConnected) {
      return NextResponse.json(
        { error: 'OpenAI API connection failed' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      status: 'connected',
      message: 'OpenAI API validated successfully',
      dalleAvailable: true,
      estimatedCost: calculateGenerationCost()
    })
    
  } catch (error) {
    console.error('API validation error:', error)
    return NextResponse.json(
      { error: 'API validation failed' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, count, brandName, services } = body

    // Validate OpenAI connection first
    const isConnected = await validateOpenAIConnection()
    if (!isConnected) {
      return NextResponse.json(
        { error: 'OpenAI API not available' },
        { status: 500 }
      )
    }

    let results: any = {}
    let cost = 0

    switch (type) {
      case 'headshots':
        results.headshots = await generateHeadshots('', count || 4)
        cost = (count || 4) * 0.04
        break
        
      case 'logos':
        results.logos = await generateBrandLogos(brandName || 'AZ Digital Hub', count || 8)
        cost = (count || 8) * 0.04
        break
        
      case 'services':
        const serviceList = services || [
          'Digital Marketing Strategy',
          'SEO Optimization',
          'Social Media Management',
          'PPC Advertising',
          'Content Marketing',
          'Web Development',
          'Brand Development',
          'Analytics & Reporting',
          'Email Marketing',
          'Lead Generation',
          'Conversion Optimization',
          'Marketing Automation'
        ]
        results.serviceGraphics = await generateServiceGraphics(serviceList)
        cost = serviceList.length * 0.04
        break
        
      case 'all':
        // Generate complete asset package
        results.headshots = await generateHeadshots('', 4)
        results.logos = await generateBrandLogos(brandName || 'AZ Digital Hub', 8)
        
        const defaultServices = [
          'Digital Marketing Strategy',
          'SEO Optimization', 
          'Social Media Management',
          'PPC Advertising',
          'Content Marketing',
          'Web Development',
          'Brand Development',
          'Analytics & Reporting',
          'Email Marketing',
          'Lead Generation',
          'Conversion Optimization',
          'Marketing Automation'
        ]
        results.serviceGraphics = await generateServiceGraphics(defaultServices)
        cost = calculateGenerationCost(4, 8, 12)
        break
        
      default:
        return NextResponse.json(
          { error: 'Invalid generation type' },
          { status: 400 }
        )
    }

    return NextResponse.json({
      success: true,
      type,
      results,
      cost: cost.toFixed(2),
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Asset generation error:', error)
    return NextResponse.json(
      { error: 'Asset generation failed' },
      { status: 500 }
    )
  }
}