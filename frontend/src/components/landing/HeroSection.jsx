import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CpuChipIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-30 md:pt-0 md:pb-0 min-h-screen">
        {/* background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24 xl:py-28 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="block">Design</span>
            <span className="text-blue-600">UIs Without Coding</span>
          </motion.h1>
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto"
          >
            Drag, drop, and export production-ready <strong>React</strong> or{" "}
            <strong>HTML/CSS</strong> code. <br /> Perfect for developers and
            designers.
          </motion.p>
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6  sm:justify-center"
          >
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 text-sm rounded-lg bg-blue-600 px-4 py-4 md:text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors   "
            >
              Start Building Free <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              to="/developer"
              className="inline-flex items-center justify-center gap-2 text-sm md:text-lg text-gray-900 bg-gray-100 px-6 py-4 rounded-lg shadow-lg font-semibold "
            >
              <CpuChipIcon className="h-5 w-5 text-blue-600" /> Meet Developer
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
