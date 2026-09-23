import React, { useState, useMemo } from 'react';
import { Language, PageRoute, Article, ArticleCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ARTICLES_DATA } from '../data/articles';
import { Search, ArrowRight, BookOpen, Compass, Sparkles } from 'lucide-react';

interface ResourcesPageProps {
  language: Language;
  onNavigate: (page: PageRoute) => void;
  onSelectArticle: (article: Article) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  language,
  onNavigate,
  onSelectArticle
}) => {
  const t = TRANSLATIONS[language].growInFaith;
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter(art => {
      // Category match
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'exploring-faith') {
          if (!art.isExploringFaith) return false;
        } else if (art.category !== selectedCategory) {
          return false;
        }
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = art.title[language].toLowerCase().includes(query);
        const excerptMatch = art.excerpt[language].toLowerCase().includes(query);
        const scriptureMatch = art.scriptureRef?.toLowerCase().includes(query);
        const tagsMatch = art.tags?.some(tag => tag.toLowerCase().includes(query));
        return titleMatch || excerptMatch || scriptureMatch || tagsMatch;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, language]);

  const categoriesList: { id: ArticleCategory; label: string }[] = [
    { id: 'all', label: t.categories.all },
    { id: 'devotional', label: t.categories.devotional },
    { id: 'reflection', label: t.categories.reflection },
    { id: 'prayer', label: t.categories.prayer },
    { id: 'exploring-faith', label: t.categories['exploring-faith'] }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header */}
      <section className="pt-8 sm:pt-14 border-b border-[#E8E2D8] pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
            {language === 'id' ? 'Pusat Materi Rohani' : 'Spiritual Content Hub'}
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'id'
                    ? 'Cari renungan, ayat, atau topik pergumulan...'
                    : 'Search devotionals, scripture, or topics...'
                }
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-[#E8E2D8] bg-white text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#A34828]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Interactive Segmented Filter Controls (functional buttons, not static pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E8E2D8]">
          {categoriesList.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'text-stone-600 hover:text-[#1C1917] hover:bg-[#F3EFEA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty Search Result State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-3">
            <BookOpen className="w-8 h-8 text-stone-400 mx-auto" />
            <h3 className="text-lg font-serif text-[#1C1917] font-semibold">
              {language === 'id' ? 'Tidak Ada Artikel yang Ditemukan' : 'No Resources Found'}
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              {language === 'id'
                ? 'Coba gunakan kata kunci pencarian yang lain atau atur ulang filter kategori.'
                : 'Try different search keywords or reset category filters.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 text-xs font-medium bg-[#EFE9DF] rounded-lg text-stone-800"
            >
              {language === 'id' ? 'Reset Pencarian' : 'Reset Filters'}
            </button>
          </div>
        )}

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(art => (
            <article
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="group cursor-pointer bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl overflow-hidden hover:border-stone-400 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 overflow-hidden bg-stone-200 relative">
                  <img
                    src={art.image}
                    alt={art.title[language]}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {art.isExploringFaith && (
                    <div className="absolute top-3 left-3 bg-[#1C1917]/90 text-white text-[11px] font-sans px-2 py-0.5 rounded backdrop-blur-xs">
                      {language === 'id' ? 'Mengenal Iman' : 'Exploring Faith'}
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-medium text-[#A34828]">
                      {t.categories[art.category]}
                    </span>
                    <span aria-hidden="true">·</span>
                    {art.scriptureRef && (
                      <>
                        <span className="font-mono text-stone-600">{art.scriptureRef}</span>
                        <span aria-hidden="true">·</span>
                      </>
                    )}
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-[#1C1917] group-hover:text-[#A34828] transition-colors leading-snug">
                    {art.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                    {art.excerpt[language]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] group-hover:text-[#A34828] transition-colors">
                  <span>{t.readReflection}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
