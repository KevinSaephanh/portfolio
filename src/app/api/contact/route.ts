import { NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';
require('dotenv').config();

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
    url: process.env.SMTP_URL,
    secure: true,
  });
  const { name, email, message } = await req.json();
  const mailOptions: Options = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      status: 200,
      message: 'Email sent successfully',
    });
  } catch (err) {
    return NextResponse.json({ status: 400, message: 'Email failed to send' });
  }
}
