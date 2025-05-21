// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Privacy Policy Page Component
// This component displays the Privacy Policy for CatchyCompany website
// It emphasizes that we do not collect any personal data from visitors

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Legal.css';

const Privacy = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  
  // Last updated date
  const lastUpdated = "May 21, 2025";

  return (
    <div className={`legal-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="legal-container">
        <div className="legal-header">
          <h1>{i18n.language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
          <p className="last-updated">
            {i18n.language === 'ar' ? 'آخر تحديث: ' : 'Last Updated: '}{lastUpdated}
          </p>
        </div>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'مقدمة' : '1. Introduction'}</h2>
            <p>
              {i18n.language === 'ar' 
                ? 'في CatchyCompany، نحن نقدر خصوصيتك ونلتزم بحمايتها. تصف سياسة الخصوصية هذه ممارساتنا المتعلقة بالمعلومات عند استخدام موقعنا الإلكتروني.'
                : 'At CatchyCompany, we value your privacy and are committed to protecting it. This Privacy Policy describes our information practices when you use our website.'}
            </p>
            <p className="privacy-highlight">
              {i18n.language === 'ar'
                ? 'النقطة الأهم: نحن لا نجمع أي بيانات شخصية من زوار موقعنا.'
                : 'IMPORTANT: We do not collect any personal data from visitors to our website.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'عدم جمع البيانات' : '2. No Data Collection'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'نحن نؤكد أن موقع CatchyCompany لا يجمع أو يخزن أو يعالج أو ينقل أي بيانات شخصية من المستخدمين. عندما تزور موقعنا:'
                : 'We affirm that the CatchyCompany website does not collect, store, process, or transmit any personal data from users. When you visit our website:'}
            </p>
            <ul>
              <li>
                {i18n.language === 'ar'
                  ? 'لا نستخدم ملفات تعريف الارتباط لتتبع نشاطك'
                  : 'We do not use cookies to track your activity'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'لا نجمع عنوان IP الخاص بك'
                  : 'We do not collect your IP address'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'لا نجمع معلومات التصفح أو الجهاز'
                  : 'We do not collect browsing or device information'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'لا نستخدم أدوات التحليلات لتتبع سلوك المستخدم'
                  : 'We do not use analytics tools to track user behavior'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'لا نستخدم أي تقنيات تتبع أخرى'
                  : 'We do not employ any other tracking technologies'}
              </li>
            </ul>
            <p>
              {i18n.language === 'ar'
                ? 'موقعنا هو موقع معلوماتي بحت، مصمم لتقديم معلومات حول خدماتنا دون الحاجة إلى جمع بيانات المستخدم.'
                : 'Our website is purely informational, designed to provide information about our services without the need to collect user data.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'نموذج الاتصال' : '3. Contact Form'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'يحتوي موقعنا على نموذج اتصال يسمح للزوار بالتواصل معنا. عندما تستخدم نموذج الاتصال هذا:'
                : 'Our website contains a contact form that allows visitors to reach out to us. When you use this contact form:'}
            </p>
            <ul>
              <li>
                {i18n.language === 'ar'
                  ? 'المعلومات التي تقدمها (مثل اسمك وعنوان بريدك الإلكتروني ورسالتك) تُستخدم فقط للرد على استفسارك'
                  : 'The information you provide (such as your name, email address, and message) is used solely to respond to your inquiry'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'لا يتم تخزين هذه المعلومات في قاعدة بيانات دائمة'
                  : 'This information is not stored in a permanent database'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'يتم حذف المعلومات بمجرد الانتهاء من التعامل مع استفسارك'
                  : 'The information is deleted once your inquiry has been addressed'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'لا نستخدم معلوماتك لأغراض التسويق أو نشاركها مع أطراف ثالثة'
                  : 'We do not use your information for marketing purposes or share it with third parties'}
              </li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'أمان الموقع' : '4. Website Security'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'على الرغم من أننا لا نجمع بيانات شخصية، إلا أننا نتخذ خطوات لضمان أمان موقعنا:'
                : 'Although we do not collect personal data, we take steps to ensure the security of our website:'}
            </p>
            <ul>
              <li>
                {i18n.language === 'ar'
                  ? 'نحافظ على تحديث موقعنا وبرامجه'
                  : 'We keep our website and its software up to date'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'نستخدم اتصالات HTTPS آمنة'
                  : 'We use secure HTTPS connections'}
              </li>
              <li>
                {i18n.language === 'ar'
                  ? 'نراقب موقعنا بانتظام بحثًا عن نقاط الضعف المحتملة'
                  : 'We regularly monitor our website for potential vulnerabilities'}
              </li>
            </ul>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'الروابط لمواقع خارجية' : '5. Links to External Websites'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'قد يحتوي موقعنا على روابط لمواقع ويب خارجية. لاحظ أن هذه السياسة تنطبق فقط على موقعنا. نحن لا نتحكم ولسنا مسؤولين عن ممارسات الخصوصية لأي مواقع ويب أخرى. نشجعك على قراءة بيانات الخصوصية لأي موقع ويب آخر تزوره.'
                : 'Our website may contain links to external websites. Please note that this policy applies only to our website. We do not control and are not responsible for the privacy practices of any other websites. We encourage you to read the privacy statements of any other websites you visit.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'حقوق الخصوصية' : '6. Privacy Rights'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'بما أننا لا نجمع أي بيانات شخصية، فإن مخاوف الخصوصية التقليدية المتعلقة بالوصول إلى البيانات وتصحيحها وحذفها لا تنطبق على موقعنا. ومع ذلك، نحن نحترم حقوق الخصوصية الخاصة بك ونلتزم بالقوانين المعمول بها في المملكة العربية السعودية وأي تشريعات دولية ذات صلة.'
                : 'Since we do not collect any personal data, traditional privacy concerns regarding data access, rectification, and deletion do not apply to our website. Nevertheless, we respect your privacy rights and comply with applicable laws in the Kingdom of Saudi Arabia and any relevant international legislation.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'التغييرات على سياسة الخصوصية' : '7. Changes to Privacy Policy'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، وإذا كانت التغييرات كبيرة، فسنوفر إشعارًا أكثر وضوحًا.'
                : 'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'تاريخ "آخر تحديث" في أعلى هذه السياسة يشير إلى آخر مرة تمت فيها مراجعة هذه السياسة.'
                : 'The "Last Updated" date at the top of this policy indicates when this policy was last reviewed.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'الاتصال بنا' : '8. Contact Us'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:'
                : 'If you have any questions about this Privacy Policy, please contact us at:'}
            </p>
            <p className="contact-info">
              {i18n.language === 'ar' ? 'البريد الإلكتروني: ' : 'Email: '} 
              <a href="mailto:privacy@catchycompany.com">privacy@catchycompany.com</a>
            </p>
          </section>
          
          <section className="legal-section privacy-declaration">
            <h2>{i18n.language === 'ar' ? 'إعلان عدم جمع البيانات' : 'No Data Collection Declaration'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'نحن، CatchyCompany، نؤكد رسميًا أننا لا نجمع أو نخزن أو نعالج أي بيانات شخصية من زوار موقعنا الإلكتروني. تم تصميم موقعنا ليكون خاليًا تمامًا من تقنيات المراقبة والتتبع. نحن نؤمن بأن خصوصيتك حق أساسي وقد اخترنا عمدًا عدم جمع أي معلومات عنك أثناء استخدامك لموقعنا.'
                : 'We, CatchyCompany, formally declare that we do not collect, store, or process any personal data from visitors to our website. Our website is designed to be completely free of monitoring and tracking technologies. We believe that your privacy is a fundamental right, and we have deliberately chosen not to collect any information about you during your use of our website.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'هذا الإعلان هو جزء من التزامنا بالشفافية والممارسات الأخلاقية على الإنترنت.'
                : 'This declaration is part of our commitment to transparency and ethical practices on the internet.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
