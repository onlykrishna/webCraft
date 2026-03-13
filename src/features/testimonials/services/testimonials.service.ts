import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection, readDocument, updateDocument, deleteDocument } from '@/firebase/firestore';
import { Testimonial } from '@/features/testimonials/types/testimonial.types';

export const createTestimonial = (payload: Testimonial) => createDocument(COLLECTIONS.testimonials, payload);
export const getTestimonials = () => readCollection<Testimonial>(COLLECTIONS.testimonials);
export const getTestimonial = (id: string) => readDocument<Testimonial>(COLLECTIONS.testimonials, id);
export const updateTestimonial = (id: string, payload: Partial<Testimonial>) => updateDocument(COLLECTIONS.testimonials, id, payload as Record<string, unknown>);
export const deleteTestimonial = (id: string) => deleteDocument(COLLECTIONS.testimonials, id);
