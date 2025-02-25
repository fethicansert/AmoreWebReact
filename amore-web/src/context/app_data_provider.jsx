import { createContext, useEffect, useState } from "react";
import React from 'react'
import { Outlet } from "react-router-dom";
import { axiosAmore } from "../api/axios";


export const AppDataContext = createContext({});

const AppDataProvider = ({ children }) => {

    const [interests, setInterests] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isdDataLoading, setIsDataLoading] = useState([]);

    console.log(interests);


    useEffect(() => {
        const fetchData = async () => {
            setIsDataLoading(true);
            try {
                const [interestsResponse, countriesResponse] = await Promise.all([
                    axiosAmore.get('api/interest'),
                    axiosAmore.get('api/countries')
                ]);
                if (interestsResponse.status === 200 && countriesResponse.status === 200) {
                    setInterests(interestsResponse.data.data);
                    setLocations(countriesResponse.data.data);
                };
            } catch (e) { console.log(e); }
            finally { setIsDataLoading(false); }
        }
        fetchData();
    }, []);

    return (
        <AppDataContext.Provider value={{ interests, locations, isdDataLoading, getUserInterests }}>
            <Outlet />
        </AppDataContext.Provider>
    );

    function getUserInterests(interestIds) {
        console.log(interestIds);

        return interests.filter(interest => {
            console.log(interest._id);

            return interestIds?.includes(interest._id);
        });
    }


}

export default AppDataProvider
