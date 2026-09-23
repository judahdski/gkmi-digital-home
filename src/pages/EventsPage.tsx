import React, { useState } from 'react';
import { Language, PageRoute, ChurchEvent } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { EVENTS_DATA } from '../data/events';
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EventsPageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
  onOpenPlanVisit: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({
  language,
  onNavigate,
  onOpenPlanVisit
}) => {
  const t = TRANSLATIONS[language].upcomingEvents;
  const [filter, setFilter] = useState<string>('all');
  const [registeredEventId, setRegisteredEventId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: language === 'id' ? 'Semua Agenda' : 'All Events' },
    { id: 'worship', label: language === 'id' ? 'Ibadah Raya' : 'Worship' },
    { id: 'prayer', label: language === 'id' ? 'Doa Bersama' : 'Prayer' },
    { id: 'study', label: language === 'id' ? 'Pendalaman Firman' : 'Bible Study' },
    { id: 'youth', label: language === 'id' ? 'Pemuda & Remaja' : 'Youth' },
    { id: 'community', label: language === 'id' ? 'Aksi Sosial' : 'Community Service' }
  ];

  const filtered = EVENTS_DATA.filter(evt => {
    if (filter === 'all') return true;
    return evt.category === filter;
  });

  const handleRegister = (id: string) => {
    setRegisteredEventId(id);
    setTimeout(() => {
      setRegisteredEventId(null);
    }, 3000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E2D8] pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
            {language === 'id' ? 'Kalender Komunitas' : 'Community Calendar'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="inline-block text-xs font-mono text-stone-400 bg-[#FAF8F5] border border-[#E8E2D8] px-3 py-1 rounded">
            {language === 'id' ? 'Catatan: Jadwal dan lokasi menggunakan format placeholder demo' : 'Note: Schedules and locations reflect demo placeholder data'}
          </div>
        </div>
      </section>

      {/* Main Events Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E8E2D8]">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filter === cat.id
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'text-stone-600 hover:text-[#1C1917] hover:bg-[#F3EFEA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(evt => {
            const isRegistered = registeredEventId === evt.id;
            return (
              <div
                key={evt.id}
                className="p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl flex flex-col justify-between hover:border-stone-400 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-mono text-[#A34828] font-semibold">{evt.date}</span>
                    {evt.isRecurring && (
                      <span className="text-[11px] font-sans text-stone-400">
                        {language === 'id' ? 'Rutin Mingguan' : 'Weekly'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-[#1C1917]">
                    {evt.title[language]}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {evt.description[language]}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#E8E2D8] space-y-4">
                  <div className="space-y-2 text-xs text-stone-600 font-mono">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-stone-400" />
                      <span>{evt.timePlaceholder}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-stone-400" />
                      <span>{evt.locationPlaceholder}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    {evt.category === 'worship' ? (
                      <button
                        onClick={onOpenPlanVisit}
                        className="w-full py-2.5 px-4 bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <span>{language === 'id' ? 'Rencanakan Kehadiran' : 'Plan Attendance'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRegister(evt.id)}
                        className={`w-full py-2.5 px-4 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
                          isRegistered
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-white hover:bg-[#F3EFEA] text-[#1C1917] border border-[#E8E2D8]'
                        }`}
                      >
                        {isRegistered ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                            <span>{language === 'id' ? 'Pengingat Dicatat!' : 'Reminder Added!'}</span>
                          </>
                        ) : (
                          <span>{language === 'id' ? 'Ikuti / Simpan Jadwal' : 'Save / Attend'}</span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
