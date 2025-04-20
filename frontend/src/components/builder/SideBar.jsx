import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { componentLibrary } from "../../../data/componentLibrary";
import { useDrag } from "react-dnd";
import { updateProjectById } from "../../../services/axios.service";
import { useSelector } from "react-redux";
import { successToast } from "../../../services/toast.service";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { token } = useSelector((state) => state.auth);

  const { currentProjectId, componentTrees } = useSelector(
    (state) => state.project
  );
  const navigate = useNavigate();
  const handleChanges = async (e) => {
    e.preventDefault();

    try {
      const data = { components: componentTrees[currentProjectId] };
      const response = await updateProjectById(
        `api/project/${currentProjectId}`,
        data,
        token
      );
      successToast("Project Updated Sucessfully");
      navigate(`/projects/${currentProjectId}`);
    } catch (error) {}
  };
  return (
    <div className="h-full w-full p-4 text-white bg-[#0f172a] flex flex-col gap-6">
      {/* Branding */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Layout<span className="text-blue-500">R</span>
        </h2>
        <p className="text-sm text-gray-400 mt-1">Drag & build your UI</p>
      </div>

      {/* Components Section */}
      <div>
        <h3 className="text-lg font-semibold mb-3">📦 Components</h3>
        <div className="flex flex-col gap-2">
          {componentLibrary.map((comp, index) => {
            // setup drag behaviour usinf usedrag hook from react dnd
            // this makes the component dragable and sends data (comp) when dragging starts
            const [{ isDragging }, drag] = useDrag(() => ({
              type: "component", //type must match "accept" type in  drop target (Canavs.jsx)
              item: comp, //this is the data sent to the drop area when dropped
            }));
            return (
              <div
                key={index}
                ref={drag} //this attach the drag functionality to the specific div
                // now this div becomes draggable with the data from 'item:comp'
                className="w-full flex items-center gap-2 text-left px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition text-sm font-medium"
              >
                <PlusIcon className="h-7 w-7 text-blue-500" /> {comp.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <button
          className="bg-blue-700 py-3 px-3 rounded hover:bg-blue-800"
          onClick={handleChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SideBar;
