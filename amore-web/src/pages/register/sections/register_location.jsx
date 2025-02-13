import React, { useState } from 'react'
import { ArrowDownIcon, LocationIcon } from '../../../assets/svg/svg_package';
import Flag from 'react-flagkit';
import FlexBox from '../../../copmonents/flex_box';
import { colors } from '../../../utils/theme';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const RegisterLocation = ({ userLocation, setUserLocation, locations, currentLocation, setCurrentLocation }) => {


    const [showCountry, setShowCountry] = useState(false);

    const [isCountyDrpActive, setIsCountyDropActive] = useState(false);

    const [showCity, setShowCity] = useState(false);

    const { t, i18n } = useTranslation();

    const states = currentLocation?.country?.states || currentLocation?.states || [];

    console.log(locations[1]);


    const handleSetCountry = (index) => {
        setCurrentLocation(locations[index])
        setUserLocation(prev => ({
            ...prev,
            country: locations[index]?.name,
            countryId: locations[index]?.id,
            countryCode: locations[index]?.countryCode,
            state: '',
            stateId: ''
        }));
    };

    return (
        <div className='register-location'>
            <div
                className={`register-input-wrapper register-location-dropdown ${showCountry ? 'active' : null}`}
                onClick={() => {
                    setShowCountry(!showCountry);
                    setShowCity(false);
                }}>
                <FlexBox gap='0 10px'>

                    <Flag country={currentLocation?.country?.countryCode || currentLocation?.countryCode || locations[1]?.countryCode} />
                    <span>{currentLocation?.country?.name || currentLocation?.name || locations[1]?.name}</span>

                </FlexBox>

                <ArrowDownIcon width='19' height='19' />

                <div className={`register-location-dropdown-list ${showCountry ? 'active' : null}`}>

                    {locations.map((location, index) => <FlexBox
                        onClick={() => handleSetCountry(index)}
                        key={uuidv4()}
                        className='register-location-item'
                        gap='0 10px'
                        width={'100%'}>
                        <Flag country={location?.countryCode} />
                        {location?.name}
                    </FlexBox>)}

                </div>

            </div>

            <div className={`register-input-wrapper register-location-dropdown ${showCity ? 'active' : null}`}
                onClick={() => {
                    setShowCity(!showCity);
                    setShowCountry(false);
                }} >

                {!userLocation.city && <FlexBox gap='0 10px'>
                    <LocationIcon width='24' height='24' color={colors.darkText} />
                    <span
                        style={{ color: `${!userLocation.state ? colors.fadedText : colors.darkText}` }}>
                        {userLocation.state || currentLocation?.city?.name || t('REGISTER.LOCATION.STATE_PLACEHOLDER')}
                    </span>
                </FlexBox>}


                <ArrowDownIcon width='19' height='19' />

                <div className={`register-location-dropdown-list ${showCity ? 'active' : null}`}>
                    {states.map(state => <FlexBox
                        onClick={() => setUserLocation(prev => ({ ...prev, state: state.name, stateId: state.id }))}
                        key={uuidv4()}
                        className='register-location-item'
                        gap='0 10px'
                        width={'100%'}>
                        {state.name}
                    </FlexBox>)}
                </div>
            </div>


        </div>
    );
}

export default RegisterLocation
