import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, getProjectById } from "../../../services/axios.service";
import {
  setComponentTree,
  setComponentTreeForProject,
  setCurrentProject,
  setProjectError,
  setProjectLoading,
} from "../../slice/projectSlice";
import Loader from "../Loader";
import { formatDistanceToNow } from "date-fns";
import { successToast } from "../../../services/toast.service";
import { date } from "../../../utils/date";

const ProjectDetail = () => {
  const [projectData, setProjectData] = useState({ components: [] });
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [createdDate, setCreatedDate] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.project);
  const getProjectDetails = async () => {
    dispatch(setProjectLoading(true)); //start loader
    try {
      const response = await getProjectById(`api/project/${id}`, token);
      console.log(response);
      if (response.status == "200" || response.status == "201") {
        const project = response.data.project;
        const formattedDate = date(project.createdAt);
        // dispatch(setComponentTreeForProject(projectData));
        setCreatedDate(formattedDate);
        setProjectData(project);

        console.log(project);
        if (!project) {
          dispatch(setProjectError("Project Not Found"));
          return;
        }
        // set the whole project and component tree in redux
        dispatch(setCurrentProject(project));
        dispatch(setComponentTree(project.components || []));
      } else {
        dispatch(setProjectError("Failed to fetch project details"));
      }
    } catch (error) {
      console.log(error);
      dispatch(setProjectError("Server error while loading project"));
    } finally {
      dispatch(setProjectLoading(false)); //end loader
      console.log(loading);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("first");
    try {
      const response = await deleteProject(`api/project/${id}`, token);
      console.log(response);
      if (response.status == "200" || response.status == "201") {
        navigate("/projects");
        successToast("Project Deleted Sucessfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, []);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* sidebar */}
      <aside className="bg-[#0f172a] w-full md:w-60 text-white text-center p-4">
        <SideBar />
      </aside>
      {/* main */}
      <main className="flex-1 overflow-y-auto text-gray-900 p-5 md:p-10">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              {/* Left: Project Info */}
              <div>
                <h2 className="text-3xl font-bold mb-1">{projectData.name}</h2>
                <p className="text-lg text-gray-600">Created {createdDate}</p>
              </div>

              {/* Right: Back + Buttons */}
              <div className="flex flex-col items-end gap-2">
                <button
                  className="text-lg text-blue-600  hover:text-blue-700 hover:underline transition"
                  onClick={() => {
                    navigate("/projects");
                  }}
                >
                  Back to Projects
                </button>

                <div className="flex gap-3">
                  <button
                    className="bg-gray-100 border px-6 py-2 rounded hover:bg-gray-200 transition"
                    onClick={() => {
                      navigate(`/builder/${projectData._id}`);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-blue-600 text-white px-7 py-2 border border-blue-700 rounded hover:bg-blue-700 transition"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {/* project description */}
            <p className="text-lg text-gray-800 mb-5">
              {projectData.description}
            </p>
            {/* components of project */}
            <div className="mb-3">
              <h2 className="text-xl font-semibold tracking-wide text-gray-800 mb-4">
                Components
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projectData.components.map((component, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                  >
                    <p className="text-sm text-gray-500 mb-2">
                      Component #{index + 1}
                    </p>
                    <h3 className="text-lg font-semibold mb-1">
                      {component.type}
                    </h3>
                    <p className="text-sm text-gray-600 break-words">
                      ID: <span className="font-mono">{component.id}</span>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Props:{" "}
                      <span className="font-mono text-xs text-gray-500">
                        {Object.keys(component.props || {}).length > 0
                          ? JSON.stringify(component.props, null, 2)
                          : "None"}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* project overview  */}
            <div className="mb-2">
              <h2 className="text-2xl font-semibold">Project Info</h2>
              <div className="flex flex-col md:flex-row gap-5 md:gap-50">
                <div className="mt-3">
                  <p className="text-xl">Project Name</p>
                  <p className="font-semibold text-xl pt-4">
                    {projectData.name}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-xl ">CSS Framework</p>
                  <p className="font-semibold text-xl capitalize pt-4">
                    {projectData.cssFramework}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
