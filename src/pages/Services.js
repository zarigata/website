// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Services Page Component
// This component displays detailed information about CatchyCompany's services
// It features service descriptions, benefits, and process information

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

// Import images
import aiImage from '../assets/Curious Green Cat with Question Mark.png';
import marketingImage from '../assets/cat presenting thing.png';
import webImage from '../assets/cat on coputer.png';

const Services = () => {
  const { t, i18n } = useTranslation();

  // Service details with expanded information
  const services = [
    {
      id: 'ai',
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      image: aiImage,
      features: [
        i18n.language === 'ar' ? 'تحليل البيانات المتقدم' : 'Advanced Data Analysis',
        i18n.language === 'ar' ? 'حلول الذكاء الاصطناعي المخصصة' : 'Custom AI Solutions',
        i18n.language === 'ar' ? 'أتمتة العمليات' : 'Process Automation',
        i18n.language === 'ar' ? 'تحسين اتخاذ القرار' : 'Decision-Making Optimization'
      ],
      longDescription: i18n.language === 'ar' 
        ? 'نقدم حلول ذكاء اصطناعي متطورة مصممة خصيصًا لتلبية احتياجات عملك الفريدة. من تحليل البيانات المتقدم إلى أتمتة العمليات، تساعد خدماتنا في مجال الذكاء الاصطناعي الشركات على تحسين الكفاءة وتعزيز النمو وتحقيق ميزة تنافسية في السوق السعودي.'
        : 'We provide cutting-edge AI solutions tailored to meet your unique business needs. From advanced data analysis to process automation, our AI services help businesses improve efficiency, drive growth, and gain a competitive edge in the Saudi market.'
    },
    {
      id: 'marketing',
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      image: marketingImage,
      features: [
        i18n.language === 'ar' ? 'استراتيجيات التسويق الرقمي' : 'Digital Marketing Strategies',
        i18n.language === 'ar' ? 'إدارة وسائل التواصل الاجتماعي' : 'Social Media Management',
        i18n.language === 'ar' ? 'تحسين محركات البحث (SEO)' : 'Search Engine Optimization (SEO)',
        i18n.language === 'ar' ? 'حملات الإعلانات المدفوعة' : 'Paid Advertising Campaigns'
      ],
      longDescription: i18n.language === 'ar'
        ? 'نصمم استراتيجيات تسويق رقمي مخصصة تناسب السوق السعودي. من إدارة وسائل التواصل الاجتماعي إلى تحسين محركات البحث وحملات الإعلانات المدفوعة، نساعد عملائنا على الوصول إلى جمهورهم المستهدف وتحقيق نتائج ملموسة.'
        : 'We design custom digital marketing strategies tailored to the Saudi market. From social media management to search engine optimization and paid advertising campaigns, we help our clients reach their target audience and achieve tangible results.'
    },
    {
      id: 'web',
      title: t('services.web.title'),
      description: t('services.web.description'),
      image: webImage,
      features: [
        i18n.language === 'ar' ? 'تصميم مواقع الويب المستجيبة' : 'Responsive Website Design',
        i18n.language === 'ar' ? 'تطوير تطبيقات الويب' : 'Web Application Development',
        i18n.language === 'ar' ? 'تحسين تجربة المستخدم (UX)' : 'User Experience (UX) Optimization',
        i18n.language === 'ar' ? 'صيانة وتحديث المواقع' : 'Website Maintenance & Updates'
      ],
      longDescription: i18n.language === 'ar'
        ? 'نقوم بإنشاء مواقع ويب جميلة ومستجيبة تعكس هوية علامتك التجارية وتلبي احتياجات عملك. من التصميم الأولي إلى التطوير والإطلاق والصيانة المستمرة، نقدم حلول مواقع ويب شاملة تساعد في تعزيز وجودك الرقمي.'
        : 'We create beautiful, responsive websites that reflect your brand identity and meet your business needs. From initial design to development, launch, and ongoing maintenance, we provide comprehensive website solutions that help enhance your digital presence.'
    }
  ];

  return (
    <div className={`services-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Services Header */}
      <section className="services-header">
        <div className="services-header-content">
          <h1>{t('services.title')}</h1>
          <p>
            {i18n.language === 'ar'
              ? 'نقدم مجموعة شاملة من الخدمات الرقمية لمساعدة عملك على النمو والازدهار في السوق السعودي.'
              : 'We offer a comprehensive range of digital services to help your business grow and thrive in the Saudi market.'}
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="services-detailed">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-detailed ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-info">
              <h2>{service.title}</h2>
              <p className="service-long-description">{service.longDescription}</p>
              <div className="service-features">
                <h3>
                  {i18n.language === 'ar' ? 'المميزات' : 'Features'}
                </h3>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>
            {i18n.language === 'ar' ? 'عمليتنا' : 'Our Process'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'نتبع نهجًا منظمًا لضمان تقديم نتائج عالية الجودة لعملائنا.'
              : 'We follow a structured approach to ensure high-quality results for our clients.'}
          </p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>
              {i18n.language === 'ar' ? 'استشارة وتحليل' : 'Consultation & Analysis'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نبدأ بفهم احتياجاتك وأهدافك وتحليل وضعك الحالي.'
                : 'We start by understanding your needs and goals, and analyzing your current situation.'}
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>
              {i18n.language === 'ar' ? 'تطوير الاستراتيجية' : 'Strategy Development'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نصمم استراتيجية مخصصة تناسب احتياجاتك المحددة.'
                : 'We design a custom strategy tailored to your specific needs.'}
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>
              {i18n.language === 'ar' ? 'التنفيذ' : 'Implementation'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'ننفذ الاستراتيجية باستخدام أحدث الأدوات والتقنيات.'
                : 'We implement the strategy using the latest tools and techniques.'}
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>
              {i18n.language === 'ar' ? 'المراقبة والتحسين' : 'Monitoring & Optimization'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نراقب النتائج باستمرار ونقوم بالتحسينات اللازمة لضمان النجاح.'
                : 'We continuously monitor results and make necessary improvements to ensure success.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
