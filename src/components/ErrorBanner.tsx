import { useStore } from '@/lib/store';

export const ErrorBanner = () => {
  const { error } = useStore();

  if (!error) return null;

  return (
    <div className="p-4 rounded-lg shadow-lg bg-red-100 border border-red-400">
      <p className="text-red-700 font-medium">{error}</p>
    </div>
  );
};
