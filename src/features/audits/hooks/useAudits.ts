import { useEffect, useState } from 'react';
import { getAuditRequests } from '@/features/audits/services/audits.service';
import { AuditRequest } from '@/features/audits/types/audit.types';

export const useAudits = () => { const [audits, setAudits] = useState<AuditRequest[]>([]); useEffect(() => { getAuditRequests().then(setAudits); }, []); return audits; };
