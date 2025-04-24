import React, { useState } from 'react'
import FlexBox from '../../../copmonents/flex_box'
import { NavLink, Outlet, useOutletContext } from 'react-router-dom'

const UserSupport = () => {

    const { 
        errors,
        title,
        setTitle,
        question, 
        setQuestion,
        questionImage,
        setQuestionImage } = useOutletContext();

    return (
        <div className='user-support'>
            <FlexBox gap='0 18px' style={{padding:'1.45rem 0'}}>
              
                <NavLink end className={({isActive,_}) => isActive ? 'active' : '' } to={''} >
                    Yeni Soru
                </NavLink>

                <NavLink to={'old'} >
                    Önceki Sorular
                </NavLink>

            </FlexBox>

            <Outlet context={{
                                errors,
                                title,
                                setTitle,
                                question, 
                                setQuestion,
                                questionImage,
                                setQuestionImage
                            }} 
            />

        </div>
    );
}

export default UserSupport
   