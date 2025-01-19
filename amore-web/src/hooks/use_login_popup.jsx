import { useContext } from "react";
import { LoginPopupContext } from "../context/login_popup_provider";
export const useLoginPopup = () => useContext(LoginPopupContext);