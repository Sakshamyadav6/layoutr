// components/builder/DraggableCanvasItem.jsx
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  setselectedComponentId,
  addChildToComponent,
} from "../../slice/projectSlice";
import { v4 as uuidv4 } from "uuid";

const DraggableCanvasItem = ({ component }) => {
  const { id, type, props, position, children } = component;
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "existingComponent",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setselectedComponentId(id));
  };

  const style = {
    position: "absolute",
    left: position?.x || 0,
    top: position?.y || 0,
    cursor: "move",
    opacity: isDragging ? 0.5 : 1,
    ...props?.style,
  };

  const commonProps = {
    id,
    ...props,
    style,
    onClick: handleClick,
  };

  // Special case for `div` to support nesting
  if (type === "div") {
    const [{ isOver }, dropRef] = useDrop(() => ({
      accept: "component",
      drop: (item, monitor) => {
        const newChild = {
          ...item.component,
          id: uuidv4(),
          position: { x: 0, y: 0 },
        };

        dispatch(
          addChildToComponent({ parentId: id, childComponent: newChild })
        );
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }));

    return (
      <div
        ref={(node) => {
          dragRef(node);
          dropRef(node);
        }}
        {...commonProps}
        style={{
          ...style,
          border: isOver ? "2px dashed blue" : "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
        }}
      >
        {props.children || "Div (Drop Here)"}
        {children?.map((child) => (
          <DraggableCanvasItem key={child.id} component={child} />
        ))}
      </div>
    );
  }

  // Fallback for all other types
  const ComponentTag = type;
  return (
    <ComponentTag ref={dragRef} {...commonProps}>
      {props.children || type}
    </ComponentTag>
  );
};

export default DraggableCanvasItem;
