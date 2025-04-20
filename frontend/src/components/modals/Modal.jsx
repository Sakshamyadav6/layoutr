import React, { useState } from "react";
import { createProject } from "../../../services/axios.service";
import { useSelector } from "react-redux";
import { errorToast, successToast } from "../../../services/toast.service";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Modal = ({ isModal, handleClose }) => {
  if (!isModal) return null; // avoid rendering completely if closed

  const { token } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cssFramework, setCssFramework] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProject(
        "api/project",
        {
          name,
          description,
          cssFramework,
        },
        token
      );
      if (response.status == "201" || response.status == "200") {
        const id = response.data.project.id;
        successToast(
          <span>
            Project created!{" "}
            <a
              href={`/projects/${id}`}
              className="underline text-blue-600 ml-2"
            >
              View
            </a>
          </span>
        );
        handleClose();
        setName("");
        setDescription("");
        setCssFramework("");
      }
    } catch (error) {
      errorToast(erro);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60  px-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 sm:p-8 space-y-6 transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold">New Project</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-1">
              Project Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Enter your project name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 resize-none"
              placeholder="Write something about your project..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              CSS Framework
            </label>
            <select
              name="cssFramework"
              className="w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
              defaultValue=""
              onChange={(e) => {
                setCssFramework(e.target.value);
              }}
            >
              <option value="">Select any one</option>
              <option value="tailwindcss">TailwindCSS</option>
              <option value="bootstrap">Bootstrap</option>
              <option value="css">Plain CSS</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Create Project
            </button>
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md transition"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
