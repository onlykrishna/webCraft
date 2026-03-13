import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection, readDocument, updateDocument, deleteDocument } from '@/firebase/firestore';
import { Lead } from '@/features/leads/types/lead.types';

export const createLead = (payload: Lead) => createDocument(COLLECTIONS.leads, payload);
export const getLeads = () => readCollection<Lead>(COLLECTIONS.leads);
export const getLead = (id: string) => readDocument<Lead>(COLLECTIONS.leads, id);
export const updateLead = (id: string, payload: Partial<Lead>) => updateDocument(COLLECTIONS.leads, id, payload as Record<string, unknown>);
export const deleteLead = (id: string) => deleteDocument(COLLECTIONS.leads, id);
