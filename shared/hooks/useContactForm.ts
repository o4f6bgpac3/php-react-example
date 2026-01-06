import { useState } from 'react';
import type { ContactFormData, FormStatus } from '../types';
import { submitContactForm } from '../api/client';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    setStatus('loading');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return { formData, status, updateField, submit, reset };
}
