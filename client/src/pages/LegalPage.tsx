/* Design direction: Editorial Signal Pulse — Arabic legal reading surface, ink header, warm paper document, Coral Pulse navigation. */
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type LegalSection = { title: string; body?: string; items?: string[] };

type LegalPageProps = {
  eyebrow: string;
  title: string;
  sections: LegalSection[];
  children?: ReactNode;
};

export default function LegalPage({ eyebrow, title, sections, children }: LegalPageProps) {
  return (
    <main className="legal-page" dir="rtl">
      <header className="legal-header">
        <Link className="legal-brand" href="/"><span>Academix</span><small>Solution EDU</small></Link>
        <Link className="legal-back" href="/"><ArrowRight size={17} /> العودة إلى الرئيسية</Link>
      </header>
      <section className="legal-hero"><span>{eyebrow}</span><h1>{title}</h1><p>هذه الصفحة جزء من موقع ACADEMIX SOLUTION وتعرض النص المعتمد في المصدر السابق.</p></section>
      <article className="legal-document">
        {sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.body && <p>{section.body}</p>}{section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}</section>)}
        {children}
        <div className="legal-updated">آخر تحديث: 16 أغسطس 2026</div>
      </article>
      <footer className="legal-footer"><span>© 2026 Academix Solution EDU</span><div><Link href="/privacy">سياسة الخصوصية</Link><Link href="/terms">شروط الاستخدام</Link></div></footer>
    </main>
  );
}
