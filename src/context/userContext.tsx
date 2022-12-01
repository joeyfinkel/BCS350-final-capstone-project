import React, { createContext, useState } from 'react';

interface IUserContext {
  isLoggedIn: boolean;
  setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext>({ isLoggedIn: false });

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
