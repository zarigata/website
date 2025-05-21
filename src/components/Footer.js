// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Footer Component
// This component displays the website footer with copyright information and links
// It supports both Arabic (RTL) and English (LTR) layouts

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CatchyCompany</h3>
            <p>
              {i18n.language === 'ar' 
                ? 'شريكك الموثوق للتحول الرقمي في السوق السعودي' 
                : 'Your trusted partner for digital transformation in the Saudi market'}
            </p>
          </div>
          
          <div className="footer-section">
            <h3>{t('navigation.services')}</h3>
            <ul>
              <li>{t('services.ai.title')}</li>
              <li>{t('services.marketing.title')}</li>
              <li>{t('services.web.title')}</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>{t('navigation.contact')}</h3>
            <p>info@catchycompany.com</p>
            <p>+966 12 345 6789</p>
          </div>
          
          <div className="footer-section social-media">
            <h3>
              {i18n.language === 'ar' 
                ? 'تابعنا' 
                : 'Follow Us'}
            </h3>
            <div className="social-icons">
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
        
        <div className="footer-bottom">
          <p>{t('footer.rights').replace('2025', currentYear)}</p>
          <div className="footer-links">
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <Link to="/terms">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
