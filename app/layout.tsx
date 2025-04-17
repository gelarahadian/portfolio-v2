import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gelar Rahadian Fajar - Portfolio",
  description: "Selamat datang di portfolio Gelar Rahadian Fajar — seorang Frontend Developer freelance yang mengkhususkan diri dalam pengembangan web modern dan kreatif menggunakan Next.js untuk menciptakan pengalaman pengguna yang menarik dan responsif."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${open_sans.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
