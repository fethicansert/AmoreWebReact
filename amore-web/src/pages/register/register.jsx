import React, { useEffect, useRef, useState } from 'react'
import FlexBox from '../../copmonents/flex_box';
import Header from '../../copmonents/header';
import amoreIcon from '../../assets/icons/amore_icon.png';
import { colors } from '../../utils/theme';
import BasicButton from '../../copmonents/basic_button';
import { ArrowLeftIcon } from '../../assets/svg/svg_package';
import PaddingContainer from '../../copmonents/padding_container';
import RegisterName from './sections/register_name';
import RegisterBirthDate from './sections/register_birth_date';
import RegisterGender from './sections/register_gender';
import RegisterHobbies from './sections/register_hobbies';
import RegisterUserPhotos from './sections/register_user_photos';
import RegisterLocation from './sections/register_location';
import { axiosAmore } from '../../api/axios';
import { useTranslation } from 'react-i18next';
import { useIPLocation } from '../../hooks/use_ip_location';
import OtpRegister from './sections/otp_register';
import VerifyOtp from './sections/verify_otp';
import { BeatLoader } from 'react-spinners'
import { createOtp, objectToFormData, login, isAdult, scrollPage, changeRootThemeColor } from '../../utils/functions';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use_auth';
import AmoreLoading from '../../copmonents/amore_loading';
import '../../css/register/register.css';

const startPosition = 16.7;
const registerLocalization = ['PHONE', 'VERIFY', 'USERNAME', 'BIRTH_DATE', 'GENDER', 'INTERESTS', 'PHOTO', 'LOCATION'];

const Register = () => {

    //CONTEXT
    const { ipLocation, language } = useIPLocation();
    const { t, i18n } = useTranslation();
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    //STATES
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [phone, setPhone] = useState('905555555552');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('male');
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    const [interest, setInterest] = useState([]);
    const [userImages, setUserImages] = useState([]);
    const [userLocation, setUserLocation] = useState({});
    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(ipLocation);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [smsCode, setSmsCode] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: ''
    });

    //CONSTANTS
    const titles = registerLocalization.map(localization => t(`REGISTER.${localization}.TITLE`));
    const infos = registerLocalization.map(localization => t(`REGISTER.${localization}.INFO`));

    //RESFS
    const otpId = useRef('');

    //EFFECTS
    useEffect(() => { setError(''); }, [language]);

    useEffect(() => { setCurrentLocation(ipLocation); }, [ipLocation]);

    useEffect(() => { scrollPage({ top: 0 }) }, [currentPageIndex]);

    useEffect(() => changeRootThemeColor(colors.backGround2), []);

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
            finally { setIsDataLoading(false); }
        }

        fetchData();

    }, []);

    //UI <Lottie animationData={amoreAnimation} style={{ width: '50%', maxWidth: '300px' }} />
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
                isDataLoading ? <AmoreLoading
                    containerWidth={'100vw'}
                    containerHeight={'100vh'}
                    amoreWidth={'50%'}
                    amoreMaxWidth={'300px'}
                />
                    : <>
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
                                            ? 'REGISTER.SEND_BUTTON'
                                            : currentPageIndex === 1 ? 'REGISTER.VERIFY_BUTTON' :
                                                currentPageIndex !== 7
                                                    ? 'REGISTER.CONTINUE_BUTTON'
                                                    : 'REGISTER.COMPLETE_BUTTON'}`)}
                                </BasicButton>
                            </div>

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
            const status = response.data.data.status;

            if (status === true) {
                const loginReq = await handleLogin();
                console.log(loginReq);

                if (loginReq.status == 200) {
                    navigate('/dashboard/user-home');
                    console.log(loginReq.data);

                    setAuth({ ...loginReq.data });
                    setAuth(prev => ({ ...prev, premiumSubscription: false }))
                }
                else navigateForward({ checkError: false });
            }
            else if (status === false)
                setError("Code is Wrong !");

        } catch (e) {
            console.log(e);

            const responsMessage = e?.response?.data?.response?.message;
            if (responsMessage === 'OTP_ALREADY_VERIFIED')
                setError('Code already used !');
            else if (responsMessage === 'OTP_TIMEOUT')
                setError('Suresi gecti kazin !');
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
                setError(t('REGISTER.PHONE.INVALID_PHONE_ERROR'));

            else if (request.errorMessage === 'OTP_WAIT_FOR_NEW_CODE')
                setError(t(`REGISTER.PHONE.WAIT_NEW_CODE_ERROR`, { otpCooldown: request?.cooldown }));

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

        const formDataObject = new FormData();

        formDataObject.append('otpId', otpId.current);
        formDataObject.append('otpCode', otpCode);
        formDataObject.append('name', username);
        formDataObject.append('phone', `+${phone}`);
        formDataObject.append('isoCode', userLocation.countryCode);
        formDataObject.append('country', userLocation.countryId);
        formDataObject.append('city', userLocation.stateId);
        formDataObject.append('birthday', birthday);
        formDataObject.append('deviceType', deviveType);
        formDataObject.append('language', language);
        formDataObject.append('gender', gender);

        // 'interests' dizisini ekleme
        selectedHobbies.forEach((hobby, index) => {
            formDataObject.append(`interests[${index}]`, hobby);
        });

        // 'files' dizisini ekleme
        userImages.forEach((file, index) => {
            formDataObject.append(`files`, file);
        });

        const formData = objectToFormData(body);


        try {
            const response = await axiosAuth.post('user/register', formDataObject);
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
                    handleDeleteImage={handleDeleteImage}
                    userImages={userImages}
                    handleImageChange={handleImageChange} />;
            case 7:
                return <RegisterLocation
                    currentLocation={currentLocation}
                    setCurrentLocation={setCurrentLocation}
                    locations={locations}
                    userLocation={userLocation}
                    setUserLocation={setUserLocation}
                />;
        }
    }

    //Delete uploaded image
    function handleDeleteImage(index) {
        const updateImages = userImages.filter(function (img, id) {
            if (id === index) {
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
            setError(t('REGISTER.VERIFY.ERROR_TEXT'));
            return true;
        }
        return false;
    }

    function validatePhone() {
        if (!phone) {
            setError(t('REGISTER.PHONE.ERROR_TEXT'));
            return true;
        }
        return false;
    }

    //Validates Username
    function validateUsername() {
        if (!username) {
            setError(t('REGISTER.USERNAME.ERROR_TEXT'));
            return true;
        }
        if (username.length < 3) {
            setError(t('REGISTER.USERNAME.SUB_ERROR_TEXT'));
            return true;
        }
        return false;
    }

    //Validates Birth Date
    function validateBirthDate() {
        if (!selectedDate) {
            setError(t('REGISTER.BIRTH_DATE.ERROR_TEXT'));
            return true;
        }

        else if (!isAdult(new Date(selectedDate))) {
            setError(t('TOO_YOUNG'));
            return true;
        }

        return false;
    }

    //Validates Hobbies
    function validateHobbies() {
        if (selectedHobbies.length < 3) {
            setError(t('REGISTER.INTERESTS.ERROR_TEXT'));
            return true;
        }
        return false;
    }

    //Valides User Images
    function validateUserImages() {
        if (userImages.every(function (img) { return img === null; })) {
            setError(t('REGISTER.PHOTO.ERROR_TEXT'));
            return true;
        }
        return false;
    }

    //Validates Location
    function validatUserLocation() {
        if (!userLocation?.stateId || !userLocation?.countryId) {
            setError(t('REGISTER.LOCATION.ERROR_TEXT'));
            return true;
        }
        return false;
    };
}


export default Register;


