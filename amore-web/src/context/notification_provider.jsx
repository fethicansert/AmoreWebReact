import React, { createContext, useEffect, useRef, useState } from 'react'
import { axiosAmore } from '../api/axios';
import { useAuth } from '../hooks/use_auth';


export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {

    const [unReadedCount, setUnReadedCount] = useState(0);
    const [isUnReadedLoading, setIsUnReadedLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [isNotificationsLoading, setIsNotificationsLoadings] = useState([]);

    const { auth, isAuthenticated } = useAuth();

    const notficationPage = useRef(1);

    useEffect(() => {
        if (isAuthenticated) {
            getNotificationList();
            getUnReadedCount();
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
            const response = await axiosAmore.get('notification/count', {
                headers: { Authorization: auth.token }
            });

            if (response.data.response.code === 200)
                setUnReadedCount(response.data.data.status);
        }

        catch (e) { console.log(e); }

        finally { setIsUnReadedLoading(false); }
    }


    async function getNotificationList() {

        setIsNotificationsLoadings(true);

        try {

            const response = await axiosAmore.get(`notification/get?page=${notficationPage.current}`, {
                headers: { Authorization: auth.token }
            });


            if (response.data.response.code === 200)
                setNotifications(response.data.data);
        }

        catch (e) { console.log(e); }

        finally { setIsNotificationsLoadings(false); }
    }




}




export default NotificationProvider
