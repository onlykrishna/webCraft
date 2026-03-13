import { useCallback, useEffect, useState } from 'react';
import { getBlogs } from '@/features/blog/services/blog.service';
import { BlogPost } from '@/features/blog/types/blog.types';

export const useBlogs = () => {
  const [data, setData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getBlogs();
      setData(res);
    } catch (e) {
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { refresh(); }, [refresh]);
  return { data, loading, error, refresh };
};