/* Design direction: Editorial Signal Pulse — Arabic-first RTL, dark hero, warm paper content, coral pulse accent, asymmetric service path, touch-first interactions. */
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpLeft, Check, ChevronDown, Menu, MoveLeft, X } from "lucide-react";

const heroImage = "/manus-storage/academix-hero_42b8925b.jpg";
const symbolImage = "/manus-storage/academix-symbol_2728d762.png";
const paperTexture = "/manus-storage/academix-paper-texture_df0d7ee1.jpg";

const services = [
  {
    number: "01",
    label: "CLARITY",
    title: "توضيح المسار الأكاديمي",
    body: "نرتّب الفكرة، المتطلبات، والخطوة التالية في صورة عملية تساعدك على البدء بثقة.",
    tags: ["تنظيم", "توجيه"],
  },
  {
    number: "02",
    label: "RESEARCH",
    title: "دعم البحث والكتابة",
    body: "من السؤال الأول إلى هيكلة العمل، نساعدك على بناء مسار مفهوم يحترم هدفك الأكاديمي.",
    tags: ["بحث", "هيكلة"],
  },
  {
    number: "03",
    label: "PROGRESS",
    title: "حلول تعليمية قابلة للتقدم",
    body: "أدوات وموارد مرتبة تقلل التشتت وتحوّل المهمة الكبيرة إلى مراحل يمكن متابعتها.",
    tags: ["تخطيط", "تقدم"],
  },
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
            <h1>حلول أكاديمية<br /><em>تُوضح الطريق.</em></h1>
            <p className="hero-lede">مساحة عملية للطلاب والباحثين وكل من يريد أن يحوّل التحدي الأكاديمي إلى خطوات مفهومة قابلة للتقدم.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">ابدأ من احتياجك <ArrowLeft size={18} /></a>
              <a className="text-link light-link" href="#services">اكتشف الحلول <ArrowUpLeft size={17} /></a>
            </div>
          </div>
          <div className="hero-aside reveal reveal-delay-2">
            <div className="hero-orbit"><span className="orbit-dot" /><span className="orbit-line" /><strong>01</strong></div>
            <p>من الفكرة<br />إلى المسار.</p>
          </div>
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
                <button key={service.number} className={`service-card ${active ? "is-active" : ""}`} aria-pressed={active} onClick={() => setActiveService(active ? null : index)}>
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

        <section className="contact-section" id="contact">
          <div className="contact-grid" aria-hidden="true" />
          <div className="contact-content"><div className="section-kicker"><SignalMatrix index="04" /><span>START WITH A QUESTION</span></div><h2>ما الخطوة التي<br /><em>تحتاجها الآن؟</em></h2><p>اكتب لنا باختصار ما تريد الوصول إليه، وسنبدأ من النقطة الأكثر وضوحًا.</p><a className="button button-primary" href="#services">راجع المسارات المتاحة <ArrowLeft size={18} /></a></div>
          <div className="contact-mark"><img src={symbolImage} alt="" /><span>ACADEMIX<br />SOLUTION EDU</span></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src={symbolImage} alt="" /><span>Academix<br /><small>Solution EDU</small></span></div><p>مسار أوضح للتعلّم والعمل الأكاديمي.</p><div className="footer-meta"><span>© 2026 Academix</span><a href="#top">العودة للأعلى ↑</a></div></footer>
    </div>
  );
}
