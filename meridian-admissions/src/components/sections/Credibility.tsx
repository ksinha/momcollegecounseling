"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const universities = [
    { name: "Harvard", domain: "harvard.edu" },
    { name: "Yale", domain: "yale.edu" },
    { name: "Princeton", domain: "princeton.edu" },
    { name: "Columbia", domain: "columbia.edu" },
    { name: "Penn", domain: "upenn.edu" },
    { name: "Dartmouth", domain: "dartmouth.edu" },
    { name: "Brown", domain: "brown.edu" },
    { name: "Cornell", domain: "cornell.edu" },
    { name: "Stanford", domain: "stanford.edu" },
    { name: "MIT", domain: "mit.edu" },
    { name: "UChicago", domain: "uchicago.edu" },
    { name: "Cambridge", domain: "cam.ac.uk" }
];

// Duplicate items to create seamless loop
const carouselItems = [...universities, ...universities, ...universities];

export function Credibility() {
    return (
        <section className="py-10 bg-white border-b border-primary/5 overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex">
                <motion.div
                    className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
                    animate={{ x: [0, -1920] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className="relative h-10 w-10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                                <img
                                    src={`https://logo.clearbit.com/${item.domain}`}
                                    alt={`${item.name} logo`}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <span className="font-serif text-xl text-primary font-medium tracking-wide uppercase">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
