import { RandomUser } from '@/types/randomUser';

import { create } from 'zustand';

type Store = {
  users: RandomUser[];
  setUsers: (users: RandomUser[]) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  error: string | null;
  setError: (error: string | null) => void;

  isOffline: boolean;
  setIsOffline: (isOffline: boolean) => void;

  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const useStore = create<Store>((set) => ({
  // User states
  users: [],
  setUsers: (users: RandomUser[]) => set({ users }),

  // Loading states
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),

  // Error states
  error: null,
  setError: (error: string | null) => set({ error }),

  // Offline states
  isOffline: false,
  setIsOffline: (isOffline: boolean) => set({ isOffline }),

  // Search states
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
