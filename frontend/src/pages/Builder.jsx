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
import RightSideBar from "../components/builder/RightSideBar";

const Builder = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.project.mode);
  const component = useSelector((state) =>
    mode == "auth" ? state.project.componentTree : state.project.draftTree
  );
  useEffect(() => {
    if (id) {
      // console.log(id);
      dispatch(setBuilderMode("auth"));
      dispatch(setCurrentProjectId(id));
    } else {
      dispatch(setBuilderMode("guest"));
    }

    return () => {
      dispatch(resetBuilder());
    };
  }, [id, dispatch]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* sidebar */}
      <aside className="bg-[#0f172a] w-full h-90 md:min-h-screen md:w-60 text-white text-center p-1 md:p-10">
        <SideBar />
      </aside>
      {/* main canvas part */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Canvas component={component} />
      </div>
      <RightSideBar />
    </div>
  );
};

export default Builder;
