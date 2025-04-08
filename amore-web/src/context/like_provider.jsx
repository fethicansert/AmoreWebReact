import { createContext, useEffect, useState } from "react";
import React from "react";
import { axiosAmore } from "../api/axios";
import { useAuth } from "../hooks/use_auth";

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const { auth, isAuthenticated } = useAuth();
  const [likes, setLikes] = useState([]);
  const [isLikesLoading, setIsLikesLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) getLikes();
  }, [auth]);

  return (
    <LikeContext.Provider value={{ likes, isLikesLoading }}>
      {children}
    </LikeContext.Provider>
  );

  async function getLikes() {
    setIsLikesLoading(true);
    try {
      const response = await axiosAmore.get("user/likes", { useAuth: true });

      if (response?.data.response.code === 200) setLikes(response.data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLikesLoading(false);
    }
  }
};

export default LikeProvider;
