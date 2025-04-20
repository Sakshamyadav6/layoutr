import React from "react";
import SideBar from "../../components/dashboard/SideBar";

const Library = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* sidbar */}
      <aside className="w-full md:w-60 bg-[#0f172a] text-white text-center p-4">
        <SideBar />
      </aside>
      {/* main content */}
      <main className="flex-1 overflow-x-auto text-gray-900 p-5 md:p-10">
        <h2 className="text-3xl font-bold mb-1">UI Library</h2>

        <h3 className="text-lg text-gray-700">
          Library support is not available yet. We're working on adding reusable
          UI libraries soon.
        </h3>
      </main>
    </div>
  );
};

export default Library;
