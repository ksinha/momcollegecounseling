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
    metadataBase: new URL('https://meridianadmissions.com'),
    title: "Meridian Admissions | Elite College Counseling - DC, MD, VA",
    description: "Dr. Abha Sinha provides personalized, elite college counseling in DC, Maryland, and Virginia for ambitious students seeking admission to Ivy League, Ivy Plus universities, undergraduate and graduate programs.",
    keywords: [
        "college counseling",
        "elite admissions",
        "ivy league admissions",
        "ivy plus admissions",
        "college admissions",
        "undergraduate admissions",
        "graduate admissions",
        "scholarship counseling",
        "college application help",
        "essay editing",
        "personal statement help",
        "college consultant",
        "DC college counseling",
        "Maryland college counseling",
        "Virginia college counseling",
        "DMV college counseling",
        "Washington DC admissions consultant",
        "elite college consultant DMV"
    ],
    authors: [{ name: "Dr. Abha Sinha" }],
    openGraph: {
        title: "Meridian Admissions | Elite College Counseling - DC, MD, VA",
        description: "Dr. Abha Sinha provides personalized, elite college counseling in DC, Maryland, and Virginia for ambitious students seeking admission to Ivy League, Ivy Plus universities, undergraduate and graduate programs.",
        url: "https://meridianadmissions.com",
        siteName: "Meridian Admissions",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Meridian Admissions | Elite College Counseling - DC, MD, VA",
        description: "Dr. Abha Sinha provides personalized, elite college counseling in DC, Maryland, and Virginia for ambitious students seeking admission to Ivy League, Ivy Plus universities, undergraduate and graduate programs.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Meridian Admissions",
        "description": "Elite college counseling and admissions consulting for Ivy League, Ivy Plus, undergraduate and graduate admissions",
        "url": "https://meridianadmissions.com",
        "email": "abhasinha105@gmail.com",
        "priceRange": "$$$$",
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 38.9072,
                "longitude": -77.0369
            },
            "name": "Washington DC Metro Area (DC, Maryland, Virginia)"
        },
        "serviceType": [
            "College Admissions Consulting",
            "Ivy League Admissions",
            "Ivy Plus Admissions",
            "Elite College Admissions",
            "Undergraduate Admissions Consulting",
            "Graduate School Admissions Consulting",
            "Essay Editing",
            "Personal Statement Development",
            "Scholarship Application Assistance"
        ]
    };

    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </head>
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
