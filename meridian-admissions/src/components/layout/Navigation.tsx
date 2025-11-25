"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border-b",
                isScrolled
                    ? "bg-cream/95 backdrop-blur-md shadow-sm border-primary/10 py-4"
                    : "bg-white/10 backdrop-blur-md border-white/10 py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link
                    href="/"
                    className={cn(
                        "font-serif text-2xl font-semibold tracking-wide relative group transition-colors duration-300",
                        isScrolled ? "text-primary" : "text-white"
                    )}
                >
                    MERIDIAN ADMISSIONS
                    <span className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-400 group-hover:w-full",
                        isScrolled ? "bg-accent-gold" : "bg-white"
                    )} />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-sm tracking-wider relative group transition-colors duration-300",
                                    isScrolled
                                        ? "text-text-mid hover:text-primary"
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-full",
                                    isScrolled ? "bg-accent-gold" : "bg-white"
                                )} />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden transition-colors duration-300",
                        isScrolled ? "text-primary" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-cream border-b border-primary/10 shadow-lg md:hidden p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-text-dark hover:text-primary font-medium text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
