import { NextApiRequest } from 'next';
import * as nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';
require('dotenv').config();

export default async function POST(req: NextApiRequest) {
  const transporter = nodemailer.createTransport({
    url: process.env.SMTP_URL,
    secure: true,
  });
  const { name, email, message } = req.body;
  const mailOptions: Options = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'Email sent successfully' });
  } catch (err) {
    return Response.json({ message: 'Email failed to send' });
  }
}
