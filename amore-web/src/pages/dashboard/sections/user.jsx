import React, { useRef, useState } from 'react'
import '../../../css/dashboard/user.css'
import { Outlet } from 'react-router-dom';
import UserProfileNavigation from '../components/user_profile_navigation'
import PremiumBox from '../../../copmonents/premium_box'
import UserProfileHeader from '../components/user_profile_header'
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';
import { CrossCloseIcon } from '../../../assets/svg/svg_package';
import { axiosAmore } from '../../../api/axios';
import { ClipLoader } from 'react-spinners';
import FixedOverflow from '../../../copmonents/fixed_overflow';


const headers = ['Profil Bilgileri', 'Dil Değiştir', 'Ayarlar', 'Engellenmiş Kullanıcılar', 'Destek Sistemi', 'Influencer']

const User = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const userRightColumnRef = useRef();
    const [text, setText] = useState(false);
    const [textLoading, setTextLoading] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);

    return (
        <section className='user-profile' style={{ position: 'relative' }}>

            {showOverflow && <FixedOverflow blur={'2px'}>

                {textLoading
                    && <div>
                        <ClipLoader color={colors.brand1} size={50} />
                    </div>}

                {text && <div style={{ position: 'relative', width: '80%', maxWidth: '500px', animation: 'fade 250ms ease' }}>

                    <div onClick={() => {
                        setText('');
                        setShowOverflow(false)
                    }} style={{ width: '30px', height: '30px', position: 'absolute', left: '-15px', top: '-15px', background: colors.negativeBlack, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, cursor: 'pointer' }}>
                        <CrossCloseIcon width='22' height='22' />
                    </div>

                    <div style={{ background: 'white', width: '100%', padding: '1rem', borderRadius: '12px', maxHeight: '90vh', overflow: 'scroll', position: 'relative' }}>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                }

            </FixedOverflow>
            }

            <div className='user-profile-top-banner'>
            </div>

            <div className='user-profile-grid'>
                <div className='user-profile-left-col'>
                    <UserProfileNavigation setCurrentIndex={setCurrentIndex} />
                    <PremiumBox />
                </div>

                <div className='user-profile-right-col' ref={userRightColumnRef}>

                    <div className='user-right-col-content-wrapper'>
                        <UserProfileHeader title={headers[currentIndex]} />
                        <Outlet context={{ userRightColumnRef, fetchText }} />
                    </div>

                    <div className='user-profile-buttons'>
                        <BasicButton height={'53px'} width={'110px'} backgroundColor={colors.negativeBlack} borderRadius={'12px'}>
                            İptal Et
                        </BasicButton>
                        <BasicButton height={'53px'} width={'170px'} backgroundColor={colors.brand1} borderRadius={'12px'}>
                            Değişikleri Kaydet
                        </BasicButton>
                    </div>
                </div>

            </div>


        </section>
    )

    async function fetchText(url) {
        setShowOverflow(true);
        setTextLoading(true)
        try {
            const response = await axiosAmore.get(`api/${url}`);
            if (response.status === 200) {
                setText(response.data.data.content);
            }

        } catch (e) {
            console.log(e);
        } finally {
            setTextLoading(false)
        }
    }

    async function unblockUser(userId) {

    }
}

export default User
