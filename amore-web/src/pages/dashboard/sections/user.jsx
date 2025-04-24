import React, { useEffect, useRef, useState } from 'react'
import '../../../css/dashboard/user.css'
import { Outlet, useLocation } from 'react-router-dom';
import UserProfileNavigation from '../components/user_profile_navigation'
import PremiumBox from '../../../copmonents/premium_box'
import UserProfileHeader from '../components/user_profile_header'
import BasicButton from '../../../copmonents/basic_button';
import { colors } from '../../../utils/theme';
import { CrossCloseIcon } from '../../../assets/svg/svg_package';
import { axiosAmore } from '../../../api/axios';
import { BeatLoader, ClipLoader } from 'react-spinners';
import FixedOverflow from '../../../copmonents/fixed_overflow';
import { useTranslation } from 'react-i18next';


const headers = ['Profil Bilgileri', 'Dil Değiştir', 'Ayarlar', 'Engellenmiş Kullanıcılar', 'Destek Sistemi', 'Influencer']

const User = () => {
    const userRightColumnRef = useRef();
    const [text, setText] = useState(false);
    const [textLoading, setTextLoading] = useState(false);
    const [showOverflow, setShowOverflow] = useState(false);
    const [submitting, sendSubmitting] = useState(false);

    const [title, setTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [questionImage, setQuestionImage] = useState({image:'', imageFile:''});

    const [errors, setErrors] = useState({
        sendTicketError:''
    });

    //CONTEXT
    const {t, _} = useTranslation();

    //HOOKS
    const location = useLocation();
    const currentLocation = location.pathname.split('/').slice(-1).pop();
    
    //Reset error if user change location
    useEffect(() => {
        setErrors({});
    },[location.pathname]);
    
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
                    <UserProfileNavigation />
                    <PremiumBox />
                </div>

                <div className='user-profile-right-col' ref={userRightColumnRef}>

                    <div className='user-right-col-content-wrapper'>
                        <UserProfileHeader />
                        <Outlet context={{ 
                                errors,
                                userRightColumnRef,
                                fetchText,
                                title,
                                setTitle,
                                question, 
                                setQuestion,
                                questionImage,
                                setQuestionImage }} />
                    </div>

                    {
                        <div className='user-profile-buttons' style={{display:(currentLocation === 'blocked-users' || currentLocation === 'old' )? 'none' : 'flex'}}>
                            <BasicButton height={'53px'} width={'110px'} backgroundColor={colors.negativeBlack} borderRadius={'12px'}>
                                İptal Et
                            </BasicButton>
                            <BasicButton onClick={handleSubmit} height={'53px'} width={'170px'} backgroundColor={colors.brand1} borderRadius={'12px'}>
                                {!submitting && <BeatLoader color={colors.backGround3} />}
                                {currentLocation === 'support' ? 'Soruyu Gönder' : 'Değişikleri Kaydet'  }
                            </BasicButton>
                        </div>
                    }
                </div>

            </div>


        </section>
    )

    function handleSubmit(){
        switch (currentLocation) {
            case 'user-profile':
                //Do Some Thing
                break;

            case 'support':
                sendTicket()
        
            default:
                break;
        }
    }



    async function sendTicket() {

        if(!title || !question)
            return setErrors(prev => ({...prev, sendTicketError:'Başlık veya Açıklamayı boş bırakamazsın.'}))
          
        const formData = new FormData();

        formData.append('title', title);
        formData.append('question', question);
        formData.append('deviceId', 'f1ba0831efd56528');

        if(questionImage.imageFile){
            formData.append(`file`, questionImage.imageFile, questionImage.imageFile.name);
        }

        try {
            const response = await axiosAmore.post('/user/v2/support', formData, {useAuth:true});
            console.log(response);
            
        } catch (e){
            const message = e.response.data.response.message
            if(message) return setErrors(prev => ({...prev, sendTicketError:t(`ERRORS.${message}`)}));
        
            setErrors(prev => ({...prev, sendTicketError:t(`ERRORS.UNEXPECTED_ERROR.TITLE`)}));

        }
    }

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
}

export default User
