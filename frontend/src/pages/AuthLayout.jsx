import React from "react";
import { motion } from "framer-motion";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (isLoggedIn) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <div className="min-h-screen bg-[#dedede56] flex flex-col justify-between md:flex-row p-4 md:ps-15">
        {/* left panel */}
        <div className="p-3 w-full md:w-1/2 md:p-6 flex flex-col ms-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CodeBracketSquareIcon className="size-15 text-blue-700 " />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl mt-2 font-semibold md:text-5xl space-x-3.5 space-y-1 text-"
          >
            <span className="block">Build UIs. Visually.</span>
            <span>Instantly.</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg md:text-2xl mt-4 text-gray-600 tracking-wide"
          >
            <p>
              Drag. Drop. Ship. Production-ready <br /> code in real time
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-4"
          >
            <img
              src="/img/mockup1.png"
              className="h-50 w-70 md:h-60 md:w-100"
            />
          </motion.div>
        </div>
        {/* right panel */}
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
