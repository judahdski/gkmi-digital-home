/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Language, PageRoute, Article } from "./types";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { MobileStickyBar } from "./components/layout/MobileStickyBar";
import { Modal } from "./components/common/Modal";
import { ToastContainer, ToastMessage } from "./components/common/Toast";
import { PlanVisitForm } from "./components/forms/PlanVisitForm";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { VisitUsPage } from "./pages/VisitUsPage";
import { PastorPage } from "./pages/PastorPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ArticleDetailPage } from "./pages/ArticleDetailPage";
import { EventsPage } from "./pages/EventsPage";
import { PastoralCarePage } from "./pages/PastoralCarePage";
import { PrayerPage } from "./pages/PrayerPage";
import { CounselingPage } from "./pages/CounselingPage";
import { ARTICLES_DATA } from "./data/articles";

export default function App() {
    const [language, setLanguage] = useState<Language>(() => {
        try {
            const saved = localStorage.getItem("gkmi_lang");
            if (saved === "en" || saved === "id") return saved;
        } catch {}
        return "id";
    });

    const [currentPage, setCurrentPage] = useState<PageRoute>("home");
    const [selectedArticle, setSelectedArticle] = useState<Article>(
        ARTICLES_DATA[0],
    );
    const [isPlanVisitOpen, setIsPlanVisitOpen] = useState(false);
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    useEffect(() => {
        try {
            localStorage.setItem("gkmi_lang", language);
        } catch {}
        document.documentElement.lang = language;
    }, [language]);

    const addToast = (
        title: string,
        message: string,
        type: "success" | "info" | "error" = "success",
    ) => {
        const id = "toast-" + Date.now();
        setToasts((prev) => [...prev, { id, title, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4500);
    };

    const dismissToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const handleNavigate = (page: PageRoute) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSelectArticle = (article: Article) => {
        setSelectedArticle(article);
        setCurrentPage("article");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#EAE2D8]">
            {/* Skip to Content for Accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#1C1917] text-white text-xs font-semibold rounded-md"
            >
                {language === "id"
                    ? "Loncat ke konten utama"
                    : "Skip to main content"}
            </a>

            {/* Top Bar Navigation */}
            <Navbar
                currentPage={currentPage}
                onNavigate={handleNavigate}
                language={language}
                onLanguageChange={setLanguage}
                onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
            />

            {/* Main Content Router */}
            <main
                id="main-content"
                className={`flex-1 ${currentPage === "home" ? "" : "pt-20"}`}
            >
                {currentPage === "home" && (
                    <HomePage
                        language={language}
                        onNavigate={handleNavigate}
                        onSelectArticle={handleSelectArticle}
                        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
                    />
                )}

                {currentPage === "about" && (
                    <AboutPage
                        language={language}
                        onNavigate={handleNavigate}
                    />
                )}

                {currentPage === "visit" && (
                    <VisitUsPage
                        language={language}
                        onNavigate={handleNavigate}
                        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
                    />
                )}

                {currentPage === "pastor" && (
                    <PastorPage
                        language={language}
                        onNavigate={handleNavigate}
                    />
                )}

                {currentPage === "resources" && (
                    <ResourcesPage
                        language={language}
                        onNavigate={handleNavigate}
                        onSelectArticle={handleSelectArticle}
                    />
                )}

                {currentPage === "article" && (
                    <ArticleDetailPage
                        article={selectedArticle}
                        language={language}
                        onBack={() => handleNavigate("resources")}
                        onSelectArticle={handleSelectArticle}
                        onNavigate={handleNavigate}
                    />
                )}

                {currentPage === "events" && (
                    <EventsPage
                        language={language}
                        onNavigate={handleNavigate}
                        onOpenPlanVisit={() => setIsPlanVisitOpen(true)}
                    />
                )}

                {currentPage === "pastoral-care" && (
                    <PastoralCarePage
                        language={language}
                        onNavigate={handleNavigate}
                    />
                )}

                {currentPage === "prayer" && (
                    <PrayerPage
                        language={language}
                        onNavigate={handleNavigate}
                        onToast={addToast}
                    />
                )}

                {currentPage === "counseling" && (
                    <CounselingPage
                        language={language}
                        onNavigate={handleNavigate}
                        onToast={addToast}
                    />
                )}
            </main>

            {/* Footer */}
            <Footer
                language={language}
                onNavigate={handleNavigate}
            />

            {/* Mobile Sticky Action Bar */}
            <MobileStickyBar
                language={language}
                onNavigate={handleNavigate}
                currentPage={currentPage}
            />

            {/* Plan Your Visit Interactive Modal */}
            <Modal
                isOpen={isPlanVisitOpen}
                onClose={() => setIsPlanVisitOpen(false)}
                title={
                    language === "id"
                        ? "Rencanakan Kunjungan Anda"
                        : "Plan Your Visit"
                }
            >
                <PlanVisitForm
                    language={language}
                    onSuccess={() => {
                        setIsPlanVisitOpen(false);
                        addToast(
                            language === "id"
                                ? "Kunjungan Terkonfirmasi"
                                : "Visit Confirmed",
                            language === "id"
                                ? "Kami menantikan kehadiran Anda di GKMI hari Minggu ini."
                                : "We look forward to welcoming you at GKMI this Sunday.",
                        );
                    }}
                />
            </Modal>

            {/* Accessible Toast Notification System */}
            <ToastContainer
                toasts={toasts}
                onDismiss={dismissToast}
            />
        </div>
    );
}
