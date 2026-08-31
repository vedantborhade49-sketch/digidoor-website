import { useState } from 'react';
import './ContactFormSection.css';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful client-side submission
    setIsSubmitted(true);
  };

  return (
    <section className="contact-main container section">
      <div className="contact-layout">
        
        {/* Left Column: Contact Information */}
        <div className="contact-info">
          <div className="contact-info-block">
            <span className="contact-info-label">EMAIL</span>
            <a href="mailto:hello@[yourdomain].com" className="contact-info-value">hello@[yourdomain].com</a>
          </div>
          
          <div className="contact-info-block">
            <span className="contact-info-label">PHONE</span>
            <a href="tel:+910000000000" className="contact-info-value">+91 [Your Phone Number]</a>
          </div>
          
          <div className="contact-info-block">
            <span className="contact-info-label">LOCATION</span>
            <span className="contact-info-value">India</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-wrapper">
          {isSubmitted ? (
            <div className="contact-success">
              <h3 className="h3" style={{ color: 'var(--color-navy)', marginBottom: '1rem' }}>Thank you.</h3>
              <p className="body">We'll be in touch soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="form-input" 
                  placeholder=" "
                />
                <label htmlFor="name" className="form-label">Name *</label>
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="company" 
                  id="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder=" "
                />
                <label htmlFor="company" className="form-label">Company</label>
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="form-input" 
                  placeholder=" "
                />
                <label htmlFor="email" className="form-label">Email *</label>
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  className="form-input" 
                  placeholder=" "
                />
                <label htmlFor="phone" className="form-label">Phone</label>
              </div>

              <div className="form-group">
                <select 
                  name="projectType" 
                  id="projectType" 
                  value={formData.projectType} 
                  onChange={handleChange} 
                  className="form-select"
                >
                  <option value="" disabled>Project Type</option>
                  <option value="Real Estate Branding">Real Estate Branding</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Creative & Content">Creative & Content</option>
                  <option value="Website / Digital Experience">Website / Digital Experience</option>
                  <option value="Project Launch">Project Launch</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  id="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  className="form-textarea" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                START A CONVERSATION <span className="arrow" aria-hidden="true">→</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
