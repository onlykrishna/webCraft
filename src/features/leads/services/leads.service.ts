import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection } from '@/firebase/firestore';
import { Lead } from '@/features/leads/types/lead.types';

export const createLead = (payload: Lead) => createDocument(COLLECTIONS.leads, payload);
export const getLeads = () => readCollection<Lead>(COLLECTIONS.leads);
