import React, { createContext, useState } from 'react';
import { UserInfo, VoidFunctionWithCallback } from '../types';

interface AuthContextType {
  loggedIn: boolean;
  user?: UserInfo;
  signIn?: (user: UserInfo, callback: () => void) => void;
  signOut?: (callback: () => void) => void;
}

const provider = {
  isAuthenticated: false,
  signIn(callback: () => void) {
    provider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signOut(callback: () => void) {
    provider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export const AuthContext = createContext<AuthContextType>({ loggedIn: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);

  const signIn = (newUser: UserInfo, callback: () => void) => {
    return provider.signIn(() => {
      setUser(newUser);
      setLoggedIn(true);
      callback();
    });
  };

  const signOut = (callback: () => void) => {
    return provider.signOut(() => {
      setUser(null);
      setLoggedIn(false);
      callback();
    });
  };

  return (
    <AuthContext.Provider value={{ loggedIn, user: user!, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
