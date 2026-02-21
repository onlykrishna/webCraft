import { useAudits } from '@/features/audits/hooks/useAudits';

export const AuditsTable = () => <pre>{JSON.stringify(useAudits(), null, 2)}</pre>;
