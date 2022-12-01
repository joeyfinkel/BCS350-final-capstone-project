import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { UserInfo } from '../types';

type Credentials = { email: string; password: string };

/**
 * Fetches all users from the database.
 * @returns A list of users from the database.
 */
export const useUsers = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    const fetchUsers = () => {
      axios
        .get<UserInfo[]>(
          'http://localhost:80/BCS350/capstone-project/api/index.php'
        )
        .then((value) => {
          setUsers(value.data);
        });
    };

    fetchUsers();
  }, []);

  return users;
};
