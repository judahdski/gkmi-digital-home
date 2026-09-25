import React, { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Language, PageRoute } from "../../types";
import { TRANSLATIONS } from "../../data/translations";

interface NavbarProps {
    currentPage: PageRoute;
    onNavigate: (page: PageRoute) => void;
    language: Language;
    onLanguageChange: (lang: Language) => void;
    onOpenPlanVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
    currentPage,
    onNavigate,
    language,
    onLanguageChange,
    onOpenPlanVisit,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const t = TRANSLATIONS[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 32);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks: { label: string; route: PageRoute }[] = [
        { label: t.home, route: "home" },
        { label: t.about, route: "about" },
        { label: t.visitUs, route: "visit" },
        { label: t.resources, route: "resources" },
        { label: t.pastoralCare, route: "pastoral-care" },
        { label: t.events, route: "events" },
    ];

    const handleLinkClick = (route: PageRoute) => {
        onNavigate(route);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow,color] duration-250 ease-in-out ${
                isScrolled || currentPage !== "home"
                    ? "border-[#E8E2D8] bg-[#FAF8F5]/95 text-[#1C1917] shadow-xs backdrop-blur-md"
                    : "border-transparent bg-transparent text-white shadow-none"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Zone 1: Single element wordmark */}
                    <button
                        onClick={() => handleLinkClick("home")}
                        aria-label="GKMI home"
                        className="flex cursor-pointer items-center gap-3 rounded-sm text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828]"
                    >
                        <img
                            src="/gkmijg-main-logo-removebg-preview.png"
                            alt="GKMI"
                            className={`h-12 w-auto object-contain sm:h-14 ${isScrolled ? "" : "drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"}`}
                        />
                    </button>

                    {/* Zone 2: 4-6 text navigation links */}
                    <nav className="hidden lg:flex items-center gap-7">
                        {navLinks.map((link) => {
                            const isActive = currentPage === link.route;
                            return (
                                <button
                                    key={link.route}
                                    onClick={() => handleLinkClick(link.route)}
                                    className={`text-sm font-medium transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828] rounded-sm whitespace-nowrap ${
                                        isActive
                                            ? isScrolled
                                                ? "font-semibold text-[#1C1917]"
                                                : "font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
                                            : isScrolled
                                              ? "text-stone-600 hover:text-[#1C1917]"
                                              : "text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isScrolled ? "bg-[#A34828]" : "bg-[#F5C7B0]"}`}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Zone 3: Primary action + Language toggle */}
                    <div className="hidden sm:flex items-center gap-4">
                        {/* Primary Action Button */}
                        <button
                            onClick={() => handleLinkClick("visit")}
                            className="px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#1C1917] hover:bg-stone-800 rounded-lg transition-colors whitespace-nowrap shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1C1917]"
                        >
                            {t.visitUs}
                        </button>
                    </div>

                    {/* Mobile Menu Button & Small Lang toggle */}
                    <div className="flex items-center gap-2 lg:hidden">
                        {/* Functional Language Toggle */}
                        <div
                            className={`flex items-center rounded-md border p-0.5 text-xs font-medium transition-colors duration-250 ${isScrolled ? "border-[#E8E2D8] bg-[#FAF8F5]" : "border-white/45 bg-black/10"}`}
                        >
                            <button
                                type="button"
                                onClick={() => onLanguageChange("id")}
                                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                                    language === "id"
                                        ? "bg-[#1C1917] text-white"
                                        : isScrolled
                                          ? "text-stone-600 hover:text-stone-900"
                                          : "text-white/90 hover:text-white"
                                }`}
                            >
                                ID
                            </button>
                            <button
                                type="button"
                                onClick={() => onLanguageChange("en")}
                                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                                    language === "en"
                                        ? "bg-[#1C1917] text-white"
                                        : isScrolled
                                          ? "text-stone-600 hover:text-stone-900"
                                          : "text-white/90 hover:text-white"
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileMenuOpen}
                            className={`rounded-md p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A34828] ${isScrolled ? "text-stone-700 hover:bg-[#EFE9DF] hover:text-stone-900" : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] hover:bg-white/10"}`}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-b border-[#E8E2D8] bg-[#FAF8F5] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
                    {navLinks.map((link) => (
                        <button
                            key={link.route}
                            onClick={() => handleLinkClick(link.route)}
                            className={`block w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                                currentPage === link.route
                                    ? "bg-[#EFE9DF] text-[#1C1917] font-semibold"
                                    : "text-stone-700 hover:bg-[#F3EFEA]"
                            }`}
                        >
                            {link.label}
                        </button>
                    ))}
                    <div className="pt-3 border-t border-[#E8E2D8] flex flex-col gap-2">
                        <button
                            onClick={() => handleLinkClick("visit")}
                            className="w-full py-3 text-center text-sm font-medium text-white bg-[#1C1917] rounded-lg shadow-xs"
                        >
                            {t.visitUs}
                        </button>
                        <button
                            onClick={() => handleLinkClick("prayer")}
                            className="w-full py-2.5 text-center text-sm font-medium text-[#1C1917] border border-[#E8E2D8] rounded-lg bg-white"
                        >
                            {t.ctaPrayer}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
