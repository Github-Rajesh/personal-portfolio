"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 240;
const MAX_CONCURRENT_REQUESTS = 12;
// Frames within this distance of the current/target frame jump to the front of the queue.
const PRIORITY_WINDOW = 6;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  const mountedRef = useRef(false);
  const currentFrameRef = useRef(0);
  const lastRenderedFrameRef = useRef<number | null>(null);
  const loadedCountRef = useRef(0);

  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const completedRef = useRef<boolean[]>([]);
  const loadingRef = useRef<Set<number>>(new Set());

  const queueRef = useRef<number[]>([]);
  const queuedRef = useRef<Set<number>>(new Set());
  const activeLoadsRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const renderFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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
  }, []);

  // Finds the closest frame that has already finished loading so the canvas
  // never sits frozen/blank while its exact target frame is still in flight.
  const findNearestLoadedFrame = useCallback((index: number) => {
    if (completedRef.current[index]) return index;
    for (let d = 1; d < FRAME_COUNT; d++) {
      const before = index - d;
      const after = index + d;
      if (before >= 0 && completedRef.current[before]) return before;
      if (after < FRAME_COUNT && completedRef.current[after]) return after;
    }
    return null;
  }, []);

  const renderNearest = useCallback(
    (index: number) => {
      const nearest = findNearestLoadedFrame(index);
      if (nearest === null || nearest === lastRenderedFrameRef.current) return;
      const img = imagesRef.current[nearest];
      if (!img) return;
      lastRenderedFrameRef.current = nearest;
      renderFrame(img);
    },
    [findNearestLoadedFrame, renderFrame]
  );

  const enqueueFrame = useCallback((index: number, highPriority = false) => {
    if (index < 0 || index >= FRAME_COUNT) return;
    if (completedRef.current[index] || loadingRef.current.has(index) || queuedRef.current.has(index)) {
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
      if (completedRef.current[index] || loadingRef.current.has(index)) continue;

      const img = new Image();
      img.decoding = "async";
      const frameNum = (index + 1).toString().padStart(3, "0");

      loadingRef.current.add(index);
      activeLoadsRef.current += 1;

      const finish = (loadedImg: HTMLImageElement | null) => {
        loadingRef.current.delete(index);
        activeLoadsRef.current = Math.max(0, activeLoadsRef.current - 1);

        if (!mountedRef.current) return;

        if (!completedRef.current[index]) {
          completedRef.current[index] = true;
          imagesRef.current[index] = loadedImg;
          loadedCountRef.current += 1;
          setLoadProgress(loadedCountRef.current / FRAME_COUNT);
        }

        renderNearest(currentFrameRef.current);
        drainQueue();
      };

      img.onload = () => finish(img);
      img.onerror = () => {
        // Don't let one bad frame stall the whole sequence.
        const fallback =
          imagesRef.current[Math.max(index - 1, 0)] ?? imagesRef.current.find((entry) => entry !== null) ?? null;
        finish(fallback);
      };

      img.src = `/sequence-webp/ezgif-frame-${frameNum}.webp`;
    }
  }, [renderNearest]);

  useEffect(() => {
    mountedRef.current = true;
    currentFrameRef.current = 0;
    lastRenderedFrameRef.current = null;
    loadedCountRef.current = 0;
    setLoadProgress(0);

    imagesRef.current = Array.from({ length: FRAME_COUNT }, () => null);
    completedRef.current = Array.from({ length: FRAME_COUNT }, () => false);
    loadingRef.current.clear();
    queueRef.current = [];
    queuedRef.current.clear();
    activeLoadsRef.current = 0;

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Load the first frame immediately, then fill in the rest in the background.
    enqueueFrame(0, true);
    for (let i = 1; i < FRAME_COUNT; i++) {
      enqueueFrame(i);
    }
    drainQueue();

    return () => {
      mountedRef.current = false;
    };
  }, [drainQueue, enqueueFrame]);

  // Hide the loading indicator shortly after the first frame is visible; the
  // rest of the sequence keeps streaming in behind the scenes.
  useEffect(() => {
    if (loadProgress > 0) {
      const timer = setTimeout(() => setShowLoader(false), 400);
      return () => clearTimeout(timer);
    }
  }, [loadProgress]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    const nextFrame = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(latest)));
    currentFrameRef.current = nextFrame;

    if (!completedRef.current[nextFrame]) {
      enqueueFrame(nextFrame, true);
      for (let d = 1; d <= PRIORITY_WINDOW; d++) {
        enqueueFrame(nextFrame - d, true);
        enqueueFrame(nextFrame + d, true);
      }
      drainQueue();
    }

    renderNearest(nextFrame);
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      lastRenderedFrameRef.current = null;
      renderNearest(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderNearest]);

  return (
    <div ref={containerRef} className="relative z-10 h-[800vh] w-full bg-[#121212] pointer-events-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <Overlay scrollYProgress={scrollYProgress} />
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
            showLoader ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-1 w-32 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full bg-white/80 transition-[width] duration-150"
              style={{ width: `${Math.round(loadProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
