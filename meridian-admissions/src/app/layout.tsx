import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["300", "400", "500", "600"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Meridian Admissions | Elite College Counseling",
    description: "Dr. Abha Sinha provides personalized, elite college counseling for ambitious students seeking admission to Ivy League universities and top graduate schools.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(
                "min-h-screen bg-cream font-sans antialiased",
                cormorant.variable,
                outfit.variable
            )}>
                {children}
            </body>
        </html>
    );
}
