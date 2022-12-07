import React, { useState, useEffect } from 'react';
import { generatePassword } from '../utils/helpers';

export const usePassword = (length: number) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    const createPassword = () => {
      setPassword(generatePassword(length));
    };

    createPassword();
  }, []);

  return password;
};
