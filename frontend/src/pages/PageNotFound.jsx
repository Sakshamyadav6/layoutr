import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8fafc] px-6 md:px-0">
      <div className="max-w-xl text-center">
        <h1 className="text-[100px] font-bold text-[#0f172a] leading-none mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved. Please
          check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-white bg-[#0f172a] hover:bg-gray-900 transition duration-300"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
