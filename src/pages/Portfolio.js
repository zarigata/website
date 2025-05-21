// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Portfolio Page Component
// This component showcases CatchyCompany's previous work and projects
// It displays projects in a grid layout with filtering options

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Portfolio.css';

// Import images
import projectImage1 from '../assets/cat on coputer.png';
import projectImage2 from '../assets/cat presenting thing.png';
import projectImage3 from '../assets/Curious Green Cat with Question Mark.png';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('all');

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: i18n.language === 'ar' ? 'موقع شركة التكنولوجيا السعودية' : 'Saudi Tech Company Website',
      category: 'web',
      image: projectImage1,
      description: i18n.language === 'ar'
        ? 'تصميم وتطوير موقع ويب متجاوب لشركة تكنولوجيا رائدة في المملكة العربية السعودية.'
        : 'Design and development of a responsive website for a leading technology company in Saudi Arabia.',
      client: i18n.language === 'ar' ? 'تك سعودي' : 'Saudi Tech',
      year: '2024'
    },
    {
      id: 2,
      title: i18n.language === 'ar' ? 'حملة تسويق رقمي للعلامة التجارية الاستهلاكية' : 'Digital Marketing Campaign for Consumer Brand',
      category: 'marketing',
      image: projectImage2,
      description: i18n.language === 'ar'
        ? 'استراتيجية تسويق رقمي شاملة أدت إلى زيادة بنسبة 150٪ في مشاركة العملاء وزيادة المبيعات بنسبة 75٪.'
        : 'Comprehensive digital marketing strategy that resulted in a 150% increase in customer engagement and 75% growth in sales.',
      client: i18n.language === 'ar' ? 'منتجات النجمة' : 'Star Products',
      year: '2024'
    },
    {
      id: 3,
      title: i18n.language === 'ar' ? 'روبوت محادثة ذكي للخدمات المالية' : 'AI Chatbot for Financial Services',
      category: 'ai',
      image: projectImage3,
      description: i18n.language === 'ar'
        ? 'تطوير روبوت محادثة مدعوم بالذكاء الاصطناعي لمؤسسة مالية، مما أدى إلى تحسين خدمة العملاء وتقليل وقت الاستجابة.'
        : 'Development of an AI-powered chatbot for a financial institution, resulting in improved customer service and reduced response time.',
      client: i18n.language === 'ar' ? 'بنك الاستثمار السعودي' : 'Saudi Investment Bank',
      year: '2023'
    },
    {
      id: 4,
      title: i18n.language === 'ar' ? 'تطبيق التجارة الإلكترونية' : 'E-commerce Application',
      category: 'web',
      image: projectImage1,
      description: i18n.language === 'ar'
        ? 'تصميم وتطوير تطبيق تجارة إلكترونية كامل الميزات لبائع تجزئة سعودي.'
        : 'Design and development of a full-featured e-commerce application for a Saudi retailer.',
      client: i18n.language === 'ar' ? 'متجر الأناقة' : 'Elegance Store',
      year: '2023'
    },
    {
      id: 5,
      title: i18n.language === 'ar' ? 'استراتيجية وسائل التواصل الاجتماعي للعلامة التجارية الفاخرة' : 'Social Media Strategy for Luxury Brand',
      category: 'marketing',
      image: projectImage2,
      description: i18n.language === 'ar'
        ? 'تطوير وتنفيذ استراتيجية وسائل التواصل الاجتماعي لعلامة تجارية فاخرة تستهدف السوق السعودي.'
        : 'Development and implementation of a social media strategy for a luxury brand targeting the Saudi market.',
      client: i18n.language === 'ar' ? 'فخامة العربية' : 'Arabian Luxury',
      year: '2023'
    },
    {
      id: 6,
      title: i18n.language === 'ar' ? 'نظام تحليلات البيانات للبيع بالتجزئة' : 'Data Analytics System for Retail',
      category: 'ai',
      image: projectImage3,
      description: i18n.language === 'ar'
        ? 'تطوير نظام تحليلات مدعوم بالذكاء الاصطناعي لسلسلة متاجر بيع بالتجزئة لتحسين المخزون وتوقعات المبيعات.'
        : 'Development of an AI-powered analytics system for a retail chain to optimize inventory and sales forecasting.',
      client: i18n.language === 'ar' ? 'متاجر المستقبل' : 'Future Stores',
      year: '2022'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Category labels
  const categories = {
    all: i18n.language === 'ar' ? 'الكل' : 'All',
    web: i18n.language === 'ar' ? 'تطوير الويب' : 'Web Development',
    marketing: i18n.language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing',
    ai: i18n.language === 'ar' ? 'الذكاء الاصطناعي' : 'AI Solutions'
  };

  return (
    <div className={`portfolio-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Portfolio Header */}
      <section className="portfolio-header">
        <div className="portfolio-header-content">
          <h1>{t('portfolio.title')}</h1>
          <p>
            {i18n.language === 'ar'
              ? 'استكشف مجموعة مختارة من مشاريعنا الناجحة في مجالات الذكاء الاصطناعي والتسويق وتطوير الويب.'
              : 'Explore a selection of our successful projects in AI, marketing, and web development.'}
          </p>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="portfolio-filters">
        <div className="filter-buttons">
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              className={`filter-button ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {value}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Projects Grid */}
      <section className="portfolio-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="portfolio-item">
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <p>
                      <strong>
                        {i18n.language === 'ar' ? 'العميل: ' : 'Client: '}
                      </strong>
                      {project.client}
                    </p>
                    <p>
                      <strong>
                        {i18n.language === 'ar' ? 'السنة: ' : 'Year: '}
                      </strong>
                      {project.year}
                    </p>
                  </div>
                  <button className="view-project-btn">
                    {t('portfolio.viewProject')}
                  </button>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{categories[project.category]}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta">
        <div className="cta-content">
          <h2>
            {i18n.language === 'ar'
              ? 'هل أنت مستعد لبدء مشروعك التالي؟'
              : 'Ready to start your next project?'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'دعنا نساعدك في تحقيق رؤيتك الرقمية.'
              : 'Let us help you bring your digital vision to life.'}
          </p>
          <button className="cta-button">
            {i18n.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
