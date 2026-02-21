import React, { useState } from 'react';
import Input from '@/ui/Input';
import Button from '@/ui/Button';
import { createAuditRequest } from '@/features/audits/services/audits.service';
import { useToast } from '@/ui/toast/ToastProvider';

const AuditForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', siteUrl: '' });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { push } = useToast();

    try {
      await createAuditRequest({ ...form, createdAt: new Date().toISOString() });
      push({ type: 'success', title: 'Request submitted', message: 'Audit request submitted — we will email you shortly' });
      setForm({ name: '', email: '', siteUrl: '' });
    } catch (err) {
      push({ type: 'error', title: 'Submission failed', message: 'Failed to submit audit' });
    } finally { setLoading(false); }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input label="Name" name="name" value={form.name} onChange={onChange} />
      <Input label="Email" name="email" value={form.email} onChange={onChange} />
      <Input label="Website URL" name="siteUrl" value={form.siteUrl} onChange={onChange} />
      <div className="d-flex">
        <Button type="submit" className="me-2" disabled={loading}>{loading ? 'Submitting...' : 'Request audit'}</Button>
      </div>
    </form>
  );
};

export default AuditForm;
