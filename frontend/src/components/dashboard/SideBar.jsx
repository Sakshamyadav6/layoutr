import React from "react";
import {
  BuildingStorefrontIcon,
  ChartBarIcon,
  CogIcon,
  FolderIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold p-4 md:mb-6">LayoutR</h2>
      <div className="flex flex-col gap-3 md:gap-7 text-lg">
        <Link
          className="flex  items-center justify-center hover:text-blue-200"
          to="/dashboard"
        >
          <ChartBarIcon className="h-5 w-5 me-2" /> Dashboard
        </Link>
        <Link
          className="flex  items-center justify-center hover:text-blue-200"
          to="/projects"
        >
          <FolderIcon className="h-5 w-5 me-2" />
          Projects
        </Link>
        <Link
          className="flex  items-center justify-center hover:text-blue-200"
          to="/uilibrary"
        >
          <BuildingStorefrontIcon className="h-5 w-5 me-2" /> UI Library
        </Link>
        <Link
          className="flex  items-center justify-center hover:text-blue-200"
          to="/account"
        >
          <UserIcon className="h-5 w-5 me-2" /> Account
        </Link>
        <Link
          className="flex  items-center justify-center hover:text-blue-200"
          to="/settings"
        >
          <CogIcon className="h-5 w-5 me-2" /> Settings
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
