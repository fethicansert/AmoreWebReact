import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useMediaPredicate } from "react-media-hook";
import FlexBox from '../../copmonents/flex_box';
import Header from '../../copmonents/header';

import amoreIcon from '../../assets/icons/amore_icon.png';
import '../../css/register/register.css'
import { colors } from '../../theme/theme';
import BasicButton from '../../copmonents/basic_button';

import { ArrowLeftIcon } from '../../assets/svg/svg_package';
import PaddingContainer from '../../copmonents/padding_container';
import RegisterName from './sections/register_name';

import RegisterBirthDate from './sections/register_birth_date';
import RegisterGender from './sections/register_gender';
import RegisterHobbies from './sections/register_hobbies';
import useScroll from '../../hooks/use_scroll';
import RegisterUserPhotos from './sections/register_user_photos';




const titles = ['İsmin ne ?', 'Doğum tarihin ne?', 'Cinsiyetiniz Nedir?', 'İlgi Alanlarınız Nedir?', 'Fotoğraf Yükle', 'Nerde Yaşıyorsun?'];
const infos = [
    'Takma adın gerçekten harika olabilir, ancak seni doğru şekilde tanımlayabilmemiz için gerçek adına ihtiyacımız var.',
    'Doğum tarihinizi öğrenmemiz gerekiyor',
    'Bu bilgileri daha sonra dilediğiniz zaman güncelleyebilirsiniz.',
    '',
    '',
    'Bulunduğunuz ülke ve şehri seçerek size en uygun deneyimi sunmamıza yardımcı olun.'];

const startPosition = 16.7;
const DAY_REGEX = /(0[1-9]|[12]\d|3[01])/;
const NUMBER_REGEX = /^$|^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;


const Register = () => {

    const [username, setUsername] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('male');
    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const [showPreviewImage, setShowPreviewImage] = useState(false);

    /////


    const [currentPageIndex, setCurrentPageIndex] = useState(4);

    const [error, setError] = useState('');

    const scroll = useScroll();


    const [userImages, setUserImages] = useState([]);


    useEffect(() => {
        scroll({ top: 0 })
    }, [currentPageIndex])

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.backGround2);
    }, []);


    // userImages.forEach((e, index) => console.log(e));



    const handleImageChange = async (e, index) => {


        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {


                setUserImages(prev => [...prev, reader.result]);
            }
            reader.readAsDataURL(file);
        }
    }

    const getPosition = () => {
        let calculatedPosition = startPosition * (currentPageIndex + 1);
        if (calculatedPosition > 100) calculatedPosition = 100;
        return calculatedPosition;
    };

    const navigateForward = () => {
        if (checkError()) return;
        if (currentPageIndex === 5) return;
        setCurrentPageIndex(currentPageIndex + 1);
        setError('');
    };



    const checkError = () => {
        let error = false;
        if (currentPageIndex === 0) {
            if (!username) {
                setError('Devam etmek için ismini yazmalısın !');
                error = true;
            } else if (username.length < 3) {
                setError('İsmin en az üç harf içermelidir !');
                error = true;
            }
        } else if (currentPageIndex === 1) {
            if (!day || !month || !year) {
                setError('Lütfen boşluklara doğum tarihini gir !');
                error = true;
            } else if (!NUMBER_REGEX.test(day + month + year)) {
                setError('Lütfen geçerli bir tarih gir !');
                error = true;
            }
        } else if (currentPageIndex === 3) {
            if (selectedHobbies.length < 3) {
                setError('En az üç hobi seçmelisin !');
                error = true;
            }
        }

        return error;
    }

    const getCurrentSection = () => {
        switch (currentPageIndex) {
            case 0:
                return <RegisterName
                    username={username}
                    setUsername={setUsername} />
            case 1:
                return <RegisterBirthDate
                    day={day}
                    setDay={setDay}
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear} />
            case 2:
                return <RegisterGender
                    gender={gender}
                    setGender={setGender} />
            case 3:
                return <RegisterHobbies
                    selectedHobbies={selectedHobbies}
                    setSelectedHobbies={setSelectedHobbies} />
            case 4:
                return <RegisterUserPhotos
                    userImages={userImages}
                    handleImageChange={handleImageChange}
                    setShowPreviewImage={setShowPreviewImage} />
            case 5:
                return <p>Hello 6</p>

            default:
                return <p>Hello 1</p>
        }
    }

    return (
        <div className='register'>
            <Header
                hasShadow={true}
                hasBorder={false}
                backgroundColor={colors.backGround3}
                title={'Amore'}
                titleColor={colors.brand1}
                menuIconColor={colors.brand1}
                textColor={colors.darkText}
                icon={amoreIcon}
                iconWidth={35} />


            <div className='register-wrapper'>
                <div
                    className='register-container'>
                    <FlexBox justifyContent={'space-between'} width={'100%'} gap={'0 15px'}>
                        <div className='register-back-button' onClick={() => navigateBack()}>
                            <ArrowLeftIcon />
                        </div>
                        <FlexBox flex={'1'} gap='0 10px'>
                            <div className='register-position-wrapper'>
                                <div style={{ width: `${getPosition()}%` }} className='register-position'></div>
                            </div>
                            <span className='position-count'>6 / {currentPageIndex + 1}</span>
                        </FlexBox>
                    </FlexBox>



                    <h2 style={{ alignSelf: (currentPageIndex === 3 || currentPageIndex === 4) ? 'center' : 'flex-start' }}>{titles[currentPageIndex]}</h2>

                    <PaddingContainer top='10px' bottom='10px'>
                        {getCurrentSection()}
                    </PaddingContainer>

                    {
                        infos[currentPageIndex] && <p className='register-info-text'>
                            {infos[currentPageIndex]}
                        </p>
                    }

                    {error && <span className='register-error-text'>{error}</span>}

                    <BasicButton
                        type='submit'
                        fontSize={'.85rem'}
                        onClick={() => navigateForward()}
                        width={'100%'}
                        height={'clamp(50px, 10vw, 54px)'}
                        backgroundColor={colors.brand1}
                        color={colors.whiteText}
                        borderRadius={'12px'}>
                        Devam Et
                    </BasicButton>
                </div>
            </div>


            {showPreviewImage && <div className='resgister-user-image-preview' onClick={() => setShowPreviewImage(prev => !prev)}>
                <img src={userImages[0]} />
            </div>}
        </div>
    )


    function navigateBack() {
        if (currentPageIndex === 0) return;
        setCurrentPageIndex(currentPageIndex - 1);
        setError('');
    };
}



export default Register


