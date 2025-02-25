import { useContext } from "react";
import { AppDataContext } from "../context/app_data_provider";
export const useAppData = () => useContext(AppDataContext)