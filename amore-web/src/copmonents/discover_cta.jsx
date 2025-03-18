import React from 'react';
import BasicButton from './basic_button';
import { useNavigate } from 'react-router-dom';
import { colors } from '../utils/theme';
//Discover Call To Action
const DiscoverCTA = ({ style }) => {

    const navigate = useNavigate();

    return (
        <div className='discover-call-to-action-box' style={style}>

            <div className='discover-call-to-action-box-content'>
                <p>Aşk seni bekliyor</p>
                <p>Bekletmeye gelmez, bul onu!</p>

                <BasicButton fontSize={'.85rem'} onClick={() => navigate('/dashboard/discover')} height={'50px'} backgroundColor={colors.brand1} width={'100%'} borderRadius={'12px'} style={{ marginTop: '.85rem' }}>
                    Keşfeymeye Başla
                </BasicButton>
            </div>
        </div>
    )
}

export default DiscoverCTA
