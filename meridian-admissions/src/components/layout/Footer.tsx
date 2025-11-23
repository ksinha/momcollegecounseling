import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#2a1f1f] text-white/80 py-12">
            <div className="container mx-auto px-6 text-center">
                <p className="font-serif text-lg mb-4 text-white">Meridian Admissions</p>
                <p className="text-sm mb-6">
                    &copy; {new Date().getFullYear()} Dr. Abha Sinha. All rights reserved.
                </p>
                <div className="flex justify-center gap-6 text-sm">
                    <Link href="#" className="hover:text-accent-gold transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-accent-gold transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}
