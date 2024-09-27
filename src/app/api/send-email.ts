// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, message } = req.body;

    try {
      await resend.emails.send({
        from: "Your Name <no-reply@yourdomain.com>",
        to: "recipient@example.com", // Replace with your email address
        subject: `New Contact Form Submission from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone Number:</strong> ${phoneNumber}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
