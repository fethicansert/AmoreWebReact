import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import React from "react";
import { useAuth } from "../hooks/use_auth";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const [isSocketConnected, setIsSocketConnnected] = useState(false);

  const { auth, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;

    const newSocket = io(
      "https://devsok.servicelabs.tech",
      {
        transports: ["websocket"],
        autoConnect: true,
        forceNew: true,
        extraHeaders: {
          Authorization: auth?.token,
        },
        query: {
          Authorization: auth?.token,
        },
      },
      []
    );

    console.log(newSocket);

    setSocket(newSocket);

    newSocket.on("connect", () => {
      setIsSocketConnnected(true)
    });

    newSocket.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });

    newSocket.on("error", (error) => {
      console.error("Socket Error:", error);
    });

    // newSocket.on('onAppData', (data) => {
    //     console.log('App Data:', data);
    // });

    return () => newSocket.disconnect();
  }, [auth]);

  return (
    <SocketContext.Provider value={{ socket, isSocketConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
