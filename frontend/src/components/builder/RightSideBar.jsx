import { TrashIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSelectedComponentId,
  deleteSelectedComponent,
  updateComponentProps,
} from "../../slice/projectSlice";
import { buildHTMLFile, generateHTML } from "../../../utils/generateHTML";
import { successToast } from "../../../services/toast.service";

const RightSideBar = () => {
  const selectedId = useSelector((state) => state.project.selectedComponentId);
  const componentTrees = useSelector((state) => state.project.componentTrees);
  const currentProjectId = useSelector(
    (state) => state.project.currentProjectId
  );

  const selectedComponent = componentTrees?.[currentProjectId]?.find(
    (comp) => comp.id === selectedId
  );
  const dispatch = useDispatch();
  const handleClose = (e) => {
    e.preventDefault();

    dispatch(closeSelectedComponentId());
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = {
      projectId: currentProjectId,
      componentId: selectedId,
      propName: name,
      value: value,
    };
    dispatch(updateComponentProps(data));
  };
  const handleBackgroundChange = (e) => {
    const newColor = e.target.value;
    dispatch(
      updateComponentProps({
        projectId: currentProjectId,
        componentId: selectedId,
        newProps: {
          style: {
            backgroundColor: newColor,
          },
        },
      })
    );
  };
  const handleDelete = (e) => {
    dispatch(
      deleteSelectedComponent({
        projectId: currentProjectId,
        componentId: selectedId,
      })
    );
  };
  const triggerDownload = (fileName, content) => {
    //creates a blob (binary large object ) from the content
    const blob = new Blob([content], { type: "text/plain" });
    //creates a temporary <a> tag to trigger download
    const link = document.createElement("a");
    //assign download link using a Blob URL
    link.href = URL.createObjectURL(blob);
    //set the fileName user will see
    link.download = fileName;
    //attach the link to the download so it can be clicked
    document.body.appendChild(link);
    //start a click to start download
    link.click();
    //remove the link after to clean up
    link.remove();
  };
  const handleExport = (e) => {
    e.preventDefault();
    const componentTree = componentTrees[currentProjectId];
    const htmlBody = generateHTML(componentTree);
    const htmlFile = buildHTMLFile(htmlBody);
    triggerDownload("index.html", htmlFile);

    successToast("Export Completed! index.html downloaded.");
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
              <h3 className="text-lg font-semibold">Background Color</h3>
              <input
                type="color"
                className="border w-7"
                value={
                  selectedComponent.props?.style?.backgroundColor || "#000000"
                }
                onChange={handleBackgroundChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
              <button
                className="bg-blue-700 px-5 py-2 text-white rounded hover:bg-blue-800"
                onClick={handleExport}
              >
                Export
              </button>
              <button className="text-red-600" onClick={handleDelete}>
                <TrashIcon className="h-7 w-7" />
              </button>
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
