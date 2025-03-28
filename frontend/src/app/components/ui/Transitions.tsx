"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  transition?: any;
}

export const Transition: React.FC<TransitionProps> = ({
  children,
  className,
  transition = {},
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ...transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideIn: React.FC<SlideInProps> = ({ children, className }) => {
  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
}; 