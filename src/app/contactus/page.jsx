"use client";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  LinkIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/utils/firebase";
import axios from "axios";
import { EmailTemplate } from '../../components/EmailTemplate.jsx';
import { Resend } from 'resend';

const resend = new Resend("re_CPYWdFka_LtKRQ5uKFDUKos7ByRGe7qMt");
export default function Page() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({
    fname: "",
    lname: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+/;

    if (!regex.test(data.email)) {
      setError("Enter email");
    } else {
      setError("");
      setSuccess(true);
      try {
        const datas = await resend.emails.send({
          from: 'Yug <support@chrysuscapital.in>',
          to: ["yugg9826@gmail.com"],
          subject: 'New Request',
          react: EmailTemplate({ name:data.fname,email:data.email,phonenumber:data.phonenumber,message:data.message }),
      });
      console.log(datas)
      } catch (error) {
        console.error("Error adding data to Firestore: ", error);
      }
    }
  };

  return (
    <div className="bg-cover bg-img">
      <div className="grid grid-cols-1 py-12 mx-auto max-w-7xl lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#04ff3a] to-[#65fc00] opacity-20"
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
           
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                305, 3rd Floor, Satguru Parinay, PU3, Scheme No. 54, 
                  <br />
                  A.B Road, Indore, 452010
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                  +91 9753734795
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                  contact@threewaystudio.world
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-24"
        >
          <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    value={data.fname}
                    onChange={handleChange}
                    name="fname"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    value={data.lname}
                    type="text"
                    onChange={handleChange}
                    name="lname"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    value={data.email}
                    required
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    value={data.phonenumber}
                    type="tel"
                    required
                    name="phonenumber"
                    id="phone-number"
                    onChange={handleChange}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    value={data.message}
                    name="message"
                    id="message"
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {success ? (
              <div
                className="flex items-center p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Thank You! </span> We will reach out
                  to you soon
                </div>
              </div>
            ) : null}
            {error == "" ? null : (
              <div
                className="flex items-center p-4 my-4 text-sm font-semibold text-red-600 rounded bg-red-50"
                role="alert"
              >
                <InformationCircleIcon
                  className="flex-shrink-0 inline w-4 h-4 mr-3"
                  aria-hidden="true"
                />
                <span className="sr-only">Info</span>
                <div>{error}</div>
              </div>
            )}
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-6 py-4 text-sm font-semibold text-center text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
}