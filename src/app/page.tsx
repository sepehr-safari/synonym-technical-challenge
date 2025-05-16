'use client';

import UserGrid from '@/components/UserGrid';
import { useRandomUser } from '@/hooks/useRandomUser';

export default function Home() {
  const { users, isLoading, error } = useRandomUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const formattedUsers = users.map((user) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    avatar: user.picture.large,
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8">
        {error && (
          <div className="m-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error: {error}
          </div>
        )}

        <h1 className="text-3xl font-bold text-gray-900 mb-8 px-6">Users</h1>
        <UserGrid users={formattedUsers} />
      </div>
    </main>
  );
}
