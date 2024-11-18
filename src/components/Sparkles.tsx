import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Sparkle {
  id: number;
  createdAt: number;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex: number;
  };
}

const generateSparkle = (): Sparkle => ({
  id: Math.random(),
  createdAt: Date.now(),
  size: 15, // Fixed size to avoid hydration mismatch
  style: {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    zIndex: 2
  }
});

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate sparkles only on client-side
    setSparkles(Array.from({ length: 15 }, () => generateSparkle()));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={sparkle.style}
          initial={{ scale: 0, rotate: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 0L87.5 72.5L160 80L87.5 87.5L80 160L72.5 87.5L0 80L72.5 72.5L80 0Z"
              fill="rgba(255, 255, 255, 0.5)"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}