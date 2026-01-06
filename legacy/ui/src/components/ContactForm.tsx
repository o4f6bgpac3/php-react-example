import { FormEvent } from 'react';
import { useContactForm } from '@shared/hooks/useContactForm';

interface ContactFormProps {
  successMessage?: string;
}

export default function ContactForm({ successMessage = "Thanks! We'll be in touch soon." }: ContactFormProps) {
  const { formData, status, updateField, submit } = useContactForm();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submit();
  }

  if (status === 'success') {
    return (
      <div className="alert alert-success">
        <span>{successMessage}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            required
          />
        </div>

        <div className="form-control mt-4">
          <button
            type="submit"
            className={`btn btn-primary ${status === 'loading' ? 'loading' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  );
}
