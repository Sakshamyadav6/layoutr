// components/builder/DraggableCanvasItem.jsx
import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { setselectedComponentId } from "../../slice/projectSlice";

const DraggableCanvasItem = ({ component }) => {
  const { id, type, props, position } = component;
  const dispatch = useDispatch();

  // ✅ Set up dragging behavior
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "existingComponent",
    item: { id },
  }));

  const handleClick = (e) => {
    e.stopPropagation(); //prevent canvas click override
    dispatch(setselectedComponentId(id));
    console.log(id);
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
    ref: dragRef,
    id,
    ...props,
    style,
    onClick: handleClick,
  };

  switch (type) {
    case "button":
      return <button {...commonProps}>{props.children || "Button"}</button>;
    case "p":
      return <p {...commonProps}>{props.children || "Paragraph"}</p>;
    case "div":
      return <div {...commonProps}>{props.children || "Div"}</div>;
    case "h1":
      return <h1 {...commonProps}>{props.children || "Heading"}</h1>;
    default:
      return null;
  }
};

export default DraggableCanvasItem;
