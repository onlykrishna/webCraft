import { useTestimonials } from '@/features/testimonials/hooks/useTestimonials';

export const TestimonialsManager = () => <pre>{JSON.stringify(useTestimonials(), null, 2)}</pre>;
