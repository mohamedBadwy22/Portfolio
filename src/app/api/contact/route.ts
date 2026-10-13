import EmailTemplate from "@/app/_component/EmailTemplate/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

    const formData = await request.json();
    try {
        const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@contact.mohamedbadwy.me>',
      to: ['mbadwy480@gmail.com','mohamed.badwy.dev@gmail.com'],
      subject: formData.subject,
      react: EmailTemplate({...formData})
    });

    if (error) {
      return NextResponse.json({ message: "Error sending email" , ok: false});
    }

    return NextResponse.json({ message: "Email sent successfully" , ok: true});
    }
    catch (error) {
        return NextResponse.json({ message: "Error sending email" , ok: false});
    }
}