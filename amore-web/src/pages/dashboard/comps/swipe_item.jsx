import React from 'react'
import { ShimmerDiv } from 'shimmer-effects-react'
import FlexBox from '../../../copmonents/flex_box'
import AmoreLoading from '../../../copmonents/amore_loading'
import { colors } from '../../../utils/theme'
import { calculateAge } from '../../../utils/functions'
import { BirthdayIcon, GenderIcon, JobIcon, LocactionHomeIcon, SchollIcon } from '../../../assets/svg/svg_package'
import UserPropertie from './user_propertie'
import SwipeImageWrapper from './swipe_image_wrapper'
import SwipeInfoShimmer from './swipe_info_shimmer'
import { v4 as uuidv4 } from 'uuid';


const SwipeItem = ({ user, loading }) => {
    const userProfilPhoto = user?.photos[0]?.url;
    const userPhotos = user?.photos.slice(1,);
    const userAge = calculateAge(user?.birthday);
    const userState = user?.country?.state?.name || user?.country?.name;
    const userProperties = [
        {
            type: 'gender',
            propertie: 'Kadın',
            icon: <GenderIcon />
        },
        {
            type: 'age',
            propertie: userAge,
            text: 'Yaşında',
            icon: <BirthdayIcon width='29' height='29' />
        },
        {
            type: 'state',
            propertie: userState,
            icon: <LocactionHomeIcon width='29' height='29' />
        },
        {
            type: 'job',
            propertie: 'Meslek Bilgisi Yok',
            icon: <JobIcon width='29' height='29' />
        },
        {
            type: 'school',
            propertie: 'Okul Bilgisi Yok',
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
                                        <span className='swipe-item-user-status'>Çevrim içi</span>
                                    </FlexBox>
                                    <span className='swipe-item-user-info'>{user?.name}, {calculateAge(user?.birthday)}</span>
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
                            <h4>Ben Kimim?</h4>
                            <p>Ben 19 yaşında İzmir'de yaşayan bir genç kızım. Yeni insanlarla tanışmak, görüşmek ve ilişkiler kurmak istiyorum. Bu yüzden buradayım.</p>
                        </div>

                        <div className='swipe-item-user-properties'>
                            {userProperties.map(propertie => <UserPropertie key={uuidv4()} propertie={propertie?.propertie} icon={propertie?.icon} text={propertie?.text} />)}
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
