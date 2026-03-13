import { useCallback, useEffect, useState } from 'react';
import { getTestimonials } from '@/features/testimonials/services/testimonials.service';
import { Testimonial } from '@/features/testimonials/types/testimonial.types';

export const useTestimonials = () => {
  const [data, setData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getTestimonials();
      setData(res);
    } catch (e) {
      setError('Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => { refresh(); }, [refresh]);
  return { data, loading, error, refresh };
};