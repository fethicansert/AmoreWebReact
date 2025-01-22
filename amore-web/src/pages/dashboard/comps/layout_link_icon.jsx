import React from 'react'
import { NavLink } from 'react-router-dom'
const LayoutLinkIcon = ({ path, icon, className = null, setHoverPosition, setCurrentPosition }) => {
    return <NavLink
        onClick={setCurrentPosition}
        onMouseEnter={setHoverPosition}
        className={({ isActive }) => (`dashboard-header-link-icon ${className} ${isActive ? 'active' : 'inactive'}`)}
        to={path}>
        {icon}
    </NavLink>
}
export default LayoutLinkIcon
