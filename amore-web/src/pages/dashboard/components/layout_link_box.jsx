import { useMediaPredicate } from "react-media-hook";
import { NavLink } from "react-router-dom";

const LayoutLinkBox = ({ title, path, buttonClick, onClick, onHover }) => {
  const isMobile = useMediaPredicate("(max-width:575px)");
  return (
    <div
      className="layout-link-box"
      onClick={onClick}
      onMouseEnter={!isMobile ? onHover : null}
    >
      {path ? (
        <NavLink to={path}>{title}</NavLink>
      ) : (
        <span onClick={buttonClick}>{title}</span>
      )}
    </div>
  );
};

export default LayoutLinkBox;
