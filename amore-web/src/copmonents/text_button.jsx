import React from 'react'

const TextButton = ({children,width,height,onClick,color,style,className}) => {
  return (
    <span onClick={onClick} className={className} style={{color,width,height,cursor:'pointer',...style}}>
        {children}
    </span>
  )
}

export default TextButton
