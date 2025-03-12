import React from "react";

const ShimmerDiv = ({ width = "100%", height = "1rem", rounded = "1px", className = "" }) => {
    return (
        <div
            className={`shimmer-bg ${className}`}
            style={{ width, height, borderRadius: rounded }}
        ></div>
    );
};


export default ShimmerDiv;
