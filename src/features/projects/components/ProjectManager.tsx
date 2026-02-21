import { useProjects } from '@/features/projects/hooks/useProjects';

export const ProjectManager = () => <pre>{JSON.stringify(useProjects(), null, 2)}</pre>;
