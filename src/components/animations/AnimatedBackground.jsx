import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
      />
      
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
      />
      
      <motion.div
        animate={{
          x: [0, 70, -60, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-30"
      />

      {/* Animated Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          width="100%"
          height="100%"
          fill="url(#gradient)"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1">
                <animate attributeName="offset" values="0;1;0" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.1">
                <animate attributeName="offset" values="0.5;1;0.5" dur="8s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#ec489a" stopOpacity="0.1">
                <animate attributeName="offset" values="1;0;1" dur="8s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </motion.rect>
      </svg>

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, -30, 30, null],
            x: [null, 20, -20, null],
            opacity: [null, 0.8, 0.2, null],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Animated Gradient Border */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-30"
        style={{
          background: "conic-gradient(from 0deg, transparent, #3b82f6, #a855f7, #ec489a, transparent)",
          mask: "radial-gradient(circle, transparent 60%, black 100%)",
          WebkitMask: "radial-gradient(circle, transparent 60%, black 100%)",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;