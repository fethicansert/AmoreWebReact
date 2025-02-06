import React, { createContext, useEffect, useState } from 'react'
import { axiosAuth } from '../api/axios';
import { useAuth } from '../hooks/use_auth';


export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {

    const [likes, setLikes] = useState([]);
    const [isLikesLoading, setIsLikesLoading] = useState(false);
    const [visits, setVisits] = useState([]);
    const [isVisitsLoading, setIsVisitsLoading] = useState();

    const { auth } = useAuth();

    useEffect(() => {
        if (auth) {
            getLikes();
            getVisits();
        };
    }, []);

    return (
        <NotificationContext.Provider value={{ likes, isLikesLoading, visits, isVisitsLoading, }}>
            {children}
        </NotificationContext.Provider>
    )

    async function getLikes() {
        setIsLikesLoading(true)
        try {
            const response = await axiosAuth.get('user/likes', { headers: { Authorization: auth.authorization } });
            setLikes(response.data.data);
        }
        catch (e) { console.log(e); }
        finally { setIsLikesLoading(false); }
    }

    async function getVisits() {
        setIsVisitsLoading(true);
        try {
            const response = await axiosAuth.get('user/visits', { headers: { Authorization: auth.authorization } });
            setVisits(response.data.data);
        }
        catch (e) { console.log(e); }
        finally { setIsVisitsLoading(false); }
    }
}




export default NotificationProvider
