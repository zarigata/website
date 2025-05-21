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
import aiImage from '../assets/AI cat.png';
import marketingImage from '../assets/influencer.png';
import webImage from '../assets/progrtamer.png';

const Services = () => {
  const { t, i18n } = useTranslation();

  // Service details with expanded information tailored for Saudi Arabian market
  const services = [
    {
      id: 'ai',
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      image: aiImage,
      features: [
        i18n.language === 'ar' ? 'حلول ذكية للامتثال لرؤية 2030' : 'Smart Solutions for Vision 2030 Compliance',
        i18n.language === 'ar' ? 'أتمتة العمليات الحكومية والتجارية' : 'Government & Business Process Automation',
        i18n.language === 'ar' ? 'تحليلات البيانات الضخمة للسوق السعودي' : 'Big Data Analytics for Saudi Market',
        i18n.language === 'ar' ? 'حلول ذكاء اصطناعي متوافقة مع الشريعة' : 'Shariah-Compliant AI Solutions'
      ],
      longDescription: i18n.language === 'ar' 
        ? 'نقدم حلول ذكاء اصطناعي متطورة مصممة خصيصًا لدعم رؤية المملكة 2030 وتلبية متطلبات السوق السعودي. تساعد تقنياتنا المتقدمة الشركات والمؤسسات الحكومية على تحقيق التحول الرقمي مع الالتزام بالقيم المحلية والأطر التنظيمية. نحن نتخصص في أتمتة العمليات الحكومية والتجارية، وتحليل البيانات الضخمة لاستخراج رؤى قيمة تناسب السوق السعودي، وتطوير حلول ذكاء اصطناعي متوافقة مع الشريعة الإسلامية.'
        : 'We provide advanced AI solutions specifically designed to support Saudi Vision 2030 and meet the requirements of the Saudi market. Our cutting-edge technologies help businesses and government institutions achieve digital transformation while adhering to local values and regulatory frameworks. We specialize in government and business process automation, big data analytics for extracting valuable insights suitable for the Saudi market, and developing Shariah-compliant AI solutions.'
    },
    {
      id: 'marketing',
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      image: marketingImage,
      features: [
        i18n.language === 'ar' ? 'حملات مخصصة للمواسم السعودية والخليجية' : 'Campaigns for Saudi & Gulf Seasons',
        i18n.language === 'ar' ? 'تسويق المحتوى المتوافق مع القيم المحلية' : 'Content Marketing Aligned with Local Values',
        i18n.language === 'ar' ? 'إدارة حملات المؤثرين السعوديين' : 'Saudi Influencer Campaign Management',
        i18n.language === 'ar' ? 'استراتيجيات التسويق الرقمي ثنائية اللغة' : 'Bilingual Digital Marketing Strategies'
      ],
      longDescription: i18n.language === 'ar'
        ? 'نقدم استراتيجيات تسويق رقمي مصممة خصيصًا للسوق السعودي، مع مراعاة الثقافة المحلية والعادات والتقاليد. نتخصص في إدارة حملات المؤثرين السعوديين، وتطوير محتوى يتوافق مع القيم المحلية، وتصميم حملات مخصصة للمواسم السعودية والخليجية مثل رمضان والعيدين وموسم الرياض. نضمن أن تكون جميع استراتيجياتنا التسويقية ثنائية اللغة (العربية والإنجليزية) لتلبية احتياجات السوق المتنوع في المملكة.'
        : 'We deliver digital marketing strategies specifically crafted for the Saudi market, taking into account local culture, customs, and traditions. We specialize in managing Saudi influencer campaigns, developing content that aligns with local values, and designing campaigns tailored for Saudi and Gulf seasons such as Ramadan, Eid festivals, and Riyadh Season. We ensure all our marketing strategies are bilingual (Arabic and English) to cater to the diverse market needs in the Kingdom.'
    },
    {
      id: 'web',
      title: t('services.web.title'),
      description: t('services.web.description'),
      image: webImage,
      features: [
        i18n.language === 'ar' ? 'تصميم مواقع متوافقة مع معايير الهيئة السعودية للبيانات والذكاء الاصطناعي' : 'SDAIA-Compliant Website Design',
        i18n.language === 'ar' ? 'تطوير منصات التجارة الإلكترونية المتكاملة مع نظام سداد' : 'E-commerce Platforms with SADAD Integration',
        i18n.language === 'ar' ? 'مواقع ثنائية اللغة مع دعم كامل للغة العربية' : 'Bilingual Websites with Full Arabic Support',
        i18n.language === 'ar' ? 'تطبيقات ويب متوافقة مع أنظمة الحكومة الإلكترونية' : 'Web Apps Compatible with E-Government Systems'
      ],
      longDescription: i18n.language === 'ar'
        ? 'نقوم بتطوير مواقع ويب وتطبيقات رقمية مصممة خصيصًا للسوق السعودي، مع التركيز على الامتثال لمعايير الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA) والتكامل مع الأنظمة الحكومية الإلكترونية. نتخصص في إنشاء منصات تجارة إلكترونية متكاملة مع نظام سداد للمدفوعات، ومواقع ثنائية اللغة مع دعم كامل للغة العربية وتصميم يراعي الاتجاه من اليمين إلى اليسار. جميع حلولنا مصممة لتعزيز التحول الرقمي في المملكة وفقًا لرؤية 2030.'
        : 'We develop websites and digital applications specifically designed for the Saudi market, focusing on compliance with Saudi Data & AI Authority (SDAIA) standards and integration with e-government systems. We specialize in creating e-commerce platforms integrated with SADAD payment system, bilingual websites with full Arabic support and right-to-left design considerations. All our solutions are designed to enhance digital transformation in the Kingdom in accordance with Vision 2030.'
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
            id={service.id}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
              <div className="service-badge">
                {i18n.language === 'ar' ? 'متخصصون في السوق السعودي' : 'Saudi Market Specialists'}
              </div>
            </div>
            <div className="service-info">
              <h2>{service.title}</h2>
              <p className="service-long-description">{service.longDescription}</p>
              <div className="service-features">
                <h3>
                  {i18n.language === 'ar' ? 'المميزات المخصصة للسوق السعودي' : 'Saudi-Specific Features'}
                </h3>
                <ul className="saudi-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-cta">
                <button className="cta-button">
                  {i18n.language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header">
          <h2>
            {i18n.language === 'ar' ? 'منهجيتنا في السوق السعودي' : 'Our Saudi Market Approach'}
          </h2>
          <p>
            {i18n.language === 'ar'
              ? 'نتبع منهجية مخصصة تراعي خصوصية السوق السعودي ومتطلبات رؤية 2030 لضمان تحقيق أفضل النتائج لعملائنا.'
              : 'We follow a customized methodology that considers the specifics of the Saudi market and Vision 2030 requirements to ensure the best results for our clients.'}
          </p>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>
              {i18n.language === 'ar' ? 'فهم السوق المحلي' : 'Local Market Understanding'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نبدأ بتحليل شامل للسوق السعودي والمنافسين والجمهور المستهدف مع مراعاة الثقافة المحلية.'
                : 'We begin with a comprehensive analysis of the Saudi market, competitors, and target audience while considering local culture.'}
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>
              {i18n.language === 'ar' ? 'استراتيجية متوافقة مع رؤية 2030' : 'Vision 2030 Aligned Strategy'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نطور استراتيجية تتماشى مع أهداف رؤية 2030 وتلبي احتياجات عملك الخاصة.'
                : 'We develop a strategy that aligns with Vision 2030 goals and meets your specific business needs.'}
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>
              {i18n.language === 'ar' ? 'تنفيذ ثنائي اللغة' : 'Bilingual Implementation'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'ننفذ الحلول بشكل ثنائي اللغة مع مراعاة المعايير التنظيمية السعودية والتكامل مع الأنظمة المحلية.'
                : 'We implement solutions bilingually while adhering to Saudi regulatory standards and integration with local systems.'}
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>
              {i18n.language === 'ar' ? 'قياس النتائج والتطوير المستمر' : 'Measurement & Continuous Development'}
            </h3>
            <p>
              {i18n.language === 'ar'
                ? 'نقيس النتائج باستمرار ونطور الحلول لتتماشى مع التغيرات في السوق السعودي والتشريعات المحلية.'
                : 'We continuously measure results and evolve solutions to align with changes in the Saudi market and local regulations.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
