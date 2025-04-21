import React, { useState } from "react";
import { colors } from "../utils/theme";

const InputContainer = ({
    containerStyle,
    inputClass,
    gap = "10px",
    title,
    titleStyle,
    leading,
    placeholder = "Placehoder Text",
    value,
    setValue,
    width = "100%",
    height = "40px",
    borderRadius = "12px",
    border,
    padding = "0 .6rem",
    focusBorder
}) => {

    const [focus, setFocus] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div
            style={{
                ...containerStyle,
                width: "100%",
                height: "fit-content",
                display: title ? "flex" : "block",
                flexDirection: title ? "column" : undefined,
                gap: gap,
            }}
        >
            <h3 style={{ fontSize: ".9rem", fontWeight: "600", ...titleStyle }}>
                {title}
            </h3>
            <div
                onMouseLeave={() => setHover(false)}
                onMouseEnter={() => setHover(true)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className="input-container"
                style={{
                    padding: padding,
                    border: (focus || hover) ? `1px solid ${colors.brand1}` : border,
                    display: leading ? "grid" : "block",
                    gridTemplateColumns: leading ? "auto 1fr" : "1fr",
                    gap: "0 .3rem",
                    alignItems: "center",
                    width: width,
                    height: height,
                    minHeight: height,
                    borderRadius: borderRadius,
                }}
            >
                {leading && leading}
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className={`input-container-input ${inputClass}`}
                    type="text"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default InputContainer;
