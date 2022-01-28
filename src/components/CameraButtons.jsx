import { useState } from "react";
import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bottom: "5vh",
  height: "40px",
  width: "40px",
  backgroundColor: "rgb(30, 75, 93)",
  color: "black",
  borderRadius: "50%",
  fontSize: 20,
  fontWeight: "bold",
  border: "1px solid black",
  cursor: "pointer",
};

const CameraButtons = () => {
  const sets = [
    // First Plane
    {
      cameraPos: [12, 12, 12],
      target: [-12, 0, 0],
      name: ("Object_21", "Object_20", "Object_22"),
    },
    // Second PLane
    {
      cameraPos: [-12, 12, 12],
      target: [-4, 0, 0],
      name: ("Object_21", "Object_20", "Object_22"),
    },
    // Third Plane
    {
      cameraPos: [-12, 12, -12],
      target: [4, 0, 0],
      name: ("Object_21", "Object_20", "Object_22"),
    },
    // Third Plane
    {
      cameraPos: [12, 12, -12],
      target: [4, 0, 0],
      name: ("Object_21", "Object_20", "Object_22"),
    },
  ];

  let focusIndex = 1;
  const handleClick = (direction) => {
    if (direction === "left" && focusIndex < sets.length - 1) {
      focusIndex += 1;
    } else if (direction === "right" && focusIndex > 0) {
      focusIndex -= 1;
    } else {
      console.log("no action");
    }
    const num = focusIndex;
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        onClick={(e) => handleClick("left")}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick("right")}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
