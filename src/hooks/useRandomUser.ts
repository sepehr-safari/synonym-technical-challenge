'use client';

import { useEffect } from 'react';

import { useStore } from '@/lib/store';
import { userService } from '@/services/userService';

export const useRandomUser = () => {
  const { users, setUsers, isLoading, setIsLoading, error, setError } = useStore();

  useEffect(() => {
    setIsLoading(true);

    userService
      .fetchAndStoreUsers()
      .then((users) => {
        setUsers(users);
        setError(null);
      })
      .catch((error) => {
        setError(error instanceof Error ? error.message : String(error));

        userService
          .getAllUsers()
          .then((users) => {
            setUsers(users);
          })
          .catch((error) => {
            setError(error instanceof Error ? error.message : String(error));
          });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setUsers, setIsLoading, setError]);

  return { users, isLoading, error };
};
