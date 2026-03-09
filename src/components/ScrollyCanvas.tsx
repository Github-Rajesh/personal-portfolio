"use client";

import { useRef, useEffect, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 240;
const PRELOAD_RADIUS = 12;
const MAX_CONCURRENT_REQUESTS = 6;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mountedRef = useRef(false);
  const currentFrameRef = useRef(0);

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const loadedRef = useRef<boolean[]>([]);
  const loadingRef = useRef<Set<number>>(new Set());

  const queueRef = useRef<number[]>([]);
  const queuedRef = useRef<Set<number>>(new Set());
  const activeLoadsRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const findNearestLoadedFrame = useCallback((targetIndex: number) => {
    if (loadedRef.current[targetIndex]) {
      return targetIndex;
    }

    for (let offset = 1; offset < FRAME_COUNT; offset++) {
      const previous = targetIndex - offset;
      const next = targetIndex + offset;

      if (previous >= 0 && loadedRef.current[previous]) {
        return previous;
      }
      if (next < FRAME_COUNT && loadedRef.current[next]) {
        return next;
      }
    }

    return -1;
  }, []);

  const renderFrame = useCallback(
    (targetIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const frameToRender = findNearestLoadedFrame(targetIndex);
      if (frameToRender === -1) return;

      const img = imagesRef.current[frameToRender];
      if (!img) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

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
    },
    [findNearestLoadedFrame]
  );

  const enqueueFrame = useCallback((index: number, highPriority = false) => {
    if (index < 0 || index >= FRAME_COUNT) return;
    if (loadedRef.current[index] || loadingRef.current.has(index) || queuedRef.current.has(index)) {
      return;
    }

    if (highPriority) {
      queueRef.current.unshift(index);
    } else {
      queueRef.current.push(index);
    }
    queuedRef.current.add(index);
  }, []);

  const drainQueue = useCallback(() => {
    while (activeLoadsRef.current < MAX_CONCURRENT_REQUESTS && queueRef.current.length > 0) {
      const index = queueRef.current.shift();
      if (index === undefined) break;

      queuedRef.current.delete(index);
      if (loadedRef.current[index] || loadingRef.current.has(index)) continue;

      const img = new Image();
      img.decoding = "async";
      const frameNum = (index + 1).toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNum}.png`;

      loadingRef.current.add(index);
      activeLoadsRef.current += 1;

      img.onload = () => {
        loadingRef.current.delete(index);
        activeLoadsRef.current = Math.max(0, activeLoadsRef.current - 1);

        if (!mountedRef.current) return;

        imagesRef.current[index] = img;
        loadedRef.current[index] = true;
        renderFrame(currentFrameRef.current);
        drainQueue();
      };

      img.onerror = () => {
        loadingRef.current.delete(index);
        activeLoadsRef.current = Math.max(0, activeLoadsRef.current - 1);
        drainQueue();
      };
    }
  }, [renderFrame]);

  const preloadAround = useCallback(
    (center: number) => {
      enqueueFrame(center, true);
      for (let offset = 1; offset <= PRELOAD_RADIUS; offset++) {
        enqueueFrame(center + offset);
        enqueueFrame(center - offset);
      }
      drainQueue();
    },
    [drainQueue, enqueueFrame]
  );

  useEffect(() => {
    mountedRef.current = true;
    currentFrameRef.current = 0;

    imagesRef.current = Array.from({ length: FRAME_COUNT }, () => null);
    loadedRef.current = Array.from({ length: FRAME_COUNT }, () => false);
    loadingRef.current.clear();
    queueRef.current = [];
    queuedRef.current.clear();
    activeLoadsRef.current = 0;

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    preloadAround(0);

    return () => {
      mountedRef.current = false;
    };
  }, [preloadAround]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    const nextFrame = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(latest)));
    currentFrameRef.current = nextFrame;
    renderFrame(nextFrame);
    preloadAround(nextFrame);
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  return (
    <div ref={containerRef} className="relative z-10 h-[800vh] w-full bg-[#121212] pointer-events-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
