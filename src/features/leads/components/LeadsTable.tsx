import { useLeads } from '@/features/leads/hooks/useLeads';

export const LeadsTable = () => {
  const leads = useLeads();
  return <pre>{JSON.stringify(leads, null, 2)}</pre>;
};
