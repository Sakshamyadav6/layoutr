import React from "react";
import { useSelector } from "react-redux";

const Canvas = () => {
  const projectState = useSelector((state) => state.project);

  const currentProjectId = projectState?.currentProjectId;
  const componentTrees = projectState?.componentTrees || {};

  const componentTree = currentProjectId
    ? componentTrees[currentProjectId] || []
    : [];

  const renderComponent = (comp) => {
    switch (comp.type) {
      case "Button":
        return (
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            {comp.props.text || "Click Me"}
          </button>
        );
      case "Text":
        return (
          <h1 className="text-2xl font-bold">{comp.props.text || "Title"}</h1>
        );
      case "Card":
        return <div className="border p-4 rounded shadow">Card Content</div>;
      case "Container":
        return (
          <div
            className="border rounded p-4"
            style={{ padding: comp.props.padding }}
          >
            {comp.children?.map(renderComponent)}
          </div>
        );
      default:
        return <p>Unknown Component</p>;
    }
  };

  return (
    <div className="w-full min-h-[80vh] bg-white border border-dashed border-gray-300 rounded-xl p-6 shadow-sm">
      {componentTree.length === 0 ? (
        <div className="text-gray-400 text-center pt-16">
          🚀 Start adding components from the left
        </div>
      ) : (
        componentTree.map((comp, index) => (
          <div key={index}>{renderComponent(comp)}</div>
        ))
      )}
    </div>
  );
};

export default Canvas;
