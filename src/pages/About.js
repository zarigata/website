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

// Import team member images (using cat images as placeholders)
import teamMember1 from '../assets/cat on coputer.png';
import teamMember2 from '../assets/cat presenting thing.png';
import teamMember3 from '../assets/Curious Green Cat with Question Mark.png';

const About = () => {
  const { t, i18n } = useTranslation();

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: i18n.language === 'ar' ? 'أحمد الفيصل' : 'Ahmed Al-Faisal',
      role: i18n.language === 'ar' ? 'المدير التنفيذي' : 'CEO',
      image: teamMember1,
      bio: i18n.language === 'ar'
        ? 'خبير في التسويق الرقمي مع أكثر من 10 سنوات من الخبرة في السوق السعودي.'
        : 'Digital marketing expert with over 10 years of experience in the Saudi market.'
    },
    {
      id: 2,
      name: i18n.language === 'ar' ? 'سارة القحطاني' : 'Sara Al-Qahtani',
      role: i18n.language === 'ar' ? 'مدير التكنولوجيا' : 'CTO',
      image: teamMember2,
      bio: i18n.language === 'ar'
        ? 'متخصصة في الذكاء الاصطناعي وتطوير الويب مع خبرة واسعة في قيادة فرق التكنولوجيا.'
        : 'AI and web development specialist with extensive experience leading technology teams.'
    },
    {
      id: 3,
      name: i18n.language === 'ar' ? 'محمد العتيبي' : 'Mohammed Al-Otaibi',
      role: i18n.language === 'ar' ? 'مدير التسويق' : 'Marketing Director',
      image: teamMember3,
      bio: i18n.language === 'ar'
        ? 'استراتيجي تسويق مبدع مع فهم عميق للسوق السعودي والاتجاهات الرقمية.'
        : 'Creative marketing strategist with a deep understanding of the Saudi market and digital trends.'
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

      {/* Our Team */}
      <section className="team-section">
        <div className="section-header">
          <h2>
            {i18n.language === 'ar' ? 'فريقنا' : 'Our Team'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'تعرف على الخبراء الذين يقودون كاتشي كومباني'
              : 'Meet the experts behind CatchyCompany'}
          </p>
        </div>
        <div className="team-members">
          {teamMembers.map(member => (
            <div key={member.id} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
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
