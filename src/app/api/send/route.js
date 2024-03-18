"use client"
import { EmailTemplate } from '../../../components/EmailTemplate.jsx';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_CPYWdFka_LtKRQ5uKFDUKos7ByRGe7qMt");

export async function POST(req) {
  const {name,email,phonenumber,message} = await req.json()
  try {
   
    console.log(data)
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}