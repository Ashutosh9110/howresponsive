"use client"

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <motion.div 
        className="text-center max-w-4xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r 
            from-purple-500 via-blue-500 to-teal-500 filter drop-shadow-lg mb-2">
            Check your Website's
          </span>{" "}
          <span className="inline-block text-white filter drop-shadow-lg">
            responsiveness with just one click
          </span>
        </motion.h1>

        <motion.button
          onClick={() => router.push('/services')}
          className="relative px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 
            text-white text-lg font-medium shadow-lg shadow-blue-500/30 
            hover:shadow-blue-500/50 transition-all"
          whileHover={{ 
            scale: 1.05,
            backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 15
          }}
        >
          <motion.span
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 
              opacity-0 blur-xl transition-opacity"
            whileHover={{ opacity: 0.4 }}
          />
          <span className="relative z-10">Click here</span>
        </motion.button>

        {/* Optional: Add a subtle gradient background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent 
            pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Optional: Add floating particles effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;