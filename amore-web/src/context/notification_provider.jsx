import React, { createContext, useEffect, useRef, useState } from "react";
import { axiosAmore } from "../api/axios";
import { useAuth } from "../hooks/use_auth";
import { useSocket } from "../hooks/use_socket";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  //STATES
  const [unReadedCount, setUnReadedCount] = useState(0);
  const [isUnReadedLoading, setIsUnReadedLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationsLoading, setIsNotificationsLoadings] = useState([]);

  //CONTEXT
  const { isAuthenticated } = useAuth();
  const { socket, isSocketConnected } = useSocket();

  //REF
  const notficationPage = useRef(1);

  //SIDE-EFFECTS
  useEffect(() => {
    if (isAuthenticated) getUnReadedCount({ showLoading: true });
    // getNotificationList({ reset: false });
  }, [isAuthenticated]);

  //Listen socket if refresh notification fetch notitifications with out showing loading
  useEffect(() => {
    if (isSocketConnected) {
      socket.on("refreshNotifications", () => {
        getUnReadedCount({ showLoading: false });
        getNotificationList({ reset: true });
      });
    }
  }, [isSocketConnected]);

  return (
    <NotificationContext.Provider
      value={{
        unReadedCount,
        isUnReadedLoading,
        notifications,
        isNotificationsLoading,
        readAllNotifications,
        getNotificationList,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );

  async function readAllNotifications() {
    try {
      setIsUnReadedLoading(true);
      const response = await axiosAmore.post(
        "notification/read_all",
        {},
        { useAuth: true }
      );
      if (response.status === 200) {
        setUnReadedCount(0);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsUnReadedLoading(false);
    }
  }

  async function getUnReadedCount({ showLoading = true }) {
    showLoading && setIsUnReadedLoading(true);

    try {
      const response = await axiosAmore.get("notification/count", {
        useAuth: true,
      });
      if (response.data.response.code === 200)
        setUnReadedCount(response.data.data.status);
    } catch (e) {
      console.log(e);
    } finally {
      setIsUnReadedLoading(false);
    }
  }

  async function getNotificationList({ reset = false }) {
    setIsNotificationsLoadings(true);

    try {
      const response = await axiosAmore.get(
        `notification/get?page=${notficationPage.current}`,
        { useAuth: true }
      );

      if (reset) notficationPage.current = 0;

      if (response.data.response.code === 200) {
        setNotifications((prev) =>
          reset ? response.data.data : [...prev, ...response.data.data]
        );
        notficationPage.current = notficationPage.current + 1;
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsNotificationsLoadings(false);
    }
  }
};

export default NotificationProvider;
