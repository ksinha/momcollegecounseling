"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Trophy, Target, GraduationCap } from "lucide-react";

export function About() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="about" className="py-32 bg-cream relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <p className="text-sm tracking-[2px] uppercase text-accent-gold font-medium mb-4">
                        The Meridian Difference
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                        Personal Attention. Strategic Insight. Proven Results.
                    </h2>
                    <div className="w-[60px] h-[2px] bg-gradient-to-r from-accent-gold to-transparent mx-auto" />
                </div>

                <div ref={ref} className="grid lg:grid-cols-3 gap-8">
                    {/* Panel 1 */}
                    <div className={cn(
                        "bg-white p-10 rounded-sm shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-accent-gold relative group",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        <Trophy className="w-12 h-12 text-text-mid mb-8 opacity-80 group-hover:text-accent-gold transition-colors" />
                        <h3 className="font-serif text-2xl text-primary mb-6">Exceptional Track Record</h3>
                        <ul className="space-y-4 text-text-mid">
                            {[
                                "Over 15 years of elite college counseling experience",
                                "Students accepted to all eight Ivy League institutions",
                                "MIT, Stanford, University of Chicago, Cambridge, LSE admissions",
                                "Graduate placements at Harvard, Stanford, Wharton",
                                "Rhodes, Marshall, Gates, and Churchill Scholarship winners",
                                "20+ years as Columbia University alumni interviewer"
                            ].map((item, i) => (
                                <li key={i} className="pl-6 relative">
                                    <span className="absolute left-0 text-accent-gold">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Panel 2 */}
                    <div className={cn(
                        "bg-white p-10 rounded-sm shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-accent-gold relative group",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )} style={{ transitionDelay: "100ms" }}>
                        <Target className="w-12 h-12 text-text-mid mb-8 opacity-80 group-hover:text-accent-gold transition-colors" />
                        <h3 className="font-serif text-2xl text-primary mb-6">Personalized Strategic Approach</h3>
                        <ul className="space-y-4 text-text-mid mb-8">
                            {[
                                "One-on-one personal attention—Dr. Sinha oversees every aspect",
                                "No teams, no handoffs, no templates",
                                "Analytical rigor combined with creative storytelling",
                                "Uncover your authentic strengths and unique narrative",
                                "Insider knowledge from two decades as alumni interviewer"
                            ].map((item, i) => (
                                <li key={i} className="pl-6 relative">
                                    <span className="absolute left-0 text-accent-gold">✦</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <blockquote className="bg-off-white p-6 border-l-2 border-accent-gold italic font-serif text-text-mid relative">
                            <span className="absolute top-2 left-2 text-4xl text-accent-gold/20 font-serif leading-none">&ldquo;</span>
                            I believe that every student makes a unique and essential contribution to their educational community.
                        </blockquote>
                    </div>

                    {/* Panel 3 */}
                    <div className={cn(
                        "bg-white p-10 rounded-sm shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-accent-gold relative group",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )} style={{ transitionDelay: "200ms" }}>
                        <GraduationCap className="w-12 h-12 text-text-mid mb-8 opacity-80 group-hover:text-accent-gold transition-colors" />
                        <h3 className="font-serif text-2xl text-primary mb-6">Complete Guidance</h3>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Undergraduate Admissions",
                                    items: ["Application strategy", "Personal statement", "Supplemental essays", "Interview prep"]
                                },
                                {
                                    title: "Graduate School",
                                    items: ["Top MBA, medical, and law school placements", "Harvard, Stanford, Wharton successes"]
                                },
                                {
                                    title: "Competitive Scholarships",
                                    items: ["Rhodes, Marshall, Gates, Churchill prep", "Winners, finalists, school candidates"]
                                }
                            ].map((section, i) => (
                                <div key={i} className="bg-off-white p-5 rounded-sm border-l-2 border-accent-gold/50 hover:bg-white hover:shadow-sm transition-all">
                                    <h4 className="font-serif text-lg text-primary mb-2">{section.title}</h4>
                                    <ul className="text-sm text-text-mid space-y-1">
                                        {section.items.map((item, j) => (
                                            <li key={j}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
