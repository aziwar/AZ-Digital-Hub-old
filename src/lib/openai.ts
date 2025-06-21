/**
 * OpenAI DALL-E 3 Configuration
 * Context7-validated implementation with Trust Score 10 patterns
 * Next.js runtime-safe environment variable handling
 */

import OpenAI from 'openai'

// Lazy initialization pattern prevents Next.js build-time errors
let openaiClient: OpenAI | null = null

/**
 * Get OpenAI client instance with lazy initialization
 * Context7-validated runtime environment variable pattern
 */
function getOpenAIClient(): OpenAI {
  if (!openaiClient) {
    const apiKey = process.env.OPENAI_API_KEY
    
    if (!apiKey) {
      throw new Error(
        'OPENAI_API_KEY environment variable is required but not found. ' +
        'Add it to your .env.local file or Vercel environment variables.'
      )
    }
    
    openaiClient = new OpenAI({
      apiKey: apiKey,
    })
  }
  
  return openaiClient
}

/**
 * DALL-E 3 size type validation
 * Context7-validated: Only 3 supported sizes
 */
export type DalleImageSize = '1024x1024' | '1024x1792' | '1792x1024'

/**
 * Generate professional headshot using DALL-E 3
 * Cost: $0.04 per image (standard quality)
 */
export async function generateProfessionalHeadshot(
  prompt: string,
  size: DalleImageSize = '1024x1024'
): Promise<string> {
  const openai = getOpenAIClient()
  
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `Professional business headshot: ${prompt}`,
      size: size,
      quality: 'standard', // $0.04 per image
      n: 1,
    })
    
    const imageUrl = response.data[0]?.url
    if (!imageUrl) {
      throw new Error('No image URL returned from DALL-E 3')
    }
    
    return imageUrl
  } catch (error) {
    throw new Error(`DALL-E 3 generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Generate brand logo using DALL-E 3
 * Cost: $0.04 per image (standard quality)
 */
export async function generateBrandLogo(
  prompt: string,
  size: DalleImageSize = '1024x1024'
): Promise<string> {
  const openai = getOpenAIClient()
  
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `Professional logo design: ${prompt}`,
      size: size,
      quality: 'standard', // $0.04 per image
      n: 1,
    })
    
    const imageUrl = response.data[0]?.url
    if (!imageUrl) {
      throw new Error('No image URL returned from DALL-E 3')
    }
    
    return imageUrl
  } catch (error) {
    throw new Error(`DALL-E 3 generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Generate service illustration using DALL-E 3
 * Cost: $0.04 per image (standard quality)
 */
export async function generateServiceIllustration(
  prompt: string,
  size: DalleImageSize = '1792x1024'
): Promise<string> {
  const openai = getOpenAIClient()
  
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: `Professional service illustration: ${prompt}`,
      size: size,
      quality: 'standard', // $0.04 per image
      n: 1,
    })
    
    const imageUrl = response.data[0]?.url
    if (!imageUrl) {
      throw new Error('No image URL returned from DALL-E 3')
    }
    
    return imageUrl
  } catch (error) {
    throw new Error(`DALL-E 3 generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Validate environment configuration
 * Context7-validated runtime check pattern
 */
export function validateOpenAIConfig(): {
  isConfigured: boolean
  apiKeyPresent: boolean
  error?: string
} {
  try {
    const apiKeyPresent = !!process.env.OPENAI_API_KEY
    
    if (!apiKeyPresent) {
      return {
        isConfigured: false,
        apiKeyPresent: false,
        error: 'OPENAI_API_KEY environment variable not found'
      }
    }
    
    return {
      isConfigured: true,
      apiKeyPresent: true
    }
  } catch (error) {
    return {
      isConfigured: false,
      apiKeyPresent: false,
      error: error instanceof Error ? error.message : 'Unknown configuration error'
    }
  }
}
