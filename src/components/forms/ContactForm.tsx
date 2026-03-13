import { useState } from 'react';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Loader } from '@/ui/Loader';
import { createLead } from '@/features/leads/services/leads.service';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !email || !message) { setError('All fields are required'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Enter a valid email'); return; }
    setLoading(true);
    try {
      await createLead({ name, email, message, createdAt: new Date().toISOString() });
      setName(''); setEmail(''); setMessage('');
      alert('Thanks! We will be in touch.');
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
      <Input label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      {error && <div className="text-danger">{error}</div>}
      <div>
        {loading ? <Loader /> : <Button type="submit">Send</Button>}
      </div>
    </form>
  );
};