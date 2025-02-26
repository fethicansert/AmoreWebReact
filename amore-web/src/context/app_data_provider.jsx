import { createContext, useEffect, useState } from "react";
import React from 'react'
import { Outlet } from "react-router-dom";
import { axiosAmore } from "../api/axios";


export const AppDataContext = createContext({});

const AppDataProvider = ({ children }) => {

    const [ipLocation, setIpLocation] = useState({});
    // const [language, setLanguage] = useLocalStorage('language', navigator.language.slice(0, 2) || 'en');
    const [interests, setInterests] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isdDataLoading, setIsDataLoading] = useState([]);

    useEffect(() => {
        fetchAppData();
    }, []);

    return (
        <AppDataContext.Provider value={{ interests, locations, isdDataLoading, getUserInterests }}>
            <Outlet />
        </AppDataContext.Provider>
    );

    function getUserInterests(interestIds) {
        return interests.filter(interest => {
            return interestIds?.includes(interest._id);
        });
    }

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


}

export default AppDataProvider
