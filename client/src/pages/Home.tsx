/* Design direction: Editorial Signal Pulse — Arabic-first RTL, dark hero, warm paper content, coral pulse accent, asymmetric service path, touch-first interactions. */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpLeft, Check, ChevronDown, Menu, X } from "lucide-react";
import RequestModal from "@/components/RequestModal";
import { Link } from "wouter";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/hero-background-jcCwN2TUxMJnbwzu293pDU.webp";
const brandLogo = "https://raw.githubusercontent.com/DiyarEngineeringConsulting/Omaraltawil/main/brand-assets/academix-solution-wordmark-transparent.png";

const services = [
  { number: "01", label: "ACADEMIC", title: "حل الواجبات", body: "حل شامل وسريع لجميع الواجبات الدراسية بجودة عالية", tags: ["واجبات", "دراسة"] },
  { number: "02", label: "PROJECTS", title: "المشاريع", body: "تطوير مشاريع أكاديمية احترافية وفقاً لمتطلباتك", tags: ["تطوير", "تنفيذ"] },
  { number: "03", label: "RESEARCH", title: "الأبحاث", body: "كتابة أبحاث علمية متقنة مع توثيق كامل", tags: ["أبحاث", "توثيق"] },
  { number: "04", label: "EXAMS", title: "الاختبارات", body: "تحضير شامل وحل نماذج اختبارات سابقة", tags: ["تحضير", "نماذج"] },
  { number: "05", label: "CONSULTING", title: "الاستشارات", body: "استشارات متخصصة في مختلف المجالات الأكاديمية", tags: ["استشارة", "توجيه"] },
  { number: "06", label: "GRAPHIC DESIGN", title: "التصميم الجرافيكي", body: "تصاميم احترافية وجذابة لجميع احتياجاتك", tags: ["هوية", "تصميم"] },
  { number: "07", label: "WEB DESIGN", title: "تصميم المواقع", body: "مواقع ويب حديثة وسريعة وسهلة الاستخدام", tags: ["ويب", "تجربة"] },
  { number: "08", label: "HOSTING", title: "الاستضافة", body: "خدمات استضافة موثوقة وآمنة بأسعار منافسة", tags: ["أمان", "سرعة"] },
];

const originalFeatures = [
  "فريق متخصص وذو خبرة عميقة",
  "جودة عالية وسرعة في التنفيذ",
  "دعم عملاء متميز 24/7",
  "أسعار منافسة وشفافة",
  "ضمان رضا العميل 100%",
  "سرية تامة للمعلومات",
];

const originalFaqs = [
  ["ما هي خدمات ACADEMIX SOLUTION؟", "نقدم مجموعة شاملة من الخدمات الأكاديمية والتقنية تشمل حل الواجبات والمشاريع والأبحاث والاختبارات والاستشارات والتصميم الجرافيكي وتصميم المواقع والاستضافة."],
  ["كيف يمكنني طلب خدمة؟", "يمكنك طلب خدمة من خلال الموقع بملء نموذج الطلب أو التواصل معنا عبر واتساب مباشرة. سنرد عليك في أسرع وقت ممكن."],
  ["ما هي أسعار الخدمات؟", "تختلف الأسعار حسب نوع الخدمة والمتطلبات. نقدم عروض مخصصة لكل عميل. تواصل معنا للحصول على عرض سعر مناسب."],
  ["هل هناك ضمان على الخدمات؟", "نعم، نضمن رضا العميل 100%. إذا لم تكن راضياً عن الخدمة، سنعيد العمل أو نسترد أموالك."],
  ["كم الوقت المستغرق لإنجاز الطلب؟", "يعتمد الوقت على نوع الخدمة والمتطلبات. معظم الطلبات تنجز خلال 24-48 ساعة. سنخبرك بالوقت المتوقع عند تقديم العرض."],
  ["هل معلوماتي آمنة معكم؟", "نعم، نضمن سرية تامة لجميع معلومات العملاء. لا نشارك أي معلومات مع أطراف ثالثة."],
];

const steps = [
  ["01", "تواصل معنا", "أرسل لنا تفاصيل احتياجاتك عبر الموقع أو واتساب"],
  ["02", "تقييم الطلب", "نقيم احتياجاتك ونقدم لك عرض سعر مناسب"],
  ["03", "التنفيذ السريع", "نبدأ العمل فوراً بسرعة واحترافية عالية"],
  ["04", "التسليم والدعم", "نسلمك العمل مع ضمان الجودة والدعم المستمر"],
];

