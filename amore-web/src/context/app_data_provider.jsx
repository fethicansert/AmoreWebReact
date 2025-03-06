import { createContext, useEffect, useReducer, useState } from "react";
import React from 'react'
import { axiosAmore } from "../api/axios";
import { useLocalStorage } from "../hooks/use_localstorage";
import i18n from "../localization/i18n_localization";
import { appDataReducer } from "../reducers/app_data_reducer";

export const AppDataContext = createContext({});

const AppDataProvider = ({ children }) => {

    //STATES
    const [language, setLanguage] = useLocalStorage('language', navigator.language.slice(0, 2) || 'en');
    const [ipLocation, setIpLocation] = useState({});
    const [isdDataLoading, setIsDataLoading] = useState([]);

    const [interests, setInterests] = useState([]);
    const [locations, setLocations] = useState([]);
    const [gifts, setGifts] = useState([]);
    const [data, setData] = useState({});

    const [appData, dispatch] = useReducer(appDataReducer, {
        interests: [], locations: [], gifts: [], data: {}
    });

    console.log(appData);



    //SIDE-EFFECTS

    //Fetcth Amore App data
    useEffect(() => { fetchAppData(); }, []);

    //If Language dependecy change set Localization language
    useEffect(() => { i18n.changeLanguage(language); }, [language]);

    return (
        <AppDataContext.Provider value={{
            interests,
            locations,
            ipLocation,
            language,
            data,
            gifts,
            getUserInterests,
            setLanguage,
            isdDataLoading,
        }}>
            {children}
        </AppDataContext.Provider>
    );

    async function fetchAppData() {
        setIsDataLoading(true);

        //Create Request Promises in Array
        const requests = ['interest', 'countries', 'ip', 'data', 'gifts'].map(url => axiosAmore.get(`api/${url}`));
        // const requests = ['interest', 'countries', 'data', 'gifts'].map(url => axiosAmore.get(`api/${url}`));

        try {
            //Fecth All Request...
            const appDataResponse = await Promise.all(requests);

            //IF All Response Status 200 => Set Datas
            if (appDataResponse.every(response => response.status === 200)) {
                [setInterests, setLocations, setIpLocation, setData, setGifts].forEach((setter, index) => setter(appDataResponse[index].data.data));

                // console.log(appDataResponse[0].data.data);

                // dispatch({ type: 'interests', payload: appDataResponse[0].data.data })
            }


            //Loop data setters and sent data agording to index

        }

        catch (e) {
            console.log(e);
        }

        finally {
            setIsDataLoading(false);
        }
    }

    //Return user interests
    function getUserInterests(interestIds) {
        return interests ? interests.filter(interest => {
            return interestIds?.includes(interest._id);
        }) : [];
    }
}

export default AppDataProvider


// const apiUrls = ['interest', 'countries', 'ips'];
// const setters = [setInterests, setLocations, setIpLocation];

// apiUrls.forEach((url, index) => {
//     axiosAmore.get(`api/${url}`)
//         .then(response => setters[index](prev => ({...prev,data:response.data.data})))
//         .catch(e => setters[index](prev => ({...prev,error:e})))
//         .finally(setters[index](prev => ({...prev,isLoading:false})))
// });