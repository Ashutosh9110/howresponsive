"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  return (
    <h2 className={cn("text-3xl md:text-5xl font-bold mb-8", className)}>
      {children}
    </h2>
  );
};

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className,
}) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}; 