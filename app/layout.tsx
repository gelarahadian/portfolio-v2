import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Gelar Rahadian — Frontend Developer",
  description:
    "Frontend developer specializing in building fast, elegant, and memorable web experiences using Next.js, React, and modern web technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
