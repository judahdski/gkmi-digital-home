import React from 'react';
import { Language, PageRoute, CounselingSubmission } from '../types';
import { CounselingForm } from '../components/forms/CounselingForm';
import { ArrowLeft } from 'lucide-react';

interface CounselingPageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
  onToast: (title: string, message: string) => void;
}

export const CounselingPage: React.FC<CounselingPageProps> = ({
  language,
  onNavigate,
  onToast
}) => {
  const handleSubmitted = (sub: CounselingSubmission) => {
    onToast(
      language === 'id' ? 'Permohonan Percakapan Diterima' : 'Conversation Request Received',
      language === 'id'
        ? 'Gembala jemaat kami akan menghubungi Anda secara bijaksana.'
        : 'Our pastor will reach out discreetly to arrange a convenient time.'
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

      <CounselingForm
        language={language}
        onSubmitted={handleSubmitted}
        onCancel={() => onNavigate('pastoral-care')}
      />
    </div>
  );
};
