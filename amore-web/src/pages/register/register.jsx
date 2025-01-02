import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import FlexBox from '../../copmonents/flex_box';
import Header from '../../copmonents/header';

import amoreIcon from '../../assets/icons/amore_icon.png';
import '../../css/register/register.css'
import colors from '../../theme/colors';
import BasicButton from '../../copmonents/basic_button';

import { ArrowLeftIcon } from '../../assets/svg/svg_package';
import PaddingContainer from '../../copmonents/padding_container';
import RegisterName from './register_name';

const Register = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const startPosition = 16.7;


    const getPosition = () => {
        let calculatedPosition = startPosition * (currentPageIndex + 1);
        if (calculatedPosition > 100) calculatedPosition = 100;
        return calculatedPosition;
    }

    const navigateForward = () => {
        if (currentPageIndex === 5) return;
        setCurrentPageIndex(currentPageIndex + 1);
    }

    const navigateBack = () => {
        if (currentPageIndex === 0) return;
        setCurrentPageIndex(currentPageIndex - 1);
    }

    const getCurrentSection = () => {
        switch (currentPageIndex) {
            case 0:
                return <RegisterName />
            case 1:
                return <p>Hello 2</p>
            case 2:
                return <p>Hello 3</p>
            case 3:
                return <p>Hello 4</p>
            case 4:
                return <p>Hello 5</p>
            case 5:
                return <p>Hello 6</p>

            default:
                return <p>Hello 1</p>
        }
    }


    return (
        <div className='register'>
            <Header backgroundColor={colors.backGround3} title={'Amore'} titleColor={colors.brand1} menuIconColor={colors.brand1} textColor={colors.darkText} icon={amoreIcon} iconWidth={35} />
            <div className='register-wrapper'>
                <div className='register-container'>
                    <FlexBox justifyContent={'space-between'} width={'100%'} gap={'0 15px'}>
                        <div className='register-back-button' onClick={() => navigateBack()}>
                            <ArrowLeftIcon />
                        </div>
                        <FlexBox flex={'1'} gap='0 10px'>
                            <div className='register-position-wrapper'>
                                <div style={{ width: `${getPosition()}%` }} className='register-position'></div>
                            </div>
                            <span className='position-count'>06 / {currentPageIndex + 1}</span>
                        </FlexBox>
                    </FlexBox>

                    <PaddingContainer top='15px' bottom='15px'>
                        {getCurrentSection()}
                    </PaddingContainer>


                    <BasicButton
                        onClick={() => navigateForward()}
                        width={'85%'}
                        height={'clamp(50px, 10vw, 56px)'}
                        backgroundColor={colors.brand1}
                        color={colors.whiteText}
                        borderRadius={'12px'}>
                        Devam Et
                    </BasicButton>
                </div>
            </div>
        </div>
    )
}

export default Register


