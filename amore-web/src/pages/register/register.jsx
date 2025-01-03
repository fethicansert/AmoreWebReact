import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import FlexBox from '../../copmonents/flex_box';
import Header from '../../copmonents/header';

import amoreIcon from '../../assets/icons/amore_icon.png';
import '../../css/register/register.css'
import colors from '../../theme/colors';
import BasicButton from '../../copmonents/basic_button';

import { ArrowLeftIcon } from '../../assets/svg/svg_package';
import PaddingContainer from '../../copmonents/padding_container';
import RegisterName from './register_name';

import { useMediaPredicate } from "react-media-hook";
import RegisterBirthDate from './register_birth_date';
import RegisterGender from './register_gender';

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
const Register = () => {

    const [username, setUsername] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [error, setError] = useState('');
    const centerContainer = useMediaPredicate("(min-width: 550px)");


    const getPosition = () => {
        let calculatedPosition = startPosition * (currentPageIndex + 1);
        if (calculatedPosition > 100) calculatedPosition = 100;
        return calculatedPosition;
    }

    const navigateForward = () => {
        if (checkError()) return;

        if (currentPageIndex === 5) return;
        setCurrentPageIndex(currentPageIndex + 1);
        setError('');
    }

    const navigateBack = () => {
        if (currentPageIndex === 0) return;
        setCurrentPageIndex(currentPageIndex - 1);
    }

    const checkError = () => {
        let error = false;
        if (currentPageIndex === 0) {
            if (!username) {
                setError('Lütfen isiminizi yazınız');
                error = true;
            } else if (username.length < 3) {
                setError('İsminiz en az üç harf içermelidir');
                error = true;
            }
        } else if (currentPageIndex === 1) {
            if (!day || !month || !year) {
                setError('Lütfen doğum tarihinizi giriniz');
                error = true;
            }
        }

        return error;
    }


    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF');
    }, [])



    const getCurrentSection = () => {
        switch (currentPageIndex) {
            case 0:
                return <RegisterName username={username} setUsername={setUsername} />
            case 1:
                return <RegisterBirthDate
                    day={day}
                    setDay={setDay}
                    month={month}
                    setMonth={setMonth}
                    year={year}
                    setYear={setYear} />
            case 2:
                return <RegisterGender />
            case 3:
                return <p>Hello 4</p>
            case 4:
                return <p>Hello 5</p>
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
                backgroundColor={colors.backGround3}
                title={'Amore'}
                titleColor={colors.brand1}
                menuIconColor={colors.brand1}
                textColor={colors.darkText}
                icon={amoreIcon}
                iconWidth={35} />


            <div className='register-wrapper'>
                <div
                    className='register-container'
                    style={{
                        transform: centerContainer ? 'translate(-50%,-50%)' : 'translateX(-50%)',
                        top: centerContainer ? '50%' : '10%'
                    }}>
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

                    <h3>{titles[currentPageIndex]}</h3>

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
        </div>
    )
}

export default Register


