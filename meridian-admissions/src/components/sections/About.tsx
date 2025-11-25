"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { User, Star, GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
    {
        id: "expert",
        title: "One Expert, Complete Attention",
        description: "You work directly with Dr. Abha Sinha—no teams, no handoffs, no outsourcing. I limit the number of students I accept to ensure every aspect of your application receives personalized, strategic guidance.",
        icon: User,
        color: "bg-primary",
        points: [
            "Direct access to Dr. Sinha",
            "Hands-on application development",
            "Truly personalized strategy"
        ]
    },
    {
        id: "specialized",
        title: "Specialized Expertise for Top Students",
        description: "Admissions are more competitive than ever. My practice is specialized for high-achieving students who need to craft compelling narratives that stand out strategically against other excellent candidates.",
        icon: Star,
        color: "bg-accent-gold",
        points: [
            "Strategic narrative development",
            "Differentiation from peers",
            "Focus on elite institutions"
        ]
    },
    {
        id: "comprehensive",
        title: "Comprehensive Experience Across Your Journey",
        description: "From summer programs to undergraduate and graduate admissions, to prestigious scholarships like the Rhodes and Marshall. Whether you start early or join later, I meet you where you are with over 15 years of insight.",
        icon: GraduationCap,
        color: "bg-primary-light",
        points: [
            "Undergraduate & Graduate",
            "Scholarship expertise",
            "Multi-year guidance available"
        ]
    },
    {
        id: "insider",
        title: "Insider Knowledge & Real-World Perspective",
        description: "Benefit from 20+ years as a Columbia University alumni interviewer and school board service. I offer exclusive interview prep with real college interviewers and a holistic view that understands both the admissions process and the family experience.",
        icon: BookOpen,
        color: "bg-text-mid",
        points: [
            "Real interview practice",
            "Alumni interviewer insights",
            "Holistic family perspective"
        ]
    }
];

function FeatureSection({ feature, index, setActiveSection }: { feature: typeof features[0], index: number, setActiveSection: (i: number) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveSection(index);
        }
    }, [isInView, index, setActiveSection]);

    return (
        <div
            ref={ref}
            className="min-h-[80vh] flex flex-col justify-center py-20"
        >
            <div className="flex items-center gap-4 mb-6 md:hidden">
                <div className={cn("p-3 rounded-full text-white", feature.color)}>
                    <feature.icon size={24} />
                </div>
                <h3 className="font-serif text-2xl text-primary font-bold">{feature.title}</h3>
            </div>

            <h3 className="hidden md:block font-serif text-3xl md:text-4xl text-primary mb-6 leading-tight font-bold">
                {feature.title}
            </h3>

            <p className="text-lg text-text-mid leading-relaxed mb-8 max-w-xl">
                {feature.description}
            </p>

            <ul className="space-y-4">
                {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-dark font-medium">
                        <CheckCircle2 size={20} className="text-accent-gold flex-shrink-0" />
                        {point}
                    </li>
                ))}
            </ul>

            {/* Mobile Visual Placeholder */}
            <div className="mt-10 md:hidden aspect-video rounded-sm overflow-hidden bg-off-white border border-primary/5 flex items-center justify-center relative">
                <div className={cn("absolute inset-0 opacity-10", feature.color)} />
                <feature.icon size={48} className="text-primary/20" />
            </div>
        </div>
    );
}

export function About() {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <section id="about" className="bg-cream relative">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="pt-24 pb-0 md:pt-32 md:pb-4 text-center">
                    <p className="text-base md:text-lg tracking-[2px] uppercase text-accent-gold font-semibold">
                        The Meridian Difference
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {/* Left Column: Scrolling Text */}
                    <div className="w-full md:w-1/2 pb-24">
                        {features.map((feature, index) => (
                            <FeatureSection
                                key={feature.id}
                                feature={feature}
                                index={index}
                                setActiveSection={setActiveSection}
                            />
                        ))}
                    </div>

                    {/* Right Column: Sticky Visuals */}
                    <div className="hidden md:block w-1/2 relative pt-32 pb-24">
                        <div className="sticky top-24 flex items-start justify-center">
                            <div className="relative w-full max-w-md min-h-[300px] max-h-[350px] bg-white rounded-sm shadow-card border border-primary/5 overflow-hidden flex items-center justify-center transition-all duration-500">

                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{
                                            opacity: activeSection === index ? 1 : 0,
                                            scale: activeSection === index ? 1 : 0.95,
                                            y: activeSection === index ? 0 : 20
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className={cn(
                                            "absolute inset-0 flex items-center justify-center",
                                            index === 0 ? "p-0" : "flex-col text-center p-12"
                                        )}
                                    >
                                        {index === 0 ? (
                                            // Headshot for "One Expert, Complete Attention"
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src="/mom headshot ai.jpeg"
                                                    alt="Dr. Abha Sinha"
                                                    fill
                                                    className="object-cover"
                                                    style={{ objectPosition: 'center 30%' }}
                                                    priority
                                                />
                                            </div>
                                        ) : (
                                            // Icons for other features
                                            <>
                                                <div className={cn(
                                                    "w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg",
                                                    feature.color,
                                                    "text-white"
                                                )}>
                                                    <feature.icon size={48} strokeWidth={1.5} />
                                                </div>
                                                <h4 className="font-serif text-3xl text-primary mb-4">
                                                    {feature.title}
                                                </h4>
                                                <div className="w-12 h-1 bg-accent-gold/30 rounded-full" />
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
