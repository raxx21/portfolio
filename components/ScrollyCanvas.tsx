"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas({ frameCount = 75 }: { frameCount?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const frameId = i.toString().padStart(4, "0");

                    img.src = `/sequence/${frameId}.png`;

                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };

                    // ✅ fallback (important)
                    img.onerror = () => {
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, [frameCount]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // ✅ If image exists → draw it
        if (img) {
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvas.height;
                drawWidth = img.width * (canvas.height / img.height);
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = canvas.width;
                drawHeight = img.height * (canvas.width / img.width);
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50">
                        Loading...
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />

                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
