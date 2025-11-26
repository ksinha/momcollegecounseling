"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    autoPlayInterval?: number;
    className?: string;
}

export function Carousel<T>({
    items,
    renderItem,
    autoPlayInterval = 5000,
    className
}: CarouselProps<T>) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { amount: 0.5 });

    // Reset to first slide when section comes into view
    useEffect(() => {
        if (isInView) {
            setCurrentIndex(0);
            setDirection(0);
        }
    }, [isInView]);

    // Auto-play logic
    useEffect(() => {
        if (isPaused || !isInView) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [isPaused, isInView, items.length, autoPlayInterval]);

    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let nextIndex = prev + newDirection;
            if (nextIndex < 0) nextIndex = items.length - 1;
            if (nextIndex >= items.length) nextIndex = 0;
            return nextIndex;
        });
    }, [items.length]);

    const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
        const swipe = offset.x;

        if (swipe < -50) {
            paginate(1);
        } else if (swipe > 50) {
            paginate(-1);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full overflow-hidden", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="relative min-h-[400px] w-full">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={handleDragEnd}
                        className="absolute w-full h-full"
                    >
                        {renderItem(items[currentIndex], currentIndex)}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={cn(
                            "rounded-full transition-all duration-300 cursor-pointer",
                            "p-2", // Larger touch target
                            index === currentIndex
                                ? "bg-primary w-10 h-3" // Active dot - filled and elongated
                                : "w-3 h-3 border-2 border-primary/60 hover:border-primary hover:bg-primary/10" // Inactive dots - outlined and visible
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
