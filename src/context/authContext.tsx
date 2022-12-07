import React, { createContext, useState } from 'react';
import { UserInfo, VoidFunctionWithCallback } from '../types';

interface AuthContextType {
  user: UserInfo | null;
  setUser?: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
