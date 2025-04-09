import React from "react";
import SideBar from "../../components/dashboard/SideBar";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* sidebar */}
      <aside className="bg-[#0f172a] w-full md:w-60 text-white text-center p-4">
        <SideBar />
      </aside>
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto text-gray-900 p-5 md:p-10">
        {/* Top bar */}
      </main>
    </div>
  );
};

export default Projects;
