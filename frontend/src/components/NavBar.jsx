import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  return (
    <>
      <nav className="p-5 backdrop-blur-md border-b">
        <div className="flex items-center justify-between">
          {/* for logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-dark text-3xl cursor-pointer font-extrabold"
          >
            <span>
              {" "}
              <Link to="/">LayoutR</Link>
            </span>
          </motion.div>
          {/* Hamburger Menu (Visible in smaller devices) */}
          <div className="md:hidden flex item-center">
            <button
              className="text-3xl text-dark cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i
                className={`fa-solid ${isMobileMenu ? "fa-xmark" : "fa-bars"}`}
              ></i>
            </button>
          </div>
          {/*desktop links hidden in mobile */}
          <div className="hidden md:flex gap-8 text-xl text-dark ">
            <a href="">Features</a>
            <a href="">Template</a>
            <a href="">Pricing</a>
            <a href="">Docs</a>
          </div>
          {/* fot cta buttons */}
          <div className="hidden md:flex gap-4 text-lg mr-2">
            <button className="text-dark cursor-pointer">
              <Link to="/login">Sign In</Link>
            </button>
            <button className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">
              Try Free
            </button>
          </div>
        </div>
        {/* Mobile Menu visible in small devices */}
        {isMobileMenu && (
          <>
            <div className="md:hidden flex flex-col items-center text-lg p-2 text-dark  transform transition-all duration-300 ease-in-out">
              <a href="" className="py-1">
                Features
              </a>
              <a href="" className="py-1">
                Template
              </a>
              <a href="" className="py-1">
                Pricing
              </a>
              <a href="" className="py-1">
                Docs
              </a>
              <div className="w-full my-1 border-t"></div>
              <div className="flex gap-4 mt-2">
                <button className="text-dark cursor-pointer py-1">
                  <Link to="/login">Sign In</Link>
                </button>
                <button className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition cursor-pointer">
                  Try Free
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
