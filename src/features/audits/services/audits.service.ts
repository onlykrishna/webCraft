import { COLLECTIONS } from '@/firebase/collections';
import { createDocument, readCollection, readDocument, updateDocument, deleteDocument } from '@/firebase/firestore';
import { AuditRequest } from '@/features/audits/types/audit.types';

export const createAuditRequest = (payload: AuditRequest) => createDocument(COLLECTIONS.audits, payload);
export const getAuditRequests = () => readCollection<AuditRequest>(COLLECTIONS.audits);
export const getAuditRequest = (id: string) => readDocument<AuditRequest>(COLLECTIONS.audits, id);
export const updateAuditRequest = (id: string, payload: Partial<AuditRequest>) => updateDocument(COLLECTIONS.audits, id, payload as Record<string, unknown>);
export const deleteAuditRequest = (id: string) => deleteDocument(COLLECTIONS.audits, id);
export const createAudit = createAuditRequest;
