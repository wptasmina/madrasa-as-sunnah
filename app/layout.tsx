import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from './../components/navbar/NavbarWrapper';
import Footer from './../components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madrasa as sunnah - Building a Bright Future Through Islamic Education",
  description:
    "Welcome to Madrasa . We have been providing quality Islamic education since 2003. Hifz, Alim, Fazil and Kamil courses available.",
  keywords: "madrasa, Islamic education, Hifz, Alim, Fazil, Kamil, Quran education, Dhaka",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
