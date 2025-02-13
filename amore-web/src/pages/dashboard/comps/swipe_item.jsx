import React from 'react'
import FlexBox from '../../../copmonents/flex_box'
import AmoreLoading from '../../../copmonents/amore_loading'
import { colors } from '../../../utils/theme'
import { calculateAge } from '../../../utils/functions'
import { BirthdayIcon, GenderIcon, JobIcon, LocactionHomeIcon, SchollIcon } from '../../../assets/svg/svg_package'
import UserPropertie from './user_propertie'
import SwipeImageWrapper from './swipe_image_wrapper'
import SwipeInfoShimmer from './swipe_info_shimmer'
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next'


const SwipeItem = ({ user, loading }) => {
    const userProfilPhoto = user?.photos[0]?.url;
    const userPhotos = user?.photos.slice(1,);
    const userAge = calculateAge(user?.birthday);
    const userState = user?.country?.state?.name || user?.country?.name;
    const gender = user?.gender || 'female';
    console.log(user);

    const { t, i18n } = useTranslation();

    const userProperties = [
        {
            value: t(`GENDER.${gender.toUpperCase()}`),
            icon: <GenderIcon />
        },
        {
            value: t('DASHBOARD.SWIPE.USERINFO.AGE', { age: userAge }),
            icon: <BirthdayIcon width='29' height='29' />
        },
        {
            value: userState,
            icon: <LocactionHomeIcon width='29' height='29' />
        },
        {
            value: t('DASHBOARD.SWIPE.USERINFO.NO_JOB_TITLE'),
            icon: <JobIcon width='29' height='29' />
        },
        {
            value: t('DASHBOARD.SWIPE.USERINFO.NO_SCOOL_TITLE'),
            icon: <SchollIcon width='29' height='29' />
        }
    ];

    return (
        <div className='swipe-item'>

            <div className='swipe-container-image-wrapper'>

                {
                    loading ? <AmoreLoading
                        style={{ border: `1px solid ${colors.borderColor1}`, backgroundColor: colors.backGround3, borderRadius: '12px' }}
                        amoreWidth={'30%'}
                        containerWidth={'100%'}
                        containerHeight={'100%'} />
                        : <>
                            <div className='swipe-container-image-wrapper-overlay'>
                                <FlexBox alignItems='start' gap='5px' flexDirection='column'>
                                    <FlexBox gap='0 5px' >
                                        <span style={{ width: '8px', height: '8px' }} className='online-circle'></span>
                                        <span className='swipe-item-user-status'>{t('STATUS.ONLINE')}</span>
                                    </FlexBox>
                                    <span className='swipe-item-user-info'>{user?.name}, {userAge}</span>
                                </FlexBox>
                            </div>
                            <img src={userProfilPhoto} />
                        </>
                }

            </div>

            <div className='swipe-container-item-about-container'>
                {loading
                    ? <SwipeInfoShimmer /> : <>

                        <div className='swipe-item-user-bio'>
                            <h4>{t('DASHBOARD.SWIPE.USERINFO.TITLE')}</h4>
                            <p>Ben 19 yaşında İzmir'de yaşayan bir genç kızım. Yeni insanlarla tanışmak, görüşmek ve ilişkiler kurmak istiyorum. Bu yüzden buradayım.</p>
                        </div>

                        <div className='swipe-item-user-properties'>
                            {userProperties.map(propertie => <UserPropertie
                                key={uuidv4()}
                                value={propertie?.value}
                                icon={propertie?.icon}
                            />)}
                        </div>

                    </>}

                <div className='info-'></div>

            </div>

            {userPhotos?.length > 0 && userPhotos.map(userPhoto =>
                <SwipeImageWrapper key={uuidv4()} loading={loading} image={userPhoto.url} />
            )}

        </div>

    )
}

export default SwipeItem
