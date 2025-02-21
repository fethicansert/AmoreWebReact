import React from 'react'
import Slider from '@mui/material/Slider';
import { colors } from '../utils/theme';
import FlexBox from './flex_box';

const FilterSlider = ({ onChangeCommitted, title, valueTitle, value, setValue, ariaLabel, min = 0, max = 100, step = 1 }) => {
  return (
    <>
      <FlexBox width={'100%'} justifyContent='space-between' margin={'1rem 0 .5rem 0'}>
        <span style={{ color: colors.darkText, fontSize: '.8rem' }}>{title}</span>
        {valueTitle && <span style={{ color: colors.darkText, fontSize: '.8rem' }}>{valueTitle}</span>}
      </FlexBox>
      <Slider
        onChangeCommitted={onChangeCommitted}
        step={step}
        min={min}
        max={max}
        sx={{
          height: '4px',
          color: colors.brand1,
          '& .MuiSlider-thumb': {
            outlineOffset: '-1px',
            outline: `2px solid ${colors.brand1}`,
            width: '17px',
            height: '17px',
            boxShadow: 'none',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 5px rgb(230, 73, 151,.4);`,
            },
            '&.Mui-active': {
              boxShadow: `none`,
            },
            color: colors.backGround3,
          },
        }}
        aria-label={ariaLabel}
        getAriaLabel={() => ariaLabel}
        value={value}
        onChange={(e) => setValue(e.target.value)} />
    </>
  )
}

export default FilterSlider;
