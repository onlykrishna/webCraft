import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection } from '@/firebase/firestore';
import { BlogPost } from '@/features/blog/types/blog.types';

export const createBlog = (payload: BlogPost) => createDocument(COLLECTIONS.blogs, payload);
export const getBlogs = () => readCollection<BlogPost>(COLLECTIONS.blogs);
