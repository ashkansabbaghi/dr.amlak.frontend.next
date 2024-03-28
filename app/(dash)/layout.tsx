import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "dr.amlak dashboard",
    description: "amlak , املاک , home , خانه , بازسازی , ساخت , طراحی خانه",
};


export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-70px)] relative top-[70px] px-4 bg-white">
                {children}
            </main>
            <Footer />
        </>
    );
}
