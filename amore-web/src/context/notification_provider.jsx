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
  const { auth, isAuthenticated } = useAuth();
  const { socket, isSocketConnected } = useSocket();

  //REF
  const notficationPage = useRef(1);

  //SIDE-EFFECTS
  useEffect(() => {
    if (isAuthenticated)
      fetchNotificationsData({ showUnReadedCountLoading: true });
  }, [auth]);

  //Listen socket if refresh notification fetch notitifications with out showing loading
  useEffect(() => {
    if (isSocketConnected) {
      socket.on("refreshNotifications", () =>
        fetchNotificationsData({ showUnReadedCountLoading: false })
      );
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

  function fetchNotificationsData({ showUnReadedCountLoading }) {
    getUnReadedCount({ showLoading: showUnReadedCountLoading });
    getNotificationList();
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

  async function getNotificationList() {
    setIsNotificationsLoadings(true);

    try {
      const response = await axiosAmore.get(
        `notification/get?page=${notficationPage.current}`,
        { useAuth: true }
      );

      if (response.data.response.code === 200)
        setNotifications(response.data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsNotificationsLoadings(false);
    }
  }
};

export default NotificationProvider;
