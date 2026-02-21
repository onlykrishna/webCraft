import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection } from '@/firebase/firestore';
import { Testimonial } from '@/features/testimonials/types/testimonial.types';

export const createTestimonial = (payload: Testimonial) => createDocument(COLLECTIONS.testimonials, payload);
export const getTestimonials = () => readCollection<Testimonial>(COLLECTIONS.testimonials);
