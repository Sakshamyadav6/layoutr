import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../../components/dashboard/SideBar";
import { PlusIcon } from "@heroicons/react/24/solid";
import Modal from "../../components/modals/Modal";
import { useSelector } from "react-redux";
import { getProject } from "../../../services/axios.service";
import { date } from "../../../utils/date";
import { errorToast } from "../../../services/toast.service";

const Dashboard = () => {
  const [isModal, setIsModal] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [project, setProject] = useState([]);
  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    setIsModal(true);
  };
  const handleClose = () => {
    setIsModal(false);
  };
  const projectsData = async () => {
    try {
      const response = await getProject("api/project", token);
      setProject(response.data.project);
    } catch (error) {
      // console.log(error);
      errorToast(error);
    }
  };
  useEffect(() => {
    projectsData();
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* sidebar */}
        <aside className="w-full md:w-60  bg-[#0f172a] text-white p-4 text-center ">
          <SideBar />
        </aside>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto text-gray-900 p-5 md:p-10">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-1">LayoutR</h2>
              <p className="text-lg">
                Get Started by selecting a recent project{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-500 hover:text-gray-800">
                Docs
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-800">
                Support
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 flex items-center rounded cursor-pointer hover:bg-blue-700 transition"
                onClick={handleCreate}
              >
                <PlusIcon className="h-5 w-5" /> New Project
              </button>
            </div>
          </div>
          {/* Recent Projects */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Recent Projects</h3>
              <button className="text-sm text-blue-600 hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.length !== 0 ? (
                <>
                  {project.map((proj) => (
                    <div
                      key={proj._id}
                      onClick={() => {
                        console.log(proj._id);
                        navigate(`/projects/${proj._id}`);
                      }}
                      className="border rounded-xl p-4 bg-white shadow hover:shadow-md transition"
                    >
                      <div className="h-24 bg-gray-200 rounded mb-4" />
                      <h4 className="font-semibold">{proj.name}</h4>
                      <p className="text-sm text-gray-500">
                        {date(proj.createdAt)}
                      </p>
                    </div>
                  ))}
                </>
              ) : (
                <h2 className="text-lg text-gray-500">No Projects Found</h2>
              )}
            </div>
          </section>
          {/* Templates  */}
          <div className=" flex flex-col md:flex-row gap-8">
            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-2">Templates</h2>
              <div className="flex flex-row gap-5 overflow-x-auto  ">
                {["Blog", "Pricing Page", "Cards"].map((template, index) => (
                  <div
                    key={index}
                    className="border rounded min-w-40 p-2 bg-white shadow-xl hover:shadow-2xl text-center flex-shrink-0 transition cursor-pointer"
                  >
                    <div className="h-15 bg-gray-200 rounded" />
                    <h2>{template}</h2>
                  </div>
                ))}
              </div>
            </section>
            {/* UI Library */}
            <section className="mb-3">
              <h2 className="text-xl font-semibold mb-2">UI Library</h2>
              <div className="flex flex-row gap-5 overflow-x-auto">
                {["Button", "Tabs"].map((library, index) => (
                  <>
                    <div
                      className="border rounded min-w-40 p-2 bg-white shadow-lg hover:shadow-2xl text-center flex-shrink-0 transition cursor-pointer"
                      key={index}
                    >
                      <div className="h-14 bg-gray-200 rounded" />
                      <h2>{library}</h2>
                    </div>
                  </>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
      <Modal isModal={isModal} handleClose={handleClose} />
    </>
  );
};

export default Dashboard;
