"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-32 bg-primary relative overflow-hidden text-center">
            <div className="absolute -top-1/2 -right-[20%] w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                    Ready to Craft Your Story?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Schedule your free consultation with Dr. Sinha to discuss your goals and discover how personalized guidance can transform your application.
                </p>

                <Link
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-sm font-medium tracking-wide hover:bg-accent-gold hover:text-white transition-all duration-300 group"
                >
                    Book Your Free Consultation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
