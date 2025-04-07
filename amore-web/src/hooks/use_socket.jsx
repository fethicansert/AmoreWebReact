import { useContext } from "react";
import { SocketContext } from "../context/socket_provider";
export const useSocket = () => useContext(SocketContext);