import { useEffect, useState } from 'react';
import { getPackages } from '@/features/packages/services/packages.service';
import { any } from 'prop-types';

export const usePackages = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await getPackages();
      setData(res as any[]);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);
  return { data, loading, error, refresh: fetch };
};

export default usePackages;
