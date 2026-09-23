import React, { useState, useEffect } from 'react';
import { Article, Language, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ARTICLES_DATA } from '../data/articles';
import { ArrowLeft, Share2, Check, BookOpen, Heart, ArrowRight } from 'lucide-react';

interface ArticleDetailPageProps {
  article: Article;
  language: Language;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  onNavigate: (page: PageRoute) => void;
}

const FONT_SIZES = [
  {
    id: 'sm',
    label: 'A-',
    excerpt: 'text-base sm:text-lg',
    body: 'text-base leading-relaxed',
    scripture: 'text-sm sm:text-base',
    extra: 'text-sm sm:text-base'
  },
  {
    id: 'md',
    label: '100%',
    excerpt: 'text-lg sm:text-xl',
    body: 'text-lg sm:text-xl leading-relaxed',
    scripture: 'text-base sm:text-lg',
    extra: 'text-base sm:text-lg'
  },
  {
    id: 'lg',
    label: 'A+',
    excerpt: 'text-xl sm:text-2xl',
    body: 'text-xl sm:text-2xl leading-relaxed',
    scripture: 'text-lg sm:text-xl',
    extra: 'text-lg sm:text-xl'
  },
  {
    id: 'xl',
    label: 'A++',
    excerpt: 'text-2xl sm:text-3xl',
    body: 'text-2xl sm:text-3xl leading-relaxed',
    scripture: 'text-xl sm:text-2xl',
    extra: 'text-xl sm:text-2xl'
  }
];

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  article,
  language,
  onBack,
  onSelectArticle,
  onNavigate
}) => {
  const t = TRANSLATIONS[language].growInFaith;
  const [copied, setCopied] = useState(false);
  const [fontIndex, setFontIndex] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('gkmi_article_font_size');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < FONT_SIZES.length) {
          return parsed;
        }
      }
    } catch {}
    return 1; // Default to 'md' (100%)
  });

  useEffect(() => {
    try {
      localStorage.setItem('gkmi_article_font_size', fontIndex.toString());
    } catch {}
  }, [fontIndex]);

  const currentSize = FONT_SIZES[fontIndex];

  const handleDecreaseFont = () => {
    setFontIndex(prev => Math.max(0, prev - 1));
  };

  const handleIncreaseFont = () => {
    setFontIndex(prev => Math.min(FONT_SIZES.length - 1, prev + 1));
  };

  const relatedArticles = ARTICLES_DATA.filter(a => a.id !== article.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title[language],
        text: article.excerpt[language],
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="pb-24 space-y-12">
      {/* Top Bar with Back, Text-Size Controls, & Share */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-b border-[#E8E2D8]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-[#1C1917] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828] rounded"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'id' ? 'Kembali ke Renungan' : 'Back to Resources'}</span>
          </button>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Text-size toggle (A- / A+) */}
            <div
              className="flex items-center border border-[#E8E2D8] bg-[#FAF8F5] rounded-lg p-0.5"
              role="group"
              aria-label={language === 'id' ? 'Pilihan ukuran teks' : 'Text size options'}
            >
              <button
                type="button"
                onClick={handleDecreaseFont}
                disabled={fontIndex === 0}
                title={language === 'id' ? 'Perkecil ukuran teks (A-)' : 'Decrease text size (A-)'}
                aria-label={language === 'id' ? 'Perkecil ukuran teks' : 'Decrease text size'}
                className="w-7 h-7 flex items-center justify-center font-serif font-bold text-xs text-stone-700 hover:text-stone-900 hover:bg-[#EFE9DF] disabled:opacity-30 disabled:pointer-events-none rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828]"
              >
                A-
              </button>

              <span
                className="px-1 text-[11px] font-mono text-stone-500 select-none min-w-[34px] text-center"
                title={language === 'id' ? `Ukuran: ${currentSize.label}` : `Size: ${currentSize.label}`}
              >
                {currentSize.label}
              </span>

              <button
                type="button"
                onClick={handleIncreaseFont}
                disabled={fontIndex === FONT_SIZES.length - 1}
                title={language === 'id' ? 'Perbesar ukuran teks (A+)' : 'Increase text size (A+)'}
                aria-label={language === 'id' ? 'Perbesar ukuran teks' : 'Increase text size'}
                className="w-7 h-7 flex items-center justify-center font-serif font-bold text-sm text-stone-700 hover:text-stone-900 hover:bg-[#EFE9DF] disabled:opacity-30 disabled:pointer-events-none rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828]"
              >
                A+
              </button>
            </div>

            {/* Share Action */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-[#1C1917] transition-colors px-3 py-1.5 rounded-md hover:bg-[#F3EFEA] border border-transparent hover:border-[#E8E2D8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{language === 'id' ? 'Tautan Disalin' : 'Link Copied'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{language === 'id' ? 'Bagikan' : 'Share'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Article Header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        {/* Unboxed Metadata */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
          <span className="font-semibold text-[#A34828] uppercase tracking-wider">
            {t.categories[article.category]}
          </span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight leading-tight text-balance">
          {article.title[language]}
        </h1>

        <div className="text-xs font-mono text-stone-500 pt-1">
          {article.author}
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden aspect-16/9 bg-stone-200 border border-[#E8E2D8] shadow-xs">
          <img
            src={article.image}
            alt={article.title[language]}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Main Reading Canvas (65-75ch maximum reading width) */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-stone-800 transition-all duration-150">
        {/* Excerpt Lead */}
        <p className={`${currentSize.excerpt} font-serif italic text-stone-700 leading-relaxed border-l-2 border-[#A34828] pl-5`}>
          «{article.excerpt[language]}»
        </p>

        {/* Scripture Citation Box */}
        {article.scriptureRef && (
          <div className="p-6 bg-[#F3EFEA] border border-[#E8E2D8] rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A34828]">
              <BookOpen className="w-4 h-4" />
              <span>{article.scriptureRef}</span>
            </div>
            {article.scriptureText ? (
              <p className={`font-serif ${currentSize.scripture} text-[#1C1917] italic leading-relaxed`}>
                "{article.scriptureText[language]}"
              </p>
            ) : (
              <p className="font-serif text-sm text-stone-500 italic">
                "[SCRIPTURE TEXT]"
              </p>
            )}
          </div>
        )}

        {/* Reflection Body */}
        <div className={`prose prose-stone leading-relaxed ${currentSize.body} space-y-6`}>
          <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#1C1917]">
            {article.reflection[language]}
          </p>
        </div>

        {/* Practical Application */}
        {article.application && (
          <div className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              {language === 'id' ? 'Langkah Penerapan Hari Ini' : 'Today\'s Application'}
            </h3>
            <p className={`${currentSize.extra} text-stone-700 leading-relaxed`}>
              {article.application[language]}
            </p>
          </div>
        )}

        {/* Today's Prayer Box */}
        {article.todayPrayer && (
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border border-[#A34828]/30 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A34828]">
              <Heart className="w-4 h-4" />
              <span>{language === 'id' ? 'Doa Hari Ini' : 'Today\'s Prayer'}</span>
            </div>
            <p className={`font-serif italic ${currentSize.scripture} text-[#1C1917] leading-relaxed`}>
              «{article.todayPrayer[language]}»
            </p>
          </div>
        )}

        {/* Pastoral Support Link */}
        <div className="pt-8 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500 text-center sm:text-left">
            {language === 'id'
              ? 'Sedang bergumul dengan topik ini? Tim pastoral kami siap mendoakan Anda.'
              : 'Walking through this topic? Our pastoral team is honored to pray with you.'}
          </div>
          <button
            onClick={() => onNavigate('prayer')}
            className="px-5 py-2.5 bg-[#1C1917] text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap"
          >
            {language === 'id' ? 'Kirim Permohonan Doa' : 'Request Prayer'}
          </button>
        </div>
      </div>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-[#E8E2D8]">
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-semibold text-[#1C1917]">
            {language === 'id' ? 'Renungan & Artikel Terkait' : 'Related Articles & Reflections'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map(rel => (
            <div
              key={rel.id}
              onClick={() => {
                onSelectArticle(rel);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl hover:border-stone-400 cursor-pointer transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs text-[#A34828] font-medium">
                  {t.categories[rel.category]}
                </span>
                <h3 className="text-base font-serif font-semibold text-[#1C1917] leading-snug">
                  {rel.title[language]}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {rel.excerpt[language]}
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#1C1917]">
                <span>{t.readReflection}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
