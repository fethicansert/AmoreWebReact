import React from 'react'
import FlexBox from './flex_box'
import { ArrowDownIcon } from '../assets/svg/svg_package'
import { colors } from '../utils/theme'

const DropdownList = ({ title, titleStyle, dropdownStyle, showDropdown, onDropDown, selectedItem, icon, children, wrapperStyle }) => {
    return (
        <div className='dropdown-wrapper' style={{ ...wrapperStyle }}>

            {title && <h3 style={titleStyle}>{title}</h3>}
            <div style={dropdownStyle} className={`register-input-wrapper dropdown ${showDropdown ? 'active' : null}`} onClick={onDropDown} >

                {/* //SELECTED STATE */}
                {<FlexBox gap='0 10px'>
                    {icon}
                    <span style={{ color: colors.darkText }}>
                        {selectedItem}
                        {/* currentLocation?.state || "Şehir Bulunmuyor" */}
                    </span>
                </FlexBox>}

                <ArrowDownIcon width='19' height='19' />

                <div className={`dropdown-list ${showDropdown ? 'active' : null}`}>
                    {/* //STATES LIST */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DropdownList
