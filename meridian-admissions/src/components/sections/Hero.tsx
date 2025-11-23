"use client";

import { ArrowRight, Trophy, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] pt-32 pb-24 overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Meridian Admissions Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40" />
            </div>

            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                >
                    <p className="text-sm tracking-[2px] uppercase text-accent-gold font-medium mb-6">
                        Elite Admissions Counseling
                    </p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.1] mb-8">
                        Crafting Your Story <br />
                        <span className="font-semibold text-text-dark">for the Nation&apos;s Top Institutions</span>
                    </h1>

                    <div className="w-[60px] h-[2px] bg-gradient-to-r from-accent-gold to-transparent mb-8" />

                    <p className="text-lg md:text-xl text-text-mid leading-relaxed max-w-xl mb-10">
                        With college admissions more competitive than ever, Dr. Abha Sinha helps ambitious students stand out and gain admission to Ivy League universities, top graduate schools, and prestigious scholarship programs.
                    </p>

                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-sm font-medium tracking-wide hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group overflow-hidden relative"
                    >
                        <span className="relative z-10">Book Your Free Consultation</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    </Link>
                </motion.div>

                {/* Right Column - Achievement Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-6"
                >
                    {/* Main Stat Card */}
                    <div className="bg-white/95 backdrop-blur-sm p-10 rounded-sm shadow-card border-l-4 border-accent-gold relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-accent-gold/10 rounded-bl-full" />
                        <div className="font-serif text-6xl font-semibold text-primary mb-2">100%</div>
                        <p className="text-text-mid text-lg leading-relaxed">
                            Success rate at top-tier institutions including every Ivy League university
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Scholarship Card */}
                        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-sm shadow-card border-l-4 border-accent-gold/60 hover:-translate-y-2 transition-transform duration-500">
                            <Trophy className="text-accent-gold w-8 h-8 mb-4" />
                            <p className="text-text-mid font-medium">
                                Rhodes, Marshall, Gates <br />
                                <span className="text-sm text-text-mid/80 font-normal">Scholarship winners & finalists</span>
                            </p>
                        </div>

                        {/* Grad School Card */}
                        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-sm shadow-card border-l-4 border-accent-gold/60 hover:-translate-y-2 transition-transform duration-500">
                            <GraduationCap className="text-accent-gold w-8 h-8 mb-4" />
                            <p className="text-text-mid font-medium">
                                Harvard, Stanford, Wharton <br />
                                <span className="text-sm text-text-mid/80 font-normal">Graduate school placements</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
