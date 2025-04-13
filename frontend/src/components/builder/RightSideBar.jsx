import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSelectedComponentId,
  updateComponentProps,
} from "../../slice/projectSlice";

const RightSideBar = () => {
  const selecetedId = useSelector((state) => state.project.selectedComponentId);
  const componentTrees = useSelector((state) => state.project.componentTrees);
  const currentProjectId = useSelector(
    (state) => state.project.currentProjectId
  );

  const selectedComponent = componentTrees?.[currentProjectId]?.find(
    (comp) => comp.id === selecetedId
  );
  const dispatch = useDispatch();
  const handleClose = (e) => {
    e.preventDefault();
    console.log(selectedComponent);

    dispatch(deleteSelectedComponentId());
  };
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    const data = {
      projectId: currentProjectId,
      componentId: selecetedId,
      propName: name,
      value: value,
    };
    dispatch(updateComponentProps(data));
  };
  return (
    <>
      {selectedComponent ? (
        <>
          <div className=" flex flex-col min-h-screen bg-white  w-full md:w-56 shadow-lg p-2">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-xl font-semibold">Edit Component</h2>
              <button className="text-gray-500" onClick={handleClose}>
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold">Value</h3>
              <input
                type="text"
                name="children"
                className="border rounded px-2 py-1"
                value={selectedComponent.props.children}
                onChange={handleChange}
              />
              <h3 className="text-lg font-semibold">
                ClassName
                <span className="text-xs font-light block text-gray-500">
                  tailwind styles only
                </span>
              </h3>
              <textarea
                rows={2}
                name="className"
                value={selectedComponent.props.className}
                className="border rounded px-2 py-1 h-20 resize-none w-full"
                onChange={handleChange}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default RightSideBar;
