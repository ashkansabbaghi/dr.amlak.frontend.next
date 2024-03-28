import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";


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
        {children}
      </body>
    </html>
  );
}
