// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Home Page Component
// This component serves as the landing page for CatchyCompany website
// It features a hero section, services overview, and call-to-action elements

import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

// Import images
import aiImage from '../assets/Curious Green Cat with Question Mark.png';
import marketingImage from '../assets/cat presenting thing.png';
import webImage from '../assets/cat on coputer.png';

const Home = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className={`home-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t('hero.title')}</h1>
          <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
          <p className="hero-description">{t('hero.description')}</p>
          <Link to="/contact" className="cta-button">
            {t('hero.cta')}
          </Link>
        </div>
        <div className="hero-image">
          <img src={marketingImage} alt="CatchyCompany" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="section-header">
          <h2>{t('services.title')}</h2>
        </div>
        <div className="services-grid">
          {/* AI Solutions */}
          <div className="service-card">
            <div className="service-icon">
              <img src={aiImage} alt={t('services.ai.title')} />
            </div>
            <h3>{t('services.ai.title')}</h3>
            <p>{t('services.ai.description')}</p>
            <Link to="/services" className="service-link">
              {i18n.language === 'ar' ? 'اكتشف المزيد →' : 'Learn More →'}
            </Link>
          </div>

          {/* Digital Marketing */}
          <div className="service-card">
            <div className="service-icon">
              <img src={marketingImage} alt={t('services.marketing.title')} />
            </div>
            <h3>{t('services.marketing.title')}</h3>
            <p>{t('services.marketing.description')}</p>
            <Link to="/services" className="service-link">
              {i18n.language === 'ar' ? 'اكتشف المزيد →' : 'Learn More →'}
            </Link>
          </div>

          {/* Website Development */}
          <div className="service-card">
            <div className="service-icon">
              <img src={webImage} alt={t('services.web.title')} />
            </div>
            <h3>{t('services.web.title')}</h3>
            <p>{t('services.web.description')}</p>
            <Link to="/services" className="service-link">
              {i18n.language === 'ar' ? 'اكتشف المزيد →' : 'Learn More →'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="about-snippet">
        <div className="about-content">
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>
          <Link to="/about" className="secondary-button">
            {i18n.language === 'ar' ? 'تعرف علينا أكثر' : 'Learn More About Us'}
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>
            {i18n.language === 'ar' 
              ? 'جاهز لتحويل وجودك الرقمي؟' 
              : 'Ready to transform your digital presence?'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'دعنا نساعدك في تحقيق أهدافك الرقمية في السوق السعودي.'
              : 'Let us help you achieve your digital goals in the Saudi market.'}
          </p>
          <Link to="/contact" className="cta-button">
            {t('contact.title')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
