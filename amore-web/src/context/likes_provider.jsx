import React, { createContext, useState } from 'react'


export const LikesContext = createContext();

const LikesProvider = ({ children }) => {

    const [likes, setLikes] = useState([]);
    const [isLikesLoading, setIsLikesLoading] = useState(false);

    return (
        <LikesContext.Provider value={{ likes, setLikes, isLikesLoading, setIsLikesLoading }}>
            {children}
        </LikesContext.Provider>
    )
}

export default LikesProvider
