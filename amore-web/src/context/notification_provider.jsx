import React, { createContext, useEffect, useRef, useState } from "react";
import { axiosAmore } from "../api/axios";
import { useAuth } from "../hooks/use_auth";
import { useSocket } from "../hooks/use_socket";

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [unReadedCount, setUnReadedCount] = useState(0);
  const [isUnReadedLoading, setIsUnReadedLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationsLoading, setIsNotificationsLoadings] = useState([]);

  const { auth, isAuthenticated } = useAuth();

  const { socket, isSocketConnected } = useSocket();

  const notficationPage = useRef(1);

  console.log(unReadedCount);

  useEffect(() => {
    if (isAuthenticated) fetchNotificationsData({ showUnReadedCountLoading: true });
  }, [auth]);

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
      }}
    >
      {children}
    </NotificationContext.Provider>
  );

  //   async function getNotifications({ showLoading, isNoCount }) {
  //     const requests = [
  //       "count",
  //       `notification/get?page=${notficationPage.current}`,
  //     ].map((endpoint) => axiosAmore.get(endpoint));

  //     try {
  //       //Fecth All Request...
  //       const appDataResponse = await Promise.all(requests);

  //       //IF All Response Status 200 => Set Datas
  //       if (appDataResponse.every((response) => response.status === 200)) {
  //         [setUnReadedCount,setNotifications].forEach(
  //           (setter, index) => setter(appDataResponse[index].data.data)
  //         );
  //         // [setInterests, setLocations, setData, setGifts].forEach((setter, index) => setter(appDataResponse[index].data.data));
  //         ["interests", "locations", "ip", "data", "gifts"].forEach(
  //           (key, index) => {
  //             dispatch({ type: key, payload: appDataResponse[index].data.data });
  //           }
  //         );
  //       }
  //     } catch (e) {
  //     } finally {
  //     }
  //   }

  function fetchNotificationsData({ showUnReadedCountLoading }) {
    getUnReadedCount({ showLoading: showUnReadedCountLoading });
    getNotificationList();
  }

  async function getUnReadedCount({ showLoading = true }) {
    showLoading && setIsUnReadedLoading(true);

    try {
      const response = await axiosAmore.get("notification/count", {
        headers: { Authorization: auth.token },
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
        {
          headers: { Authorization: auth.token },
        }
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
