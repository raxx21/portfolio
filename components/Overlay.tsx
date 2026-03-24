"use client";

import { useTransform, motion, MotionValue } from "framer-motion";

const Section = ({
    text,
    subText,
    align = "center",
    start,
    end,
    scrollYProgress,
}: {
    text: string;
    subText?: string;
    align?: "left" | "center" | "right";
    start: number;
    end: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const opacity = useTransform(
        scrollYProgress,
        [start - 0.05, start, end, end + 0.05],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [start - 0.05, end + 0.05],
        [50, -50]
    );

    const alignClass =
        align === "left"
            ? "items-start text-left"
            : align === "right"
                ? "items-end text-right"
                : "items-center text-center";

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center px-8 md:px-20 ${alignClass}`}
        >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                {text}
            </h2>
            {subText && (
                <p className="text-xl md:text-2xl text-gray-300 mt-4 font-light tracking-wide max-w-2xl">
                    {subText}
                </p>
            )}
        </motion.div>
    );
};

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    return (
        <>
            {/* SECTION 1 */}
            <Section
                text="Rohit Raj Uppala"
                subText="Data Scientist"
                align="center"
                start={0.05}
                end={0.2}
                scrollYProgress={scrollYProgress}
            />

            {/* SECTION 2 */}
            <Section
                text="5+ Years Experience"
                subText="Turning complex data into meaningful insights and scalable solutions across fintech and enterprise domains."
                align="left"
                start={0.3}
                end={0.45}
                scrollYProgress={scrollYProgress}
            />

            {/* SECTION 3 */}
            <Section
                text="Machine Learning & AI"
                subText="Skilled in Python, SQL, PySpark, NLP, LLMs, and Retrieval-Augmented Generation (RAG), with experience deploying models on GCP and Azure."
                align="right"
                start={0.6}
                end={0.75}
                scrollYProgress={scrollYProgress}
            />
        </>
    );
}
