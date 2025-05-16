import { useStore } from '@/lib/store';

export const Searchbar = () => {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search by name or email"
        className="w-full p-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
