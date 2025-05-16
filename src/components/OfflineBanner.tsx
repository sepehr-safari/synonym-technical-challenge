import { useNetworkStatus } from '@/hooks/useNetworkStatus';

export const OfflineBanner = () => {
  const { isOffline } = useNetworkStatus();

  if (!isOffline) return null;

  return (
    <div className="p-4 rounded-lg shadow-lg bg-yellow-100 border border-yellow-400">
      {isOffline && <p className="text-yellow-800 font-medium">You are currently offline</p>}
    </div>
  );
};
