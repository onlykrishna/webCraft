import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection } from '@/firebase/firestore';
import { AuditRequest } from '@/features/audits/types/audit.types';

export const createAuditRequest = (payload: AuditRequest) => createDocument(COLLECTIONS.audits, payload);
export const getAuditRequests = () => readCollection<AuditRequest>(COLLECTIONS.audits);
