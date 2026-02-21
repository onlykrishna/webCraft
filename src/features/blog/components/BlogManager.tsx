import { useBlogs } from '@/features/blog/hooks/useBlogs';

export const BlogManager = () => <pre>{JSON.stringify(useBlogs(), null, 2)}</pre>;
