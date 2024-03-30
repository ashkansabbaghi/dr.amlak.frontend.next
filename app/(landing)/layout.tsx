import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "dr.amlak",
    description: "amlak , املاک , home , خانه , بازسازی , ساخت , طراحی خانه",
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="relative top-[70px] px-4 bg-white">
                {children}
            </main>
            <Footer />
        </>
    );
}
