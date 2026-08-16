/* Design direction: Editorial Signal Pulse — Arabic-first RTL, dark hero, warm paper content, coral pulse accent, asymmetric service path, touch-first interactions. */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpLeft, Check, ChevronDown, Menu, MoveLeft, X } from "lucide-react";
import RequestModal from "@/components/RequestModal";

const heroImage = "/manus-storage/academix-hero_42b8925b.jpg";
const symbolImage = "/manus-storage/academix-symbol_2728d762.png";
const paperTexture = "/manus-storage/academix-paper-texture_df0d7ee1.jpg";

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
  ["01", "حدد احتياجك", "ابدأ بوصف مختصر لما تريد إنجازه أو فهمه."],
  ["02", "نرتب الصورة", "نحوّل التفاصيل المتفرقة إلى مسار واضح وخطوة عملية."],
  ["03", "تتحرك بثقة", "تخرج بخطة مفهومة يمكنك متابعتها وتطويرها."],
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
          <img src={symbolImage} alt="" className="brand-symbol" />
          <span className="brand-wordmark"><strong>Academix</strong><small>Solution EDU</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
          <a href="#services" onClick={closeMenu}>الحلول</a>
          <a href="#method" onClick={closeMenu}>المنهج</a>
          <a href="#about" onClick={closeMenu}>عن Academix</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>تواصل معنا <ArrowLeft size={16} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(9,8,8,.28), rgba(9,8,8,.78)), url(${heroImage})` }}>
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

        <section className="signal-strip" aria-label="مبادئ Academix">
          <div className="signal-strip-inner">
            <span>وضوح قبل التعقيد</span><i />
            <span>خطوة بعد خطوة</span><i />
            <span>تعلم يستمر معك</span><i />
            <span>ACX / 2026</span>
          </div>
        </section>

        <section className="paper-section intro-section" id="about" style={{ backgroundImage: `linear-gradient(rgba(244,238,231,.96),rgba(244,238,231,.96)), url(${paperTexture})` }}>
          <div className="section-kicker"><SignalMatrix index="01" /><span>THE ACADEMIX APPROACH</span></div>
          <div className="intro-layout">
            <h2>حين يصبح<br /><span>التعلّم أوضح،</span><br />يتقدّم أسرع.</h2>
            <div className="intro-copy">
              <p className="lead-copy">لا نضيف ضوضاء جديدة إلى مهمتك. نبدأ من السؤال الحقيقي، نرتّب عناصره، ثم نبني لك مسارًا تعرف من خلاله ماذا تفعل الآن.</p>
              <p>Academix Solution EDU هي واجهة لحلول تعليمية منظمة، مصممة لتقريب الفكرة من التنفيذ وجعل كل مرحلة أكثر قابلية للفهم والمتابعة.</p>
              <a className="text-link dark-link" href="#method">تعرّف على طريقتنا <MoveLeft size={17} /></a>
            </div>
          </div>
          <div className="principle-note"><span>01</span><p>وضوح الفكرة ليس مرحلة إضافية؛ إنه أول أداة في طريق الإنجاز.</p></div>
        </section>

        <section className="original-about" id="why-us">
          <div className="section-kicker"><SignalMatrix index="01B" /><span>WHY ACADEMIX</span></div>
          <div className="original-about-grid">
            <div><h2>لماذا <em>نحن؟</em></h2><p>ACADEMIX SOLUTION هي منصة متخصصة في تقديم حلول أكاديمية وتقنية متكاملة. نجمع بين الخبرة العميقة والتكنولوجيا الحديثة لضمان نجاحك.</p><div className="feature-list">{originalFeatures.map(feature => <span key={feature}><Check size={17} />{feature}</span>)}</div></div>
            <div className="original-stats"><span><strong>500+</strong><small>عميل راضٍ</small></span><span><strong>1000+</strong><small>مشروع مكتمل</small></span><span><strong>98%</strong><small>معدل النجاح</small></span><span><strong>24/7</strong><small>دعم مستمر</small></span></div>
          </div>
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

        <section className="method-section" id="method">
          <div className="method-heading"><div className="section-kicker"><SignalMatrix index="03" /><span>THE NEXT STEP</span></div><h2>ثلاث حركات.<br /><span>اتجاه واحد.</span></h2></div>
          <div className="steps-list">
            {steps.map(([number, title, body]) => <div className="step-row" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><Check size={20} className="step-check" /></div>)}
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-heading dark-heading"><div className="section-kicker"><SignalMatrix index="04" /><span>COMMON QUESTIONS</span></div><h2>أسئلة<br /><em>تتكرر.</em></h2><p>إجابات مباشرة على أكثر الأسئلة شيوعًا حول خدمات ACADEMIX SOLUTION.</p></div>
          <div className="faq-list">{originalFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-content"><div className="section-kicker"><SignalMatrix index="05" /><span>CONTACT ACADEMIX</span></div><h2>تواصل <em>معنا.</em></h2><p>نحن هنا للإجابة على جميع استفساراتك والمساعدة في احتياجاتك.</p><div className="contact-links"><a href="tel:+967739750294"><strong>الهاتف</strong><span>+967 739 750 294</span></a><a href="mailto:academicx.solution@gmail.com"><strong>البريد الإلكتروني</strong><span>academicx.solution@gmail.com</span></a><a href="https://t.me/AcademicxSolution" target="_blank" rel="noreferrer"><strong>التليجرام</strong><span>AcademicxSolution</span></a><a href="https://wa.me/967739750294" target="_blank" rel="noreferrer"><strong>واتساب</strong><span>تواصل معنا مباشرة</span></a></div></div>
          <div className="contact-mark"><img src={symbolImage} alt="" /><span>ACADEMIX<br />SOLUTION EDU</span></div>
        </section>
      </main>

      <RequestModal isOpen={requestOpen} onClose={() => setRequestOpen(false)} serviceName={selectedService} />
      <footer className="site-footer"><div className="footer-brand"><img src={symbolImage} alt="" /><span>Academix<br /><small>Solution EDU</small></span></div><p>مسار أوضح للتعلّم والعمل الأكاديمي.</p><div className="footer-meta"><span>© 2026 Academix</span><a href="#top">العودة للأعلى ↑</a></div></footer>
    </div>
  );
}
