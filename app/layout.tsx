import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "dr.amlak",
  description: "amlak , املاک , home , خانه , بازسازی , ساخت , طراحی خانه",
};

const iranSans = localFont({
  src : "../public/font/IRANSansWeb.woff2"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`bg-slate-400 ${iranSans.className}`}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