const portfolioItems = [
  { title: "تصميم مواقع احترافية", category: "تطوير ويب", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-website-design-fBHg5twLHpytJVjxdEAzw6.webp" },
  { title: "لوحة تحكم تعليمية", category: "تطبيق تعليمي", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-dashboard-education-bzX5y7twGGfkVgc7Edh2wt.webp" },
  { title: "أبحاث أكاديمية", category: "محتوى أكاديمي", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-research-academic-jWvF8fqSU9Y4HkKdudcnyT.webp" },
  { title: "عروض تقديمية احترافية", category: "محتوى بصري", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-presentation-i77VxXT8gtrqyiwSUFCYFQ.webp" },
  { title: "تصميم جرافيكي إبداعي", category: "تصميم جرافيكي", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-graphic-design-7wu4Q5GgGAgNwE2XmM4nE4.webp" },
  { title: "منصة خدمات طلابية", category: "منصة تعليمية", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663649825384/D9RoQWq4hzNcuC2xHpmFx3/portfolio-website-design-fBHg5twLHpytJVjxdEAzw6.webp" },
];

function SignalMatrix({ index }: { index: string }) {
  return (
    <span className="signal-matrix" aria-hidden="true">
      <i /><i /><i /><i /><b>{index}</b>
    </span>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(0);
  const [requestOpen, setRequestOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("الخدمة");

  const openRequest = (serviceName = "الخدمة") => {
    setSelectedService(serviceName);
    setRequestOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Academix Solution EDU">
          <img className="brand-logo brand-logo-header" src={brandLogo} alt="Academix Solution" />
        </a>
        <nav id="main-nav" className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
          <a href="#services" onClick={closeMenu}>الخدمات</a>
          <a href="#about" onClick={closeMenu}>عنّا</a>
          <a href="#portfolio" onClick={closeMenu}>أعمالنا</a>
          <a href="#how-it-works" onClick={closeMenu}>كيف نعمل</a>
          <a href="#faq" onClick={closeMenu}>الأسئلة</a>
          <button className="nav-cta" type="button" onClick={() => { closeMenu(); openRequest(); }}>اطلب الخدمة <ArrowLeft size={16} /></button>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(14,44,57,.34), rgba(14,44,57,.88)), url(${heroImage})` }}>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content reveal">
            <div className="eyebrow"><SignalMatrix index="00" /><span>ACADEMIX / EDUCATION SOLUTIONS</span></div>
            <h1>حلول أكاديمية وتقنية<br /><em>متكاملة لنجاحك.</em></h1>
            <p className="hero-lede">نحن نقدم حلولاً شاملة تغطي جميع احتياجاتك الأكاديمية والتقنية، من حل الواجبات والمشاريع إلى تصميم المواقع والاستضافة. فريق متخصص وخبرة عميقة لضمان نجاحك.</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => openRequest()}>ابدأ من احتياجك <ArrowLeft size={18} /></button>
              <a className="text-link light-link" href="#services">اكتشف الحلول <ArrowUpLeft size={17} /></a>
            </div>
          </div>
          <div className="hero-aside reveal reveal-delay-2">
            <div className="hero-orbit"><span className="orbit-dot" /><span className="orbit-line" /><strong>01</strong></div>
            <p>من الفكرة<br />إلى النجاح.</p>
          </div>
          <div className="hero-stats" aria-label="إحصاءات Academix"><span><strong>500+</strong><small>عميل راضٍ</small></span><span><strong>1000+</strong><small>مشروع مكتمل</small></span><span><strong>98%</strong><small>معدل النجاح</small></span></div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading dark-heading">
            <div className="section-kicker"><SignalMatrix index="02" /><span>AREAS OF SUPPORT</span></div>
            <h2>مسارات مصممة<br /><em>حول احتياجك.</em></h2>
            <p>اختر نقطة البداية الأقرب إليك. افتح البطاقة لتعرف كيف يمكن أن تتحول الفكرة إلى خطوة عملية.</p>
          </div>
          <div className="services-list">
            {services.map((service, index) => {
              const active = activeService === index;
              return (
                <button key={service.number} className={`service-card ${active ? "is-active" : ""}`} aria-pressed={active} onClick={() => { setActiveService(active ? null : index); openRequest(service.title); }}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-main"><span className="service-label">{service.label}</span><strong>{service.title}</strong><span className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</span></span>
                  <span className="service-detail">{service.body}</span>
                  <span className="service-toggle"><ChevronDown size={20} /></span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="original-about" id="about">
          <div className="section-kicker"><SignalMatrix index="02" /><span>ABOUT ACADEMIX</span></div>
          <div className="original-about-grid">
            <div><h2>لماذا <em>نحن؟</em></h2><p>ACADEMIX SOLUTION هي منصة متخصصة في تقديم حلول أكاديمية وتقنية متكاملة. نجمع بين الخبرة العميقة والتكنولوجيا الحديثة لضمان نجاحك.</p><div className="feature-list">{originalFeatures.map(feature => <span key={feature}><Check size={17} />{feature}</span>)}</div></div>
            <div className="original-stats"><span><strong>500+</strong><small>عميل راضٍ</small></span><span><strong>1000+</strong><small>مشروع مكتمل</small></span><span><strong>98%</strong><small>معدل النجاح</small></span><span><strong>24/7</strong><small>دعم مستمر</small></span></div>
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="portfolio-heading"><div className="section-kicker"><SignalMatrix index="03" /><span>SELECTED WORK</span></div><h2>أعمالنا<br /><em>المتميزة.</em></h2><p>نماذج من المشاريع الناجحة التي أنجزناها لعملائنا</p></div>
          <div className="portfolio-grid">{portfolioItems.map((item, index) => <article className={`portfolio-card portfolio-card-${index + 1}`} key={`${item.title}-${index}`}><img src={item.image} alt={item.title} loading="lazy" /><div className="portfolio-overlay"><span>{item.category}</span><h3>{item.title}</h3></div></article>)}</div>
        </section>

        <section className="method-section" id="how-it-works">
          <div className="method-heading"><div className="section-kicker"><SignalMatrix index="04" /><span>HOW IT WORKS</span></div><h2>كيف<br /><span>نعمل؟</span></h2><p>عملية بسيطة وسهلة للحصول على خدماتنا المتميزة</p></div>
          <div className="steps-list">
            {steps.map(([number, title, body]) => <div className="step-row" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><Check size={20} className="step-check" /></div>)}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading dark-heading"><div className="section-kicker"><SignalMatrix index="05" /><span>COMMON QUESTIONS</span></div><h2>أسئلة<br /><em>شائعة.</em></h2><p>إجابات مباشرة على أكثر الأسئلة شيوعًا حول خدمات ACADEMIX SOLUTION.</p></div>
          <div className="faq-list">{originalFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-content"><div className="section-kicker"><SignalMatrix index="06" /><span>CONTACT ACADEMIX</span></div><h2>تواصل <em>معنا.</em></h2><p>نحن هنا للإجابة على جميع استفساراتك والمساعدة في احتياجاتك.</p><div className="contact-links"><a href="tel:+967739750294"><strong>الهاتف</strong><span>+967 739 750 294</span></a><a href="mailto:academicx.solution@gmail.com"><strong>البريد الإلكتروني</strong><span>academicx.solution@gmail.com</span></a><a href="https://t.me/AcademicxSolution" target="_blank" rel="noreferrer"><strong>التليجرام</strong><span>AcademicxSolution</span></a><a href="https://wa.me/967739750294" target="_blank" rel="noreferrer"><strong>واتساب</strong><span>تواصل معنا مباشرة</span></a></div></div>
          <div className="contact-mark"><img className="brand-logo brand-logo-contact" src={brandLogo} alt="Academix Solution" /></div>
        </section>
      </main>

      <RequestModal isOpen={requestOpen} onClose={() => setRequestOpen(false)} serviceName={selectedService} />
      <footer className="site-footer"><div className="footer-brand"><img className="brand-logo brand-logo-footer" src={brandLogo} alt="Academix Solution" /></div><div className="footer-copy"><p>حلول أكاديمية وتقنية متكاملة لنجاحك.</p><small className="footer-copyright">© 2026 Academix Solution. جميع الحقوق محفوظة.</small></div><div className="footer-meta"><Link href="/privacy">سياسة الخصوصية</Link><Link href="/terms">شروط الاستخدام</Link><a href="#top">العودة للأعلى ↑</a></div></footer>
    </div>
  );
}
