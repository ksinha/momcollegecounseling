"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Success", href: "#credibility" },
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-transparent",
                isScrolled
                    ? "bg-cream/95 backdrop-blur-md shadow-sm border-primary/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link
                    href="/"
                    className="font-serif text-2xl font-semibold tracking-wide text-primary relative group"
                >
                    MERIDIAN ADMISSIONS
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-400 group-hover:w-full" />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-text-mid hover:text-primary transition-colors duration-300 text-sm tracking-wider relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent-gold transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
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
