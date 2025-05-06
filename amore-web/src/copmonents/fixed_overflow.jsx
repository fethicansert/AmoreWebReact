import React from "react";

const FixedOverflow = ({
  zIndex = 9,
  children,
  color = "rgba(0,0,0,0.2)",
  blur = 0,
  style,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  onClick,
}) => {
  return (
    <div
      className="fixed-overflow"
      onClick={onClick}
      style={{
        position: "fixed",
        top,
        right,
        bottom,
        left,
        zIndex: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: color,
        backdropFilter: `blur(${blur})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FixedOverflow;
