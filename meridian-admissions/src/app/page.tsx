import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Credibility } from "@/components/sections/Credibility";
import { About } from "@/components/sections/About";
import { Packages } from "@/components/sections/Packages";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-cream selection:bg-primary/20 selection:text-primary">
            <Navigation />
            <Hero />
            <Credibility />
            <About />
            <Packages />
            <Testimonials />
            <CTA />
            <Contact />
            <Footer />
        </main>
    );
}
