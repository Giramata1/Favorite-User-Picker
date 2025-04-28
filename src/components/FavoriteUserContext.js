import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteUserContext = createContext();

export const useFavoriteUser = () => useContext(FavoriteUserContext);

export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  useEffect(() => {
    const storedfavoriteUser = JSON.parse(localStorage.getItem("favoriteUser"));
    if (storedfavoriteUser) {
      setFavoriteUser(storedfavoriteUser);
    }
  }, []);

  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem("favoriteUser", JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem("favoriteUser");
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
};
