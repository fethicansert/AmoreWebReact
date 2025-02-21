import React, { createContext, useState, useContext, useEffect } from 'react';
import { axiosAmore } from '../api/axios';
import i18n from '../localization/i18n_localization';

export const IPLocationContext = createContext();

export const IPLocationProvider = ({ children }) => {
    const [ipLocation, setIpLocation] = useState({});
    const [language, setLanguage] = useState(navigator.language.slice(0, 2));

    //language
    useEffect(() => { i18n.changeLanguage('tr'); }, [language]);

    useEffect(() => {
        const getIPLocation = async () => {
            try {
                const response = await axiosAmore.get('api/ip');
                setIpLocation(response.data.data);
            } catch (e) {
                console.log(e);
            }
        };
        getIPLocation();
    }, []);

    return (
        <IPLocationContext.Provider value={{ ipLocation, language, setLanguage }}>
            {children}
        </IPLocationContext.Provider>
    )
}