import Dexie, { Table } from 'dexie';

import { RandomUser } from '@/types/randomUser';

export class UserDatabase extends Dexie {
  users!: Table<RandomUser>;

  constructor() {
    super('UserDatabase');
    this.version(1).stores({
      users: 'login.uuid, email, name.first, name.last',
    });
  }
}

export const db = new UserDatabase();
