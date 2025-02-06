import { useContext } from "react";
import { NotificationContext } from "../context/notification_provider";
export const useNotification = () => useContext(NotificationContext);