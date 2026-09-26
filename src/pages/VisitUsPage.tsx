import React, { useState } from "react";
import { Language, PageRoute } from "../types";
import { TRANSLATIONS } from "../data/translations";
import { CHURCH_PROFILE, VISITOR_FAQS } from "../data/churchData";
import { Accordion } from "../components/common/Accordion";
import {
    MapPin,
    Clock,
    Phone,
    Mail,
    Navigation,
    Car,
    Heart,
    Shield,
    CheckCircle,
} from "lucide-react";

interface VisitUsPageProps {
    language: Language;
    onNavigate: (page: PageRoute) => void;
    onOpenPlanVisit: () => void;
}

export const VisitUsPage: React.FC<VisitUsPageProps> = ({
    language,
    onNavigate,
    onOpenPlanVisit,
}) => {
    const t = TRANSLATIONS[language].visitPage;
    const church = CHURCH_PROFILE;
    const [directionsCopied, setDirectionsCopied] = useState(false);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(church.placeholders.fullAddress);
        setDirectionsCopied(true);
        setTimeout(() => setDirectionsCopied(false), 2500);
    };

    const handleOpenMaps = () => {
        window.open(church.mapsUrl, "_blank", "noopener,noreferrer");
    };

    const mapPreviewUrl = `https://www.google.com/maps?q=${encodeURIComponent(church.placeholders.fullAddress)}&output=embed`;

    const formattedFaqs = VISITOR_FAQS.map((faq) => ({
        id: faq.id,
        question: faq.question[language],
        answer: faq.answer[language],
    }));

    return (
        <div className="space-y-20 sm:space-y-28 pb-24">
            {/* Header */}
            <section className="pt-8 sm:pt-14 border-b border-[#E8E2D8] pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                    <div className="text-xs uppercase tracking-widest text-[#A34828] font-semibold">
                        {language === "id"
                            ? "Panduan Bagi Sahabat Baru"
                            : "First-Time Visitor Guide"}
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-serif text-[#1C1917] font-semibold tracking-tight text-balance">
                        {t.title}
                    </h1>
                    <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Practical Operational Info Cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Card 1: Worship Schedule */}
                    <div className="p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                {t.timeLabel}
                            </span>
                            <h3 className="text-xl font-serif font-bold text-[#1C1917] mt-1">
                                {church.placeholders.serviceDay}
                            </h3>
                            <p className="text-stone-700 font-mono text-base mt-1">
                                {church.placeholders.serviceTime}
                            </p>
                            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                                {language === "id"
                                    ? "Disarankan tiba 10–15 menit lebih awal untuk suasana teduh."
                                    : "We suggest arriving 10–15 minutes early for quiet preparation."}
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Location */}
                    <div className="p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                {t.locationLabel}
                            </span>
                            <h3 className="text-base font-serif font-bold text-[#1C1917] mt-1 whitespace-pre-line leading-relaxed">
                                {church.placeholders.fullAddress}
                            </h3>
                            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                                {language === "id"
                                    ? "Gedung gereja kami ramah disabilitas dan mudah dijangkau transportasi umum."
                                    : "Accessible entrance with convenient public transport and vehicle access."}
                            </p>
                            <button
                                type="button"
                                onClick={handleCopyAddress}
                                className="mt-3 text-xs font-semibold text-[#A34828] hover:text-[#83371d] inline-flex items-center gap-1.5 focus:outline-none"
                            >
                                {directionsCopied ? (
                                    <>
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        <span className="text-emerald-700">
                                            {language === "id"
                                                ? "Alamat Disalin!"
                                                : "Address Copied!"}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <Navigation className="w-3.5 h-3.5" />
                                        <span>
                                            {language === "id"
                                                ? "Salin Alamat Lengkap"
                                                : "Copy Full Address"}
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Contact */}
                    <div className="p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-4">
                        <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                {language === "id"
                                    ? "Layanan Informasi"
                                    : "Direct Assistance"}
                            </span>
                            <div className="space-y-1 mt-1 text-sm">
                                <div className="text-stone-700 font-mono text-xs">
                                    WA: {church.placeholders.phone}
                                </div>
                                <div className="text-stone-700 font-mono text-xs">
                                    Email: {church.placeholders.email}
                                </div>
                            </div>
                            <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                                {language === "id"
                                    ? "Ada kebutuhan khusus atau pertanyaan sebelum datang? Tim kami siap membantu."
                                    : "Need special seating arrangements or have queries? We are glad to help."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Map Visual Placeholder */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl overflow-hidden shadow-xs">
                    <div className="p-6 border-b border-[#E8E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                                {language === "id"
                                    ? "Peta Lokasi & Denah Bangunan"
                                    : "Location Map & Building Layout"}
                            </h3>
                            <p className="text-xs text-stone-500 font-mono mt-0.5">
                                {church.placeholders.fullAddress}
                            </p>
                        </div>
                        <button
                            onClick={handleOpenMaps}
                            className="px-4 py-2 bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
                        >
                            <Navigation className="w-3.5 h-3.5" />
                            <span>
                                {language === "id"
                                    ? "Buka di Google Maps"
                                    : "Open in Google Maps"}
                            </span>
                        </button>
                    </div>

                    <div className="h-64 sm:h-80 bg-[#EFE9DF]">
                        <iframe
                            title={
                                language === "id"
                                    ? "Peta lokasi GKMI"
                                    : "GKMI location map"
                            }
                            src={mapPreviewUrl}
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            {/* Directions inside the building */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 bg-[#FAF8F5]">
                    <div className="flex items-start gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center shrink-0">
                            <Navigation className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif text-[#1C1917] font-semibold">
                                {t.directionsTitle}
                            </h2>
                            <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                                {t.directionsSubtitle}
                            </p>
                        </div>
                    </div>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                        {t.directionsSteps.map((step, index) => (
                            <li
                                key={step}
                                className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed"
                            >
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#EFE9DF] text-[#A34828] text-xs font-semibold shrink-0">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="pt-1">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* What to Expect (Step-by-Step Flow) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
                        {t.whatToExpectTitle}
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base">
                        {language === "id"
                            ? "Gambaran sederhana sejak Anda menginjakkan kaki pertama kali hingga selesai."
                            : "A comfortable overview from the moment you pull into our parking lot until service ends."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {t.steps.map((s) => (
                        <div
                            key={s.step}
                            className="p-6 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl space-y-3"
                        >
                            <div className="text-2xl font-serif font-bold text-[#A34828]">
                                {s.step}
                            </div>
                            <h3 className="text-lg font-serif font-semibold text-[#1C1917]">
                                {s.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Parking & Transportation */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EFE9DF] text-[#A34828] flex items-center justify-center shrink-0">
                        <Car className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-serif font-semibold text-[#1C1917]">
                            {t.transportTitle}
                        </h3>
                        <p className="text-sm text-stone-600 leading-relaxed">
                            {t.transportDesc}
                        </p>
                    </div>
                    <button
                        onClick={onOpenPlanVisit}
                        className="sm:ml-auto px-6 py-2.5 bg-[#1C1917] hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                        {language === "id" ? "Beri Tahu Kami" : "Let Us Know"}
                    </button>
                </div>
            </section>

            {/* Visitor FAQ */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 mb-10">
                    <h2 className="text-3xl font-serif text-[#1C1917] font-semibold">
                        {language === "id"
                            ? "Pertanyaan yang Sering Diajukan"
                            : "Frequently Asked Questions"}
                    </h2>
                </div>
                <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs">
                    <Accordion items={formattedFaqs} />
                </div>
            </section>
        </div>
    );
};
