import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://lcstuber.net/"
  ),
  title: "Leonardo's Portfolio",
  description: "My Portfolio applied on the Developer Portfolio template created by Ibrahim Memon",
  keywords: ["Computer Science", "Portfolio", "Computer Science Student", "Leonardo Cazotto Stuber"],
  openGraph: {
    title: "Leonardo Cazotto Stuber",
    description: "Computer Science Student",
    images: "/OpenGraph.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
