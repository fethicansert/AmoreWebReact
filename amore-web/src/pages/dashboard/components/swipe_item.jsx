import React, { useEffect, useRef, useState } from 'react'
import AmoreLoading from '../../../copmonents/amore_loading'
import { colors } from '../../../utils/theme'
import { calculateAge } from '../../../utils/functions'
import { BirthdayIcon, BlockedUserIcon, FacebookIcon, GenderIcon, InstragramIcon, JobIcon, LocactionHomeIcon, SchollIcon, WhatsAppIcon } from '../../../assets/svg/svg_package'
import UserPropertie from './user_propertie'
import SwipeImageWrapper from './swipe_image_wrapper'
import SwipeInfoShimmer from './swipe_info_shimmer'
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next'
import { useBanner } from '../../../hooks/use_banner'
import { useAppData } from '../../../hooks/use_add_data'
import { useLocation } from 'react-router-dom'
import SwipeSlide from './swipe_slide'
import SwipeItemOverlayTag from './swipe_item_overlay_tag'
import 'react-slideshow-image/dist/styles.css';
import BasicButton from '../../../copmonents/basic_button'
import UserBlockPopup from './user_block_popup'
import { axiosAmore } from '../../../api/axios'
import BlockedUser from './blocked_user'

const SwipeItem = ({ user, loading, showBlockButton, isUserBlocked = false, setIsUserBlocked }) => {

    //USER VARIABLES
    const userProfilPhoto = user?.photos[0]?.url;
    const userPhotos = user?.photos.slice(1,);
    const userAge = calculateAge(user?.birthday);
    const userState = user?.country?.state?.name || user?.country?.name;
    const gender = user?.gender || 'female';
    const bio = user?.bio;

    //LOCATION
    const location = useLocation();

    //STATE
    const [showGalery, setShowGalery] = useState(false);
    const [isBlocking, setIsBlocking] = useState(false);

    const [showBlockPopup, setShowBlockPopup] = useState(false);

    //CONTEXT
    const { t, _ } = useTranslation();
    const { setLimitedOfferOptions, setShowLogin } = useBanner();
    const { getUserInterests } = useAppData();

    //USER INTERESTS
    const interests = getUserInterests(user?.interests.map(interest => interest.id));

    //REFS
    const galeryPhotos = useRef(user?.photos);
    const galeryPhotoIndex = useRef(0);

    //UPDATE PHOTOS IF USERS CHANGE
    useEffect(() => {
        galeryPhotos.current = user?.photos;
    }, [user]);

    //USER PROPERTIES WITH VALUES AND ICONS
    const userProperties = [
        { value: t(`GENDER.${gender.toUpperCase()}`), icon: <GenderIcon /> },
        { value: t('DASHBOARD.SWIPE.USERINFO.AGE', { age: userAge }), icon: <BirthdayIcon width='29' height='29' /> },
        { value: userState, icon: <LocactionHomeIcon width='29' height='29' /> },
        { value: t('DASHBOARD.SWIPE.USERINFO.NO_JOB_TITLE'), icon: <JobIcon width='29' height='29' /> },
        { value: t('DASHBOARD.SWIPE.USERINFO.NO_SCOOL_TITLE'), icon: <SchollIcon width='29' height='29' /> }
    ];

    return (
        <div className='swipe-item' >

            {
                isUserBlocked
                    ? <BlockedUser user={user} onClick={() => unblockUser(user?.id)} />
                    : <>
                        {showBlockPopup && <UserBlockPopup isBlock={true} user={user} loading={isBlocking} onClose={() => setShowBlockPopup(false)} onYes={() => blockUser(user.id)} overflowColor='rgba(0, 0, 0, 0.3)' />}

                        {(showGalery) && <SwipeSlide closeGalery={closeGalery} galeryPhotoIndex={galeryPhotoIndex} galeryPhotos={galeryPhotos} />}

                        <SwipeImageWrapper onClick={() => handleShowGalery(0)} style={{ height: loading ? '100vw' : '' }}>
                            {
                                loading ? <AmoreLoading
                                    style={{ border: `1px solid ${colors.borderColor1}`, backgroundColor: colors.backGround3, borderRadius: '12px' }}
                                    amoreWidth={'35%'}
                                    containerWidth={'100%'}
                                    containerHeight={'100%'}
                                />
                                    : <>
                                        <SwipeItemOverlayTag usernmae={user?.name} userAge={userAge} />
                                        <img src={userProfilPhoto} />
                                    </>
                            }

                        </SwipeImageWrapper>

                        <div className='swipe-container-item-about-container'>
                            {loading
                                ? <SwipeInfoShimmer />
                                : <>
                                    <div className='swipe-item-user-bio'>
                                        <h4>{t('DASHBOARD.SWIPE.USERINFO.BIO_TITLE')}</h4>
                                        <p className='swipe-item-info-text'>{bio || t('DASHBOARD.SWIPE.USERINFO.NO_BIO_TEXT')}</p>
                                    </div>

                                    <div className='swipe-item-user-properties'>
                                        {userProperties.map(propertie => <UserPropertie
                                            key={uuidv4()}
                                            value={propertie?.value}
                                            icon={propertie?.icon}
                                        />)}
                                    </div>

                                    <h4 style={{ marginTop: '1.5rem' }}>{t('DASHBOARD.SWIPE.USERINFO.SOCIAL_PLATFORM_TITLE')}</h4>

                                    <div className='swipe-item-user-properties'>

                                        <div className='user-social-button whatsapp-button' onClick={handleSocialButtonClick}>
                                            <WhatsAppIcon width='28' height='28' />
                                            WhatsApp
                                        </div>

                                        <div className='user-social-button instagram-button' onClick={handleSocialButtonClick}>
                                            <InstragramIcon width='28' height='28' />
                                            Instagram
                                        </div>

                                        <div className='user-social-button facebook-button' onClick={handleSocialButtonClick}>
                                            <FacebookIcon width='28' height='28' />
                                            Facebook
                                        </div>

                                    </div>

                                </>}
                        </div>

                        {(userPhotos?.length > 0 && !loading) && <SwipeImageWrapper onClick={() => handleShowGalery(1)} key={uuidv4()} loading={loading} image={userPhotos[0].url} />}

                        <div className='swipe-container-item-about-container'>
                            {loading
                                ? <SwipeInfoShimmer />
                                : <>
                                    <h4>{t('DASHBOARD.SWIPE.USERINFO.INTEREST_TITLE')}</h4>
                                    {interests?.length > 0
                                        ? <div className='swipe-item-user-properties'>
                                            {
                                                interests.map(propertie => <UserPropertie
                                                    key={uuidv4()}
                                                    value={t(`REGISTER.INTERESTS.INTEREST_ITEMS.${propertie.name}`)}
                                                    icon={propertie?.emoji}
                                                />)
                                            }
                                        </div>
                                        : <p className='swipe-item-info-text'>{t('DASHBOARD.SWIPE.USERINFO.NO_INTEREST_TEXT')}</p>}
                                </>}
                        </div>

                        {/* Rest of the user photos */}
                        {(userPhotos?.length > 1 && !loading) && userPhotos.slice(1,).map((userPhoto, index) =>
                            <SwipeImageWrapper style={{ marginBlock: '1rem' }} onClick={() => handleShowGalery(index + 2)} key={uuidv4()} loading={loading} image={userPhoto.url} />
                        )}


                        {
                            showBlockButton && <div className='swipe-container-item-about-container'>
                                <h4>Bir sorun mu var?</h4>
                                <div className='swipe-item-user-properties'>

                                    <BasicButton
                                        disabled={isUserBlocked}
                                        onClick={() => setShowBlockPopup(true)}
                                        backgroundColor={colors.negativeBlack}
                                        height={'51px'}
                                        width={'165px'}
                                        borderRadius={'12px'}
                                        style={{ gap: '0 5px', justifySelf: 'flex-end', fontWeight: 400 }}>
                                        <BlockedUserIcon />
                                        <span>Kişiyi Şikatet Et</span>
                                    </BasicButton>

                                    <BasicButton
                                        disabled={isUserBlocked}
                                        onClick={() => setShowBlockPopup(true)}
                                        backgroundColor={colors.negativeBlack}
                                        height={'51px'} width={'147px'}
                                        borderRadius={'12px'}
                                        style={{ gap: '0 5px', justifySelf: 'flex-end', fontWeight: 400 }}>
                                        <BlockedUserIcon />
                                        <span>{!isUserBlocked ? 'Kişiyi Engelle' : 'Kişi Engellendi'}</span>
                                    </BasicButton>
                                </div>

                            </div>
                        }

                    </>
            }

        </div>

    );


    async function unblockUser(userId) {
        setIsBlocking(true);

        try {
            const response = await axiosAmore.post('user/unblock', { userId }, { useAuth: true })
            if (response?.data?.data?.status) setIsUserBlocked(false);

        } catch (e) {
            console.log(e);
        } finally {
            setIsBlocking(false);
            setShowBlockPopup(false);
        }
    }

    async function blockUser(userId) {
        setIsBlocking(true);

        try {
            const response = await axiosAmore.post('user/block', { userId }, { useAuth: true })
            if (response?.data?.data?.status) setIsUserBlocked(true);

        } catch (e) {
            console.log(e);
        } finally {
            setIsBlocking(false);
            setShowBlockPopup(false);
        }
    }



    //FUNCTIONS
    function handleSocialButtonClick() {
        if (location.pathname.slice(0, 6) === '/user/') return setShowLogin(true);
        setLimitedOfferOptions({ show: true, type: 'premium-subscription' });
    }

    function handleShowGalery(index) {
        if (loading) return;
        setShowGalery(true);
        galeryPhotoIndex.current = index;
    }

    function closeGalery(e) {
        if (e.target.tagName === 'DIV')
            setShowGalery(false);
    }
}

export default SwipeItem
