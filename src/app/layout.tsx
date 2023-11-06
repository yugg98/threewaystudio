import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const mona = localFont({
  src: "../fonts/euclid.ttf",
  display: "swap",
  variable: "--font-euclid",
});

export const metadata: Metadata = {
  title: "Threewaystudio",
  verification:{
    google:"kRjBW7ijzBn4JdhCRkJi90ykLkI3GciDbUScOOAz71Q" 
  },
  description:"Threeway Studio is world’s leading comprehensive Blockchain Solution Company. Our expertise in BaaS & GaaS (Blockchain & Growth as a Service) empowers us to deliver cutting-edge solutions & to help our clientele achieve new heights. From the past few years, our team of Decentralised Digeratis has been working to facilitate individuals & businesses to make an effortless transition from the traditional Web2 framework/structure to the pioneering Web3 paradigm."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mona.variable+"relative overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
        <a
          href="https://api.whatsapp.com/send/?phone=919753734795"
          target="_blank"
          className="fixed z-[9999] bottom-6 right-6 md:bottom-10 md:right-8 bg-green-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-700 hover:drop-shadow-2xl hover:scale-95 transition-all ease-in-out duration-150"
        >
          <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
