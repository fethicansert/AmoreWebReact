import React, { createContext, useEffect, useState } from "react";
import { useSocket } from "../hooks/use_socket";
import { useAuth } from "../hooks/use_auth";

export const UserActivityContext = createContext();

const UserActivityProvider = ({ children }) => {


  const [activeUsers, setActiveUsers] = useState([]);
  const [activeUsersLoading, setActiveUsersLoading] = useState(false);

  const { auth, isAuthenticated } = useAuth();
  const { socket, isSocketConnected } = useSocket();

  useEffect(() => {

    //Refresh Activeusers in every 5000ms(5sn)
    getActiveUsers();
    const usersStatusInterval = setInterval(getActiveUsers, 5000);

    //Clear Interval
    const clear = () => clearInterval(usersStatusInterval);
    return clear
  }, [isSocketConnected]);

  return (
    <UserActivityContext.Provider value={{ setUserStatus, activeUsers, checkUsersStatus }}>
      {children}
    </UserActivityContext.Provider>
  );

  async function getActiveUsers() {
    if (!isSocketConnected) return;

    try {
      const activeUsersData = await socket.emitWithAck("activeUsers", {});
      setActiveUsers(activeUsersData);
    } catch (e) {
      console.log(e);
    }

    // console.log("ActiveUsers Listening from socket !");
  }

  function setUserStatus(users) {

    //If active users empty all users isActive true
    if (!activeUsers.length > 0)
      return users.map((user) => ({ ...user, isActive: true }));

    //If active users not empty set isActive with activeUsers
    return users.map((user) => {
      return activeUsers.includes(user.id)
        ? { ...user, isActive: true }
        : { ...user, isActive: false };
    });
  }

  function checkUsersStatus(userId) {
    if (!activeUsers.length > 0) return undefined;
    return activeUsers.includes(userId);
  }

};

export default UserActivityProvider;
