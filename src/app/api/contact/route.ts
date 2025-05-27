import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string(),
  budget: z.string(),
  message: z.string().min(10).max(1000),
  consent: z.boolean()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // In a real application, you would:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Integrate with a CRM
    // 4. Send a confirmation email to the user
    
    // For now, we'll just log the data
    console.log('Contact form submission:', validatedData)
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. I will get back to you soon!' 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
