import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_gKUcqhf1_NgnKwG692GtWi4tMvVi94MFc");

export async function POST(req) {
  const {firstname,lastname,email,phonenumber,message} = await req.json()
  try {
    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['contact@thedigitalloom.com'],
        subject: 'New Request',
        react: EmailTemplate({ firstname: firstname,lastname:lastname,email:email,phonenumber:phonenumber,message:message }),
    });
    console.log(data)
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}