import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for testing and hobby projects.",
    features: ["1 Project", "Basic Components", "Community Support"],
  },
  {
    name: "Pro",
    price: "$12/mo",
    description: "For solo devs and indie builders.",
    features: ["Unlimited Projects", "Premium Components", "Export HTML/CSS"],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29/mo",
    description: "Collaborative building for small teams.",
    features: ["Team Sharing", "Live Collaboration", "Priority Support"],
  },
];

const Pricing = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden min-h-screen py-16 px-5 md:px-20">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)] opacity-10" />
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Simple & Transparent Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-gray-600 max-w-xl mx-auto text-lg"
        >
          Choose the plan that fits your workflow. No hidden fees.
        </motion.p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-xl border ${
                plan.highlighted
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200 shadow"
              } p-6 text-left bg-gray-50 hover:bg-gray-100 transition`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                {plan.description}
              </p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className={`mt-6 w-full px-4 py-2 rounded-lg font-semibold ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-800"
                } transition cursor-default`}
              >
                Continue
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
