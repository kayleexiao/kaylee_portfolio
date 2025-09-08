import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, message } = contactSchema.parse(body)

    // Try Resend first, fallback to Nodemailer
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'portfolio@your-domain.com',
        to: process.env.CONTACT_TO_ADDRESS || 'kaylee@example.com',
        subject: 'New Portfolio Contact Message',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f472b6;">New Contact Message</h2>
            <p><strong>From:</strong> ${email}</p>
            <div style="background-color: #fce7f3; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              Sent from Kaylee's Portfolio Website
            </p>
          </div>
        `,
      })
    } else {
      // Fallback to Nodemailer with SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_TO_ADDRESS || 'kaylee@example.com',
        subject: 'New Portfolio Contact Message',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #f472b6;">New Contact Message</h2>
            <p><strong>From:</strong> ${email}</p>
            <div style="background-color: #fce7f3; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              Sent from Kaylee's Portfolio Website
            </p>
          </div>
        `,
      })
    }

    // Log submission (best-effort file logging)
    try {
      const fs = await import('fs/promises')
      const logEntry = {
        timestamp: new Date().toISOString(),
        email,
        message: message.substring(0, 100) + '...',
      }
      await fs.appendFile('/tmp/contact-submissions.log', JSON.stringify(logEntry) + '\n')
    } catch (logError) {
      console.log('Could not write to file, logging to console:', { email, timestamp: new Date().toISOString() })
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: error.format() },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
