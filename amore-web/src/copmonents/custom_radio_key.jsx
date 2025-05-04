import React, { useState } from "react";
import { colors } from "../utils/theme";

const CustomRadioKey = ({
  width,
  height,
  isActive,
  leading,
  text,
  style,
  textStyle,
  className,
  activeColor,
  notActiveColor,
  onToogle,
}) => {
  const [isUnLock, setIsUnlock] = useState(isActive);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={toogleLock}
      className={className}
      style={{
        ...style,
        width,
        height,
        display: "grid",
        gap: "0 8px",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        border: `1px solid ${hover ? colors.brand1 : colors.borderColor1}`,
        borderRadius: "16px",
        padding: "0 .75rem",
        cursor: "pointer",
      }}
    >
      {leading && leading}
      <span style={{ ...textStyle, fontSize: ".9rem" }}>{text && text}</span>
      <div
        style={{
          width: "43px",
          height: "23px",
          borderRadius: "20px",
          border: `1px solid ${colors.borderColor1}`,
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {
          <div
            style={{
              width: "17px",
              height: "17px",
              borderRadius: "50%",
              background: isUnLock ? activeColor : notActiveColor,
              position: "absolute",
              left: "2px",
              transform: isUnLock ? "translateX(20px)" : "translateX(0)",
              transition: "transform 250ms ease, background 250ms ease",
            }}
          ></div>
        }
      </div>
    </div>
  );

  function toogleLock() {
    setIsUnlock((prev) => !prev);
    onToogle();
  }
};

export default CustomRadioKey;
