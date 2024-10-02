"use server";

import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "@/app/components/EmailTemplate";
import { FormDataSchema } from "@/app/lib/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof FormDataSchema>) => {
  try {
    // TODO: Add this emailFormData to some database

    const { error } = await resend.emails.send({
      from: `Acme <${emailFormData.email}>`,
      to: ["abyankamal8@gmail.com"],
      subject: "Welcome",
      react: EmailTemplate({
        name: emailFormData.name,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
