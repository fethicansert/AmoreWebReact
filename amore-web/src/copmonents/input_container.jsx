import React from 'react'

const InputContainer = ({ gap = '10px', title, titleStyle, leading, placeholder = 'Placehoder Text', value, setValue, width = '100%', height = '40px' }) => {
    return (
        <div style={{ display: title ? 'flex' : 'block', flexDirection: title ? 'column' : undefined, gap: gap }}>
            <h3 style={titleStyle}>{title}</h3>
            <div className='input-container'
                style={{
                    display: leading ? 'grid' : 'block',
                    gridTemplateColumns: leading ? 'auto 1fr' : '1fr',
                    alignItems: 'center',
                    width: '100%',
                    height
                }}>
                {leading && leading}
                <input className='input-container-input' type='text' placeholder={placeholder} />
            </div>
        </div>
    )
}

export default InputContainer
