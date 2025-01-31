import { useState, useRef, forwardRef } from "react";
import { colors } from '../../../utils/theme.js';
import { calculateAge } from "../../../utils/functions.js";
import BasicButton from "../../../copmonents/basic_button.jsx";
import FlexBox from "../../../copmonents/flex_box.jsx";
import { FilledLocationIcon } from "../../../assets/svg/svg_package.jsx";



const DiscoverUser = forwardRef((props, ref) => {
    const user = props.user;
    const age = calculateAge(user?.birthday);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return <div

        className='discover-user-box'
    >
        <div className='discover-user-image-container' ref={ref}>
            <img style={{ visibility: isImageLoaded ? 'visible' : 'hode' }} onLoad={() => setIsImageLoaded(true)} src={user?.photos[0].url}></img>
            <div className='discover-user-image-container-overlay' style={{ background: 'linear-gradient(rgba(22,30,42,0) 0%, rgba(22,30,42,.75) 100%)' }}></div>

        </div>

        <div className='discover-user-info'>
            <FlexBox gap='0 10px'>
                <span className='online-circle'></span>
                <p className='discover-user-info-text-bold'>{user.name}, {age ? age : '00'}</p>
            </FlexBox>

            <FlexBox gap='0 6px' width={'100%'} margin={'.3rem 0 1rem 0'}>
                <p className='discover-user-info-light'>{user?.country?.state?.name || 'America'}</p>
                <FilledLocationIcon color='#FFFFFF' width='19' height='19' />
                <span>120 km</span>
            </FlexBox>

            <BasicButton className='discover-user-button' width={'100%'} height={'45px'} color={colors.brand2} backgroundColor={colors.backGround3} borderRadius={'12px'}>
                Mesaj Gonder
            </BasicButton>

        </div>

    </div>
})

export default DiscoverUser;

