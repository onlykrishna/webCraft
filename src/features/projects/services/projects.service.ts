import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection } from '@/firebase/firestore';
import { Project } from '@/features/projects/types/project.types';

export const createProject = (payload: Project) => createDocument(COLLECTIONS.projects, payload);
export const getProjects = () => readCollection<Project>(COLLECTIONS.projects);
