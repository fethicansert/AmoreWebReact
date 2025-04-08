import { useContext } from "react";
import { UserActivityContext } from "../context/user_activity_provider";
export const useUserActivty = () => useContext(UserActivityContext);