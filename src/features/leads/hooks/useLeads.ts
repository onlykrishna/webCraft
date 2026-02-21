import { useEffect, useState } from 'react';
import { getLeads } from '@/features/leads/services/leads.service';
import { Lead } from '@/features/leads/types/lead.types';

export const useLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  useEffect(() => {
    getLeads().then(setLeads);
  }, []);
  return leads;
};
