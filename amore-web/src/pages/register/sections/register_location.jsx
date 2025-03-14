import React, { useEffect, useState } from 'react'
import { ArrowDownIcon, LocationIcon } from '../../../assets/svg/svg_package';
import Flag from 'react-flagkit';
import FlexBox from '../../../copmonents/flex_box';
import { colors } from '../../../utils/theme';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { useAppData } from '../../../hooks/use_add_data';

const RegisterLocation = ({ setUserLocation, locations }) => {

    //STATE
    const [showCountry, setShowCountry] = useState(false);
    const [currentLocation, setCurrentLocation] = useState({ country: locations[0].name, countryCode: locations[0].countryCode, states: locations[0].states, state: locations[0].states[0].name });
    const [showCity, setShowCity] = useState(false);

    //CONTEXT
    const { appData } = useAppData();
    const { t, _ } = useTranslation();

    //SIDE-EFFECTS
    useEffect(() => {

        //GET IP SET IP DATA IF !IP => SET LOCATIONS DATA
        const ip = appData?.ip;

        setCurrentLocation({
            country: ip ? ip.country.name : locations[0].name,
            countryCode: ip ? ip.country.countryCode : locations[0].countryCode,
            states: ip ? ip.country.states : locations[0].states,
            state: ip ? ip.city.name : locations[0].states[0].name,
        });

        setUserLocation({
            country: ip ? ip.country.name : locations[0].name,
            countryId: ip ? ip.country.id : locations[0].id,
            countryCode: ip ? ip.country.countryCode : locations[0].countryCode,
            state: ip ? ip.city.name : locations[0].states[0].name,
            stateId: ip ? ip.city.id.toString() : locations[0].states[0].id
        });

    }, [appData]);

    //UI
    return (
        <div className='register-location'>

            {/* COUNTRY DROP DOWN */}
            <div className={`register-input-wrapper register-location-dropdown ${showCountry ? 'active' : null}`} onClick={showCountryList}>

                {/* //SELECTED COUNTRY */}
                <FlexBox gap='0 10px'>
                    <Flag country={currentLocation?.countryCode} />
                    <span>{currentLocation?.country}</span>
                </FlexBox>

                <ArrowDownIcon width='19' height='19' />

                <div className={`register-location-dropdown-list ${showCountry ? 'active' : null}`}>
                    {/* //COUNTRY LIST */}
                    {locations.map((location, index) => <FlexBox
                        onClick={() => handleCountry(index)}
                        key={uuidv4()}
                        className='register-location-item'
                        gap='0 10px'
                        width={'100%'}>
                        <Flag country={location?.countryCode} />
                        {location?.name}
                    </FlexBox>)}
                </div>

            </div>

            {/* STATES DROP DOWN */}
            <div className={`register-input-wrapper register-location-dropdown ${showCity ? 'active' : null}`} onClick={showStateList} >

                {/* //SELECTED STATE */}
                {<FlexBox gap='0 10px'>
                    <LocationIcon width='24' height='24' color={colors.darkText} />
                    <span style={{ color: colors.darkText }}>
                        {currentLocation?.state || "Şehir Bulunmuyor"}
                    </span>
                </FlexBox>}

                <ArrowDownIcon width='19' height='19' />

                <div className={`register-location-dropdown-list ${showCity ? 'active' : null}`}>
                    {/* //STATES LIST */}
                    {currentLocation.states.map((state, index) => <FlexBox
                        onClick={() => handleState(index)}
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

    //FUNCTIONS
    function showCountryList() {
        setShowCountry(!showCountry);
        setShowCity(false);
    }

    function showStateList() {
        if (currentLocation.states.length === 0) return;
        setShowCity(!showCity);
        setShowCountry(false);
    }

    function handleCountry(index) {

        setCurrentLocation({
            country: locations[index].name,
            countryCode: locations[index].countryCode,
            states: locations[index].states,
            state: locations[index]?.states?.[0]?.name || '',
        });

        setUserLocation(prev => ({
            ...prev,
            country: locations[index]?.name,
            countryId: locations[index]?.id,
            countryCode: locations[index]?.countryCode,
            state: locations[index]?.states?.[0]?.name || '',
            stateId: locations[index]?.states?.[0]?.id || ''
        }));
    };

    function handleState(index) {

        setCurrentLocation((prev) => ({
            ...prev,
            state: currentLocation.states[index].name
        }));

        setUserLocation(prev => ({
            ...prev,
            state: currentLocation.states[index].name,
            stateId: currentLocation.states[index].id
        }));
    };
}

export default RegisterLocation
