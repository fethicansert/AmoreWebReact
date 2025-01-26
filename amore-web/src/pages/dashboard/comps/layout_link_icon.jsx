import React from 'react'
import { useMediaPredicate } from 'react-media-hook';
import { NavLink } from 'react-router-dom'
const LayoutLinkIcon = ({ path, icon, className = null, setHoverPosition, setCurrentPosition }) => {

    const isMobile = useMediaPredicate("(max-width:500px)");


    return <NavLink
        onMouseEnter={!isMobile ? setHoverPosition : undefined}
        onClick={setCurrentPosition}
        className={({ isActive }) => (`dashboard-header-link-icon ${className} ${isActive ? 'active' : 'inactive'}`)}
        to={path}>
        {icon}
    </NavLink>

}
export default LayoutLinkIcon
