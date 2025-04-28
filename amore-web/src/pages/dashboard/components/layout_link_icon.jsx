import React from "react";
import { useMediaPredicate } from "react-media-hook";
import { NavLink } from "react-router-dom";
const LayoutLinkIcon = ({ path, icon, onHover, onClik }) => {
  const isMobile = useMediaPredicate("(max-width:575px)");

  return (
    <NavLink
      onMouseEnter={!isMobile ? onHover : null}
      onClick={onClik}
      to={path}
    >
      {icon}
    </NavLink>
  );
};
export default LayoutLinkIcon;
