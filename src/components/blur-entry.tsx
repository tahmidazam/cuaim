"use client";

import { motion } from "framer-motion";

/**
 * The props for the `BlurEntry` component.
 */
export interface BlurEntryProps {
  children: React.ReactNode;
  delayIndex?: number;
  delayDelta?: number;
  duration?: number;
}

/**
 * Animates the entyr of a component with a blur effect.
 * @param param0 The props controlling the animation characteristics.
 */
export default function BlurEntry({
  children,
  delayIndex,
  delayDelta,
  duration,
}: BlurEntryProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(5px)",
        translateY: "10px",
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        translateY: "0px",
      }}
      transition={{
        duration: duration ?? 2,
        type: "spring",
        delay: (delayIndex ?? 0) * (delayDelta ?? 0.2),
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
