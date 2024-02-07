import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_cp5UwVMH_7xUGqg8EiQMffQV2rr78Wf5P");

export async function POST(req) {
  const {firstname,lastname,email,phonenumber,message} = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'threewaystudiofirm@gmail.com',
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