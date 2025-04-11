import React, { useEffect } from "react";
import SideBar from "../components/builder/SideBar";
import Canvas from "../components/builder/Canvas";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetBuilder,
  setBuilderMode,
  setCurrentProjectId,
} from "../slice/projectSlice";

const Builder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.project.mode);
  const component = useSelector((state) =>
    mode == "auth" ? state.project.componentTree : state.project.draftTree
  );

  return (
    <div className="flex flex-row min-h-screen">
      {/* sidebar */}
      <aside className="   bg-[#0f172a] w-full md:w-60 text-white text-center p-3 md:p-10">
        <SideBar />
      </aside>
      {/* main canvas part */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Canvas component={component} />
      </div>
    </div>
  );
};

export default Builder;
