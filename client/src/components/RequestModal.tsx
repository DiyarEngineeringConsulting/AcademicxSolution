/* Design direction: Editorial Signal Pulse — original Academix request fields, RTL modal, Coral Pulse action, direct WhatsApp handoff. */
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";

const whatsappNumber = "967739750294";

type RequestModalProps = { isOpen: boolean; onClose: () => void; serviceName: string };

export default function RequestModal({ isOpen, onClose, serviceName }: RequestModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", details: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.details.trim()) {
      setError("يرجى ملء جميع الحقول");
      return;
    }
    const message = `مرحباً، أود طلب خدمة: ${serviceName}\nالاسم: ${formData.name.trim()}\nرقم الجوال: ${formData.phone.trim()}\nالتفاصيل: ${formData.details.trim()}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFormData({ name: "", phone: "", details: "" });
    setError("");
    onClose();
  };

  return (
    <div className="request-modal" role="dialog" aria-modal="true" aria-labelledby="request-modal-title">
      <button className="request-backdrop" type="button" aria-label="إغلاق نموذج الطلب" onClick={onClose} />
      <div className="request-card">
        <button className="request-close" type="button" aria-label="إغلاق" onClick={onClose}><X size={21} /></button>
        <span className="request-label">SERVICE REQUEST / {serviceName}</span>
        <h2 id="request-modal-title">اطلب <em>{serviceName}</em></h2>
        <p>أرسل تفاصيل احتياجك، وسيفتح واتساب برسالة جاهزة للإرسال إلى Academix Solution.</p>
        <form onSubmit={handleSubmit}>
          <label>الاسم الكامل<input type="text" name="name" value={formData.name} onChange={event => setFormData({ ...formData, name: event.target.value })} placeholder="أدخل اسمك" autoComplete="name" /></label>
          <label>رقم الجوال<input type="tel" name="phone" value={formData.phone} onChange={event => setFormData({ ...formData, phone: event.target.value })} placeholder="9671234567" autoComplete="tel" /></label>
          <label>تفاصيل الطلب<textarea name="details" value={formData.details} onChange={event => setFormData({ ...formData, details: event.target.value })} placeholder="اشرح احتياجاتك بالتفصيل..." rows={4} /></label>
          {error && <p className="request-error" role="alert">{error}</p>}
          <button className="button button-primary request-submit" type="submit">أرسل عبر واتساب <ArrowLeft size={18} /></button>
        </form>
      </div>
    </div>
  );
}
