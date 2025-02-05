import React from 'react'
import { useMediaPredicate } from 'react-media-hook';
import { NavLink } from 'react-router-dom'
const LayoutLinkIcon = ({ path, icon, className = null, onHover, onClik }) => {

    const isMobile = useMediaPredicate("(max-width:575px)");

    return <NavLink
        onMouseEnter={!isMobile ? onHover : null}
        onClick={onClik}
        className={({ isActive }) => (`dashboard-header-link-icon ${className} ${isActive ? 'active' : 'inactive'}`)}
        to={path}>
        {icon}
    </NavLink>

}
export default LayoutLinkIcon
