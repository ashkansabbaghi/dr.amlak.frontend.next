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
            <main className="container min-h-[calc(100vh-24rem)] relative px-4 bg-white mb-36">
                {children}
            </main>
            <Footer />
        </>
    );
}
