import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life in CNX — Discover Events & Things to Do in Chiang Mai",
  description:
    "Find local events, markets, workshops, and experiences happening in Chiang Mai. From Muay Thai classes to night bazaars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#fafaf7] text-neutral-900">
        {children}
      </body>
    </html>
  );
}