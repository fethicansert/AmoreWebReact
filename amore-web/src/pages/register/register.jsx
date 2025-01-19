import React, { useEffect, useRef, useState } from 'react'
import FlexBox from '../../copmonents/flex_box';
import Header from '../../copmonents/header';

import amoreIcon from '../../assets/icons/amore_icon.png';
import '../../css/register/register.css'
import { colors } from '../../utils/theme';
import BasicButton from '../../copmonents/basic_button';

import { ArrowLeftIcon } from '../../assets/svg/svg_package';
import PaddingContainer from '../../copmonents/padding_container';
import RegisterName from './sections/register_name';

import RegisterBirthDate from './sections/register_birth_date';
import RegisterGender from './sections/register_gender';
import RegisterHobbies from './sections/register_hobbies';
import useScroll from '../../hooks/use_scroll';
import RegisterUserPhotos from './sections/register_user_photos';

import { MdOutlineChangeCircle } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import RegisterLocation from './sections/register_location';
import { dummyLocationData } from '../../data/dummy_data';
import { axiosAmore } from '../../api/axios';
import { useTranslation } from 'react-i18next';
import { useIPLocation } from '../../hooks/use_ip_location';
import OtpRegister from './sections/otp_register';
import VerifyOtp from './sections/verify_otp';
import { BeatLoader } from 'react-spinners'
import { createOtp, getFormData, login } from '../../utils/functions';
import Lottie from "lottie-react";
import amoreAnimation from "../../assets/lottie/amore-loading.json";
import { useNavigate } from 'react-router-dom';

const locationData = dummyLocationData;

const startPosition = 16.7;
const NUMBER_REGEX = /^$|^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/;
const registerLocalization = ['phone', 'verify', 'username', 'birthDate', 'gender', 'interests', 'photo', 'location'];

