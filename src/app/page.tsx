'use client';

import { ErrorBanner, Loading, OfflineBanner, UserGrid } from '@/components';

import { useRandomUser } from '@/hooks/useRandomUser';

export default function Home() {
  const { users, isLoading } = useRandomUser();

  if (isLoading) {
    return <Loading />;
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
        <div className="flex flex-col gap-4 fixed bottom-4 right-4 z-10">
          <OfflineBanner />

          <ErrorBanner />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8 px-6">Users</h1>
        <UserGrid users={formattedUsers} />
      </div>
    </main>
  );
}
