import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    await request.json() // Validate JSON payload
    
    // Log the contact form submission
    
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 100))
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. I will get back to you soon!' 
      },
      { status: 200 }
    )
  } catch {
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    )
  }
}