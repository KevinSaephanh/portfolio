import * as nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';
require('dotenv').config();

export default function (
  req: { body: { email: string; name: string; message: string } },
  res: { status: (arg0: number) => void }
) {
  const transporter = nodemailer.createTransport({
    url: process.env.SMTP_URL,
    secure: true,
  });
  const { email, name, message } = req.body;
  const mailOptions: Options = {
    from: email,
    to: process.env.EMAIL,
    subject: `Message from ${name}`,
    text: message,
  };
  transporter.sendMail(mailOptions);
  res.status(200);
}
