import { db } from '@/lib/db';
import { RandomUser, RandomUserResponse } from '@/types/randomUser';

export const userService = {
  async fetchAndStoreUsers(page: number = 1, results: number = 10): Promise<RandomUser[]> {
    try {
      const response = await fetch(`https://randomuser.me/api/?page=${page}&results=${results}`);
      const data: RandomUserResponse = await response.json();

      await db.users.clear();

      await db.users.bulkAdd(data.results);

      return data.results;
    } catch (error) {
      throw error;
    }
  },

  async getAllUsers(): Promise<RandomUser[]> {
    try {
      return await db.users.toArray();
    } catch (error) {
      throw error;
    }
  },

  async getUserByEmail(email: string): Promise<RandomUser | undefined> {
    try {
      return await db.users.where('email').equals(email).first();
    } catch (error) {
      throw error;
    }
  },

  async clearUsers(): Promise<void> {
    try {
      await db.users.clear();
    } catch (error) {
      throw error;
    }
  },
};
