const translations = {
    en: {
        "nav-home": "Home", "nav-products": "Products", "nav-about": "About", "nav-contact": "Contact", "nav-cta": "Get a Quote →",
        "hero-tag": "CNC Precision · 7075-T6 Aluminum · Made in Turkey",
        "hero-title-machined": "Machined", "hero-title-beyond": "Beyond", "hero-title-limits": "Limits.",
        "hero-sub": "Ultra-precision MTB components, hand-finished from aerospace-grade aluminum.",
        "hero-btn-view": "View Components ↗", "hero-btn-process": "Our Process",
        "stat-tolerance": "mm Tolerance", "stat-alloy": "Alloy Grade", "stat-cnc": "CNC Machined", "stat-wasted": "Wasted",
        "section-featured-eyebrow": "// Featured Components", "section-featured-title": "Built for the ", "section-featured-title-dim": "Relentless.",
        "lang-name": "EN"
    },
    tr: {
        "nav-home": "Anasayfa", "nav-products": "Ürünler", "nav-about": "Hakkımızda", "nav-contact": "İletişim", "nav-cta": "Teklif Al →",
        "hero-tag": "CNC Hassasiyeti · 7075-T6 Alüminyum · Türkiye'de Üretildi",
        "hero-title-machined": "Sınırların", "hero-title-beyond": "Ötesinde", "hero-title-limits": "İşlendi.",
        "hero-sub": "Havacılık sınıfı alüminyumdan el işçiliği ile bitirilmiş ultra hassas MTB bileşenleri.",
        "hero-btn-view": "Bileşenleri Gör ↗", "hero-btn-process": "Sürecimiz",
        "stat-tolerance": "mm Tolerans", "stat-alloy": "Alaşım Derecesi", "stat-cnc": "CNC İşleme", "stat-wasted": "Atık",
        "section-featured-eyebrow": "// Öne Çıkan Bileşenler", "section-featured-title": "Zorlu Koşullar İçin ", "section-featured-title-dim": "Üretildi.",
        "lang-name": "TR"
    },
    de: {
        "nav-home": "Startseite", "nav-products": "Produkte", "nav-about": "Über uns", "nav-contact": "Kontakt", "nav-cta": "Angebot →",
        "hero-tag": "CNC-Präzision · 7075-T6 Aluminium · Hergestellt in der Türkei",
        "hero-title-machined": "Über", "hero-title-beyond": "Grenzen", "hero-title-limits": "Hinaus.",
        "hero-sub": "Ultrapräzise MTB-Komponenten, handgefertigt aus Aluminium in Luftfahrtqualität.",
        "hero-btn-view": "Komponenten ansehen ↗", "hero-btn-process": "Unser Prozess",
        "stat-tolerance": "mm Toleranz", "stat-alloy": "Legierungsgrad", "stat-cnc": "CNC-gefräst", "stat-wasted": "Verschwendet",
        "section-featured-eyebrow": "// Ausgewählte Komponenten", "section-featured-title": "Gebaut für das ", "section-featured-title-dim": "Unerbittliche.",
        "lang-name": "DE"
    }
};
let currentLang = localStorage.getItem('darkrock_lang') || 'en';
function setLanguage(lang) {
    currentLang = lang; localStorage.setItem('darkrock_lang', lang); document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const langBtn = document.getElementById('lang-switcher-btn');
    if (langBtn) langBtn.innerHTML = `<span>${translations[lang]['lang-name']}</span>`;
}
function cycleLanguage() {
    const langs = ['en', 'tr', 'de'];
    let idx = (langs.indexOf(currentLang) + 1) % langs.length;
    setLanguage(langs[idx]);
}
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    const langBtn = document.getElementById('lang-switcher-btn');
    if (langBtn) langBtn.addEventListener('click', (e) => { e.preventDefault(); cycleLanguage(); });
});
