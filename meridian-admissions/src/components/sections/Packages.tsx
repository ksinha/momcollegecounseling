"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Packages() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="packages" className="py-32 bg-gradient-to-b from-white to-off-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <p className="text-sm tracking-[2px] uppercase text-accent-gold font-medium mb-4">
                        Investment in Excellence
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                        Choose Your Path to Success
                    </h2>
                    <p className="text-lg text-text-mid max-w-2xl mx-auto">
                        Whether you need focused essay support or comprehensive full-season guidance, Dr. Sinha provides personalized service tailored to your ambitions.
                    </p>
                </div>

                <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Package 1 */}
                    <div className={cn(
                        "bg-white p-10 rounded-sm border border-primary/10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-card relative group",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <h3 className="font-serif text-3xl text-primary mb-2">Personal Statement Intensive</h3>
                        <div className="font-serif text-4xl font-semibold text-primary mb-2">$2,500</div>
                        <p className="text-accent-gold font-medium mb-6">Deep-dive brainstorming + 2–3 rounds of edits</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Comprehensive brainstorming session",
                                "2-3 rounds of detailed editing",
                                "One powerful, compelling essay"
                            ].map((item, i) => (
                                <li key={i} className="pl-6 relative text-text-mid">
                                    <span className="absolute left-0 text-accent-gold">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="block text-center py-3 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
                            Get Started
                        </Link>
                    </div>

                    {/* Package 2 */}
                    <div className={cn(
                        "bg-white p-10 rounded-sm border border-primary/10 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-card relative group",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )} style={{ transitionDelay: "100ms" }}>
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-gold to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <h3 className="font-serif text-3xl text-primary mb-2">Three-School Essay Package</h3>
                        <div className="font-serif text-4xl font-semibold text-primary mb-1">$12,500</div>
                        <p className="text-sm text-text-mid italic mb-2">Range: $10,000–$15,000 depending on complexity</p>
                        <p className="text-accent-gold font-medium mb-6">Common App + supplements for 2 schools</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Common App personal statement",
                                "Supplemental essays for 2 schools",
                                "Comprehensive strategy & editing"
                            ].map((item, i) => (
                                <li key={i} className="pl-6 relative text-text-mid">
                                    <span className="absolute left-0 text-accent-gold">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="block text-center py-3 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
                            Get Started
                        </Link>
                    </div>

                    {/* Package 3 - Featured */}
                    <div className={cn(
                        "bg-white p-10 rounded-sm border-2 border-accent-gold shadow-lg flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover relative group transform lg:-mt-4 lg:mb-4",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )} style={{ transitionDelay: "200ms" }}>
                        <div className="absolute -top-4 right-8 bg-primary text-white text-xs font-bold tracking-widest py-1 px-3 uppercase">
                            Most Popular
                        </div>
                        <h3 className="font-serif text-3xl text-primary mb-2">Comprehensive Ivy Strategy</h3>
                        <div className="font-serif text-4xl font-semibold text-primary mb-2">$20,000</div>
                        <p className="text-accent-gold font-medium mb-6">Full-season support for top applicants</p>
                        <ul className="space-y-4 mb-8 flex-grow">
                            {[
                                "Personal statement development",
                                "All supplemental essays",
                                "Activities list optimization",
                                "Application strategy & school selection",
                                "Key summer programs identification",
                                "Interview prep with Dr. Sinha AND real college interviewers",
                                "Complete personalized guidance"
                            ].map((item, i) => (
                                <li key={i} className="pl-6 relative text-text-mid">
                                    <span className="absolute left-0 text-accent-gold">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact" className="block text-center py-3 bg-primary text-white font-medium hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20">
                            Get Started
                        </Link>
                    </div>
                </div>


            </div>
        </section>
    );
}
