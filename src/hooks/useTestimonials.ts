import { useEffect, useState } from 'react';
import { getTestimonials } from '@/features/testimonials/services/testimonials.service';
import { Testimonial } from '@/features/testimonials/types/testimonial.types';

export const useTestimonials = () => {
  const [data, setData] = useState<Testimonial[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await getTestimonials();
      setData(res as Testimonial[]);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);
  return { data, loading, error, refresh: fetch };
};

export default useTestimonials;
