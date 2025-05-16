'use client';

import { useEffect } from 'react';

import { useStore } from '@/lib/store';

export const useNetworkStatus = () => {
  const { isOffline, setIsOffline } = useStore();

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOffline(typeof navigator !== 'undefined' ? !navigator.onLine : false);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, [setIsOffline]);

  return { isOffline };
};
