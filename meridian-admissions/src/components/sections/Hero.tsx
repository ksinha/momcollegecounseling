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
                    src="/hero-bg.jpg"
                    alt="Meridian Admissions Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
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
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8">
                        Crafting Your Story <br />
                        <span className="font-semibold text-white/90">for the Nation&apos;s Top Institutions</span>
                    </h1>

                    <div className="w-[60px] h-[2px] bg-gradient-to-r from-accent-gold to-transparent mb-8" />

                    <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-10">
                        Dr. Abha Sinha helps ambitious students stand out and gain admission to Ivy Plus universities and prestigious scholarships.
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
                    className="space-y-6 mt-8 lg:mt-64"
                >
                    {/* Achievement Card */}
                    <div className="bg-white/75 backdrop-blur-xl border border-white/80 p-5 md:p-14 rounded-sm shadow-card text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 max-w-xl mx-auto lg:mx-0">
                        <div className="relative z-10">
                            <div className="mb-3 md:mb-4 flex flex-wrap items-baseline justify-center gap-x-2 md:gap-x-3 gap-y-1">
                                <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary drop-shadow-sm">100%</span>
                                <span className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase tracking-wide">Success Rate</span>
                            </div>
                            <p className="text-primary/80 text-sm md:text-lg leading-relaxed font-medium">
                                In today&apos;s competitive admissions landscape, all of our students have gotten into one of their top 5 choices.
                            </p>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
