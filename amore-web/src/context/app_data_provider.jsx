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

    //Fetcth Amore App data
    useEffect(() => { fetchAppData(); }, []);

    //If Language dependecy change set Localization language
    useEffect(() => { i18n.changeLanguage(language); }, [language]);

    return (
        <AppDataContext.Provider value={{ interests, locations, isdDataLoading, getUserInterests, ipLocation, language, setLanguage }}>
            {children}
        </AppDataContext.Provider>
    );

    async function fetchAppData() {
        setIsDataLoading(true);

        // const apiUrls = ['interest', 'countries', 'ips'];
        // const setters = [setInterests, setLocations, setIpLocation];

        // apiUrls.forEach((url, index) => {
        //     axiosAmore.get(`api/${url}`)
        //         .then(response => setters[index](prev => ({...prev,data:response.data.data})))
        //         .catch(e => setters[index](prev => ({...prev,error:e})))
        //         .finally(setters[index](prev => ({...prev,isLoading:false})))
        // });
        const requests = ['interest', 'countries', 'ip', 'data', 'gifts'].map(url => axiosAmore.get(`api/${url}`));

        try {
            const [interestsResponse, countriesResponse, ipResponse] = await Promise.all(requests);

            if (interestsResponse.status === 200 && countriesResponse.status === 200) {
                setInterests(interestsResponse.data.data);
                setLocations(countriesResponse.data.data);
                setIpLocation(ipResponse.data.data);
            };
        } catch (e) { console.log(e); }
        finally { setIsDataLoading(false); }
    }

    //Return user interests
    function getUserInterests(interestIds) {
        return interests.filter(interest => {
            return interestIds?.includes(interest._id);
        });
    }
}

export default AppDataProvider
