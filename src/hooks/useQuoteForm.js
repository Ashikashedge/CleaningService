import { useState } from 'react';
import { submitQuote } from '../services/quoteService';

const emptyForm = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  propertyType: '',
  propertySize: '',
  preferredDate: '',
  message: '',
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your name.';

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.';
  else if (!/^[+\d\s().-]+$/.test(values.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15) errors.phone = 'Enter a valid phone number, including the country code if needed.';

  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';

  if (!values.service) errors.service = 'Please choose a cleaning service.';
  return errors;
}

export default function useQuoteForm(initialService = '') {
  const [values, setValues] = useState({ ...emptyForm, service: initialService });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const updateField = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus('idle');
    setFeedback('');
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFeedback('');
    if (Object.keys(nextErrors).length) {
      setStatus('invalid');
      setFeedback('Please review the highlighted fields and try again.');
      return;
    }

    setStatus('submitting');
    try {
      await submitQuote({ ...values, fullName: values.fullName.trim(), phone: values.phone.trim(), email: values.email.trim() });
      setStatus('success');
      setFeedback('Thank you. Your enquiry has been sent, and the team can follow up with you.');
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Your enquiry could not be sent. Please try again or contact us directly.');
    }
  };

  return { values, errors, status, feedback, updateField, submit };
}
