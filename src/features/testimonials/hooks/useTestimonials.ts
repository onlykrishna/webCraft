import { useEffect, useState } from 'react';
import { getTestimonials } from '@/features/testimonials/services/testimonials.service';
import { Testimonial } from '@/features/testimonials/types/testimonial.types';

export const useTestimonials = () => { const [items, setItems] = useState<Testimonial[]>([]); useEffect(() => { getTestimonials().then(setItems); }, []); return items; };
