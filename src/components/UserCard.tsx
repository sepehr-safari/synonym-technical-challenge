'use client';

interface UserCardProps {
  name: string;
  email: string;
  avatar?: string;
}

export const UserCard = ({ name, email, avatar }: UserCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
          <img
            src={avatar || '/default-avatar.png'}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};
