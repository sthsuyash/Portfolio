"use client";

import { motion } from "framer-motion";
// hooks
import useScrollProgress from "@/hooks/useScrollProgress";
// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

type FramerTemplateProps = {
  children: React.ReactNode;
};

const FramerTemplate = ({ children }: FramerTemplateProps) => {
  const complete = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "", delay: 0.5, duration: 0.5 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${complete - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
    </>
  );
};

export default FramerTemplate;
