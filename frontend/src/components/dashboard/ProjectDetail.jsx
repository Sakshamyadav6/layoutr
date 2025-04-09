import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProjectById } from "../../../services/axios.service";

const ProjectDetail = () => {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const getProjectDetails = async () => {
    try {
      const response = await getProjectById(`api/project/${id}`, token);
      console.log(response);
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
        
      </main>
    </div>
  );
};

export default ProjectDetail;
