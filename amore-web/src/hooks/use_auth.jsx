import { useContext } from "react";
import { AuthContext } from "../context/auth_provider";
export const useAuth = () => useContext(AuthContext);