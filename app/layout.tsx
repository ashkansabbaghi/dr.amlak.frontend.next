import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "dr.amlak",
  description: "amlak , املاک , home , خانه , بازسازی , ساخت , طراحی خانه",
};

const iranSans = localFont({ src: "../public/font/IRANSansWeb.woff2" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className="light">
      <body className={`${iranSans.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
