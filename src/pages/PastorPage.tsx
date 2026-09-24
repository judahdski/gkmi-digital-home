import React from 'react';
import { Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CHURCH_PROFILE } from '../data/churchData';
import { HeartHandshake, MessageSquare, BookOpen, Quote, Shield } from 'lucide-react';

interface PastorPageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
}

export const PastorPage: React.FC<PastorPageProps> = ({ language, onNavigate }) => {
  const t = TRANSLATIONS[language];
  const church = CHURCH_PROFILE;

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E2D8] pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
            {language === 'id' ? 'Pelayanan Penggembalaan' : 'Pastoral Leadership'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
            {t.pastorSection.sectionTitle}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'id'
              ? 'Mengenal hati, panggilan, dan kerinduan pelayanan untuk berjalan bersama jemaat.'
              : 'Discover the heart, calling, and pastoral dedication to walk alongside our church family.'}
          </p>
        </div>
      </section>

      {/* Main Profile Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-md aspect-4/5 bg-[#EAE2D8]">
              <img
                src={church.images.pastor}
                alt="Gembala Jemaat GKMI Joshua Generation"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-serif font-bold text-[#1C1917]">
                {church.placeholders.pastorName}
              </h2>
              <p className="text-sm text-stone-500 font-medium">
                {t.pastorSection.role}
              </p>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative pl-6 border-l-2 border-[#A34828] space-y-2">
              <blockquote className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-medium leading-snug">
                «{t.pastorSection.quote}»
              </blockquote>
            </div>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                {language === 'id'
                  ? 'Pelayanan pastoral bukanlah tentang gelar atau kedudukan, melainkan tentang kesediaan membuka telinga untuk mendengarkan, membuka tangan untuk merangkul, dan setia menopang jemaat di hadapan takhta kasih karunia Allah.'
                  : 'Pastoral ministry is not about titles or platforms; it is about keeping ears open to listen, hands extended to comfort, and faithfully carrying people before the throne of God\'s boundless grace.'}
              </p>
              <p>
                {language === 'id'
                  ? 'Dalam setiap musim kehidupan—saat bersukacita merayakan kelahiran atau pernikahan, maupun saat melewati lembah kedukaan, kebingungan batin, dan keputusasaan—tim pastoral kami ada untuk berjalan bersama Anda tanpa penghakiman.'
                  : 'Through every season of life—whether celebrating joyous milestones or navigating valleys of grief, uncertainty, and burnout—our pastoral team is here to walk with you with gentleness and grace.'}
              </p>
            </div>

            {/* Core Values of Pastoral Care */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E2D8]">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A34828] font-semibold">
                  {language === 'id' ? 'Kerahasiaan' : 'Confidentiality'}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {language === 'id'
                    ? 'Setiap percakapan dijaga dengan etika penggembalaan yang suci.'
                    : 'Every conversation is held in absolute pastoral discretion.'}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A34828] font-semibold">
                  {language === 'id' ? 'Tanpa Syarat' : 'No Judgment'}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {language === 'id'
                    ? 'Datang dengan segala keraguan atau kegagalan masa lalu Anda.'
                    : 'Come with your honest questions, doubts, or wounds.'}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#A34828] font-semibold">
                  {language === 'id' ? 'Doa Syafaat' : 'Faithful Prayer'}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {language === 'id'
                    ? 'Membawa setiap pergumulan dengan tekun kepada Bapa.'
                    : 'Steadfastly lifting every petition before the Father.'}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={() => onNavigate('counseling')}
                className="px-6 py-3.5 bg-[#1C1917] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.pastorSection.ctaCounseling}</span>
              </button>
              <button
                onClick={() => onNavigate('prayer')}
                className="px-6 py-3.5 bg-[#FAF8F5] border border-[#E8E2D8] hover:bg-[#F3EFEA] text-[#1C1917] text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-[#A34828]" />
                <span>{language === 'id' ? 'Minta Dukungan Doa' : 'Request Prayer'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Support Notice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-xl font-serif font-semibold text-[#1C1917]">
            {language === 'id' ? 'Perlu Teman Berbincang Pekan Ini?' : 'Need Someone to Talk to This Week?'}
          </h3>
          <p className="text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
            {language === 'id'
              ? 'Anda dapat mengatur sesi tatap muka langsung di gereja, melalui panggilan telepon, atau pesan WhatsApp secara aman dan nyaman.'
              : 'You can arrange a comfortable in-person conversation at church, a phone call, or a WhatsApp chat at a time that works best for you.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('counseling')}
              className="px-6 py-2.5 bg-[#1C1917] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
            >
              {language === 'id' ? 'Atur Waktu Percakapan' : 'Schedule a Conversation'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
