import React from 'react';
import { PageRoute, Language } from '../../types';
import { TRANSLATIONS } from '../../data/translations';
import { MapPin, HeartHandshake } from 'lucide-react';

interface MobileStickyBarProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
  currentPage: PageRoute;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  language,
  onNavigate,
  currentPage
}) => {
  const t = TRANSLATIONS[language].nav;

  // Don't clutter if already on prayer or visit page
  if (currentPage === 'prayer' || currentPage === 'visit') {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden p-3 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8E2D8] shadow-md">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <button
          onClick={() => {
            onNavigate('visit');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#1C1917] text-white text-xs font-semibold shadow-xs active:scale-[0.98] transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{t.ctaVisit}</span>
        </button>

        <button
          onClick={() => {
            onNavigate('prayer');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#EFE9DF] border border-[#E8E2D8] text-[#1C1917] hover:bg-[#EAE2D5] text-xs font-semibold active:scale-[0.98] transition-transform"
        >
          <HeartHandshake className="w-3.5 h-3.5 shrink-0 text-[#A34828]" />
          <span className="truncate">{t.ctaPrayer}</span>
        </button>
      </div>
    </div>
  );
};
