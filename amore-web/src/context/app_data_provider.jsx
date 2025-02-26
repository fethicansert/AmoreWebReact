import { createContext, useEffect, useState } from "react";
import React from 'react'
import { axiosAmore } from "../api/axios";
import { useLocalStorage } from "../hooks/use_localstorage";
import i18n from "../localization/i18n_localization";


export const AppDataContext = createContext({});

const AppDataProvider = ({ children }) => {

    //STATES
    const [ipLocation, setIpLocation] = useState({});
    const [language, setLanguage] = useLocalStorage('language', navigator.language.slice(0, 2) || 'en');
    const [interests, setInterests] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isdDataLoading, setIsDataLoading] = useState([]);

    //SIDE-EFFECTS

    //Fetcth AppData
    useEffect(() => { fetchAppData(); }, []);

    //Language
    useEffect(() => { i18n.changeLanguage(language); }, [language]);

    return (
        <AppDataContext.Provider value={{ interests, locations, isdDataLoading, getUserInterests, ipLocation, language, setLanguage }}>
            {children}
        </AppDataContext.Provider>
    );

    async function fetchAppData() {
        setIsDataLoading(true);
        try {
            const [interestsResponse, countriesResponse, ipResponse] = await Promise.all([
                axiosAmore.get('api/interest'),
                axiosAmore.get('api/countries'),
                axiosAmore.get('api/ip')
            ]);
            if (interestsResponse.status === 200 && countriesResponse.status === 200) {
                setInterests(interestsResponse.data.data);
                setLocations(countriesResponse.data.data);
                setIpLocation(ipResponse.data.data);
            };
        } catch (e) { console.log(e); }
        finally { setIsDataLoading(false); }
    }

    function getUserInterests(interestIds) {
        return interests.filter(interest => {
            return interestIds?.includes(interest._id);
        });
    }


}

export default AppDataProvider
