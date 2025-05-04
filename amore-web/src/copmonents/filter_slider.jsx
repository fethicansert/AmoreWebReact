import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { colors } from "../utils/theme";
import FlexBox from "./flex_box";
import { ArrowDownIcon } from "../assets/svg/svg_package";

const FilterSlider = ({
  onDropDownItemClick = undefined,
  dropDownItems = [],
  hasDropDown = false,
  onChangeCommitted,
  title,
  valueTitle,
  value,
  setValue,
  ariaLabel,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [showDropdown, setShowDropdown] = useState();
  return (
    <>
      <FlexBox
        width={"100%"}
        justifyContent="space-between"
        margin={"1rem 0 .5rem 0"}
        style={{ position: "relative", userSelect: "none" }}
      >
        <span style={{ color: colors.darkText, fontSize: ".8rem" }}>
          {title}
        </span>

        <FlexBox
          gap="0 2px"
          alignItems="end"
          style={{ cursor: hasDropDown ? "pointer" : "default" }}
          onClick={
            hasDropDown ? () => setShowDropdown((prev) => !prev) : undefined
          }
        >
          <span
            style={{
              color: colors.darkText,
              fontSize: ".8rem",
            }}
          >
            {valueTitle}
          </span>
          {hasDropDown && (
            <ArrowDownIcon
              height="15"
              width="15"
              strokeWidth={1.2}
              style={{
                transform: showDropdown ? "rotateX(180deg)" : "rotateX(0deg)",
                transition: "transform 150ms ease",
              }}
            />
          )}
        </FlexBox>

        {hasDropDown && showDropdown && (
          <div
            style={{
              transformOrigin: "right",
              animation: "fade 100ms ease",
              borderRadius: "12px 0 12px 12px",
              zIndex: 2,
              position: "absolute",
              right: "0",
              top: "20px",
              display: "grid",
              background: colors.backGround3,
              border: `1px solid ${colors.borderColor1}`,
              fontSize: ".9rem",
            }}
          >
            {dropDownItems.length > 0 ? (
              <>
                {dropDownItems.map((item, index) => (
                  <div
                    onClick={() => {
                      onDropDownItemClick(item.value);
                      setShowDropdown(false);
                    }}
                    key={index}
                    className="filter-dropdown-item"
                  >
                    {item.name}
                  </div>
                ))}
              </>
            ) : (
              <div className="filter-dropdown-item">
                Set Dropdown Item! Object has name value properties
              </div>
            )}
          </div>
        )}
      </FlexBox>
      <Slider
        onChangeCommitted={onChangeCommitted}
        step={step}
        min={min}
        max={max}
        sx={{
          height: "4px",
          color: colors.brand1,
          "& .MuiSlider-thumb": {
            outlineOffset: "-1px",
            outline: `2px solid ${colors.brand1}`,
            width: "17px",
            height: "17px",
            boxShadow: "none",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 5px rgb(230, 73, 151,.4);`,
            },
            "&.Mui-active": {
              boxShadow: `none`,
            },
            color: colors.backGround3,
          },
        }}
        aria-label={ariaLabel}
        getAriaLabel={() => ariaLabel}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default FilterSlider;
