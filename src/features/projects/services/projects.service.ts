import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection, readDocument, updateDocument, deleteDocument } from '@/firebase/firestore';
import { Project } from '@/features/projects/types/project.types';

export const createProject = (payload: Project) => createDocument(COLLECTIONS.projects, payload);
export const getProjects = () => readCollection<Project>(COLLECTIONS.projects);
export const getProject = (id: string) => readDocument<Project>(COLLECTIONS.projects, id);
export const updateProject = (id: string, payload: Partial<Project>) => updateDocument(COLLECTIONS.projects, id, payload as Record<string, unknown>);
export const deleteProject = (id: string) => deleteDocument(COLLECTIONS.projects, id);
