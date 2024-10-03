// src/app/api/send/route.ts

"use server"; // Keep this only if it's necessary for server components

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "@/app/components/EmailTemplate";
import { FormDataSchema } from "@/app/lib/schema"; // Ensure this path is correct

// Initialize the Resend client using the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the type for the email form data based on the Zod schema
type EmailFormData = z.infer<typeof FormDataSchema>;

// Handle POST requests to the /api/send route
export async function POST(request: NextRequest) {
  try {
    // Parse and validate the incoming request body with Zod schema
    const body = await request.json();
    const emailFormData: EmailFormData = FormDataSchema.parse(body);

    // Send the email using the Resend client
    const response = await resend.emails.send({
      from: `${emailFormData.name} <${process.env.RESEND_FROM_EMAIL}>`,
      to: ["abyankamal8@gmail.com"],
      subject: "Welcome",
      react: EmailTemplate({
        name: emailFormData.name,
        message: emailFormData.message,
      }),
    });

    // Handle error if Resend client fails to send the email
    if (response.error) {
      console.error("Error sending email:", response.error); // Log the error
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Return a success response if email is sent successfully
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error processing request:", err);
    // Return a 400 status with the error message if parsing or request h
  }
}
