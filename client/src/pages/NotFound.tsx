/* Design direction: Editorial Signal Pulse — Arabic-first fallback page with the same ink/paper/coral hierarchy and a clear escape route. */
import { ArrowRight, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="not-found-page" dir="rtl">
      <div className="not-found-card">
        <span className="not-found-code">404 / SIGNAL LOST</span>
        <h1>هذه الصفحة<br /><em>ليست على المسار.</em></h1>
        <p>يبدو أن الرابط تغيّر أو أن الصفحة لم تُجهّز بعد. عد إلى المسار الرئيسي للمتابعة.</p>
        <Link href="/" className="button button-primary"><Home size={17} /> العودة إلى الرئيسية <ArrowRight size={17} /></Link>
      </div>
    </main>
  );
}
