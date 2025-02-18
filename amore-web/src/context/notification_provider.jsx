import React, { createContext, useEffect, useRef, useState } from 'react'
import { axiosAuth } from '../api/axios';
import { useAuth } from '../hooks/use_auth';


export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {

    const [unReadedCount, setUnReadedCount] = useState(0);
    const [isUnReadedLoading, setIsUnReadedLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [isNotificationsLoading, setIsNotificationsLoadings] = useState([]);

    const { auth } = useAuth();

    const notficationPage = useRef(2);

    useEffect(() => {
        if (Object.keys(auth).length > 0) {
            getUnReadedCount();
            getNotificationList()
        };
    }, [auth]);

    return (
        <NotificationContext.Provider value={{ unReadedCount, isUnReadedLoading, notifications, isNotificationsLoading }}>
            {children}
        </NotificationContext.Provider>
    );

    async function getUnReadedCount() {

        setIsUnReadedLoading(true);

        try {

            const response = await axiosAuth.get('notification/count', {
                headers: { Authorization: auth.token }
            });


            if (response.data.response.code === 200)
                setUnReadedCount(response.data.data.status);
        }

        catch (e) { console.log(e); }

        finally { setIsUnReadedLoading(false); }
    }


    async function getNotificationList() {

        setIsUnReadedLoading(true);

        try {

            const response = await axiosAuth.get(`notification/get?page=${notficationPage.current}`, {
                headers: { Authorization: auth.token }
            });

            if (response.data.response.code === 200)
                setNotifications(response.data.data);
        }

        catch (e) { console.log(e); }

        finally { setIsUnReadedLoading(false); }
    }




}




export default NotificationProvider
