import React, { useEffect, useState } from "react";
import SideBar from "../../components/dashboard/SideBar";
import { useSelector } from "react-redux";
import { deleteProject, getProject } from "../../../services/axios.service";
import { successToast } from "../../../services/toast.service";
import { useNavigate } from "react-router-dom";
import { date } from "../../../utils/date";

const Projects = () => {
  const [project, setProject] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const GetProjects = async () => {
    try {
      const response = await getProject("api/project", token);
      console.log(response);
      setProject(response.data.project);
      // successToast(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    console.log("first");
    try {
      const response = await deleteProject(`api/project/${id}`, token);
      console.log(response);
      successToast(response.data.message);
      GetProjects();
    } catch (error) {
      console.log(error);
    }
  };
  const handleView = (id) => {
    navigate(`/projects/${id}`);
  };
  useEffect(() => {
    GetProjects();
  }, []);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* sidebar */}
      <aside className="bg-[#0f172a] w-full md:w-60 text-white text-center p-4">
        <SideBar />
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto text-gray-900 p-5 md:p-10">
        {/* Top bar */}
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {/* card view of projects */}
        {project.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.map((proj) => (
                <div
                  key={proj.id}
                  className="border rounded-xl p-2 hover:shadow-lg transition"
                >
                  <div className="h-24 bg-gray-200 rounded mb-3" />

                  <h2 className="text-2lg">{proj.name}</h2>

                  <p className="">{date(proj.createdAt)}</p>
                  <p>{proj.cssFramework}</p>
                  <div className="flex flex-row justify-end">
                    <button
                      className="bg-blue-700 text-white rounded px-5 py-2 hover:bg-blue-800 transition m-1"
                      onClick={() => {
                        handleView(proj._id);
                      }}
                    >
                      View
                    </button>
                    <button
                      className="bg-gray-400 text-white rounded px-5 py-2 hover:bg-red-700 transition m-1"
                      onClick={() => {
                        handleDelete(proj._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>No Projects Found </>
        )}
      </main>
    </div>
  );
};

export default Projects;
