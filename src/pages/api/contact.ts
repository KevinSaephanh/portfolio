import * as nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';
require('dotenv').config();

export default async function (
  req: { body: { name: string; email: string; message: string } },
  res: { status: (arg0: number) => void }
) {
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
    return res.status(200);
  } catch (err) {
    return res.status(400);
  }
}
