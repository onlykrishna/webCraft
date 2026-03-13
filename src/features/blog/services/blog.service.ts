import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection, readDocument, updateDocument, deleteDocument } from '@/firebase/firestore';
import { BlogPost } from '@/features/blog/types/blog.types';

export const createBlog = (payload: BlogPost) => createDocument(COLLECTIONS.blogs, payload);
export const getBlogs = () => readCollection<BlogPost>(COLLECTIONS.blogs);
export const getBlog = (id: string) => readDocument<BlogPost>(COLLECTIONS.blogs, id);
export const updateBlog = (id: string, payload: Partial<BlogPost>) => updateDocument(COLLECTIONS.blogs, id, payload as Record<string, unknown>);
export const deleteBlog = (id: string) => deleteDocument(COLLECTIONS.blogs, id);
