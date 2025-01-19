import { useContext } from "react";
import { IPLocationContext } from '../context/user_location_provider';

export const useIPLocation = () => useContext(IPLocationContext);