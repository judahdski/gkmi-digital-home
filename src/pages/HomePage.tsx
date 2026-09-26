import React from "react";
import { PageRoute, Language, Article } from "../types";
import { TRANSLATIONS } from "../data/translations";
import { CHURCH_PROFILE, VISITOR_FAQS } from "../data/churchData";
import { ARTICLES_DATA } from "../data/articles";
import { EVENTS_DATA } from "../data/events";
import { Accordion } from "../components/common/Accordion";
import {
    MapPin,
    Clock,
    Navigation,
    ArrowRight,
    HeartHandshake,
    MessageSquare,
    BookOpen,
    Calendar,
    Sparkles,
    Users,
    Compass,
} from "lucide-react";

interface HomePageProps {
    language: Language;
    onNavigate: (page: PageRoute) => void;
    onSelectArticle: (article: Article) => void;
    onOpenPlanVisit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
    language,
    onNavigate,
    onSelectArticle,
    onOpenPlanVisit,
}) => {
    const t = TRANSLATIONS[language];
    const church = CHURCH_PROFILE;
    const devotions = ARTICLES_DATA.filter((a) => !a.isExploringFaith).slice(
        0,
        3,
    );
    const exploringQuestions = ARTICLES_DATA.filter(
        (a) => a.isExploringFaith,
    ).slice(0, 4);
    const upcomingEvents = EVENTS_DATA.slice(0, 3);

    const formattedFaqs = VISITOR_FAQS.map((faq) => ({
        id: faq.id,
        question: faq.question[language],
        answer: faq.answer[language],
    }));

    return (
        <div className="space-y-24 sm:space-y-32 pb-24">
            {/* 1. HERO SECTION */}
            <section className="relative isolate min-h-[75vh] overflow-hidden bg-[#30251F] sm:min-h-[80vh] lg:min-h-[82vh]">
                <img
                    src={church.images.hero}
                    alt="Komunitas jemaat GKMI bersekutu dalam ibadah yang hangat"
                    className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[58%_center]"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,27,23,0.9)_0%,rgba(45,34,28,0.72)_34%,rgba(45,34,28,0.24)_68%,rgba(45,34,28,0.06)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,19,16,0.18)_0%,transparent_30%,rgba(25,19,16,0.3)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/55 to-transparent sm:h-26" />

                <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-5 py-20 sm:min-h-[80vh] sm:px-8 sm:py-24 lg:min-h-[82vh] lg:px-12">
                    <div className="max-w-[700px] space-y-7 sm:space-y-8">
                        <div className="space-y-5 sm:space-y-6">
                            <div className="text-xs font-semibold uppercase tracking-widest text-[#E9B39A]">
                                {church.name}
                            </div>
                            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
                                {t.hero.headline}
                            </h1>
                            <p className="max-w-xl text-base leading-relaxed text-stone-100/90 sm:text-lg">
                                {t.hero.subtext}
                            </p>
                        </div>

                        <div className="flex flex-col items-stretch gap-3.5 pt-1 sm:flex-row sm:items-center">
                            <button
                                onClick={() => onNavigate("visit")}
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#1C1917] px-7 py-3.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-stone-800"
                            >
                                <span>{t.hero.primaryCta}</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                            <button
                                onClick={() => onNavigate("about")}
                                className="flex items-center justify-center rounded-lg border border-white/45 bg-white/10 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/20"
                            >
                                {t.hero.secondaryCta}
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-stone-100/80">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                            <span>
                                {language === "id"
                                    ? "Ibadah Minggu Terbuka untuk Umum"
                                    : "Sunday Services Open to Everyone"}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{church.placeholders.serviceDay}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THIS WEEK / OPERATIONAL UTILITY BAR */}
            <section className="relative z-10 -mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:-mt-40">
                <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-6 sm:p-8 shadow-xs">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                                {t.thisWeek.label}
                            </div>
                            <h2 className="text-2xl font-serif text-[#1C1917] font-semibold">
                                {t.thisWeek.serviceName}
                            </h2>
                            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-stone-600 pt-1">
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-stone-400" />
                                    <span className="font-mono">
                                        {church.placeholders.serviceTime}
                                    </span>
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="text-stone-300"
                                >
                                    ·
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-stone-400" />
                                    <span className="font-mono">
                                        {church.placeholders.address}
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                            <button
                                onClick={() => onNavigate("visit")}
                                className="flex-1 md:flex-initial px-5 py-2.5 text-xs sm:text-sm font-medium bg-[#1C1917] text-white rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                            >
                                <Navigation className="w-3.5 h-3.5" />
                                <span>{t.thisWeek.getDirections}</span>
                            </button>
                            <button
                                onClick={onOpenPlanVisit}
                                className="flex-1 md:flex-initial px-5 py-2.5 text-xs sm:text-sm font-medium bg-white text-[#1C1917] border border-[#E8E2D8] rounded-lg hover:bg-[#F3EFEA] transition-colors"
                            >
                                {t.thisWeek.planVisit}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. YOU'RE WELCOME HERE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
                        {t.welcomeHere.headline}
                    </h2>
                    <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                        {t.welcomeHere.copy}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {t.welcomeHere.cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl hover:border-stone-400 transition-all duration-200 flex flex-col justify-between"
                        >
                            <div className="space-y-3">
                                <div className="w-10 h-10 rounded-lg bg-[#EFE9DF] text-[#1C1917] flex items-center justify-center font-serif font-bold text-sm">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-xl font-serif text-[#1C1917] font-semibold">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-stone-600 leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button
                        onClick={() => onNavigate("visit")}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#A34828] hover:text-[#84351b] transition-colors focus:outline-none focus-visible:underline"
                    >
                        <span>{t.welcomeHere.cta}</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            {/* 4. FIRST-TIME VISITOR FAQ ACCORDION */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 mb-10">
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] font-semibold tracking-tight">
                        {t.firstTime.title}
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                        {t.firstTime.subtitle}
                    </p>
                </div>

                <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs">
                    <Accordion items={formattedFaqs} />

                    <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-xs sm:text-sm text-stone-500">
                            {language === "id"
                                ? "Masih ada pertanyaan yang belum terjawab?"
                                : "Have other questions on your mind?"}
                        </span>
                        <button
                            onClick={onOpenPlanVisit}
                            className="px-6 py-2.5 bg-[#1C1917] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                        >
                            {t.firstTime.planVisitCta}
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. MEET OUR PASTOR */}
            <section className="max-w-lg lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl overflow-hidden shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        {/* Portrait side */}
                        <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative bg-[#EAE2D8]">
                            <img
                                src={church.images.pastor}
                                alt="Potret Gembala Jemaat GKMI Joshua Generation"
                                className="w-full h-full object-cover object-center lg:object-top"
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        {/* Content side */}
                        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
                            <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                                {t.pastorSection.sectionTitle}
                            </div>

                            <blockquote className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-medium leading-snug">
                                «{t.pastorSection.quote}»
                            </blockquote>

                            <div className="space-y-1">
                                <div className="text-lg font-serif font-bold text-[#1C1917]">
                                    {church.placeholders.pastorName}
                                </div>
                                <div className="text-sm text-stone-500">
                                    {t.pastorSection.role}
                                </div>
                            </div>

                            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                                {t.pastorSection.bioIntro}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <button
                                    onClick={() => onNavigate("pastor")}
                                    className="px-6 py-3 bg-[#1C1917] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
                                >
                                    {t.pastorSection.cta}
                                </button>
                                <button
                                    onClick={() => onNavigate("counseling")}
                                    className="px-6 py-3 bg-white hover:bg-[#F3EFEA] text-[#1C1917] border border-[#E8E2D8] text-xs sm:text-sm font-medium rounded-lg transition-colors"
                                >
                                    {t.pastorSection.ctaCounseling}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. PASTORAL CARE GATEWAY */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
                        {t.pastoralCare.headline}
                    </h2>
                    <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                        {t.pastoralCare.subtext}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1: Request Prayer */}
                    <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-stone-400 transition-colors">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1C1917] font-semibold">
                                {t.pastoralCare.prayerCard.title}
                            </h3>
                            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                                {t.pastoralCare.prayerCard.desc}
                            </p>
                        </div>
                        <div className="pt-8">
                            <button
                                onClick={() => onNavigate("prayer")}
                                className="w-full sm:w-auto px-6 py-3 bg-[#1C1917] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <span>{t.pastoralCare.prayerCard.cta}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Talk with Pastor */}
                    <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-stone-400 transition-colors">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-[#EFE9DF] text-[#1C1917] flex items-center justify-center">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif text-[#1C1917] font-semibold">
                                {t.pastoralCare.counselingCard.title}
                            </h3>
                            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                                {t.pastoralCare.counselingCard.desc}
                            </p>
                        </div>
                        <div className="pt-8">
                            <button
                                onClick={() => onNavigate("counseling")}
                                className="w-full sm:w-auto px-6 py-3 bg-[#1C1917] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <span>{t.pastoralCare.counselingCard.cta}</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. GROW IN FAITH (SPIRITUAL CONTENT HUB PREVIEW) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#E8E2D8] pb-6">
                    <div className="space-y-2">
                        <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                            GKMI Resources
                        </div>
                        <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
                            {t.growInFaith.title}
                        </h2>
                        <p className="text-stone-600 text-sm max-w-lg">
                            {t.growInFaith.subtitle}
                        </p>
                    </div>
                    <button
                        onClick={() => onNavigate("resources")}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C1917] hover:text-[#A34828] transition-colors self-start sm:self-end"
                    >
                        <span>{t.growInFaith.viewAll}</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* 3 Devotional Cards (No pills, unboxed metadata) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {devotions.map((art) => (
                        <article
                            key={art.id}
                            onClick={() => onSelectArticle(art)}
                            className="group cursor-pointer bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl overflow-hidden hover:border-stone-400 transition-colors flex flex-col justify-between"
                        >
                            <div>
                                <div className="aspect-16/10 overflow-hidden bg-stone-200">
                                    <img
                                        src={art.image}
                                        alt={art.title[language]}
                                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                                <div className="p-6 space-y-3">
                                    {/* Clean unboxed metadata with dot separators */}
                                    <div className="flex items-center gap-2 text-xs text-stone-500">
                                        <span className="font-medium text-[#A34828]">
                                            {
                                                t.growInFaith.categories[
                                                    art.category
                                                ]
                                            }
                                        </span>
                                        <span aria-hidden="true">·</span>
                                        {art.scriptureRef && (
                                            <>
                                                <span className="font-mono text-stone-600">
                                                    {art.scriptureRef}
                                                </span>
                                                <span aria-hidden="true">
                                                    ·
                                                </span>
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
                                    <span>{t.growInFaith.readReflection}</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* 8. EXPLORING FAITH (QUESTIONS ARE WELCOME HERE) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#F3EFEA] border border-[#E8E2D8] rounded-2xl p-8 sm:p-12">
                    <div className="max-w-2xl mb-10 space-y-2">
                        <span className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                            {t.exploreFaith.tag}
                        </span>
                        <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
                            {t.exploreFaith.title}
                        </h2>
                        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                            {t.exploreFaith.desc}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {exploringQuestions.map((q) => (
                            <button
                                key={q.id}
                                onClick={() => onSelectArticle(q)}
                                className="text-left p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] hover:border-stone-400 transition-all flex items-start justify-between gap-4 group"
                            >
                                <div className="space-y-1.5">
                                    <h4 className="text-base font-serif font-semibold text-[#1C1917] group-hover:text-[#A34828] transition-colors">
                                        {q.title[language]}
                                    </h4>
                                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                                        {q.excerpt[language]}
                                    </p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#1C1917] transition-transform group-hover:translate-x-1 shrink-0 mt-1" />
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex items-center justify-between">
                        <span className="text-xs text-stone-500">
                            {language === "id"
                                ? "Pelajari dasar iman Kristen tanpa tekanan"
                                : "Explore the foundations of faith without pressure"}
                        </span>
                        <button
                            onClick={() => onNavigate("resources")}
                            className="text-xs font-semibold text-[#A34828] hover:text-[#82371d] transition-colors inline-flex items-center gap-1.5"
                        >
                            <span>{t.exploreFaith.viewMore}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 9. UPCOMING EVENTS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#E8E2D8] pb-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
                            {t.upcomingEvents.title}
                        </h2>
                        <p className="text-stone-600 text-sm max-w-lg">
                            {t.upcomingEvents.subtitle}
                        </p>
                    </div>
                    <button
                        onClick={() => onNavigate("events")}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C1917] hover:text-[#A34828] transition-colors self-start sm:self-end"
                    >
                        <span>{t.upcomingEvents.allEvents}</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {upcomingEvents.map((evt) => (
                        <div
                            key={evt.id}
                            className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl flex flex-col justify-between hover:border-stone-400 transition-colors"
                        >
                            <div className="space-y-3">
                                <div className="text-xs font-mono font-medium text-[#A34828]">
                                    {evt.date}
                                </div>
                                <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                                    {evt.title[language]}
                                </h3>
                                <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                                    {evt.description[language]}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-[#E8E2D8] space-y-2 text-xs text-stone-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span className="font-mono">
                                        {evt.timePlaceholder}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span className="font-mono">
                                        {evt.locationPlaceholder}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. FINAL CTA SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-balance">
                            «{t.finalCta.headline}»
                        </h2>
                        <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                            {t.finalCta.subtext}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button
                            onClick={() => onNavigate("visit")}
                            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1C1917] hover:bg-stone-100 font-medium text-sm rounded-lg transition-colors shadow-sm"
                        >
                            {t.finalCta.visitCta}
                        </button>
                        <button
                            onClick={() => onNavigate("prayer")}
                            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-stone-600 hover:border-white text-white font-medium text-sm rounded-lg transition-colors"
                        >
                            {t.finalCta.contactCta}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
