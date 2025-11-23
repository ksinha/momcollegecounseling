"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Dr. Sinha helped me discover and articulate my authentic story. Her strategic guidance was invaluable throughout the entire process.",
        author: "Student Name",
        school: "Harvard '26"
    },
    {
        quote: "The personal attention and insider knowledge Dr. Sinha provided made all the difference. Our daughter was accepted to her dream school.",
        author: "Parent Name",
        school: "Parent, Stanford '27"
    },
    {
        quote: "From essay development to interview prep, Dr. Sinha was with us every step of the way. The results speak for themselves.",
        author: "Student Name",
        school: "Yale '25 | Rhodes Finalist"
    }
];

export function Testimonials() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="testimonials" className="py-32 bg-cream">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <p className="text-sm tracking-[2px] uppercase text-accent-gold font-medium mb-4">
                        Student Success
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                        What Families Say
                    </h2>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white p-10 rounded-sm shadow-card border-t-4 border-transparent hover:border-accent-gold hover:-translate-y-2 transition-all duration-500 relative group",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute top-6 left-6 font-serif text-6xl text-accent-gold/20 leading-none">&ldquo;</div>
                            <p className="font-serif italic text-lg text-text-mid mb-8 relative z-10 leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <div>
                                <p className="font-semibold text-primary">{testimonial.author}</p>
                                <p className="text-sm text-text-mid">{testimonial.school}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
