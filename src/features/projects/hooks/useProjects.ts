import { useEffect, useState } from 'react';
import { getProjects } from '@/features/projects/services/projects.service';
import { Project } from '@/features/projects/types/project.types';

export const useProjects = () => { const [projects, setProjects] = useState<Project[]>([]); useEffect(() => { getProjects().then(setProjects); }, []); return projects; };
