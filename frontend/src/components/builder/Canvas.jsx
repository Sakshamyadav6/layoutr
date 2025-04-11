import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { addComponentToProject } from "../../slice/projectSlice";

const Canvas = () => {
  const { componentTrees, currentProjectId } = useSelector(
    (state) => state.project
  );
  //fallback to empty array id no componentTree exist
  const componentTree = componentTrees?.[currentProjectId] || [];
  console.log(componentTrees?.[currentProjectId] || []);

  const dispatch = useDispatch();

  //setup the drop area
  const [{ isOver }, drop] = useDrop({
    accept: "component", //must matchthe type used in sidebar drag
    // this function runs when a draggable item is dropped
    drop: (item, monitor) => {
      // get the exact position of the drop in browser viewport
      const offSet = monitor.getSourceClientOffset();

      // get position of canvas box on the page
      const canvasRect = document
        .getElementById("canvas")
        ?.getBoundingClientRect();

      if (!canvasRect || !offSet) return; // check wheter canvasRect or offset is undefined

      // calculate relative position of drop inside the canvas
      const x = offSet.x - canvasRect.left;
      const y = offSet.y - canvasRect.top;

      // create a new component object with positions
      const newComponent = {
        id: uuidv4(),
        type: item.type,
        label: item.label,
        props: item.defaultProps,
        position: { x, y },
      };

      dispatch(
        addComponentToProject({
          projectId: currentProjectId,
          component: newComponent,
        })
      );
    },
    // this track whether an item is hovering over the drop zone
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const renderComponent = (component) => {
    const { id, type, props, position } = component;
    const style = {
      position: "absolute", //allows freeform placement
      left: position?.x || 0,
      top: position?.y || 0,
      ...props?.style, //apply any custom styles passed
    };
    switch (type) {
      case "button":
        return (
          <button id={id} {...props} style={style}>
            {props.children || "Button"}
          </button>
        );
        break;
      case "p":
        return (
          <p id={id} {...props} style={style}>
            {props.children || "P"}
          </p>
        );
        break;
      case "div":
        return (
          <div id={id} {...props} style={style}>
            {props.children || "Div"}
          </div>
        );
        break;
      case "h1":
        return (
          <h1 id={id} {...props} style={style}>
            {props.children || "H1"}
          </h1>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className=" relative w-full min-h-[80vh] bg-white border border-dashed border-gray-300 rounded-xl p-6 shadow-sm"
      id="canvas" //used for getting canvas position for accurate drop
      ref={drop} //attach drop logic
    >
      <p>Start building by drag and drop from sidebar</p>

      {componentTree.map((comp) => renderComponent(comp))}
    </div>
  );
};

export default Canvas;
