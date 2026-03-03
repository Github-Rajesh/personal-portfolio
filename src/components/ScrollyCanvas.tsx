"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 240; // 240 images in photos directory

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Filename sequence: ezgif-frame-001.png
            const frameNum = i.toString().padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${frameNum}.png`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                    // Only init frame 0 after setting dimensions
                    const canvas = canvasRef.current;
                    if (canvas) {
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                        renderFrame(0, loadedImages);
                    }
                }
            };

            loadedImages.push(img);
        }
    }, []);

    const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
        if (!canvasRef.current || !imgs[index]) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = imgs[index];

        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            drawY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (images.length > 0) {
            renderFrame(Math.round(latest), images);
        }
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && images.length > 0) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(Math.round(currentIndex.get()), images);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, currentIndex]);

    return (
        <div ref={containerRef} className="relative z-10 h-[800vh] w-full bg-[#121212] pointer-events-none">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
