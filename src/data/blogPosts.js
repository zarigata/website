// ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███╗   ██╗██╗   ██╗
// ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║╚██╗ ██╔╝██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚██╗ ██╔╝
// ██║     ███████║   ██║   ██║     ███████║ ╚████╔╝ ██║     ██║   ██║██╔████╔██║██████╔╝███████║██╔██╗ ██║ ╚████╔╝ 
// ██║     ██╔══██║   ██║   ██║     ██╔══██║  ╚██╔╝  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║██║╚██╗██║  ╚██╔╝  
// ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║   ██║   ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║██║ ╚████║   ██║   
//  ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
// CODEX: Blog Posts Data
// This file contains the data for blog posts focused on Saudi market topics

// Import images for blog posts
import aiImage from '../assets/AI cat.png';
import marketingImage from '../assets/influencer.png';
import webImage from '../assets/progrtamer.png';
import vision2030Image from '../assets/AI cat.png'; // Replace with actual Vision 2030 image

// Blog posts data structure
const blogPosts = [
  {
    id: 5,
    title: {
      en: 'Saudi Arabia\'s AI Revolution: A 2025 Deep Dive into Vision 2030\'s Digital Transformation',
      ar: 'ثورة الذكاء الاصطناعي في المملكة العربية السعودية: نظرة متعمقة على تحول رؤية 2030 الرقمي في 2025'
    },
    category: 'ai',
    image: aiImage,
    summary: {
      en: 'An in-depth analysis of Saudi Arabia\'s groundbreaking AI and digital transformation journey, key achievements in 2025, and the roadmap ahead under Vision 2030.',
      ar: 'تحليل متعمق لرحلة المملكة العربية السعودية الرائدة في مجال الذكاء الاصطناعي والتحول الرقمي، والإنجازات الرئيسية في 2025، والخارطة الطريق المستقبلية في إطار رؤية 2030.'
    },
    date: 'May 21, 2025',
    author: {
      en: 'Saudi Digital Insights Team',
      ar: 'فريق الرؤى الرقمية السعودية'
    },
    content: {
      en: `<h2>Executive Summary</h2>
      <p>As we reach the midpoint of 2025, Saudi Arabia's digital transformation under Vision 2030 has achieved remarkable milestones, particularly in artificial intelligence (AI) and smart city development. The Kingdom has emerged as a global leader in AI adoption and innovation, with the Saudi Data & AI Authority (SDAIA) reporting unprecedented growth across all digital sectors.</p>
      
      <h3>Key Achievements in 2025</h3>
      <div class="achievement-grid">
        <div class="achievement-item">
          <h4>Global AI Leadership</h4>
          <p>Ranked #1 in Government AI Strategy by Global AI Index 2024</p>
        </div>
        <div class="achievement-item">
          <h4>Investment Growth</h4>
          <p>$1.7B+ in AI startup funding in 2024, growing at 59% CAGR</p>
        </div>
        <div class="achievement-item">
          <h4>Digital Infrastructure</h4>
          <p>62 data centers (22 active, 40 under development) with 10 supercomputers</p>
        </div>
        <div class="achievement-item">
          <h4>AI Workforce</h4>
          <p>38,000+ AI graduates since 2019, with 51% annual growth in AI professionals</p>
        </div>
      </div>
      
      <h2>National AI Strategy: Building the Foundation</h2>
      <p>Saudi Arabia's National AI Strategy, implemented by SDAIA, focuses on seven strategic pillars that have driven the Kingdom's digital transformation:</p>
      
      <h3>1. Policy & Regulation Framework</h3>
      <ul>
        <li>Established 14 comprehensive AI and data regulations in 2024</li>
        <li>Created 245 data management offices across government entities</li>
        <li>Launched the National Data Bank and Estishraf platform</li>
      </ul>
      
      <h3>2. Digital Infrastructure Development</h3>
      <p>The Kingdom has made significant investments in building world-class digital infrastructure:</p>
      <ul>
        <li>10 supercomputers (8 in global top 500)</li>
        <li>100TB+ of integrated government data in the National Data Lake</li>
        <li>30% YoY growth in public cloud services market</li>
      </ul>
      
      <h2>NEOM and THE LINE: The Future of Smart Cities</h2>
      <p>NEOM's THE LINE project represents the world's most ambitious smart city initiative, with AI at its core:</p>
      <div class="neom-highlights">
        <div class="highlight">
          <h4>AI-Powered Urban Living</h4>
          <p>90% of city operations will be automated using AI, with predictive analytics optimizing everything from traffic to energy use.</p>
        </div>
        <div class="highlight">
          <h4>Digital Twin Technology</h4>
          <p>Real-time digital replicas of the city enable continuous optimization and simulation of urban systems.</p>
        </div>
      </div>
      
      <h2>Investment Opportunities in Saudi's AI Ecosystem</h2>
      <p>The Kingdom's AI market presents numerous opportunities for investors and businesses:</p>
      <table class="investment-table">
        <thead>
          <tr>
            <th>Sector</th>
            <th>Growth (2024-2025)</th>
            <th>Key Opportunities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI Startups</td>
            <td>67%</td>
            <td>Enterprise AI solutions, Arabic NLP, Computer Vision</td>
          </tr>
          <tr>
            <td>Smart Cities</td>
            <td>42%</td>
            <td>IoT infrastructure, Urban Analytics, Mobility Solutions</td>
          </tr>
          <tr>
            <td>Healthcare AI</td>
            <td>58%</td>
            <td>Diagnostic AI, Predictive Analytics, Telemedicine</td>
          </tr>
          <tr>
            <td>Fintech</td>
            <td>53%</td>
            <td>AI-powered Banking, Fraud Detection, Islamic Fintech</td>
          </tr>
        </tbody>
      </table>
      
      <h2>Challenges and the Path Forward</h2>
      <p>While significant progress has been made, challenges remain in areas such as:</p>
      <ul>
        <li>Bridging the AI skills gap through education and training</li>
        <li>Ensuring ethical AI development and deployment</li>
        <li>Enhancing cross-border data flows while maintaining security</li>
        <li>Accelerating AI adoption in traditional sectors</li>
      </ul>
      
      <p>The Kingdom remains committed to its Vision 2030 goals, with AI and digital transformation at the forefront of its economic diversification strategy.</p>`,
      
      ar: `<h2>ملخص تنفيذي</h2>
      <p>مع وصولنا إلى منتصف عام 2025، حقق التحول الرقمي للمملكة العربية السعودية في إطار رؤية 2030 إنجازات ملحوظة، خاصة في مجال الذكاء الاصطناعي وتطوير المدن الذكية. برزت المملكة كرائدة عالميًا في اعتماد الذكاء الاصطناعي والابتكار، حيث أبلغت الهيئة السعودية للبيانات والذكاء الاصطناعي (سديا) عن نمو غير مسبوق في جميع القطاعات الرقمية.</p>
      
      <h3>أبرز الإنجازات في 2025</h3>
      <div class="achievement-grid">
        <div class="achievement-item">
          <h4>الريادة العالمية في الذكاء الاصطناعي</h4>
          <p>المرتبة الأولى في استراتيجية الحكومة للذكاء الاصطناعي حسب مؤشر الذكاء الاصطناعي العالمي 2024</p>
        </div>
        <div class="achievement-item">
          <h4>نمو الاستثمار</h4>
          <p>أكثر من 1.7 مليار دولار في تمويل شركات الذكاء الاصطناعي الناشئة في 2024، بمعدل نمو سنوي مركب 59%</p>
        </div>
        <div class="achievement-item">
          <h4>البنية التحتية الرقمية</h4>
          <p>62 مركز بيانات (22 نشطًا، 40 قيد التطوير) مع 10 حواسيب فائقة</p>
        </div>
        <div class="achievement-item">
          <h4>القوى العاملة في الذكاء الاصطناعي</h4>
          <p>أكثر من 38,000 خريج في مجال الذكاء الاصطناعي منذ 2019، مع نمو سنوي بنسبة 51% في المتخصصين</p>
        </div>
      </div>
      
      <h2>الاستراتيجية الوطنية للذكاء الاصطناعي: بناء الأسس</h2>
      <p>تركز الاستراتيجية الوطنية للذكاء الاصطناعي في المملكة العربية السعودية، التي تنفذها سدايا، على سبعة ركائز استراتيجية قادت التحول الرقمي للمملكة:</p>
      
      <h3>1. إطار السياسات واللوائح</h3>
      <ul>
        <li>إصدار 14 لائحة شاملة للذكاء الاصطناعي والبيانات في 2024</li>
        <li>إنشاء 245 مكتبًا لإدارة البيانات في الجهات الحكومية</li>
        <li>إطلاق البنك الوطني للبيانات ومنصة استشراف</li>
      </ul>
      
      <h3>2. تطوير البنية التحتية الرقمية</h3>
      <p>استثمرت المملكة بشكل كبير في بناء بنية تحتية رقمية عالمية المستوى:</p>
      <ul>
        <li>10 حواسيب فائقة (8 منها ضمن أفضل 500 حاسوب عالميًا)</li>
        <li>أكثر من 100 تيرابايت من البيانات الحكومية المتكاملة في البحيرة الوطنية للبيانات</li>
        <li>نمو سنوي بنسبة 30% في سوق خدمات الحوسبة السحابية العامة</li>
      </ul>
      
      <h2>نيوم والخط: مستقبل المدن الذكية</h2>
      <p>يمثل مشروع "ذا لاين" في نيوم أكثر مبادرات المدن الذكية طموحًا في العالم، مع وضع الذكاء الاصطناعي في صميمه:</p>
      <div class="neom-highlights">
        <div class="highlight">
          <h4>الحياة الحضرية المدعومة بالذكاء الاصطناعي</h4>
          <p>سيتم أتمتة 90% من عمليات المدينة باستخدام الذكاء الاصطناعي، مع تحليلات تنبؤية تحسن كل شيء من حركة المرور إلى استهلاك الطاقة.</p>
        </div>
        <div class="highlight">
          <h4>تقنية التوأم الرقمي</h4>
          <p>تمكن النسخ المتماثلة الرقمية الفورية للمدينة من التحسين المستمر والمحاكاة للأنظمة الحضرية.</p>
        </div>
      </div>
      
      <h2>فرص الاستثمار في منظومة الذكاء الاصطناعي السعودية</h2>
      <p>يقدم سوق الذكاء الاصطناعي في المملكة العديد من الفرص للمستثمرين والشركات:</p>
      <table class="investment-table">
        <thead>
          <tr>
            <th>القطاع</th>
            <th>النمو (2024-2025)</th>
            <th>أبرز الفرص</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>شركات الذكاء الاصطناعي الناشئة</td>
            <td>67%</td>
            <td>حلول الذكاء الاصطناعي المؤسسي، معالجة اللغة العربية، الرؤية الحاسوبية</td>
          </tr>
          <tr>
            <td>المدن الذكية</td>
            <td>42%</td>
            <td>بنية تحتية لإنترنت الأشياء، التحليلات الحضرية، حلول التنقل</td>
          </tr>
          <tr>
            <td>الذكاء الاصطناعي في الرعاية الصحية</td>
            <td>58%</td>
            <td>التشخيص بالذكاء الاصطناعي، التحليلات التنبؤية، الرعاية الصحية عن بُعد</td>
          </tr>
          <tr>
            <td>التقنية المالية</td>
            <td>53%</td>
            <td>الخدمات المصرفية المدعومة بالذكاء الاصطناعي، كشف الاحتيال، التقنية المالية الإسلامية</td>
          </tr>
        </tbody>
      </table>
      
      <h2>التحديات والطريق إلى الأمام</h2>
      <p>على الرغم من التقدم الكبير، لا تزال هناك تحديات في مجالات مثل:</p>
      <ul>
        <li>سد فجوة المهارات في الذكاء الاصطناعي من خلال التعليم والتدريب</li>
        <li>ضمان التطوير والنشر الأخلاقي للذكاء الاصطناعي</li>
        <li>تعزيز تدفقات البيانات عبر الحدود مع الحفاظ على الأمان</li>
        <li>تسريع اعتماد الذكاء الاصطناعي في القطاعات التقليدية</li>
      </ul>
      
      <p>تبقى المملكة ملتزمة بأهداف رؤية 2030، مع وضع الذكاء الاصطناعي والتحول الرقمي في طليعة استراتيجية التنويع الاقتصادي.</p>`
    },
    sources: [
      {
        name: 'SDAIA - State of AI in Saudi Arabia 2024',
        url: 'https://sdaia.gov.sa/'
      },
      {
        name: 'Global AI Index 2024',
        url: 'https://www.tortoisemedia.com/intelligence/ai-index/'
      },
      {
        name: 'NEOM Official Website',
        url: 'https://www.neom.com/'
      }
    ]
  },
  {
    id: 4,
    title: {
      en: 'NEOM and the Future of AI Investment: A Strategic Opportunity',
      ar: 'نيون ومستقبل الاستثمار في الذكاء الاصطناعي: فرصة استراتيجية'
    },
    category: 'ai',
    image: aiImage,
    summary: {
      en: 'Exploring the strategic acquisition of NEON by Databricks and what it means for the future of AI investment and enterprise technology.',
      ar: 'استكشاف الاستحواذ الاستراتيجي على نيون من قبل داتابريكس وما يعنيه لمستقبل الاستثمار في الذكاء الاصطناعي وتكنولوجيا المؤسسات.'
    },
    date: 'May 20, 2025',
    author: {
      en: 'Khalid Al-Rashid',
      ar: 'خالد الرشيد'
    },
    content: {
      en: `<p>The recent $1 billion acquisition of NEON by Databricks marks a significant milestone in the evolution of AI infrastructure and presents compelling opportunities for investors and enterprises alike. This strategic move underscores the growing importance of AI-optimized database technologies in powering the next generation of intelligent applications.</p>
      
      <h3>Why NEON Matters in the AI Landscape</h3>
      <ul>
        <li><strong>Serverless PostgreSQL Innovation:</strong> NEON's serverless architecture enables autonomous AI agents to create and manage databases with unprecedented efficiency, with 80% of databases on its platform now being AI-generated.</li>
        <li><strong>Enterprise AI Integration:</strong> The integration with Databricks' data analytics platform creates a powerful ecosystem for AI-driven business intelligence and decision-making.</li>
        <li><strong>Market Validation:</strong> This acquisition follows a trend of major investments in AI infrastructure, with over $5.7 billion invested in AI companies in January 2025 alone.</li>
        <li><strong>Global Impact:</strong> The technology has significant implications for the Middle East market, particularly in Saudi Arabia's Vision 2030 digital transformation initiatives.</li>
      </ul>
      
      <h3>Investment Implications</h3>
      <p>The NEON acquisition signals several key trends in AI investment:</p>
      <ul>
        <li><strong>Infrastructure-First Approach:</strong> Investors are prioritizing foundational AI technologies that enable broader applications.</li>
        <li><strong>Enterprise Adoption:</strong> The focus has shifted from experimental AI to practical, scalable enterprise solutions.</li>
        <li><strong>Regional Opportunities:</strong> The Middle East, with its growing tech ecosystem and digital transformation agendas, presents significant opportunities for similar AI infrastructure investments.</li>
      </ul>
      
      <p>For businesses in the region, this development highlights the importance of staying ahead of AI infrastructure trends and considering strategic investments in enabling technologies that can drive digital transformation and competitive advantage.</p>`,
      
      ar: `<p>يمثل الاستحواذ الأخير على شركة نيون من قبل داتابريكس بقيمة مليار دولار علامة فارقة في تطور بنية الذكاء الاصطناعي التحتية ويقدم فرصاً جذابة للمستثمرين والشركات على حد سواء. تؤكد هذه الخطوة الاستراتيجية الأهمية المتزايدة لتقنيات قواعد البيانات المخصصة للذكاء الاصطناعي في تشغيل الجيل القادم من التطبيقات الذكية.</p>
      
      <h3>لماذا تعتبر نيون مهمة في مشهد الذكاء الاصطناعي</h3>
      <ul>
        <li><strong>ابتكار PostgreSQL بدون خادم:</strong> تتيح البنية التحتية الخالية من الخادم لشركة نيون للوكلاء الذكاء الاصطناعي المستقلين إنشاء قواعد البيانات وإدارتها بكفاءة غير مسبوقة، حيث يتم الآن إنشاء 80% من قواعد البيانات على منصتها بواسطة الذكاء الاصطناعي.</li>
        <li><strong>تكامل ذكاء المؤسسات الاصطناعي:</strong> يخلق التكامل مع منصة تحليلات البيانات من داتابريكس نظامًا بيئيًا قويًا لذكاء الأعمال واتخاذ القرارات المدعومين بالذكاء الاصطناعي.</li>
        <li><strong>التحقق من صحة السوق:</strong> يتبع هذا الاستحواذ اتجاه الاستثمارات الكبرى في بنية الذكاء الاصطناعي التحتية، حيث تم استثمار أكثر من 5.7 مليار دولار في شركات الذكاء الاصطناعي في يناير 2025 وحده.</li>
        <li><strong>التأثير العالمي:</strong> للتقنية تداعيات كبيرة على سوق الشرق الأوسط، وخاصة في مبادرات التحول الرقمي لرؤية المملكة العربية السعودية 2030.</li>
      </ul>
      
      <h3>الآثار الاستثمارية</h3>
      <p>يشير استحواذ نيون إلى عدة اتجاهات رئيسية في استثمارات الذكاء الاصطناعي:</p>
      <ul>
        <li><strong>نهج البنية التحتية أولاً:</strong> يولي المستثمرون الأولوية لتقنيات الذكاء الاصطناعي الأساسية التي تمكن من تطبيقات أوسع.</li>
        <li><strong>اعتماد المؤسسات:</strong> تحول التركيز من الذكاء الاصطناعي التجريبي إلى حلول المؤسسات العملية والقابلة للتطوير.</li>
        <li><strong>الفرص الإقليمية:</strong> يقدم الشرق الأوسط، مع نمو نظامه البيئي التكنولوجي وأجندات التحول الرقمي، فرصًا كبيرة لاستثمارات مماثلة في بنية الذكاء الاصطناعي التحتية.</li>
      </ul>
      
      <p>بالنسبة للشركات في المنطقة، يسلط هذا التطور الضوء على أهمية البقاء في صدارة اتجاهات بنية الذكاء الاصطناعي التحتية والنظر في الاستثمارات الاستراتيجية في التقنيات التمكينية التي يمكن أن تقود التحول الرقمي والميزة التنافسية.</p>`
    },
    sources: [
      {
        name: 'CNBC - Databricks acquires NEON for $1B',
        url: 'https://www.cnbc.com/2025/05/14/databricks-is-buying-database-startup-neon-for-about-1-billion.html'
      },
      {
        name: 'Tech Startups - Top AI Investors 2025',
        url: 'https://techstartups.com/2025/03/21/top-50-investors-funding-ai-startup-companies-in-2025/'
      }
    ]
  },
  {
    id: 1,
    title: {
      en: 'AI Transformation in Saudi Arabia: Vision 2030 and Beyond',
      ar: 'التحول في الذكاء الاصطناعي في المملكة العربية السعودية: رؤية 2030 وما بعدها'
    },
    category: 'ai',
    image: aiImage,
    summary: {
      en: 'Exploring how Saudi Arabia is becoming an AI powerhouse through Vision 2030 initiatives and strategic investments.',
      ar: 'استكشاف كيف تتحول المملكة العربية السعودية إلى قوة في مجال الذكاء الاصطناعي من خلال مبادرات رؤية 2030 والاستثمارات الاستراتيجية.'
    },
    date: 'May 15, 2025',
    author: {
      en: 'Ahmed Al-Farsi',
      ar: 'أحمد الفارسي'
    },
    content: {
      en: `<p>Saudi Arabia's transformation into an AI powerhouse is accelerating rapidly as part of Vision 2030, with the government launching massive initiatives like Project Transcendence—a $100 billion program to enhance AI capabilities across sectors.</p>
      
      <p>In 2025 alone, the Kingdom announced over $14.9 billion in new AI and digital infrastructure investments at the LEAP conference, reinforcing its status as the largest digital economy in the Middle East and North Africa region.</p>
      
      <h3>Key AI Trends in Saudi Arabia for 2025</h3>
      <ul>
        <li><strong>Specialized AI Models:</strong> The launch of SDAIA's Arabic Large Language Model (ALLaM) highlights the focus on localized, industry-specific AI solutions.</li>
        <li><strong>AI Agents and Automation:</strong> Businesses are adopting AI-powered agents to automate workflows, manage data, and enhance productivity.</li>
        <li><strong>Generative AI:</strong> Saudi Arabia is investing in generative AI for Arabic content, media, and creative industries.</li>
        <li><strong>AI in Smart Cities:</strong> Projects like NEOM are integrating AI, robotics, and data analytics to redefine urban living and sustainability.</li>
      </ul>
      
      <p>For businesses operating in the Saudi market, adopting AI solutions is no longer optional but essential to remain competitive. Our AI consulting services help companies navigate this transformation by implementing tailored AI strategies that align with both business goals and Saudi Arabia's vision for a digital future.</p>`,
      
      ar: `<p>تتسارع وتيرة تحول المملكة العربية السعودية إلى قوة في مجال الذكاء الاصطناعي كجزء من رؤية 2030، حيث أطلقت الحكومة مبادرات ضخمة مثل مشروع التفوق - برنامج بقيمة 100 مليار دولار لتعزيز قدرات الذكاء الاصطناعي عبر القطاعات.</p>
      
      <p>في عام 2025 وحده، أعلنت المملكة عن استثمارات جديدة في البنية التحتية الرقمية والذكاء الاصطناعي بقيمة تزيد عن 14.9 مليار دولار في مؤتمر LEAP، مما يعزز مكانتها كأكبر اقتصاد رقمي في منطقة الشرق الأوسط وشمال إفريقيا.</p>
      
      <h3>اتجاهات الذكاء الاصطناعي الرئيسية في المملكة العربية السعودية لعام 2025</h3>
      <ul>
        <li><strong>نماذج الذكاء الاصطناعي المتخصصة:</strong> يسلط إطلاق نموذج اللغة العربية الكبير (ALLaM) من هيئة البيانات والذكاء الاصطناعي السعودية الضوء على التركيز على حلول الذكاء الاصطناعي المحلية والخاصة بالصناعة.</li>
        <li><strong>وكلاء الذكاء الاصطناعي والأتمتة:</strong> تتبنى الشركات وكلاء مدعومين بالذكاء الاصطناعي لأتمتة سير العمل وإدارة البيانات وتعزيز الإنتاجية.</li>
        <li><strong>الذكاء الاصطناعي التوليدي:</strong> تستثمر المملكة العربية السعودية في الذكاء الاصطناعي التوليدي للمحتوى العربي والإعلام والصناعات الإبداعية.</li>
        <li><strong>الذكاء الاصطناعي في المدن الذكية:</strong> تقوم مشاريع مثل نيوم بدمج الذكاء الاصطناعي والروبوتات وتحليلات البيانات لإعادة تعريف الحياة الحضرية والاستدامة.</li>
      </ul>
      
      <p>بالنسبة للشركات العاملة في السوق السعودي، لم يعد تبني حلول الذكاء الاصطناعي خيارًا بل أصبح ضروريًا للبقاء في المنافسة. تساعد خدمات استشارات الذكاء الاصطناعي لدينا الشركات على التنقل في هذا التحول من خلال تنفيذ استراتيجيات ذكاء اصطناعي مخصصة تتماشى مع أهداف الأعمال ورؤية المملكة العربية السعودية لمستقبل رقمي.</p>`
    },
    sources: [
      {
        name: 'ANC Business Solutions',
        url: 'https://ancbusiness.com/blog/ai-trends-in-saudi-arabia-2025-insights-for-business-transformation/'
      },
      {
        name: 'Saudi Data & AI Authority (SDAIA)',
        url: 'https://www.sdaia.gov.sa/'
      }
    ]
  },
  {
    id: 2,
    title: {
      en: 'Digital Marketing Evolution in Saudi Arabia: Strategies for 2025',
      ar: 'تطور التسويق الرقمي في المملكة العربية السعودية: استراتيجيات لعام 2025'
    },
    category: 'marketing',
    image: marketingImage,
    summary: {
      en: 'Discover the latest digital marketing trends in Saudi Arabia and how businesses can leverage social media and localized content to reach their target audience.',
      ar: 'اكتشف أحدث اتجاهات التسويق الرقمي في المملكة العربية السعودية وكيف يمكن للشركات الاستفادة من وسائل التواصل الاجتماعي والمحتوى المحلي للوصول إلى جمهورها المستهدف.'
    },
    date: 'May 10, 2025',
    author: {
      en: 'Fatima Al-Saud',
      ar: 'فاطمة آل سعود'
    },
    content: {
      en: `<p>The digital marketing landscape in Saudi Arabia is undergoing a significant transformation, driven by high internet penetration rates and a tech-savvy population. As of 2025, Saudi Arabia has 35.33 million social media users, representing one of the highest social media penetration rates globally.</p>
      
      <h3>Key Digital Marketing Trends in Saudi Arabia</h3>
      <ul>
        <li><strong>Social Media Dominance:</strong> Platforms like Snapchat, Instagram, and TikTok are experiencing unprecedented growth, with Saudi users spending an average of 3.5 hours daily on social media.</li>
        <li><strong>Influencer Marketing:</strong> Collaborations with local Saudi influencers have become essential for brands looking to build authenticity and trust.</li>
        <li><strong>Video Content:</strong> Short-form video content is king, with 78% of Saudi consumers preferring video over other content formats.</li>
        <li><strong>Arabic Content:</strong> Localized, culturally relevant content in Arabic significantly outperforms generic global campaigns.</li>
        <li><strong>AI-Driven Personalization:</strong> Brands are leveraging AI to deliver hyper-personalized marketing messages aligned with Saudi cultural values and preferences.</li>
      </ul>
      
      <p>For businesses targeting the Saudi market, understanding these trends is crucial. Our digital marketing services help companies create culturally sensitive, data-driven campaigns that resonate with Saudi consumers while respecting local traditions and values.</p>`,
      
      ar: `<p>يشهد مشهد التسويق الرقمي في المملكة العربية السعودية تحولاً كبيراً، مدفوعاً بارتفاع معدلات انتشار الإنترنت والسكان المتمرسين في التكنولوجيا. اعتباراً من عام 2025، يوجد في المملكة العربية السعودية 35.33 مليون مستخدم لوسائل التواصل الاجتماعي، مما يمثل أحد أعلى معدلات انتشار وسائل التواصل الاجتماعي على مستوى العالم.</p>
      
      <h3>اتجاهات التسويق الرقمي الرئيسية في المملكة العربية السعودية</h3>
      <ul>
        <li><strong>هيمنة وسائل التواصل الاجتماعي:</strong> تشهد منصات مثل سناب شات وإنستغرام وتيك توك نمواً غير مسبوق، حيث يقضي المستخدمون السعوديون في المتوسط 3.5 ساعة يومياً على وسائل التواصل الاجتماعي.</li>
        <li><strong>تسويق المؤثرين:</strong> أصبح التعاون مع المؤثرين السعوديين المحليين أمراً ضرورياً للعلامات التجارية التي تتطلع إلى بناء المصداقية والثقة.</li>
        <li><strong>محتوى الفيديو:</strong> محتوى الفيديو القصير هو الملك، حيث يفضل 78% من المستهلكين السعوديين الفيديو على تنسيقات المحتوى الأخرى.</li>
        <li><strong>المحتوى العربي:</strong> المحتوى المحلي ذو الصلة الثقافية باللغة العربية يتفوق بشكل كبير على الحملات العالمية العامة.</li>
        <li><strong>التخصيص المدعوم بالذكاء الاصطناعي:</strong> تستفيد العلامات التجارية من الذكاء الاصطناعي لتقديم رسائل تسويقية مخصصة للغاية تتماشى مع القيم والتفضيلات الثقافية السعودية.</li>
      </ul>
      
      <p>بالنسبة للشركات التي تستهدف السوق السعودي، فإن فهم هذه الاتجاهات أمر بالغ الأهمية. تساعد خدمات التسويق الرقمي لدينا الشركات على إنشاء حملات مدفوعة بالبيانات ومراعية للثقافة تتردد صداها لدى المستهلكين السعوديين مع احترام التقاليد والقيم المحلية.</p>`
    },
    sources: [
      {
        name: 'DataReportal - Digital 2025: Saudi Arabia',
        url: 'https://datareportal.com/reports/digital-2025-saudi-arabia'
      },
      {
        name: 'Sprinklr - Social Media in Saudi Arabia',
        url: 'https://www.sprinklr.com/blog/social-media-in-saudi-arabia/'
      }
    ]
  },
  {
    id: 3,
    title: {
      en: 'E-Commerce Revolution in Saudi Arabia: Trends and Opportunities',
      ar: 'ثورة التجارة الإلكترونية في المملكة العربية السعودية: الاتجاهات والفرص'
    },
    category: 'web',
    image: webImage,
    summary: {
      en: 'An in-depth look at the rapidly growing e-commerce market in Saudi Arabia and how businesses can capitalize on this digital retail boom.',
      ar: 'نظرة متعمقة على سوق التجارة الإلكترونية سريع النمو في المملكة العربية السعودية وكيف يمكن للشركات الاستفادة من هذا الازدهار في مجال البيع بالتجزئة الرقمي.'
    },
    date: 'May 5, 2025',
    author: {
      en: 'Mohammed Al-Qahtani',
      ar: 'محمد القحطاني'
    },
    content: {
      en: `<p>Saudi Arabia's e-commerce market is experiencing explosive growth, projected to reach $27.96 billion in 2025 and grow at a CAGR of 12.10% to reach $49.49 billion by 2030. This remarkable expansion is driven by several factors unique to the Saudi market.</p>
      
      <h3>Key E-Commerce Trends in Saudi Arabia</h3>
      <ul>
        <li><strong>Mobile Commerce Dominance:</strong> Over 80% of online purchases in Saudi Arabia are now made via smartphones, making mobile-first design essential.</li>
        <li><strong>SADAD Integration:</strong> E-commerce platforms integrated with the national payment system SADAD see 35% higher conversion rates.</li>
        <li><strong>Arabic-First User Experience:</strong> Websites offering seamless Arabic interfaces with right-to-left optimization outperform English-only sites by 45%.</li>
        <li><strong>Social Commerce:</strong> Shopping directly through social media platforms is growing at 28% annually, with Instagram and TikTok leading the trend.</li>
        <li><strong>Last-Mile Innovation:</strong> Same-day delivery services in major Saudi cities are becoming a competitive differentiator.</li>
      </ul>
      
      <p>For businesses looking to enter or expand in the Saudi e-commerce market, understanding these trends is crucial. Our web development services specialize in creating e-commerce platforms that are fully optimized for the Saudi market, with bilingual support, SADAD integration, and mobile-first design that drives conversions and customer loyalty.</p>`,
      
      ar: `<p>يشهد سوق التجارة الإلكترونية في المملكة العربية السعودية نمواً متفجراً، ومن المتوقع أن يصل إلى 27.96 مليار دولار في عام 2025 وينمو بمعدل نمو سنوي مركب قدره 12.10% ليصل إلى 49.49 مليار دولار بحلول عام 2030. هذا التوسع الملحوظ مدفوع بعدة عوامل فريدة للسوق السعودي.</p>
      
      <h3>اتجاهات التجارة الإلكترونية الرئيسية في المملكة العربية السعودية</h3>
      <ul>
        <li><strong>هيمنة التجارة عبر الهاتف المحمول:</strong> يتم الآن إجراء أكثر من 80% من عمليات الشراء عبر الإنترنت في المملكة العربية السعودية عبر الهواتف الذكية، مما يجعل التصميم للجوال أولاً أمراً ضرورياً.</li>
        <li><strong>تكامل سداد:</strong> تشهد منصات التجارة الإلكترونية المتكاملة مع نظام الدفع الوطني سداد معدلات تحويل أعلى بنسبة 35%.</li>
        <li><strong>تجربة المستخدم العربية أولاً:</strong> تتفوق المواقع التي تقدم واجهات عربية سلسة مع تحسين من اليمين إلى اليسار على المواقع الإنجليزية فقط بنسبة 45%.</li>
        <li><strong>التجارة الاجتماعية:</strong> ينمو التسوق مباشرة من خلال منصات التواصل الاجتماعي بنسبة 28% سنوياً، مع تصدر إنستغرام وتيك توك لهذا الاتجاه.</li>
        <li><strong>ابتكار الميل الأخير:</strong> أصبحت خدمات التوصيل في نفس اليوم في المدن السعودية الكبرى ميزة تنافسية.</li>
      </ul>
      
      <p>بالنسبة للشركات التي تتطلع إلى الدخول أو التوسع في سوق التجارة الإلكترونية السعودي، فإن فهم هذه الاتجاهات أمر بالغ الأهمية. تتخصص خدمات تطوير الويب لدينا في إنشاء منصات تجارة إلكترونية مُحسنة بالكامل للسوق السعودي، مع دعم ثنائي اللغة، وتكامل سداد، وتصميم للجوال أولاً يدفع التحويلات وولاء العملاء.</p>`
    },
    sources: [
      {
        name: 'Mordor Intelligence - Saudi Arabia E-Commerce Market',
        url: 'https://www.mordorintelligence.com/industry-reports/saudi-arabia-ecommerce-market'
      },
      {
        name: 'Rev9 Solutions - E-Commerce Trends in Saudi Arabia',
        url: 'https://rev9solutions.com/blog/web-development/e-commerce-trends-in-saudi-arabia-for-2025/'
      }
    ]
  },
  {
    id: 6,
    title: {
      en: 'Saudi Vision 2030: The Giga Projects Shaping the Future',
      ar: 'رؤية السعودية 2030: المشاريع العملاقة التي تشكل المستقبل'
    },
    date: '2025-05-22',
    author: 'Saudi Vision 2030 Team',
    category: 'Development',
    tags: ['Vision 2030', 'NEOM', 'Qiddiya', 'Red Sea Project', 'Saudi Arabia'],
    readTime: '15 min read',
    image: vision2030Image,
    summary: {
      en: 'An in-depth look at Saudi Arabia\'s transformative giga projects under Vision 2030, including NEOM, Qiddiya, and other major initiatives reshaping the Kingdom\'s future.',
      ar: 'نظرة متعمقة على المشاريع العملاقة التحويلية في المملكة العربية السعودية في إطار رؤية 2030، بما في ذلك نيوم، القدية، ومبادرات كبرى أخرى تعيد تشكيل مستقبل المملكة.'
    },
    content: {
      en: `
      <h2>Vision 2030: A Blueprint for Transformation</h2>
      <p>Saudi Arabia's Vision 2030 represents one of the most ambitious national transformation programs in modern history. Spearheaded by His Royal Highness Crown Prince Mohammed bin Salman, this comprehensive roadmap aims to diversify the Kingdom's economy, reduce its dependence on oil, and position Saudi Arabia as a global investment powerhouse and hub connecting three continents.</p>
      
      <h3>Economic Impact at a Glance</h3>
      <div class="achievement-grid">
        <div class="achievement-item">
          <h4>$1.3T+</h4>
          <p>Total investment in giga projects</p>
        </div>
        <div class="achievement-item">
          <h4>1.2M+</h4>
          <p>Jobs to be created by 2030</p>
        </div>
        <div class="achievement-item">
          <h4>28,000 km²</h4>
          <p>Total development area</p>
        </div>
        <div class="achievement-item">
          <h4>100%</h4>
          <p>Renewable energy target for NEOM</p>
        </div>
      </div>

      <h2>Flagship Giga Projects</h2>
      
      <h3>NEOM: The City of the Future</h3>
      <p>NEOM stands as the crown jewel of Vision 2030, a $500 billion mega-city being built from the ground up in northwestern Saudi Arabia. Spanning 26,500 km², this cross-border city in the Tabuk Province is being developed to be a living laboratory for businesses, entrepreneurs, and innovators.</p>
      
      <h4>Current Status (2025)</h4>
      <ul>
        <li>First phase of THE LINE (2.4 km) under construction, scaled back from original 170 km plan</li>
        <li>Sindalah luxury island set to open in late 2024</li>
        <li>Oxagon industrial city attracting global manufacturing partners</li>
        <li>Projected cost increased to $1.5 trillion according to recent estimates</li>
      </ul>

      <h4>Key Components</h4>
      <ul>
        <li><strong>THE LINE:</strong> A 170-km long linear city with no cars, streets, or carbon emissions</li>
        <li><strong>Oxagon:</strong> The world's largest floating industrial complex</li>
        <li><strong>Trojena:</strong> A mountain tourism destination hosting the 2029 Asian Winter Games</li>
        <li><strong>Sindalah:</strong> Ultra-luxury island resort in the Red Sea</li>
      </ul>

      <h3>Qiddiya: Entertainment Capital of the Region</h3>
      <p>Qiddiya is being developed as Saudi Arabia's capital of entertainment, sports, and arts. Located 45 minutes from Riyadh, this $8 billion project will cover 334 km², making it the world's largest entertainment city by land area.</p>
      
      <h4>Key Attractions</h4>
      <ul>
        <li>Six Flags Qiddiya City featuring Falcon's Flight, the world's longest, tallest, and fastest rollercoaster</li>
        <li>Aquarabia, the region's largest waterpark</li>
        <li>Formula 1 racetrack (opening 2027)</li>
        <li>Gaming and esports district</li>
        <li>Arts and culture venues</li>
      </ul>

      <h3>The Red Sea Project: Luxury Tourism Redefined</h3>
      <p>This luxury tourism destination spans 28,000 km² along Saudi Arabia's west coast, featuring an archipelago of 90 untouched islands, ancient heritage sites, and diverse natural landscapes.</p>
      
      <h4>Key Features</h4>
      <ul>
        <li>50 hotels with 8,000 rooms by 2030</li>
        <li>1,300 residential properties</li>
        <li>75% of islands preserved for conservation</li>
        <li>100% renewable energy operations</li>
        <li>First phase (16 hotels) opening in 2025</li>
      </ul>

      <h2>Other Notable Projects</h2>
      
      <h3>Diriyah Gate</h3>
      <p>The historic hometown of the Saudi royal family is being transformed into a global cultural and lifestyle destination, featuring museums, cultural attractions, and luxury hospitality.</p>
      
      <h3>King Salman Energy Park (SPARK)</h3>
      <p>A 50 km² energy city in the Eastern Province, serving as a global industrial hub for the energy sector.</p>
      
      <h3>Riyadh Metro</h3>
      <p>A $22.5 billion metro system spanning 176 km with six lines and 85 stations, set to serve 3.6 million daily passengers.</p>

      <h2>Economic Impact and Vision 2030 Goals</h2>
      <p>These giga projects are central to achieving Vision 2030's objectives of economic diversification and job creation:</p>
      
      <table class="impact-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>GDP Contribution (Annual by 2030)</th>
            <th>Jobs Created</th>
            <th>Investment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NEOM</td>
            <td>$48 billion</td>
            <td>380,000</td>
            <td>$500B+</td>
          </tr>
          <tr>
            <td>Qiddiya</td>
            <td>$36 billion</td>
            <td>325,000</td>
            <td>$8B</td>
          </tr>
          <tr>
            <td>Red Sea Project</td>
            <td>$5.3 billion</td>
            <td>70,000</td>
            <td>$3.7B (Phase 1)</td>
          </tr>
          <tr>
            <td>Diriyah</td>
            <td>$7.2 billion</td>
            <td>178,000</td>
            <td>$50.6B</td>
          </tr>
        </tbody>
      </table>

      <h2>Challenges and Considerations</h2>
      <p>While these projects showcase Saudi Arabia's ambitious vision, they face significant challenges:</p>
      <ul>
        <li><strong>Cost Overruns:</strong> Several projects have experienced significant cost increases from initial estimates.</li>
        <li><strong>Timeline Delays:</strong> Many projects have been rescaled or delayed due to various challenges.</li>
        <li><strong>Sustainability Concerns:</strong> Balancing rapid development with environmental conservation remains a challenge.</li>
        <li><strong>Workforce Development:</strong> The need for skilled labor and training programs to meet project demands.</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As Saudi Arabia approaches 2030, these giga projects represent more than just construction—they symbolize the Kingdom's ambition to redefine its economy and global positioning. While challenges remain, the scale and vision of these developments demonstrate Saudi Arabia's commitment to becoming a global leader in innovation, tourism, and sustainable development.</p>`,
      ar: `
      <h2>رؤية 2030: خارطة طريق للتحول</h2>
      <p>تمثل رؤية السعودية 2030 أحد أكثر برامج التحول الوطني طموحًا في التاريخ الحديث. بقيادة صاحب السمو الملكي الأمير محمد بن سلمان، يهدف هذا الطريق الشامل إلى تنويع اقتصاد المملكة، والحد من اعتمادها على النفط، ووضع المملكة العربية السعودية كقوة استثمارية عالمية ومركز يربط بين ثلاث قارات.</p>
      
      <h3>نظرة عامة على الأثر الاقتصادي</h3>
      <div class="achievement-grid">
        <div class="achievement-item">
          <h4>4.8+ تريليون ريال</h4>
          <p>إجمالي الاستثمار في المشاريع العملاقة</p>
        </div>
        <div class="achievement-item">
          <h4>1.2+ مليون</h4>
          <p>وظيفة مستهدفة بحلول 2030</p>
        </div>
        <div class="achievement-item">
          <h4>28,000 كم²</h4>
          <p>إجمالي مساحة التطوير</p>
        </div>
        <div class="achievement-item">
          <h4>100%</h4>
          <p>الهدف من الطاقة المتجددة لنيوم</p>
        </div>
      </div>

      <h2>أبرز المشاريع العملاقة</h2>
      
      <h3>نيوم: مدينة المستقبل</h3>
      <p>تعتبر نيوم درة تاج رؤية 2030، وهي مدينة ضخمة بقيمة 1.9 تريليون ريال تُبنى من الصفر في شمال غرب المملكة العربية السعودية. تمتد على مساحة 26,500 كم²، يتم تطوير هذه المدينة العابرة للحدود في منطقة تبوك لتكون مختبرًا حيًا للشركات ورجال الأعمال والمبتكرين.</p>
      
      <h4>الوضع الحالي (2025)</h4>
      <ul>
        <li>المرحلة الأولى من ذا لاين (2.4 كم) قيد الإنشاء، بعد تقليصها من الخطة الأصلية البالغة 170 كم</li>
        <li>من المقرر افتتاح جزيرة سندالة الفاخرة في أواخر 2024</li>
        <li>جذب مدينة أوكساجون الصناعية شركاء تصنيع عالميين</li>
        <li>زيادة التكلفة المتوقعة إلى 1.5 تريليون دولار وفقًا لأحدث التقديرات</li>
      </ul>

      <h4>المكونات الرئيسية</h4>
      <ul>
        <li><strong>ذا لاين:</strong> مدينة خطية بطول 170 كم بدون سيارات أو شوارع أو انبعاثات كربونية</li>
        <li><strong>أوكساجون:</strong> أكبر مجمع صناعي عائم في العالم</li>
        <li><strong>تروجينا:</strong> وجهة سياحية جبلية تستضيف دورة الألعاب الآسيوية الشتوية 2029</li>
        <li><strong>سندالة:</strong> منتجع جزيرة فاخر للغاية في البحر الأحمر</li>
      </ul>

      <h3>القدية: عاصمة الترفيه في المنطقة</h3>
      <p>يتم تطوير القدية لتكون عاصمة الترفيه والرياضة والفنون في المملكة العربية السعودية. تقع على بعد 45 دقيقة من الرياض، وسيغطي هذا المشروع البالغ تكلفته 30 مليار ريال مساحة 334 كم²، مما يجعله أكبر مدينة ترفيهية في العالم من حيث المساحة.</p>
      
      <h4>أبرز المعالم</h4>
      <ul>
        <li>مدينة الملاهي سيكس فلاجس القدية التي تضم أسرع وأطول أفعوانية في العالم</li>
        <li>أكوارابيا، أكبر مدينة ألعاب مائية في المنطقة</li>
        <li>حلبة سباق الفورمولا 1 (المقرر افتتاحها في 2027)</li>
        <li>منطقة الألعاب الإلكترونية</li>
        <li>صالات الفنون والثقافة</li>
      </ul>

      <h3>مشروع البحر الأحمر: إعادة تعريف السياحة الفاخرة</h3>
      <p>تمتد وجهة السياحة الفاخرة هذه على مساحة 28,000 كم² على طول الساحل الغربي للمملكة العربية السعودية، وتضم أرخبيلًا من 90 جزيرة بكرًا ومواقع تراثية قديمة ومناظر طبيعية متنوعة.</p>
      
      <h4>المميزات الرئيسية</h4>
      <ul>
        <li>50 فندقًا مع 8000 غرفة بحلول عام 2030</li>
        <li>1300 عقار سكني</li>
        <li>الحفاظ على 75٪ من الجزر</li>
        <li>تشغيل بنسبة 100٪ بالطاقة المتجددة</li>
        <li>افتتاح المرحلة الأولى (16 فندقًا) في 2025</li>
      </ul>

      <h2>مشاريع بارزة أخرى</h2>
      
      <h3>بوابة الدرعية</h3>
      <p>يتم تحويل مسقط رأس العائلة المالكة التاريخي إلى وجهة ثقافية وحياة عالمية، تضم متاحف ومعالم ثقافية وخدمات فندقية فاخرة.</p>
      
      <h3>مدينة الملك سلمان للطاقة (سبارك)</h3>
      <p>مدينة طاقة تبلغ مساحتها 50 كم² في المنطقة الشرقية، لتكون مركزًا صناعيًا عالميًا لقطاع الطاقة.</p>
      
      <h3>مترو الرياض</h3>
      <p>نظام مترو بتكلفة 84 مليار ريال يمتد لمسافة 176 كم مع ستة خطوط و 85 محطة، من المقرر أن يخدم 3.6 مليون راكب يوميًا.</p>

      <h2>الأثر الاقتصادي وأهداف رؤية 2030</h2>
      <p>تعد هذه المشاريع العملاقة مركزية لتحقيق أهداف رؤية 2030 المتمثلة في تنويع الاقتصاد وخلق فرص العمل:</p>
      
      <table class="impact-table">
        <thead>
          <tr>
            <th>المشروع</th>
            <th>المساهمة في الناتج المحلي (سنويًا بحلول 2030)</th>
            <th>الوظائف المخلوقة</th>
            <th>الاستثمار</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>نيوم</td>
            <td>180 مليار ريال</td>
            <td>380,000</td>
            <td>1.9+ تريليون ريال</td>
          </tr>
          <tr>
            <td>القدية</td>
            <td>135 مليار ريال</td>
            <td>325,000</td>
            <td>30 مليار ريال</td>
          </tr>
          <tr>
            <td>مشروع البحر الأحمر</td>
            <td>20 مليار ريال</td>
            <td>70,000</td>
            <td>14 مليار ريال (المرحلة الأولى)</td>
          </tr>
          <tr>
            <td>الدرعية</td>
            <td>27 مليار ريال</td>
            <td>178,000</td>
            <td>190 مليار ريال</td>
          </tr>
        </tbody>
      </table>

      <h2>التحديات والاعتبارات</h2>
      <p>على الرغم من أن هذه المشاريع تعكس رؤية المملكة الطموحة، إلا أنها تواجه تحديات كبيرة:</p>
      <ul>
        <li><strong>تجاوزات التكلفة:</strong> شهدت عدة مشاريع زيادات كبيرة في التكاليف عن التقديرات الأولية.</li>
        <li><strong>تأخير الجداول الزمنية:</strong> تم إعادة تقييم العديد من المشاريع أو تأخيرها بسبب تحديات مختلفة.</li>
        <li><strong>مخاوف الاستدامة:</strong> يظل تحقيق التوازن بين التنمية السريعة والحفاظ على البيئة تحديًا.</li>
        <li><strong>تطوير القوى العاملة:</strong> الحاجة إلى عمالة ماهرة وبرامج تدريبية لتلبية متطلبات المشروع.</li>
      </ul>

      <h2>نظرة مستقبلية</h2>
      <p>مع اقتراب المملكة العربية السعودية من عام 2030، تمثل هذه المشاريع العملاقة أكثر من مجرد بناء - إنها ترمز لطموح المملكة في إعادة تعريف اقتصادها وموقعها العالمي. ورغم التحديات، فإن حجم ورؤية هذه التطورات تظهر التزام المملكة بأن تصبح رائدة عالميًا في الابتكار والسياحة والتنمية المستدامة.</p>`
    },
    sources: [
      {
        name: 'Saudi Vision 2030 Official Website',
        url: 'https://www.vision2030.gov.sa/'
      },
      {
        name: 'NEOM Official Website',
        url: 'https://www.neom.com/'
      },
      {
        name: 'Qiddiya Official Website',
        url: 'https://www.qiddiya.com/'
      },
      {
        name: 'The Red Sea Project',
        url: 'https://www.theredsea.sa/'
      },
      {
        name: 'Saudi Giga Projects Report 2025',
        url: 'https://www.researchandmarkets.com/'
      }
    ]
  }
];

export default blogPosts;
