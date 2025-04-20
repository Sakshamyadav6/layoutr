import React from "react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/solid";

const staticTemplates = [
  {
    title: "Landing Page",
    description: "Hero, features, and CTA layout. Great for marketing sites.",
  },
  {
    title: "Login Form",
    description: "Minimal authentication page with modern UI inputs.",
  },
  {
    title: "Dashboard",
    description: "Admin panel layout with sidebar and stats cards.",
  },
  {
    title: "Portfolio",
    description: "Developer-focused template for personal branding.",
  },
  {
    title: "Pricing Page",
    description: "Responsive pricing tiers with toggle support.",
  },
  {
    title: "Contact Page",
    description: "Form with social links and embedded map placeholder.",
  },
];

const Template = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden min-h-screen py-16 px-5 md:px-20">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-10" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-gray-900"
          >
            UI Templates
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <PlusIcon className="h-5 w-5" />
            Add New
          </motion.button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticTemplates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-36 bg-gradient-to-br from-gray-200 to-gray-300 rounded-md mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">
                {template.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {template.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Template;
