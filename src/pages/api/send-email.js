// pages/api/send-email.ts
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { businessName, email, phone, description } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    }
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'New Website Requirement',
    text: `Name: ${businessName}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`
  });

  res.status(200).json({ success: true });
}
