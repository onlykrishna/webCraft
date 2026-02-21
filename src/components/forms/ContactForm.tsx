import React, { useState } from 'react';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import { createLead } from '@/features/leads/services/leads.service';
import { useToast } from '@/ui/toast/ToastProvider';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const { push } = useToast();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createLead({ ...form, createdAt: new Date().toISOString() });
      push({ type: 'success', title: 'Message sent', message: 'Thanks — we will be in touch' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      push({ type: 'error', title: 'Send failed', message: 'Failed to send — try again' });
    } finally { setLoading(false); }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input label="Name" name="name" value={form.name} onChange={onChange} />
      <Input label="Email" name="email" value={form.email} onChange={onChange} />
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" name="message" rows={4} value={form.message} onChange={onChange} />
      </div>
      <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send message'}</Button>
    </form>
  );
};

export default ContactForm;