const Register = () => {

    //STATE AND HOOKS
    const { t, i18n } = useTranslation();

    const [phone, setPhone] = useState('905555555555');

    const { ipLocation, language } = useIPLocation();

    const [username, setUsername] = useState('');

    const [gender, setGender] = useState('male');

    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const [userImages, setUserImages] = useState([]);

    const [userLocation, setUserLocation] = useState({});

    const [interest, setInterest] = useState([]);

    const [locations, setLocations] = useState([]);

    const [currentLocation, setCurrentLocation] = useState(ipLocation);

    const [error, setError] = useState('');

    const scroll = useScroll();

    const titles = registerLocalization.map(localization => t(`register.${localization}.title`));

    const infos = registerLocalization.map(localization => t(`register.${localization}.info`))

    const [previewImageIndex, setPreviewImageIndex] = useState(null);

    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const [isDataLoading, setIsDataLoading] = useState(false);

    const [selectedDate, setSelectedDate] = useState();


    const [smsCode, setSmsCode] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: ''
    });

    const otpId = useRef('');

    const [showDatePicker, setShowDatePicker] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setError('');
    }, [language]);

    useEffect(() => {
        setCurrentLocation(ipLocation);
    }, [ipLocation]);

    useEffect(() => {
        scroll({ top: 0 })
    }, [currentPageIndex]);

    useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute('content', colors.backGround2);
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            setIsDataLoading(true);
            try {
                const [interestsResponse, countriesResponse] = await Promise.all([
                    axiosAmore.get('api/interest'),
                    axiosAmore.get('api/countries')
                ]);
                if (interestsResponse.status === 200 && countriesResponse.status === 200) {
                    setInterest(interestsResponse.data.data);
                    setLocations(countriesResponse.data.data);
                };
            } catch (e) { console.log(e); }
            finally {
                setTimeout(() => {
                    setIsDataLoading(false);
                }, 1000)
            }
        }
        fetchData();
    }, []);


    //UI
    return (
        <div className='register' onClick={(e) => {
            const targetClass = typeof e.target.className === 'string' ? e.target.className : e.target.className.baseVal
            if (e.target.parentElement.className === 'register-birth-date'
                || targetClass === 'date-box'
                || targetClass === 'date-box-placeholder'
                || (targetClass.includes('rdp'))
            ) return;
            setShowDatePicker(false);
        }}>
            {
                isDataLoading ? <div style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <Lottie animationData={amoreAnimation} style={{ width: '50%', maxWidth: '300px' }} />
                </div> : <>
                    <Header
                        hasShadow={true}
                        hasBorder={false}
                        backgroundColor={colors.backGround3}
                        title={'Amore'}
                        titleColor={colors.brand1}
                        menuIconColor={colors.brand1}
                        textColor={colors.darkText}
                        icon={amoreIcon}
                        iconWidth={35}
                        languageIconColor={colors.brand1}
                    />

                    <div className='register-wrapper'>
                        <div
                            className='register-container'>
                            {
                                currentPageIndex > 1 && <FlexBox justifyContent={'space-between'} width={'100%'} gap={'0 15px'}>

                                    <div className='register-back-button' onClick={() => navigateBack()}>
                                        <ArrowLeftIcon />
                                    </div>

                                    <FlexBox flex={'1'} gap='0 10px'>
                                        <div className='register-position-wrapper'>
                                            <div style={{ width: `${getPosition()}%` }} className='register-position'></div>
                                        </div>
                                        <span className='position-count'>{currentPageIndex - 1} / 6</span>
                                    </FlexBox>

                                </FlexBox>
                            }


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
                                onClick={() =>
                                    currentPageIndex === 0
                                        ? getOtp() : currentPageIndex === 1
                                            ? verifyOtp() : currentPageIndex !== 7
                                                ? navigateForward({ checkError: true }) : register()}
                                width={'100%'}
                                height={'clamp(50px, 10vw, 54px)'}
                                backgroundColor={colors.brand1}
                                color={colors.whiteText}
                                borderRadius={'12px'}>
                                {isLoading
                                    ? <BeatLoader size={8} color='white' />
                                    : t(`${currentPageIndex === 0
                                        ? 'register.sendButton'
                                        : currentPageIndex === 1 ? 'register.verifyButton' :
                                            currentPageIndex !== 7
                                                ? 'register.continueButton'
                                                : 'register.completeButton'}`)}
                            </BasicButton>
                        </div>

                    </div>

                    {
                        previewImageIndex !== null && <div className='resgister-user-image-preview'>
                            <img src={userImages[previewImageIndex]} onClick={() => setPreviewImageIndex(null)} />
                            <FlexBox margin={'.4rem 0 0 0'} width={'100%'} gap='0 7px'>

                                <BasicButton
                                    onClick={() => handleDeleteImage(previewImageIndex)}
                                    fontSize={'12px'}
                                    color={colors.whiteText}
                                    height={'40px'} width={'50%'}
                                    backgroundColor={colors.brand1}
                                    borderRadius={4}>
                                    <CgCloseO className='register-preview-button-icon' size={20} />
                                    Kaldır
                                </BasicButton>

                                <BasicButton
                                    fontSize={'13px'}
                                    color={colors.whiteText}
                                    height={'40px'}
                                    width={'50%'}
                                    backgroundColor={colors.brand2}
                                    borderRadius={4}>
                                    <MdOutlineChangeCircle className='register-preview-button-icon' size={21} />
                                    Değiştir
                                    <input
                                        className='input-file'
                                        type='file'
                                        accept="image/*"
                                        onChange={(e) => handleImageUpdate(e, previewImageIndex)} />
                                </BasicButton>
                            </FlexBox>
                        </div>
                    }

                    <div className={`overlay ${previewImageIndex !== null ? 'active' : null}`}>
                    </div>
                </>
            }

        </div >
    )

    //FUNCTIONS



    async function handleLogin() {
        const request = await login({
            phone: `+${phone}`,
            otpId: otpId.current,
            otpCode: `${smsCode.digit1 + smsCode.digit2 + smsCode.digit3 + smsCode.digit4}`,
            onStart: () => setIsLoading(true),
            onFinally: () => setIsLoading(false),
        });

        console.log(request);


        return request;
    };


    async function verifyOtp() {
        if (validateInputs()) return;

        setIsLoading(true);
        const body = {
            id: otpId.current,
            smsCode: `${smsCode.digit1 + smsCode.digit2 + smsCode.digit3 + smsCode.digit4}`
        };

        try {
            const response = await axiosAmore.post('/otp/verify', body);
            //Eger code yanlış olsada response status 200 döndüğünden 
            //Data içerisine girip ayrıca bir status almak gerekiyor !
            const status = response.data.data.status;
            if (status === true) {
                const loginReq = await handleLogin();
                if (loginReq.status == 200) navigate('user');
                else navigateForward({ checkError: false });
            }
            else if (status === false) setError("Code is Wrong !");

        } catch (e) {
            const responsMessage = e?.response?.data?.response?.message;
            if (responsMessage === 'OTP_ALREADY_VERIFIED')
                setError('Code already used !');
            else
                setError('Something went wrong !');
        } finally {
            setIsLoading(false);
        }
    }

    async function getOtp() {

        if (validateInputs()) return;

        const request = await createOtp({
            phone: `+${phone}`,
            onStart: () => setIsLoading(true),
            onFinally: () => setIsLoading(false)
        });

        if (request?.status === 200) {

            otpId.current = request.otpId;

            navigateForward({ checkError: false });

        } else if (request.errorMessage) {

            if (request.errorMessage === 'PHONE_NUMBER_INVALID')
                setError(t('register.phone.invalidPhoneError'));

            else if (request.errorMessage === 'OTP_WAIT_FOR_NEW_CODE')
                setError(t(`register.phone.waitNewCodeError`, { otpCooldown: request?.cooldown }));

            else if (request.errorMessage === 'ERR_NETWORK')
                setError("Please Check Your Network !");

        } else {
            setError('Something went wrong !');
        }
    };


    async function register() {
        // if (validateInputs()) return;

        const otpCode = `${smsCode.digit1 + smsCode.digit2 + smsCode.digit3 + smsCode.digit4}`;
        const birthday = new Date(selectedDate);
        const deviveType = "web";

        const body = {
            otpId: otpId.current,
            otpCode: otpCode,
            name: username,
            phone: `+${phone}`,
            isoCode: userLocation.countryCode,
            country: userLocation.countryId,
            city: userLocation.stateId,
            birthday: birthday,
            deviceType: deviveType,
            language: language,
            interests: selectedHobbies,
            gender: gender,
            files: userImages,
        };

        console.log(body);

        const formData = getFormData(body);
        console.log(formData);


        try {
            const response = await axiosAmore.post('user/register', formData);
            console.log(response);

        } catch (e) {
            console.log(e);
        }

    }

    //Chanhes register section accoring to currentPageIndex
    function getCurrentSection() {
        switch (currentPageIndex) {
            case 0:

                return <OtpRegister
                    phone={phone}
                    setPhone={setPhone}
                />
            case 1:
                return <VerifyOtp
                    phone={phone}
                    smsCode={smsCode}
                    setSmsCode={setSmsCode}
                />
            case 2:
                return <RegisterName
                    username={username}
                    setUsername={setUsername}
                />
            case 3:
                return <RegisterBirthDate
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    showDatePicker={showDatePicker}
                    setShowDatePicker={setShowDatePicker} />;
            case 4:
                return <RegisterGender
                    gender={gender}
                    setGender={setGender} />;
            case 5:
                return <RegisterHobbies
                    interests={interest}
                    selectedHobbies={selectedHobbies}
                    setSelectedHobbies={setSelectedHobbies} />;
            case 6:
                return <RegisterUserPhotos
                    userImages={userImages}
                    handleImageChange={handleImageChange}
                    handleImageUpdate={handleImageUpdate}
                    setPreviewImageIndex={setPreviewImageIndex} />;
            case 7:
                return <RegisterLocation
                    currentLocation={currentLocation}
                    setCurrentLocation={setCurrentLocation}
                    locations={locations}
                    userLocation={userLocation}
                    setUserLocation={setUserLocation}
                    locationData={locationData} />;
        }
    }

    //Update already uploaded user image-photo section
    function handleImageUpdate(e, index) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = function () {
                const updatedImages = userImages.map(function (image, i) {
                    if (index === i) {
                        image = reader.result;
                    }
                    return image;
                });
                setUserImages(updatedImages);
            };
            reader.readAsDataURL(file);
        }

        setPreviewImageIndex(null);
    }

    //Delete uploaded image
    function handleDeleteImage(index) {
        const updateImages = userImages.filter(function (img, idx) {
            if (idx === previewImageIndex) {
                return undefined;
            }
            return img;
        });

        setUserImages(updateImages);
        setPreviewImageIndex(null);
    }

    //Work when user upload image reads file-image and setStates
    function handleImageChange(e, index) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = function () {
                setUserImages(function (prev) {
                    return [...prev, reader.result];
                });
            };
            reader.readAsDataURL(file);
        }
    }

    //Register steps bar upgrading or downgrading
    function getPosition() {
        let calculatedPosition = startPosition * (currentPageIndex - 1);
        if (calculatedPosition > 100) calculatedPosition = 100;
        return calculatedPosition;
    }

    //navigates next register section
    function navigateForward({ checkError = true }) {
        if (checkError && validateInputs()) return;
        if (currentPageIndex === 7) return;
        setCurrentPageIndex(currentPageIndex + 1);
        setError('');
    }

    //navigates last register section
    function navigateBack() {
        if (currentPageIndex === 0 || currentPageIndex === 2) return;
        setCurrentPageIndex(currentPageIndex - 1);
        setError('');
    }

    //validates inputs
    function validateInputs() {
        switch (currentPageIndex) {
            case 0: return validatePhone();
            case 1: return validateOtp();
            case 2: return validateUsername();
            case 3: return validateBirthDate();
            case 5: return validateHobbies();
            case 6: return validateUserImages();
            case 7: return validatUserLocation();
            default: return false;
        }
    }

    function validateOtp() {
        if (!smsCode.digit1 || !smsCode.digit2 || !smsCode.digit3 || !smsCode.digit4) {
            setError(t('register.verify.errorText'));
            return true;
        }
        return false;
    }

    function validatePhone() {
        if (!phone) {
            setError(t('register.phone.errorText'));
            return true;
        }
        return false;
    }

    //Validates Username
    function validateUsername() {
        if (!username) {
            setError(t('register.username.errorText'));
            return true;
        }
        if (username.length < 3) {
            setError(t('register.username.subErrorText'));
            return true;
        }
        return false;
    }

    //Validates Birth Date
    function validateBirthDate() {
        if (!selectedDate) {
            setError(t('register.birthDate.errorText'));
            return true;
        }
        return false;
    }

    //Validates Hobbies
    function validateHobbies() {
        if (selectedHobbies.length < 3) {
            setError(t('register.interests.errorText'));
            return true;
        }
        return false;
    }

    //Valides User Images
    function validateUserImages() {
        if (userImages.every(function (img) { return img === null; })) {
            setError(t('register.photo.errorText'));
            return true;
        }
        return false;
    }

    //Validates Location
    function validatUserLocation() {
        if (!userLocation?.stateId || !userLocation?.countryId) {
            setError(t('register.location.errorText'));
            return true;
        }
        return false;
    };
}


export default Register;


