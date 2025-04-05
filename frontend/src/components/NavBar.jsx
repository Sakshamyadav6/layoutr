import React, { useState } from "react";

const NavBar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  return (
    <>
      <nav className="m-2 p-1">
        <div className="flex items-center justify-between">
          {/* for logo */}
          <div className="text-white text-3xl cursor-pointer font-extrabold">
            LayoutR
          </div>
          {/* Hamburger Menu (Visible in smaller devices) */}
          <div className="md:hidden flex item-center">
            <button
              className="text-3xl text-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <i
                className={`fa-solid ${isMobileMenu ? "fa-xmark" : "fa-bars"}`}
              ></i>
            </button>
          </div>
          {/*desktop links hidden in mobile */}
          <div className="hidden md:flex gap-8 text-lg text-white ">
            <a href="">Features</a>
            <a href="">Template</a>
            <a href="">Pricing</a>
            <a href="">Docs</a>
          </div>
          {/* fot cta buttons */}
          <div className="hidden md:flex gap-4 text-lg mr-2">
            <button className="text-white cursor-pointer">Sign In</button>
            <button className="text-white bg-gray-600 px-4 py-1 rounded hover:bg-gray-700 cursor-pointer">
              Try Free
            </button>
          </div>
        </div>
        {/* Mobile Menu visible in small devices */}
        {isMobileMenu && (
          <>
            <div className="md:hidden flex flex-col items-center bg-gray-800 text-lg p-2 text-white transform transition-all duration-300 ease-in-out">
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
              <div className="flex gap-4 mt-2">
                <button className="text-white cursor-pointer py-1">
                  Sign In
                </button>
                <button className="text-white bg-gray-600 px-4 py-1 rounded hover:bg-gray-700 transition cursor-pointer">
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
