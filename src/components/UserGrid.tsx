'use client';

import UserCard from './UserCard';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface UserGridProps {
  users: User[];
}

export default function UserGrid({ users }: UserGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} avatar={user.avatar} />
      ))}
    </div>
  );
}
