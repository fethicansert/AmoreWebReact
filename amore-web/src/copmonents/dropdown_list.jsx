import React, { useState } from "react";
import FlexBox from "./flex_box";
import { ArrowDownIcon } from "../assets/svg/svg_package";
import { colors } from "../utils/theme";

const DropdownList = ({
  title,
  titleStyle,
  dropdownStyle,
  showDropdown,
  onDropDown,
  selectedItem,
  icon,
  children,
  wrapperStyle,
  textStyle,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="dropdown-wrapper" style={{ ...wrapperStyle }}>
      {title && <h3 style={titleStyle}>{title}</h3>}

      <div
        style={{
          ...dropdownStyle,
          border: `1px solid ${
            showDropdown || hover ? colors.brand1 : colors.borderColor1
          }`,
        }}
        className={`dropdown ${showDropdown ? "active" : null}`}
        onClick={onDropDown}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* //SELECTED STATE */}
        {
          <FlexBox gap="0 10px">
            {icon}
            <span style={textStyle}>{selectedItem}</span>
          </FlexBox>
        }

        <ArrowDownIcon
          width="19"
          height="19"
          className="dropdown-arrow "
          style={{
            transform: showDropdown ? "rotateX(180deg)" : "rotateX(0deg)",
            transition: "transform 150ms ease",
          }}
        />

        {showDropdown && (
          <div className={`dropdown-list ${showDropdown ? "active" : null}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownList;
