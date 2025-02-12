import { useContext } from "react";
import { BannerContext } from "../context/banner_provider";
export const useBanner = () => useContext(BannerContext);