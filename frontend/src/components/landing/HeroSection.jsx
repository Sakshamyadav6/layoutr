import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background glow - dark mode compatible */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-10 dark:opacity-20 dark:bg-[radial-gradient(circle_at_center,_#6366f1_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 text-center relative z-10">
        {/* Headline - dark mode text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="block">Design</span>
          <span className="text-blue-600 dark:text-purple-400">
            UIs Without Coding
          </span>
        </motion.h1>

        {/* Subheadline - dark mode text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl md:mt-6 md:max-w-3xl mx-auto"
        >
          Drag, drop, and export production-ready{" "}
          <strong className="text-blue-600 dark:text-purple-400">React</strong>{" "}
          or{" "}
          <strong className="text-blue-600 dark:text-purple-400">
            HTML/CSS
          </strong>{" "}
          code.
        </motion.p>

        {/* CTA Buttons - dark mode variants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 justify-center"
        >
          <a
            href=""
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 dark:bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 dark:hover:bg-purple-700 transition-all duration-300 sm:text-lg sm:px-8 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Start Building Free <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>

          <a
            href=""
            className="inline-flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-base font-semibold text-blue-600 dark:text-purple-400 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 sm:text-lg sm:px-8 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Watch Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
