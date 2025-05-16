'use client';

import { useEffect } from 'react';

import { useStore } from '@/lib/store';
import { userService } from '@/services/userService';

export const useRandomUser = () => {
  const { users, setUsers, isLoading, setIsLoading, error, setError } = useStore();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const users = await userService.fetchAndStoreUsers();
        setUsers(users);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));

        const offlineUsers = await userService.getAllUsers();
        setUsers(offlineUsers);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [setUsers, setIsLoading, setError]);

  return { users, isLoading, error };
};
