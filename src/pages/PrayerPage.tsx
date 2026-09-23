import React from 'react';
import { Language, PageRoute, PrayerSubmission } from '../types';
import { PrayerRequestForm } from '../components/forms/PrayerRequestForm';
import { ArrowLeft } from 'lucide-react';

interface PrayerPageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
  onToast: (title: string, message: string) => void;
}

export const PrayerPage: React.FC<PrayerPageProps> = ({
  language,
  onNavigate,
  onToast
}) => {
  const handleSubmitted = (sub: PrayerSubmission) => {
    onToast(
      language === 'id' ? 'Pokok Doa Diterima' : 'Prayer Request Received',
      language === 'id'
        ? 'Tim pastoral GKMI akan setia membawa pergumulan Anda dalam doa.'
        : 'GKMI pastoral team will faithfully lift your request in prayer.'
    );
  };

  return (
    <div className="pb-24 pt-6 sm:pt-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div>
        <button
          onClick={() => onNavigate('pastoral-care')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-[#1C1917] transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'id' ? 'Kembali ke Pelayanan Pastoral' : 'Back to Pastoral Care'}</span>
        </button>
      </div>

      <PrayerRequestForm
        language={language}
        onSubmitted={handleSubmitted}
      />
    </div>
  );
};
