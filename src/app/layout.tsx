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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mona.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
