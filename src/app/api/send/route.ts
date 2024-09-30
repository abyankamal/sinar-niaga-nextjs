import EmailTemplate from "@/app/components/EmailTemplate";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { name, email, message } = req.body;
    const { data, error } = await resend.emails.send({
      from: `${name} <${email}>`,
      to: ["abyankamal8@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name: name, email: email, message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
