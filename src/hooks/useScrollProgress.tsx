"use client";

import { useState, useEffect } from "react";

const useScrollProgress = (): number => {
  const [complete, setComplete] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        setComplete(
          Number(((currentProgress / scrollHeight) * 100).toFixed(2)),
        );
      }
    };

    // Add event listener on mount
    window.addEventListener("scroll", updateScrollCompletion);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return complete;
};

export default useScrollProgress;
