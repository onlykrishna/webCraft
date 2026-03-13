import { useState } from 'react';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Loader } from '@/ui/Loader';
import { createAudit } from '@/features/audits/services/audits.service';

export const AuditForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !siteUrl) { setError('Name, email, and URL are required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email'); return; }
    setLoading(true);
    try {
      await createAudit({ name, email, siteUrl, goals, createdAt: new Date().toISOString() });
      setName(''); setEmail(''); setSiteUrl(''); setGoals('');
      alert('Audit request submitted. We will reach out.');
    } catch (e) {
      setError('Failed to submit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="d-grid gap-3">
      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Website URL" value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} />
      <Input label="Goals" value={goals} onChange={(e) => setGoals(e.target.value)} />
      {error && <div className="text-danger">{error}</div>}
      <div>
        {loading ? <Loader /> : <Button type="submit">Request Audit</Button>}
      </div>
    </form>
  );
};