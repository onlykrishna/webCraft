import { useCallback, useEffect, useState } from 'react';
import { getProjects } from '@/features/projects/services/projects.service';
import { Project } from '@/features/projects/types/project.types';

export const useProjects = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProjects();
      setData(res);
    } catch (e) {
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { refresh(); }, [refresh]);
  return { data, loading, error, refresh };
};