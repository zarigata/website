// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Contact Page Component
// This component provides a contact form and information for users to get in touch
// It supports both Arabic (RTL) and English (LTR) layouts

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
  const { t, i18n } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Form status
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission (in a real app, this would send data to a server)
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: t('contact.success')
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className={`contact-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Contact Header */}
      <section className="contact-header">
        <div className="contact-header-content">
          <h1>{t('contact.title')}</h1>
          <p>
            {i18n.language === 'ar'
              ? 'نحن هنا للإجابة على أسئلتك ومساعدتك في تحقيق أهدافك الرقمية.'
              : 'We\'re here to answer your questions and help you achieve your digital goals.'}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-section">
              <h3>
                {i18n.language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>
                    {i18n.language === 'ar'
                      ? 'الرياض، المملكة العربية السعودية'
                      : 'Riyadh, Saudi Arabia'}
                  </p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <p>+966 12 345 6789</p>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <p>info@catchycompany.com</p>
                </div>
              </div>
            </div>
            
            <div className="info-section">
              <h3>
                {i18n.language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
              </h3>
              <div className="hours-details">
                <div className="hours-item">
                  <p className="day">
                    {i18n.language === 'ar' ? 'الأحد - الخميس:' : 'Sunday - Thursday:'}
                  </p>
                  <p className="time">9:00 AM - 6:00 PM</p>
                </div>
                <div className="hours-item">
                  <p className="day">
                    {i18n.language === 'ar' ? 'الجمعة:' : 'Friday:'}
                  </p>
                  <p className="time">
                    {i18n.language === 'ar' ? 'مغلق' : 'Closed'}
                  </p>
                </div>
                <div className="hours-item">
                  <p className="day">
                    {i18n.language === 'ar' ? 'السبت:' : 'Saturday:'}
                  </p>
                  <p className="time">10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="info-section">
              <h3>
                {i18n.language === 'ar' ? 'تواصل معنا' : 'Connect With Us'}
              </h3>
              <div className="social-links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>
              {i18n.language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h3>
            
            {formStatus.submitted && formStatus.success ? (
              <div className="form-success-message">
                <i className="fas fa-check-circle"></i>
                <p>{formStatus.message}</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  {t('contact.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          {/* In a real application, this would be replaced with an actual map component */}
          <div className="map-placeholder">
            <div className="map-overlay">
              <h3>
                {i18n.language === 'ar' ? 'موقعنا' : 'Our Location'}
              </h3>
              <p>
                {i18n.language === 'ar'
                  ? 'الرياض، المملكة العربية السعودية'
                  : 'Riyadh, Saudi Arabia'}
              </p>
              <button className="directions-button">
                {i18n.language === 'ar' ? 'الحصول على الاتجاهات' : 'Get Directions'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
