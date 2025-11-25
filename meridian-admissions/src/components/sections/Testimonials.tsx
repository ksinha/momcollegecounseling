"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/ui/Carousel";

const testimonials = [
    {
        quote: "Out of every Ivy Plus school we applied to, my daughter was admitted to exactly one: the application Dr. Sinha helped us craft.",
        author: "Sarah G.",
        school: "Parent | Daughter Admitted to Stanford"
    },
    {
        quote: "I started with a larger college counseling group that felt like a factory—multiple people on my application, generic advice, capped revisions. Dr. Sinha gave me true one-on-one attention and unlimited iterations until it was right.",
        author: "Surbhi L.",
        school: "Wharton Business School"
    },
    {
        quote: "My school hadn't identified me as a scholarship candidate. After working with Dr. Sinha to craft my story, I became a finalist for Rhodes, Marshall, and Gates and won the Marshall.",
        author: "Kirin S.",
        school: "Marshall Scholarship Winner"
    }
];

export function Testimonials() {
    const { ref, isVisible } = useScrollReveal();

    const renderTestimonialCard = (testimonial: typeof testimonials[0], index: number) => (
        <div
            key={index}
            className="bg-white p-10 rounded-sm shadow-card border border-primary/10 hover:border-accent-gold hover:-translate-y-2 transition-all duration-500 relative group flex flex-col h-full"
        >
            <div className="absolute top-6 left-6 font-serif text-6xl text-primary/10 leading-none">&ldquo;</div>
            <p className="font-serif text-xl text-primary/80 mb-8 relative z-10 leading-relaxed flex-grow">
                {testimonial.quote}
            </p>
            <div className="mt-auto">
                <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                <p className="text-sm text-primary/60 font-medium">{testimonial.school}</p>
            </div>
        </div>
    );

    return (
        <section id="testimonials" className="py-32 bg-cream">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <p className="text-base md:text-lg tracking-[2px] uppercase text-accent-gold font-semibold mb-4">
                        Real Results
                    </p>
                </div>

                <div ref={ref}>
                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <Carousel
                            items={testimonials}
                            renderItem={renderTestimonialCard}
                            className="pb-12"
                        />
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "bg-white p-10 rounded-sm shadow-card border border-primary/10 hover:border-accent-gold hover:-translate-y-2 transition-all duration-500 relative group flex flex-col h-full",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                )}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute top-6 left-6 font-serif text-6xl text-primary/10 leading-none">&ldquo;</div>
                                <p className="font-serif text-xl text-primary/80 mb-8 relative z-10 leading-relaxed flex-grow">
                                    {testimonial.quote}
                                </p>
                                <div className="mt-auto">
                                    <p className="font-semibold text-primary text-lg">{testimonial.author}</p>
                                    <p className="text-sm text-primary/60 font-medium">{testimonial.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
