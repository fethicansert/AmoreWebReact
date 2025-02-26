import { forwardRef } from "react";
import { calculateAge } from "../utils/functions.js"
import { useBanner } from "../hooks/use_banner.jsx"
import { colors } from "../utils/theme.js";
import { FilledLocationIcon, PremiumStartIcon } from "../assets/svg/svg_package.jsx";
import FlexBox from "./flex_box.jsx";
import BasicButton from "./basic_button.jsx";


const UserCard = forwardRef((props, ref) => {
    const isOnlyPremium = props?.isOnlyPremium || false;
    const user = props.user;
    const age = calculateAge(user?.birthday);
    const { setLimitedOfferOptions } = useBanner();


    return <div className='discover-user-box' onClick={() => isOnlyPremium ? setLimitedOfferOptions({ show: true, type: 'premium-subscription' }) : null}>
        <div className='discover-user-image-container' ref={ref}>
            <img style={{ filter: `blur(${isOnlyPremium ? '35px' : '0'})` }} src={user?.photos[0].url}></img>
            <div
                className='discover-user-image-container-overlay'
                style={{ background: isOnlyPremium ? `linear-gradient(rgba(22,30,42,0) 20%, rgba(230, 73, 151,.85) 100%)` : 'linear-gradient(rgba(22,30,42,0) 0%, rgba(22,30,42,.75) 100%)' }}>
            </div>
        </div>

        {
            !isOnlyPremium
                ? <div className='discover-user-info'>

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
                : <div className="only-premium-content">
                    <PremiumStartIcon width="60" height="60" color={colors.backGround3} backgroundColor={colors.brand1} />
                    <p>Sadece Premium Üyeler</p>
                </div>
        }



    </div>
})

export default UserCard;

