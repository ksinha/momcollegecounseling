import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { studentName, parentName, email, phone, gradeLevel, packageOption, schools, referral, message } = body;

        console.log('Attempting to send email...');
        console.log('User:', process.env.EMAIL_USER);

        // Strip spaces from password just in case
        const password = process.env.EMAIL_PASS?.replace(/\s/g, '');

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: password,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Sending to yourself
            replyTo: email,
            subject: `New Contact Form Submission from ${studentName}`,
            text: `
Name: ${studentName}
Parent Name: ${parentName}
Email: ${email}
Phone: ${phone}
Grade Level: ${gradeLevel}
Package Interest: ${packageOption}
Schools of Interest: ${schools}
Referral Source: ${referral}

Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Student Name:</strong> ${studentName}</p>
<p><strong>Parent Name:</strong> ${parentName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Grade Level:</strong> ${gradeLevel}</p>
<p><strong>Package Interest:</strong> ${packageOption}</p>
<p><strong>Schools of Interest:</strong> ${schools}</p>
<p><strong>Referral Source:</strong> ${referral}</p>
<br>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }
}
