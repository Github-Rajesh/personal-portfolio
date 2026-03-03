"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // 1 (Fade in, then fade out Name)
  const opacity1 = useTransform(scrollYProgress, [0, 0.02, 0.08, 0.15], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [50, -50]);

  // 2
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.24, 0.28, 0.35], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.18, 0.35], [50, -50]);

  // 3
  const opacity3 = useTransform(scrollYProgress, [0.38, 0.44, 0.48, 0.55], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.38, 0.55], [50, -50]);

  // 4
  const opacity4 = useTransform(scrollYProgress, [0.58, 0.64, 0.68, 0.75], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.58, 0.75], [50, -50]);

  // 5 (Center Gradient)
  const opacity5 = useTransform(scrollYProgress, [0.78, 0.84, 0.88, 0.95], [0, 1, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.78, 0.95], [50, -50]);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
          Rajesh S H. <br />
          <span className="text-neutral-400">Senior Machine Learning Engineer.</span>
        </h1>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-medium max-w-2xl drop-shadow-lg">
          I build intelligent systems.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-medium max-w-2xl drop-shadow-lg">
          Bridging AI and real-world impact.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-6xl font-medium max-w-2xl drop-shadow-lg">
          Connecting architecture and performance.
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity5, y: y5 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
      >
        <h2 className="text-4xl md:text-6xl font-medium max-w-2xl drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 py-2">
          Where data becomes intelligence.
        </h2>
      </motion.div>
    </div>
  );
}
