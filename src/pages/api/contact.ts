import { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';
require('dotenv').config();

export default async function (req: NextApiRequest, res: NextApiResponse) {
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
    return res.status(200).end();
  } catch (err) {
    return res.status(400).end();
  }
}
