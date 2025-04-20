import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Getting Started",
    description:
      "Learn how to set up your project, connect your account, and start building visually.",
  },
  {
    title: "Component System",
    description:
      "Understand how to use drag-and-drop components, nest elements, and customize styles.",
  },
  {
    title: "Exporting Code",
    description:
      "Generate production-ready HTML/CSS or React code and learn best practices for deploying.",
  },
  {
    title: "Account & Billing",
    description:
      "Manage your profile, upgrade plans, and configure workspace settings securely.",
  },
];

const Docs = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden min-h-screen py-16 px-5 md:px-20">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-10" />
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Documentation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10"
        >
          Everything you need to know about building with Layoutr.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-6 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sec.title}
              </h3>
              <p className="text-sm text-gray-600">{sec.description}</p>
              <p className="mt-3 text-sm font-medium text-blue-600">
                Coming Soon →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Docs;
