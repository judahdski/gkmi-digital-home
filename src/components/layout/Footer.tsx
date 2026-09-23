import React from 'react';
import { PageRoute, Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { CHURCH_PROFILE } from '../../data/churchData';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const t = TRANSLATIONS[language].footer;
  const nav = TRANSLATIONS[language].nav;
  const placeholders = CHURCH_PROFILE.placeholders;

  const handleLink = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Column 1: Church Name & Mission */}
          <div className="md:col-span-1 space-y-4">
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              GKMI
            </span>
            <p className="text-xs text-stone-400 font-serif italic">
              Gereja Kristen Maranatha Indonesia
            </p>
            <p className="text-sm text-stone-400 leading-relaxed">
              {t.about}
            </p>
            <p className="text-xs text-stone-500 font-medium">
              «Come as you are. Grow in faith. Walk together.»
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('visit')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {nav.visitUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('resources')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {nav.resources}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('pastoral-care')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {nav.pastoralCare}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('events')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:underline"
                >
                  {nav.events}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Practical Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {t.contactTitle}
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div>
                <span className="block text-xs text-stone-500">{language === 'id' ? 'Alamat Gedung' : 'Church Address'}</span>
                <span className="text-white font-mono text-xs">{placeholders.address}</span>
              </div>
              <div>
                <span className="block text-xs text-stone-500">{language === 'id' ? 'Jadwal Ibadah' : 'Worship Time'}</span>
                <span className="text-stone-300">{placeholders.serviceDay}, <span className="font-mono text-xs">{placeholders.serviceTime}</span></span>
              </div>
              <div>
                <span className="block text-xs text-stone-500">{language === 'id' ? 'Telepon / WhatsApp' : 'Phone / WhatsApp'}</span>
                <span className="text-white font-mono text-xs">{placeholders.phone}</span>
              </div>
              <div>
                <span className="block text-xs text-stone-500">Email</span>
                <span className="text-stone-300 font-mono text-xs">{placeholders.email}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Pastoral Support & Social Media */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
              {language === 'id' ? 'Pintu Bantuan Pastoral' : 'Pastoral Gateways'}
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => handleLink('prayer')}
                className="w-full text-left p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors"
              >
                <div className="text-xs font-semibold text-white">
                  {language === 'id' ? 'Kirim Pokok Doa' : 'Send Prayer Request'}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {language === 'id' ? 'Sepenuhnya terjaga & rahasia' : 'Strictly confidential'}
                </div>
              </button>
              <button
                onClick={() => handleLink('counseling')}
                className="w-full text-left p-3 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors"
              >
                <div className="text-xs font-semibold text-white">
                  {language === 'id' ? 'Konseling Penggembalaan' : 'Pastoral Conversation'}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {language === 'id' ? 'Bersama Gembala Jemaat' : 'With pastoral team'}
                </div>
              </button>
            </div>

            <div className="mt-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                {t.followTitle}
              </h5>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-stone-400">
                <span className="px-2 py-1 bg-stone-900 rounded border border-stone-800">
                  IG: {placeholders.instagramUrl}
                </span>
                <span className="px-2 py-1 bg-stone-900 rounded border border-stone-800">
                  YT: {placeholders.youtubeUrl}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 {t.copyright}</p>
          <p className="font-serif italic text-stone-400">
            «{t.motto}»
          </p>
        </div>
      </div>
    </footer>
  );
};
