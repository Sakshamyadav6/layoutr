import React from "react";
import {
  ArrowLeftEndOnRectangleIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CogIcon,
  FolderIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slice/authSlice";
import { successToast } from "../../../services/toast.service";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
    dispatch(logout());
    successToast("Logged out Sucessfully");
  };
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
          className="flex items-center justify-center hover:text-blue-200"
          to="/settings"
        >
          <CogIcon className="h-5 w-5 me-2" /> Settings
        </Link>
        <button
          className="flex items-center justify-center hover:text-blue-200 cursor-pointer"
          onClick={handleLogout}
        >
          <ArrowLeftEndOnRectangleIcon className="h-5 w-5 me-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
