import React from 'react';
import { Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HeartHandshake, MessageSquare, ShieldCheck, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

interface PastoralCarePageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
}

export const PastoralCarePage: React.FC<PastoralCarePageProps> = ({
  language,
  onNavigate
}) => {
  const t = TRANSLATIONS[language].pastoralCare;

  const careAreas = [
    {
      title: language === 'id' ? 'Pendampingan Duka & Kehilangan' : 'Grief & Loss Accompaniment',
      desc: language === 'id' ? 'Melewati masa kehilangan orang terkasih dengan kehadiran yang menopang tanpa menghakimi air mata.' : 'Navigating the quiet ache of losing a loved one with steady presence and compassion.'
    },
    {
      title: language === 'id' ? 'Konseling Pernikahan & Keluarga' : 'Marriage & Family Guidance',
      desc: language === 'id' ? 'Membangun komunikasi yang sehat, rekonsiliasi, dan fondasi kasih yang kokoh dalam rumah tangga.' : 'Restoring communication, gentle reconciliation, and enduring foundations at home.'
    },
    {
      title: language === 'id' ? 'Kecemasan & Pergumulan Pribadi' : 'Personal Struggles & Anxiety',
      desc: language === 'id' ? 'Mendengarkan beban batin, keraguan iman, dan kelelahan mental dalam ruang yang aman.' : 'Holding space for unspoken burdens, faith questions, and emotional exhaustion.'
    },
    {
      title: language === 'id' ? 'Doa Pelepasan & Pemulihan' : 'Prayer & Spiritual Renewal',
      desc: language === 'id' ? 'Memohon pemulihan rohani dan kekuatan baru dalam hadirat Allah yang berbelas kasih.' : 'Seeking restorative grace and spiritual clarity in God’s comforting presence.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E2D8] pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
            {language === 'id' ? 'Pelayanan Pastoral GKMI' : 'Pastoral Care Gateway'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
            {t.headline}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtext}
          </p>
        </div>
      </section>

      {/* Two Prominent Gateways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gateway 1: Prayer */}
          <div className="p-8 sm:p-12 bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl flex flex-col justify-between hover:border-stone-400 transition-colors shadow-xs">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-serif font-semibold text-[#1C1917]">
                {t.prayerCard.title}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {t.prayerCard.desc}
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A34828]" />
                  <span>{language === 'id' ? 'Boleh anonim tanpa mencantumkan nama' : 'Can be completely anonymous'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A34828]" />
                  <span>{language === 'id' ? 'Didoakan setia oleh tim pendoa syafaat' : 'Faithfully lifted by pastoral team'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A34828]" />
                  <span>{language === 'id' ? 'Pilihan untuk dihubungi kembali atau tidak' : 'Option for follow-up or quiet prayer'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('prayer')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1C1917] hover:bg-stone-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>{t.prayerCard.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gateway 2: Counseling */}
          <div className="p-8 sm:p-12 bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl flex flex-col justify-between hover:border-stone-400 transition-colors shadow-xs">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-[#EFE9DF] text-[#1C1917] flex items-center justify-center">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-serif font-semibold text-[#1C1917]">
                {t.counselingCard.title}
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                {t.counselingCard.desc}
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 pt-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
                  <span>{language === 'id' ? 'Percakapan tertutup & rahasia penggembalaan' : 'Strict pastoral confidentiality'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
                  <span>{language === 'id' ? 'Pilihan tatap muka di gereja atau via WhatsApp' : 'In-person, phone, or WhatsApp options'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
                  <span>{language === 'id' ? 'Bimbingan yang penuh empati dan firman' : 'Empathetic, scriptural guidance'}</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onNavigate('counseling')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1C1917] hover:bg-stone-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>{t.counselingCard.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Pastoral Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
            {language === 'id' ? 'Ruang Lingkup Pendampingan Kami' : 'How We Can Walk With You'}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            {language === 'id'
              ? 'Setiap manusia melewati badai hidup yang berbeda. Kami siap menjadi kawan seperjalanan Anda.'
              : 'Everyone encounters unique personal storms. We are honored to accompany you.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-2"
            >
              <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                {area.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pastoral Confidentiality Code */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-6">
          <div className="w-12 h-12 rounded-xl bg-[#EFE9DF] text-stone-800 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-semibold text-[#1C1917]">
              {language === 'id' ? 'Komitmen Etika & Kerahasiaan Pastoral' : 'Our Confidentiality Commitment'}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              {language === 'id'
                ? 'Kami memahami bahwa membagikan luka batin dan permohonan doa membutuhkan rasa percaya yang mendalam. Seluruh tim pastoral GKMI memegang teguh kerahasiaan pastoral. Cerita, kontak, dan permohonan Anda tidak akan pernah dipublikasikan atau dibagikan ke pihak mana pun tanpa izin eksplisit dari Anda.'
                : 'We understand that sharing personal heartaches and private prayers requires immense trust. Every pastoral team member at GKMI adheres strictly to ethical pastoral confidentiality. Your story, contact details, and requests are sacred and will never be shared publicly.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
