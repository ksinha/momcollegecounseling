"use client";

import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useState } from "react";

type FormData = {
    studentName: string;
    parentName: string;
    email: string;
    phone: string;
    gradeLevel: string;
    schools: string;
    referral: string;
    message: string;
};

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(data);
        alert("Message sent successfully!");
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <p className="text-sm tracking-[2px] uppercase text-accent-gold font-medium mb-4">
                        Begin Your Journey
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                        Get In Touch
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto bg-off-white p-8 md:p-12 rounded-sm border-t-4 border-accent-gold shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-mid mb-2">Student Name *</label>
                                <input
                                    {...register("studentName", { required: true })}
                                    className={cn(
                                        "w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all",
                                        errors.studentName && "border-red-500"
                                    )}
                                    placeholder="Student Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-mid mb-2">Parent/Guardian Name</label>
                                <input
                                    {...register("parentName")}
                                    className="w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                                    placeholder="Parent Name"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-text-mid mb-2">Email Address *</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className={cn(
                                        "w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all",
                                        errors.email && "border-red-500"
                                    )}
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-mid mb-2">Phone Number</label>
                                <input
                                    {...register("phone")}
                                    className="w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-mid mb-2">Current Grade Level *</label>
                            <select
                                {...register("gradeLevel", { required: true })}
                                className="w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                            >
                                <option value="">Select Grade Level</option>
                                <option value="High School Sophomore">High School Sophomore</option>
                                <option value="High School Junior">High School Junior</option>
                                <option value="High School Senior">High School Senior</option>
                                <option value="Gap Year">Gap Year</option>
                                <option value="College Student">College Student</option>
                                <option value="Graduate Student">Graduate Student</option>
                                <option value="Post-Graduation Professional">Post-Graduation Professional</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-mid mb-2">Schools/Programs of Interest</label>
                            <textarea
                                {...register("schools")}
                                rows={3}
                                className="w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                                placeholder="Share your aspirations..."
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-mid mb-2">How did you hear about us?</label>
                            <select
                                {...register("referral")}
                                className="w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                            >
                                <option value="">Select Option</option>
                                <option value="Google Search">Google Search</option>
                                <option value="Referral">Referral</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-mid mb-2">Message/Questions</label>
                            <textarea
                                {...register("message")}
                                rows={4}
                                className="w-full px-4 py-3 bg-white border border-primary/20 rounded-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-all"
                                placeholder="Tell us about your goals..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-primary text-white font-medium tracking-wide rounded-sm hover:bg-primary-light transition-all duration-300 disabled:opacity-70"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
