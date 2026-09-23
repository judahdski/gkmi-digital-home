import React, { useState } from 'react';
import { Language, CounselingSubmission } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { ShieldCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

interface CounselingFormProps {
  language: Language;
  onSubmitted?: (submission: CounselingSubmission) => void;
  onCancel?: () => void;
}

export const CounselingForm: React.FC<CounselingFormProps> = ({
  language,
  onSubmitted,
  onCancel
}) => {
  const t = TRANSLATIONS[language].counselingForm;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState('spiritual');
  const [preferredMethod, setPreferredMethod] = useState<'in-person' | 'whatsapp' | 'phone' | 'online'>('in-person');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError(language === 'id' ? 'Mohon lengkapi nama dan kontak Anda.' : 'Please enter your name and contact details.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const submission: CounselingSubmission = {
        id: 'counsel-' + Date.now(),
        name: name.trim(),
        contact: contact.trim(),
        topic,
        preferredMethod,
        preferredTime: preferredTime.trim(),
        message: message.trim() || undefined,
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
    setMessage('');
    setPreferredTime('');
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
          {language === 'id' ? 'Kirim Permohonan Lain' : 'Submit Another Request'}
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

      {/* Name */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.nameLabel}
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={language === 'id' ? 'Nama lengkap atau panggilan Anda' : 'Your full or preferred name'}
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all"
        />
      </div>

      {/* Contact */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.contactLabel}
        </label>
        <input
          type="text"
          required
          value={contact}
          onChange={e => setContact(e.target.value)}
          placeholder={language === 'id' ? 'Nomor WhatsApp atau alamat email' : 'WhatsApp number or email address'}
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all"
        />
      </div>

      {/* Topic selection */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
          {t.topicLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          {[
            { key: 'spiritual', label: t.topics.spiritual },
            { key: 'family', label: t.topics.family },
            { key: 'marriage', label: t.topics.marriage },
            { key: 'career', label: t.topics.career },
            { key: 'struggles', label: t.topics.struggles },
            { key: 'grief', label: t.topics.grief },
            { key: 'prayer', label: t.topics.prayer },
            { key: 'other', label: t.topics.other }
          ].map(item => (
            <label
              key={item.key}
              className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                topic === item.key
                  ? 'border-[#A34828] bg-[#F5EFE6] text-[#1C1917] font-medium'
                  : 'border-[#E8E2D8] bg-white text-stone-700 hover:bg-[#FAF8F5]'
              }`}
            >
              <input
                type="radio"
                name="counselingTopic"
                value={item.key}
                checked={topic === item.key}
                onChange={() => setTopic(item.key)}
                className="accent-[#A34828]"
              />
              <span className="truncate">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Meeting Method */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
          {t.methodLabel}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {[
            { key: 'in-person', label: t.methods.inPerson },
            { key: 'whatsapp', label: t.methods.whatsapp },
            { key: 'phone', label: t.methods.phone },
            { key: 'online', label: t.methods.online }
          ].map(item => (
            <label
              key={item.key}
              className={`flex items-center justify-center text-center p-2.5 rounded-lg border cursor-pointer transition-colors ${
                preferredMethod === item.key
                  ? 'border-[#A34828] bg-[#F5EFE6] text-[#1C1917] font-medium'
                  : 'border-[#E8E2D8] bg-white text-stone-700 hover:bg-[#FAF8F5]'
              }`}
            >
              <input
                type="radio"
                name="prefMethod"
                value={item.key}
                checked={preferredMethod === item.key}
                onChange={() => setPreferredMethod(item.key as any)}
                className="sr-only"
              />
              <span className="truncate">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Day / Time */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.timeLabel}
        </label>
        <input
          type="text"
          value={preferredTime}
          onChange={e => setPreferredTime(e.target.value)}
          placeholder={t.timePlaceholder}
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all"
        />
      </div>

      {/* Context / Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
          {t.messageLabel}
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder}
          className="w-full px-4 py-3 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828] focus:border-transparent transition-all resize-y leading-relaxed"
        />
      </div>

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
          <MessageSquare className="w-4 h-4" />
          <span>{isSubmitting ? (language === 'id' ? 'Mengirimkan...' : 'Submitting...') : t.submitButton}</span>
        </button>
      </div>
    </form>
  );
};
