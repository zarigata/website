// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: About Page Component
// This component provides information about CatchyCompany, including mission, vision, and team

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

// Import AI image for the expertise card
import aiImage from '../assets/cat on coputer.png'; // AI image

const About = () => {
  const { t, i18n } = useTranslation();

  // International expertise data
  const internationalExpertise = [
    {
      id: 1,
      title: i18n.language === 'ar' ? 'خبراء التسويق البرازيليين' : 'Brazilian Marketing Experts',
      emoji: '🇧🇷',
      description: i18n.language === 'ar'
        ? 'نحن نفتخر بفريقنا من خبراء التسويق البرازيليين الذين يجلبون إبداعًا وابتكارًا فريدًا إلى السوق السعودي. مع سنوات من الخبرة في الحملات الرقمية الناجحة، يقدم فريقنا البرازيلي رؤى جديدة ونهجًا إبداعيًا للتسويق.'
        : 'We pride ourselves on our team of Brazilian marketing experts who bring unique creativity and innovation to the Saudi market. With years of experience in successful digital campaigns, our Brazilian team offers fresh perspectives and creative approaches to marketing.'
    },
    {
      id: 2,
      title: i18n.language === 'ar' ? 'مهندسو الذكاء الاصطناعي والأتمتة البرازيليون' : 'Brazilian AI & Automation Engineers',
      emoji: '🤖',
      description: i18n.language === 'ar'
        ? 'يضم فريقنا بعضًا من أفضل مهندسي الذكاء الاصطناعي والأتمتة من البرازيل. بفضل خبرتهم التقنية المتقدمة وفهمهم العميق للتكنولوجيا الناشئة، يقدمون حلولًا مبتكرة تدفع النمو الرقمي لعملائنا.'
        : 'Our team includes some of the best AI and automation engineers from Brazil. With their advanced technical expertise and deep understanding of emerging technologies, they deliver innovative solutions that drive digital growth for our clients.'
    },
    {
      id: 3,
      title: i18n.language === 'ar' ? 'الشراكة السعودية البرازيلية' : 'Saudi-Brazilian Partnership',
      emoji: '🇸🇦🤝🇧🇷',
      description: i18n.language === 'ar'
        ? 'نحن نجمع بين أفضل ما في العالمين - المعرفة المحلية العميقة بالسوق السعودي والإبداع والابتكار التقني من البرازيل. هذه الشراكة الفريدة تمكننا من تقديم حلول مخصصة تلبي الاحتياجات المحددة لعملائنا في المملكة العربية السعودية.'
        : 'We combine the best of both worlds - deep local knowledge of the Saudi market and technical creativity and innovation from Brazil. This unique partnership enables us to deliver tailored solutions that meet the specific needs of our clients in Saudi Arabia.'
    }
  ];

  return (
    <div className={`about-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* About Header */}
      <section className="about-header">
        <div className="about-header-content">
          <h1>{t('about.title')}</h1>
          <p className="about-description">{t('about.description')}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-box">
            <h2>
              {i18n.language === 'ar' ? 'مهمتنا' : 'Our Mission'}
            </h2>
            <p>{t('about.mission')}</p>
          </div>
          <div className="vision-box">
            <h2>
              {i18n.language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
            </h2>
            <p>{t('about.vision')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="section-header">
          <h2>
            {i18n.language === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
        </div>
        <div className="values-container">
          <div className="value-card">
            <h3>
              {i18n.language === 'ar' ? 'الابتكار' : 'Innovation'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نسعى دائمًا لإيجاد حلول مبتكرة ومبدعة لتحديات عملائنا.'
                : 'We constantly seek innovative and creative solutions to our clients\' challenges.'}
            </p>
          </div>
          <div className="value-card">
            <h3>
              {i18n.language === 'ar' ? 'التميز' : 'Excellence'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نلتزم بتقديم أعلى مستويات الجودة في كل ما نقوم به.'
                : 'We are committed to delivering the highest quality in everything we do.'}
            </p>
          </div>
          <div className="value-card">
            <h3>
              {i18n.language === 'ar' ? 'النزاهة' : 'Integrity'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نعمل بشفافية وصدق في جميع تعاملاتنا مع العملاء والشركاء.'
                : 'We operate with transparency and honesty in all our dealings with clients and partners.'}
            </p>
          </div>
          <div className="value-card">
            <h3>
              {i18n.language === 'ar' ? 'التعاون' : 'Collaboration'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نؤمن بقوة العمل الجماعي والشراكات لتحقيق نتائج استثنائية.'
                : 'We believe in the power of teamwork and partnerships to achieve exceptional results.'}
            </p>
          </div>
        </div>
      </section>

      {/* International Expertise */}
      <section className="international-expertise-section">
        <div className="section-header">
          <h2>
            {i18n.language === 'ar' ? 'خبراتنا الدولية' : 'Our International Expertise'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'نجمع بين أفضل المواهب من البرازيل والمملكة العربية السعودية'
              : 'Bringing together the best talent from Brazil and Saudi Arabia'}
          </p>
        </div>
        
        {/* Flags Animation Container */}
        <div className="flags-animation">
          <div className="flag saudi-flag">
            <div className="flag-emoji">🇸🇦</div>
            <h3>{i18n.language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</h3>
          </div>
          <div className="plus-sign">+</div>
          <div className="flag brazil-flag">
            <div className="flag-emoji">🇧🇷</div>
            <h3>{i18n.language === 'ar' ? 'البرازيل' : 'Brazil'}</h3>
          </div>
          <div className="equals-sign">=</div>
          <div className="partnership-result">
            <h3>{i18n.language === 'ar' ? 'شراكة مثالية' : 'Perfect Partnership'}</h3>
          </div>
        </div>
        
        {/* Expertise Cards */}
        <div className="expertise-cards">
          {internationalExpertise.map(item => (
            <div key={item.id} className="expertise-card">
              <div className="expertise-image">
                <div className="expertise-emoji">{item.emoji}</div>
              </div>
              <div className="expertise-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="section-header">
          <h2>
            {i18n.language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us'}
          </h2>
        </div>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>
              {i18n.language === 'ar' ? 'خبرة محلية' : 'Local Expertise'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'فهم عميق للسوق السعودي وثقافته واحتياجاته الفريدة.'
                : 'Deep understanding of the Saudi market, culture, and unique needs.'}
            </p>
          </div>
          <div className="reason-card">
            <h3>
              {i18n.language === 'ar' ? 'حلول مخصصة' : 'Tailored Solutions'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نصمم استراتيجيات وحلول مخصصة تناسب احتياجات عملك المحددة.'
                : 'We design custom strategies and solutions that fit your specific business needs.'}
            </p>
          </div>
          <div className="reason-card">
            <h3>
              {i18n.language === 'ar' ? 'نهج شامل' : 'Comprehensive Approach'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نقدم مجموعة كاملة من الخدمات الرقمية تحت سقف واحد.'
                : 'We offer a complete range of digital services under one roof.'}
            </p>
          </div>
          <div className="reason-card">
            <h3>
              {i18n.language === 'ar' ? 'نتائج قابلة للقياس' : 'Measurable Results'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نركز على تحقيق نتائج ملموسة وقابلة للقياس لعملائنا.'
                : 'We focus on delivering tangible, measurable results for our clients.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
