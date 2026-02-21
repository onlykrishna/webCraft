import { useEffect, useState } from 'react';
import { getBlogs } from '@/features/blog/services/blog.service';
import { BlogPost } from '@/features/blog/types/blog.types';

export const useBlogs = () => { const [blogs, setBlogs] = useState<BlogPost[]>([]); useEffect(() => { getBlogs().then(setBlogs); }, []); return blogs; };
