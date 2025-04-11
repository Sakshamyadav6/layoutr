import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { addComponentToProject, moveComponent } from "../../slice/projectSlice";
import DraggableCanvasItem from "./DraggableCanvasItem";

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
    accept: ["component", "existingComponent"], //must matchthe type used in sidebar drag
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

      // check if its an exisitng component being moved
      if (item.id) {
        const data = {
          projectId: currentProjectId,
          id: item.id,
          position: { x, y },
        };
        dispatch(moveComponent(data));
        return;
      }

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

  return (
    <div
      className=" relative w-full min-h-[80vh] bg-white border border-dashed border-gray-300 rounded-xl p-6 shadow-sm"
      id="canvas" //used for getting canvas position for accurate drop
      ref={drop} //attach drop logic
    >
      {componentTree.length == 0 ? (
        <p className="text-center text-gray-500 text-sm italic mt-4">
          🚀 Start building your interface — drag components from the sidebar
          and drop them here!
        </p>
      ) : (
        <>
          {" "}
          {componentTree.map((comp) => (
            <DraggableCanvasItem id={comp.id} component={comp} />
          ))}
        </>
      )}
    </div>
  );
};

export default Canvas;
