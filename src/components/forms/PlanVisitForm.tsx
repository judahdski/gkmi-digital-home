import React, { useState } from 'react';
import { Language } from '../../types';
import { Calendar, Users, CheckCircle2, Clock } from 'lucide-react';
import { CHURCH_PROFILE } from '../../data/churchData';

interface PlanVisitFormProps {
  language: Language;
  onSuccess: () => void;
}

export const PlanVisitForm: React.FC<PlanVisitFormProps> = ({
  language,
  onSuccess
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [visitDate, setVisitDate] = useState('Minggu ini / This Sunday');
  const [partySize, setPartySize] = useState('1');
  const [hasChildren, setHasChildren] = useState(false);
  const [questions, setQuestions] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDone(true);
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  if (isDone) {
    return (
      <div className="text-center py-6 animate-in fade-in duration-200">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-serif text-[#1C1917] font-semibold mb-2">
          {language === 'id' ? 'Sampai Jumpa di Hari Minggu!' : 'We Look Forward to Seeing You!'}
        </h4>
        <p className="text-sm text-stone-600 leading-relaxed max-w-sm mx-auto mb-4">
          {language === 'id'
            ? 'Tim penyambut kami akan bersiap menyapa Anda dengan hangat di pintu masuk.'
            : 'Our welcome team is ready to warmly greet you at the entrance.'}
        </p>
        <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg text-xs text-stone-500 font-mono">
          {CHURCH_PROFILE.placeholders.address} · {CHURCH_PROFILE.placeholders.serviceTime}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E2D8] flex items-center gap-3 text-xs text-stone-600">
        <Clock className="w-4 h-4 text-[#A34828] shrink-0" />
        <span>
          {language === 'id'
            ? `Ibadah Minggu dimulai pukul ${CHURCH_PROFILE.placeholders.serviceTime}`
            : `Sunday service begins at ${CHURCH_PROFILE.placeholders.serviceTime}`}
        </span>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          {language === 'id' ? 'Nama Anda' : 'Your Name'}
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={language === 'id' ? 'Nama lengkap atau panggilan' : 'Full or preferred name'}
          className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#A34828]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          {language === 'id' ? 'Nomor WhatsApp / HP' : 'WhatsApp / Mobile Number'}
        </label>
        <input
          type="text"
          required
          value={contact}
          onChange={e => setContact(e.target.value)}
          placeholder={language === 'id' ? 'Agar kami dapat mengirimkan pin lokasi' : 'To send directions & parking guide'}
          className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#A34828]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
            {language === 'id' ? 'Rencana Datang' : 'When Visiting'}
          </label>
          <select
            value={visitDate}
            onChange={e => setVisitDate(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#A34828]"
          >
            <option value="Minggu ini">Minggu ini / This Sunday</option>
            <option value="Minggu depan">Minggu depan / Next Sunday</option>
            <option value="Belum pasti">Menyesuaikan jadwal / TBD</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
            {language === 'id' ? 'Jumlah Orang' : 'Party Size'}
          </label>
          <select
            value={partySize}
            onChange={e => setPartySize(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#A34828]"
          >
            <option value="1">1 {language === 'id' ? 'orang (Sendiri)' : 'person (Alone)'}</option>
            <option value="2">2 {language === 'id' ? 'orang' : 'people'}</option>
            <option value="3-4">3–4 {language === 'id' ? 'orang (Keluarga)' : 'people (Family)'}</option>
            <option value="5+">5+ {language === 'id' ? 'orang (Rombongan)' : 'people (Group)'}</option>
          </select>
        </div>
      </div>

      <div className="pt-1">
        <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
          <input
            type="checkbox"
            checked={hasChildren}
            onChange={e => setHasChildren(e.target.checked)}
            className="accent-[#A34828] rounded"
          />
          <span>
            {language === 'id'
              ? 'Saya membawa anak-anak (butuh informasi Sekolah Minggu)'
              : 'Bringing children (interested in Sunday School)'}
          </span>
        </label>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
          {language === 'id' ? 'Ada Pertanyaan Khusus? (Opsional)' : 'Any Questions? (Optional)'}
        </label>
        <textarea
          rows={2}
          value={questions}
          onChange={e => setQuestions(e.target.value)}
          placeholder={language === 'id' ? 'Contoh: Akses kursi roda, parkir, dll' : 'e.g. Wheelchair access, parking info'}
          className="w-full px-3 py-2 text-xs rounded-lg border border-[#E8E2D8] bg-white text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#A34828]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#1C1917] hover:bg-stone-800 text-white font-medium text-xs sm:text-sm rounded-lg transition-colors mt-2"
      >
        {language === 'id' ? 'Konfirmasi Rencana Kunjungan' : 'Confirm Visit Plan'}
      </button>
    </form>
  );
};
