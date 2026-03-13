import { useCallback, useEffect, useState } from 'react';
import { getPackages } from '@/features/packages/services/packages.service';
import { PricingPackage } from '@/features/packages/types/package.types';

export const usePackages = () => {
  const [data, setData] = useState<PricingPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getPackages();
      setData(res);
    } catch (e) {
      setError('Failed to load packages');
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { refresh(); }, [refresh]);
  return { data, loading, error, refresh };
};