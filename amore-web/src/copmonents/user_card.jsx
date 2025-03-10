import { forwardRef } from "react";
import { calculateAge } from "../utils/functions.js"
import { useBanner } from "../hooks/use_banner.jsx"
import { colors } from "../utils/theme.js";
import { FilledLocationIcon, PremiumStartIcon } from "../assets/svg/svg_package.jsx";
import FlexBox from "./flex_box.jsx";
import BasicButton from "./basic_button.jsx";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/use_auth.jsx"
import { ZAxis } from "recharts";

const UserCard = forwardRef((props, ref) => {

    const isFromHome = props?.isFromHome || false;
    const isDiscover = props?.isDiscover || false;
    const user = props.user;
    const age = calculateAge(user?.birthday);

    //CONTEXT
    const { setLimitedOfferOptions } = useBanner();
    const { t, _ } = useTranslation();
    const { auth } = useAuth();

    const isPremium = auth.premiumSubscription || false;


    return <div className='discover-user-box' onClick={() => isPremium ? setLimitedOfferOptions({ show: true, type: 'premium-subscription' }) : null}>
        <div className='discover-user-image-container' ref={ref}>
            <img style={{ filter: `blur(${isPremium || isDiscover ? '0' : '35px'})` }} src={user?.photos[0].url}></img>
            <div
                className='discover-user-image-container-overlay'
                style={{ background: isPremium || isDiscover ? 'linear-gradient(rgba(22,30,42,0) 0%, rgba(22,30,42,.75) 100%)' : `linear-gradient(rgba(22,30,42,0) 20%, ${isFromHome ? '#412A78' : 'rgba(230, 73, 151,.85)'}  100%)` }}>
            </div>
        </div>

        {
            isPremium || (!isPremium && isFromHome) || isDiscover
                ? <div className='discover-user-info'>

                    <FlexBox gap='0 10px'>
                        <span className='online-circle'></span>
                        {isFromHome ? t('STATUS.ONLINE') : <p className='discover-user-info-text-bold'>{user.name}, {age ? age : '00'}</p>}

                    </FlexBox>

                    <FlexBox gap='0 6px' width={'100%'} margin={'.3rem 0 1rem 0'}>
                        <p className='discover-user-info-light'>{user?.country?.state?.name || 'America'}</p>
                        <FilledLocationIcon color='#FFFFFF' width='19' height='19' />
                        <span>4 {auth.distanceType}</span>
                    </FlexBox>

                    {!isFromHome && <BasicButton className='discover-user-button' width={'100%'} height={'45px'} color={colors.brand2} backgroundColor={colors.backGround3} borderRadius={'12px'}>
                        {t('BUTTONS.SEND_MESSAGE_BUTTON')}
                    </BasicButton>}

                </div>

                : <div className="only-premium-content">
                    <PremiumStartIcon width="60" height="60" color={colors.backGround3} backgroundColor={colors.brand1} />
                    <p>{t('USER_CARD.ONLY_PREMIUM_USERS')}</p>
                </div>



        }





    </div>
})

export default UserCard;

