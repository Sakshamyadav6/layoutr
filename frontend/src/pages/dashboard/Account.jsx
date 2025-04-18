import React from "react";
import SideBar from "../../components/dashboard/SideBar";

const Account = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="bg-[#0f172a] w-full md:w-60 text-white text-center p-4">
        <SideBar />
      </aside>
      <main className="flex-0 overflow-x-auto text-gray-900 p-5 md:p-10"></main>
    </div>
  );
};

export default Account;
