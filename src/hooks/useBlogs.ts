import { useEffect, useState } from 'react';
import { getBlogs } from '@/features/blog/services/blog.service';
import { BlogPost } from '@/features/blog/types/blog.types';

export const useBlogs = () => {
  const [data, setData] = useState<BlogPost[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await getBlogs();
      setData(res as BlogPost[]);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);
  return { data, loading, error, refresh: fetch };
};

export default useBlogs;
