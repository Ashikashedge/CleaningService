import { useEffect } from 'react';
import useQuoteForm from '../hooks/useQuoteForm';
import Icon from './Icon';

function FieldError({ id, children }) {
  return children ? <span className="field-error" id={id}>{children}</span> : null;
}

function ContactLink({ href, icon, children }) {
  return <a className="contact-method" href={href}><span className="contact-method-icon"><Icon name={icon} size={18} /></span><span>{children}</span><Icon className="contact-method-arrow" name="arrow" size={16} /></a>;
}

export default function QuoteForm({ config, services, selectedService, onServiceChange }) {
  const form = useQuoteForm(selectedService);
  const { values, errors, status, feedback, updateField, submit } = form;

  useEffect(() => {
    if (selectedService && selectedService !== values.service) updateField('service', selectedService);
    // Update only when a service card sets a new selection.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedService]);

  const fieldProps = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: (event) => {
      updateField(field, event.target.value);
      if (field === 'service') onServiceChange(event.target.value);
    },
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  });

  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Request a quote</p>
          <h2>Tell us about your <span className="heading-accent">space.</span></h2>
          <p className="contact-intro">A few details will help the team understand what you need and follow up about next steps.</p>
          <div className="contact-details">
            <ContactLink href={`tel:${config.contact.phoneLink}`} icon="phone">{config.contact.phoneDisplay}</ContactLink>
            <ContactLink href={`mailto:${config.contact.email}`} icon="mail">{config.contact.email}</ContactLink>
            <div className="contact-location"><span className="contact-method-icon"><Icon name="pin" size={18} /></span><span>{config.contact.address}</span></div>
          </div>
          <p className="contact-demo-note">{config.contact.demoNotice}</p>
          <div className="contact-hours"><Icon name="clock" size={17} /><span>Add a preferred date if you have one; the team can confirm availability.</span></div>
        </div>
        <div className="quote-card">
            <div className="quote-card-heading"><span className="quote-card-icon"><Icon name="quote" size={21} /></span><span><h3>Get a free quote</h3><p>Fields marked with <span aria-hidden="true">*</span> are required.</p></span></div>
          <form onSubmit={submit} noValidate>
            <div className="form-grid">
              <div className="form-field"><label htmlFor="fullName">Full Name <span>*</span></label><input {...fieldProps('fullName')} autoComplete="name" placeholder="Your name" required /><FieldError id="fullName-error">{errors.fullName}</FieldError></div>
              <div className="form-field"><label htmlFor="phone">Phone Number <span>*</span></label><input {...fieldProps('phone')} type="tel" autoComplete="tel" placeholder="+971 50 000 0000" required /><FieldError id="phone-error">{errors.phone}</FieldError></div>
              <div className="form-field"><label htmlFor="email">Email Address <span>*</span></label><input {...fieldProps('email')} type="email" autoComplete="email" placeholder="you@example.com" required /><FieldError id="email-error">{errors.email}</FieldError></div>
              <div className="form-field"><label htmlFor="service">Cleaning Service <span>*</span></label><select {...fieldProps('service')} required><option value="">Choose a service</option>{services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}</select><FieldError id="service-error">{errors.service}</FieldError></div>
              <div className="form-field"><label htmlFor="propertyType">Property Type</label><select {...fieldProps('propertyType')}><option value="">Select property type</option><option>Apartment</option><option>Villa / House</option><option>Office</option><option>Other</option></select></div>
              <div className="form-field"><label htmlFor="propertySize">Property Size</label><input {...fieldProps('propertySize')} placeholder="Approx. area or number of rooms" /></div>
              <div className="form-field form-field-full"><label htmlFor="preferredDate">Preferred Date</label><input {...fieldProps('preferredDate')} type="date" min={today} /></div>
              <div className="form-field form-field-full"><label htmlFor="message">Message</label><textarea {...fieldProps('message')} rows="4" placeholder="Anything else we should know?" /></div>
            </div>
            <div className={`form-feedback is-${status}`} aria-live="polite" role={status === 'error' || status === 'invalid' ? 'alert' : 'status'}>{status === 'submitting' ? <span className="loading-message"><span className="spinner" />Sending your enquiry…</span> : feedback}</div>
            <button className="button button-primary form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send Enquiry'} <Icon name="arrow" size={17} /></button>
            <p className="form-privacy"><Icon name="shield" size={15} /> Your details are used to respond to this enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
