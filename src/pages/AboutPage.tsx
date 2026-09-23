import React from 'react';
import { Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MINISTRIES_DATA } from '../data/ministries';
import { CHURCH_PROFILE } from '../data/churchData';
import { ArrowRight, Check, Heart, Shield, Sparkles } from 'lucide-react';

interface AboutPageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ language, onNavigate }) => {
  const t = TRANSLATIONS[language].aboutPage;
  const church = CHURCH_PROFILE;

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header Banner */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E2D8] pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
            {church.shortName}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* 1. Who We Are */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
              {t.whoWeAreTitle}
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              {t.whoWeAreBody}
            </p>
            <p className="text-base text-stone-600 leading-relaxed">
              {language === 'id'
                ? 'Kami meyakini bahwa gereja bukanlah gedung ataupun organisasi birokratis, melainkan keluarga besar yang dipersatukan oleh anugerah Kristus. Di GKMI, Anda akan menemukan persekutuan yang bersahabat, tanpa sekat status sosial, dan senantiasa terbuka menyambut siapa pun yang rindu mencari kebenaran dan keteduhan hidup.'
                : 'We believe that the church is neither a physical edifice nor a cold bureaucracy, but a living spiritual family unified by Christ\'s grace. At GKMI, you will discover an authentic, friendly fellowship with no social barriers, ever welcoming anyone yearning for truth, rest, and hope.'}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-sm aspect-4/3 bg-[#EAE2D8]">
              <img
                src={church.images.community}
                alt="Persekutuan jemaat GKMI"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-12 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-semibold">
            {t.ourStoryTitle}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {t.ourStoryBody}
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            {language === 'id'
              ? 'Sepanjang perjalanan pelayanan, GKMI terus berkomitmen menjaga kemurnian pengajaran firman Tuhan sekaligus menjawab kebutuhan nyata jemaat dan warga sekitar melalui pelayanan doa, bimbingan keluarga, dan uluran tangan kasih.'
              : 'Throughout our journey of ministry, GKMI remains firmly dedicated to faithful biblical teaching while responding to the everyday human needs of our members and neighbors through prayer, pastoral care, and compassionate action.'}
          </p>
        </div>
      </section>

      {/* 3. Our Beliefs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
            {t.ourBeliefsTitle}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            {language === 'id'
              ? 'Fondasi teologis yang mendasari cara kami beribadah, mengasihi, dan melayani sesama.'
              : 'The theological bedrock shaping how we worship, love, and serve our neighbors.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.beliefsList.map((belief, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-2 hover:border-stone-400 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#EFE9DF] text-[#A34828] flex items-center justify-center text-xs font-semibold">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                  {belief.title}
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed pl-10">
                {belief.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                {t.visionTitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif leading-snug">
                {t.visionText}
              </h3>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                {t.missionTitle}
              </span>
              <ul className="space-y-3 text-sm text-stone-300">
                {t.missions.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A34828] shrink-0 mt-2" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Ministries Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
            {language === 'id' ? 'Bidang Pelayanan Jemaat' : 'Our Ministries'}
          </h2>
          <p className="text-stone-600 text-sm">
            {language === 'id'
              ? 'Wadah bagi setiap generasi untuk bertumbuh dan saling menopang.'
              : 'Spaces for every generation to grow, serve, and encourage one another.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MINISTRIES_DATA.map(m => (
            <div
              key={m.id}
              className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-stone-500">
                  {m.audience[language]}
                </span>
                <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                  {m.name[language]}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {m.description[language]}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8E2D8] text-xs font-mono text-stone-500">
                {m.schedulePlaceholder}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pastoral link */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-serif text-[#1C1917] font-semibold">
          {language === 'id' ? 'Ingin Mengenal Gembala Jemaat Kami?' : 'Want to Meet Our Pastor?'}
        </h3>
        <p className="text-stone-600 text-sm max-w-md mx-auto">
          {language === 'id'
            ? 'Pelajari panggilan pelayanan dan temui gembala kami yang selalu siap mendengarkan.'
            : 'Discover the heart of our pastoral ministry and reach out for a pastoral conversation.'}
        </p>
        <button
          onClick={() => onNavigate('pastor')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors"
        >
          <span>{language === 'id' ? 'Lihat Profil Gembala' : 'View Pastor Profile'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
