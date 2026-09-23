import React, { useState } from 'react';
import { Language, PrayerSubmission } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface PrayerRequestFormProps {
  language: Language;
  onSubmitted?: (submission: PrayerSubmission) => void;
}

export const PrayerRequestForm: React.FC<PrayerRequestFormProps> = ({
  language,
  onSubmitted
}) => {
  const t = TRANSLATIONS[language].prayerForm;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [request, setRequest] = useState('');
  const [allowContact, setAllowContact] = useState(false);
  const [preferredMethod, setPreferredMethod] = useState<'whatsapp' | 'phone' | 'email'>('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) {
      setError(language === 'id' ? 'Mohon tuliskan pokok doa Anda.' : 'Please write your prayer request.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate safe private pastoral transmission without exposing to public client memory
    setTimeout(() => {
      const submission: PrayerSubmission = {
        id: 'pray-' + Date.now(),
        name: name.trim() || undefined,
        contact: contact.trim() || undefined,
        request: request.trim(),
        allowContact,
        preferredMethod: allowContact ? preferredMethod : undefined,
        createdAt: new Date().toISOString()
      };

      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSubmitted) onSubmitted(submission);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setRequest('');
    setAllowContact(false);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xs animate-in fade-in duration-200">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-semibold mb-3">
          {t.successTitle}
        </h3>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
          {t.successMessage}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2.5 text-sm font-medium text-[#1C1917] bg-[#EFE9DF] hover:bg-[#E7E0D3] rounded-lg transition-colors border border-[#E8E2D8]"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs max-w-2xl mx-auto space-y-6"
    >
      <div>
        <h3 className="text-2xl font-serif text-[#1C1917] font-semibold tracking-tight">
          {t.pageTitle}
        </h3>
        <p className="text-stone-600 text-sm mt-1.5 leading-relaxed">
          {t.subtext}
        </p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-medium">
          {error}
        </div>
      )}

      {/* Name (Optional) */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.nameLabel} <span className="text-stone-400 font-normal">({language === 'id' ? 'Opsional' : 'Optional'})</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={t.namePlaceholder}
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all"
        />
      </div>

      {/* Contact Info (Optional) */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.contactLabel} <span className="text-stone-400 font-normal">({language === 'id' ? 'Opsional' : 'Optional'})</span>
        </label>
        <input
          type="text"
          value={contact}
          onChange={e => setContact(e.target.value)}
          placeholder={t.contactPlaceholder}
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all"
        />
      </div>

      {/* Prayer Request (Required) */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.requestLabel}
        </label>
        <textarea
          rows={5}
          required
          value={request}
          onChange={e => setRequest(e.target.value)}
          placeholder={t.requestPlaceholder}
          className="w-full px-4 py-3 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all resize-y leading-relaxed"
        />
      </div>

      {/* Follow-up question */}
      <div className="pt-2 border-t border-[#E8E2D8]">
        <span className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
          {t.allowContactQuestion}
        </span>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer text-sm text-stone-800">
            <input
              type="radio"
              name="allowContact"
              checked={allowContact}
              onChange={() => setAllowContact(true)}
              className="accent-[#A34828] w-4 h-4"
            />
            <span>{t.contactYes}</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-sm text-stone-800">
            <input
              type="radio"
              name="allowContact"
              checked={!allowContact}
              onChange={() => setAllowContact(false)}
              className="accent-[#A34828] w-4 h-4"
            />
            <span>{t.contactNo}</span>
          </label>
        </div>
      </div>

      {/* Preferred Contact Method if Contact is requested */}
      {allowContact && (
        <div className="p-4 bg-[#F5EFE6] border border-[#E8E2D8] rounded-xl space-y-2">
          <label className="block text-xs font-semibold text-stone-700">
            {t.methodLabel}
          </label>
          <div className="flex flex-wrap gap-4 text-xs font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="prefMethod"
                value="whatsapp"
                checked={preferredMethod === 'whatsapp'}
                onChange={() => setPreferredMethod('whatsapp')}
                className="accent-[#A34828]"
              />
              <span>WhatsApp</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="prefMethod"
                value="phone"
                checked={preferredMethod === 'phone'}
                onChange={() => setPreferredMethod('phone')}
                className="accent-[#A34828]"
              />
              <span>{language === 'id' ? 'Telepon' : 'Phone'}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="prefMethod"
                value="email"
                checked={preferredMethod === 'email'}
                onChange={() => setPreferredMethod('email')}
                className="accent-[#A34828]"
              />
              <span>Email</span>
            </label>
          </div>
        </div>
      )}

      {/* Confidentiality & Submission */}
      <div className="pt-2">
        <div className="flex items-start gap-2.5 text-xs text-stone-500 mb-5">
          <ShieldCheck className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
          <span>{t.confidentialityNote}</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 bg-[#1C1917] hover:bg-stone-800 disabled:bg-stone-400 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1C1917]"
        >
          <HeartHandshake className="w-4 h-4" />
          <span>{isSubmitting ? (language === 'id' ? 'Mengirimkan...' : 'Submitting...') : t.submitButton}</span>
        </button>
      </div>
    </form>
  );
};
