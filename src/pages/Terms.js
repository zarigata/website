// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Terms of Service Page Component
// This component displays the Terms of Service for CatchyCompany website
// It includes detailed terms that users must agree to when using the website

import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/Legal.css';

const Terms = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  
  // Last updated date
  const lastUpdated = "May 21, 2025";

  return (
    <div className={`legal-page ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="legal-container">
        <div className="legal-header">
          <h1>{i18n.language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</h1>
          <p className="last-updated">
            {i18n.language === 'ar' ? 'آخر تحديث: ' : 'Last Updated: '}{lastUpdated}
          </p>
        </div>
        
        <div className="legal-content">
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'مقدمة' : '1. Introduction'}</h2>
            <p>
              {i18n.language === 'ar' 
                ? 'مرحبًا بك في موقع CatchyCompany ("نحن"، "لنا"، "موقعنا"). باستخدامك لموقعنا، فإنك توافق على الالتزام بشروط الخدمة هذه ("الشروط"). يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا. إذا كنت لا توافق على هذه الشروط، فيرجى عدم استخدام موقعنا.'
                : 'Welcome to CatchyCompany website ("we", "us", "our website"). By using our website, you agree to comply with these Terms of Service ("Terms"). Please read these Terms carefully before using our website. If you do not agree to these Terms, please do not use our website.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'تنطبق هذه الشروط على جميع زوار ومستخدمي وغيرهم ممن يصلون إلى موقعنا أو يستخدمونه.'
                : 'These Terms apply to all visitors, users, and others who access or use our website.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'استخدام الموقع' : '2. Use of the Website'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'يتم توفير موقع CatchyCompany للأغراض المعلوماتية فقط. نحن نحتفظ بالحق في تعديل أو إيقاف أو إنهاء أي جانب من جوانب موقعنا في أي وقت دون إشعار.'
                : 'The CatchyCompany website is provided for informational purposes only. We reserve the right to modify, suspend, or discontinue any aspect of our website at any time without notice.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'أنت توافق على استخدام موقعنا فقط للأغراض القانونية وبطريقة لا تنتهك حقوق أي طرف ثالث أو تقيد أو تمنع استخدام أو تمتع أي طرف ثالث بموقعنا.'
                : 'You agree to use our website only for lawful purposes and in a way that does not infringe the rights of any third party or restrict or inhibit any third party\'s use and enjoyment of our website.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'يحظر عليك استخدام موقعنا بأي طريقة قد تسبب ضررًا للموقع أو تضعف توافره أو إمكانية الوصول إليه.'
                : 'You are prohibited from using our website in any way that may cause damage to the website or impair its availability or accessibility.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'الملكية الفكرية' : '3. Intellectual Property'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'جميع المحتويات والمواد والعلامات التجارية والشعارات وأسماء النطاقات وحقوق النشر وحقوق الملكية الفكرية الأخرى الموجودة على موقعنا هي ملك لشركة CatchyCompany أو مرخصة لنا.'
                : 'All content, materials, trademarks, logos, domain names, copyrights, and other intellectual property rights on our website are owned by CatchyCompany or licensed to us.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'لا يجوز لك نسخ أو إعادة إنتاج أو توزيع أو نشر أو تعديل أو إنشاء أعمال مشتقة من أي جزء من موقعنا دون الحصول على إذن كتابي مسبق منا.'
                : 'You may not copy, reproduce, distribute, publish, modify, or create derivative works from any part of our website without our prior written permission.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'إخلاء المسؤولية' : '4. Disclaimer'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'يتم توفير موقعنا "كما هو" و"كما هو متاح" دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية.'
                : 'Our website is provided "as is" and "as available" without any warranties of any kind, either express or implied.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'لا نضمن أن موقعنا سيكون آمنًا أو خاليًا من الأخطاء أو الفيروسات. أنت مسؤول عن تكوين نظام المعلومات الخاص بك واستخدام برامج مكافحة الفيروسات.'
                : 'We do not guarantee that our website will be secure or free from errors or viruses. You are responsible for configuring your information technology and using virus protection software.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'قد يحتوي موقعنا على روابط لمواقع ويب خارجية لا نتحكم فيها. نحن لا نتحمل أي مسؤولية عن محتوى أو ممارسات الخصوصية لهذه المواقع.'
                : 'Our website may contain links to external websites that we do not control. We assume no responsibility for the content or privacy practices of these websites.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'حدود المسؤولية' : '5. Limitation of Liability'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'إلى أقصى حد يسمح به القانون، لن تكون CatchyCompany مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر، خسارة الأرباح أو البيانات أو الاستخدام أو الشهرة، الناشئة عن أو المتعلقة بوصولك إلى موقعنا أو استخدامه.'
                : 'To the maximum extent permitted by law, CatchyCompany will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, or goodwill, arising out of or in connection with your access to or use of our website.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'القانون الحاكم' : '6. Governing Law'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'تخضع هذه الشروط وتفسر وفقًا لقوانين المملكة العربية السعودية، دون اعتبار لمبادئ تنازع القوانين.'
                : 'These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law principles.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'أي نزاع ينشأ عن أو يتعلق بهذه الشروط سيخضع للاختصاص القضائي الحصري للمحاكم المختصة في المملكة العربية السعودية.'
                : 'Any dispute arising out of or relating to these Terms will be subject to the exclusive jurisdiction of the competent courts in the Kingdom of Saudi Arabia.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'التغييرات على الشروط' : '7. Changes to Terms'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'نحتفظ بالحق في تعديل أو تحديث هذه الشروط في أي وقت دون إشعار مسبق. ستكون التغييرات سارية فور نشرها على موقعنا.'
                : 'We reserve the right to modify or update these Terms at any time without prior notice. Changes will be effective immediately upon posting on our website.'}
            </p>
            <p>
              {i18n.language === 'ar'
                ? 'استمرارك في استخدام موقعنا بعد نشر أي تغييرات يشكل قبولًا لتلك التغييرات.'
                : 'Your continued use of our website after any changes are posted constitutes your acceptance of those changes.'}
            </p>
          </section>
          
          <section className="legal-section">
            <h2>{i18n.language === 'ar' ? 'الاتصال بنا' : '8. Contact Us'}</h2>
            <p>
              {i18n.language === 'ar'
                ? 'إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا على:'
                : 'If you have any questions about these Terms of Service, please contact us at:'}
            </p>
            <p className="contact-info">
              {i18n.language === 'ar' ? 'البريد الإلكتروني: ' : 'Email: '} 
              <a href="mailto:legal@catchycompany.com">legal@catchycompany.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
