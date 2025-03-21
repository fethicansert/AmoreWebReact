import { useContext } from "react";
import { LikeContext } from "../context/like_provider";
export const useLikes = () => useContext(LikeContext);