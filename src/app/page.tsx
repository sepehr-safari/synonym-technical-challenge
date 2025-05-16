'use client';

import { useRandomUser } from './hooks/useRandomUser';

export default function Home() {
  const { users, isLoading, error } = useRandomUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <div>Error: {error}</div>}

      {users.map((user) => (
        <div key={user.login.uuid}>
          <h1>
            {user.name.first} {user.name.last}
          </h1>
        </div>
      ))}
    </div>
  );
}
