"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Carousel } from "@/components/ui/Carousel";
import { Check } from "lucide-react";

const packages = [
    {
        name: "Personal Statement Intensive",
        description: "Deep-dive brainstorming + 2–3 rounds of edits",
        price: "$2,500",
        period: "One-time service",
        features: [
            "Comprehensive brainstorming session",
            "2-3 rounds of detailed editing",
            "One powerful, compelling essay"
        ],
        featured: false,
    },
    {
        name: "Three-School Essay Package",
        description: "Common App + supplements for 2 schools",
        price: "$12,500",
        period: "Range: $10,000–$15,000 depending on complexity",
        features: [
            "Common App personal statement",
            "Supplemental essays for 2 schools",
            "Comprehensive strategy & editing"
        ],
        featured: false,
    },
    {
        name: "Comprehensive Ivy Strategy",
        description: "Full-season support for top applicants",
        price: "$20,000",
        period: "Full-season guidance",
        features: [
            "Personal statement development",
            "All supplemental essays",
            "Activities list optimization",
            "Application strategy & school selection",
            "Key summer programs identification",
            "Interview prep with Dr. Sinha AND real college interviewers",
            "Complete personalized guidance"
        ],
        featured: true,
    },
];

export function Packages() {
    const { ref, isVisible } = useScrollReveal();

    const renderPackageCard = (pkg: typeof packages[0], index: number) => (
        <div
            key={index}
            className={cn(
                "bg-white p-8 rounded-sm shadow-card border transition-all duration-500 relative group h-full flex flex-col",
                pkg.featured ? "border-accent-gold scale-100 md:scale-105 z-10 shadow-xl" : "border-primary/5 hover:border-primary/20"
            )}
        >
            {pkg.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-white px-4 py-1 text-sm font-medium tracking-wider uppercase rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-primary mb-2">{pkg.name}</h3>
                <p className="text-text-light text-sm mb-6 h-10 flex items-center justify-center">{pkg.description}</p>
                <div className="text-4xl font-serif text-primary mb-2">{pkg.price}</div>
                <p className="text-sm text-text-light/80">{pkg.period}</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-mid text-left">
                        <Check size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Link
                href="#contact"
                onClick={() => {
                    if (typeof window !== 'undefined') {
                        sessionStorage.setItem('selectedPackage', pkg.name);
                    }
                }}
                className={cn(
                    "w-full py-3 px-6 rounded-sm font-medium transition-all duration-300 text-center block mt-auto",
                    pkg.featured
                        ? "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
                        : "bg-primary/5 text-primary hover:bg-primary hover:text-white"
                )}
            >
                Get Started
            </Link>
        </div>
    );

    return (
        <section id="packages" className="py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/30 -skew-x-12 translate-x-1/4" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-base md:text-lg tracking-[2px] uppercase text-accent-gold font-semibold mb-4">
                        Investment in Excellence
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                        Comprehensive Packages
                    </h2>
                    <p className="text-lg text-text-mid max-w-2xl mx-auto">
                        Transparent pricing for comprehensive support. Choose the level of guidance that best fits your needs.
                    </p>
                </div>

                <div ref={ref}>
                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <Carousel
                            items={packages}
                            renderItem={renderPackageCard}
                            className="pb-12"
                        />
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8 items-center">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "bg-white p-8 rounded-sm shadow-card border transition-all duration-500 relative group h-full flex flex-col",
                                    pkg.featured ? "border-accent-gold scale-105 z-10 shadow-xl" : "border-primary/5 hover:border-primary/20",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                )}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {pkg.featured && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-white px-4 py-1 text-sm font-medium tracking-wider uppercase rounded-full shadow-md whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="font-serif text-2xl text-primary mb-2">{pkg.name}</h3>
                                    <p className="text-text-light text-sm mb-6 h-10 flex items-center justify-center">{pkg.description}</p>
                                    <div className="text-4xl font-serif text-primary mb-2">{pkg.price}</div>
                                    <p className="text-sm text-text-light/80">{pkg.period}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text-mid text-left">
                                            <Check size={16} className="text-accent-gold mt-1 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="#contact"
                                    onClick={() => {
                                        if (typeof window !== 'undefined') {
                                            sessionStorage.setItem('selectedPackage', pkg.name);
                                        }
                                    }}
                                    className={cn(
                                        "w-full py-3 px-6 rounded-sm font-medium transition-all duration-300 text-center block mt-auto",
                                        pkg.featured
                                            ? "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg"
                                            : "bg-primary/5 text-primary hover:bg-primary hover:text-white"
                                    )}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
