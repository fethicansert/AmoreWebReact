import { useContext } from "react";
import { LikesContext } from "../context/likes_provider";
export const useLikes = () => useContext(LikesContext);