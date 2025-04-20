import React from "react";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  SparklesIcon,
  CloudArrowDownIcon,
  PencilSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    title: "Drag & Drop Interface",
    description:
      "Easily design stunning layouts by visually dragging components into place—no code required.",
    icon: CursorArrowRaysIcon,
  },
  {
    title: "Code Export",
    description:
      "Instantly export clean, production-ready HTML/CSS or JSX code that’s ready to deploy.",
    icon: CloudArrowDownIcon,
  },
  {
    title: "Live Preview",
    description:
      "See your design in action in real-time as you build—no need to refresh or switch tabs.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "TailwindCSS Support",
    description:
      "Design using Tailwind utility classes and preview exactly how it will look in production.",
    icon: SparklesIcon,
  },
  {
    title: "Editable Properties",
    description:
      "Select components and customize styles, text, and layout visually with an intuitive sidebar.",
    icon: PencilSquareIcon,
  },
  {
    title: "Built for Developers",
    description:
      "Perfect for React developers who want speed, control, and exportable UI structures.",
    icon: CodeBracketIcon,
  },
];

const Features = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden min-h-screen py-16 px-4 md:px-20">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-10" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Powerful Features for Effortless UI Building
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Everything you need to build, style, and export beautiful interfaces
          without writing boilerplate code.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-gray-50 hover:bg-white shadow hover:shadow-md p-6 border border-gray-200 transition"
            >
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
