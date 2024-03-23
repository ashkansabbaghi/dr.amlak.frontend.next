import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "dr.amlak",
  description: "amlak , املاک , home , خانه , بازسازی , ساخت , طراحی خانه",
};

const iranSans = localFont({
  src: "../public/font/IRANSansWeb.woff2"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">

      <body className={`bg-slate-100 ${iranSans.className}`}>
        <Header />
        <main className="min-h-[calc(100vh-70px)] relative top-[70px] p-5 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
