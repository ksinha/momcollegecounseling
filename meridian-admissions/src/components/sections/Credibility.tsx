"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const universities = [
    { name: "Harvard", domain: "harvard.edu", logoUrl: "https://brandeps.com/logo-download/H/Harvard-Crimson-logo-vector-01.svg" },
    { name: "Yale", domain: "yale.edu" },
    { name: "Princeton", domain: "princeton.edu" },
    { name: "Columbia", domain: "columbia.edu" },
    { name: "Penn", domain: "upenn.edu" },
    { name: "Dartmouth", domain: "dartmouth.edu" },
    { name: "Brown", domain: "brown.edu" },
    { name: "Cornell", domain: "cornell.edu" },
    { name: "Stanford", domain: "stanford.edu" },
    { name: "MIT", domain: "mit.edu", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" },
    { name: "UChicago", domain: "uchicago.edu" },
    { name: "Cambridge", domain: "cam.ac.uk" }
];

// Duplicate items to create seamless loop
const carouselItems = [...universities, ...universities, ...universities];

export function Credibility() {
    return (
        <section className="py-10 bg-white border-b border-primary/5 overflow-hidden relative">
            <div className="absolute top-0 left-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
                <div
                    className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-6 animate-scroll hover:pause"
                    style={{
                        animationPlayState: "running",
                    }}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            <div className="relative h-10 w-10 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                                <img
                                    src={item.logoUrl || `https://logo.clearbit.com/${item.domain}`}
                                    alt={`${item.name} logo`}
                                    className="h-full w-full object-contain"
                                    draggable={false}
                                />
                            </div>
                            <span className="font-serif text-xl text-primary font-medium tracking-wide uppercase select-none">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container mx-auto px-6 mt-12">
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <p className="flex-1 font-serif text-lg md:text-xl text-primary font-medium text-center md:text-right">
                        🎓 Admissions to every Ivy Plus institution
                    </p>
                    <div className="hidden md:block w-[2px] h-8 bg-accent-gold flex-shrink-0" />
                    <p className="flex-1 font-serif text-lg md:text-xl text-primary font-medium text-center md:text-left">
                        🏆 Rhodes, Marshall, and Gates Scholarship winners & finalists
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause:hover,
        .pause:active,
        .pause:focus {
            animation-play-state: paused !important;
        }
      `}</style>
        </section >
    );
}
