/**
 * DarkRock Components - i18n Logic
 * Supports: EN, TR, DE
 * Logic: Cycles through languages with a single button.
 */

const translations = {
    en: {
        "nav-home": "Home",
        "nav-products": "Products",
        "nav-about": "About",
        "nav-contact": "Contact",
        "nav-cta": "Get a Quote →",
        "hero-tag": "CNC Precision · 7075-T6 Aluminum · Made in Turkey",
        "hero-title-machined": "Machined",
        "hero-title-beyond": "Beyond",
        "hero-title-limits": "Limits.",
        "hero-sub": "Ultra-precision MTB components, hand-finished from aerospace-grade aluminum. Every gram engineered. Every surface machined to tolerance.",
        "hero-btn-view": "View Components ↗",
        "hero-btn-process": "Our Process",
        "stat-tolerance": "mm Tolerance",
        "stat-alloy": "Alloy Grade",
        "stat-cnc": "CNC Machined",
        "stat-wasted": "Wasted",
        "section-featured-eyebrow": "// Featured Components",
        "section-featured-title": "Built for the ",
        "section-featured-title-dim": "Relentless.",
        "section-featured-sub": "Each part machined from a single billet of aircraft-grade aluminum — zero compromises.",
        "product-category-cockpit": "Cockpit",
        "product-category-saddle": "Saddle System",
        "product-category-brake": "Brake System",
        "product-inquire": "Inquire →",
        "feature-cnc-title": "5-Axis CNC Machined",
        "feature-cnc-desc": "Every component machined on a professional 5-axis CNC centre from a single billet, eliminating joints and weak points.",
        "feature-alloy-title": "7075-T6 Alloy",
        "feature-alloy-desc": "Aerospace-grade 7075-T6 aluminium — the same alloy used in fighter jet airframes. Strongest available for its weight.",
        "feature-tolerance-title": "±0.01mm Tolerance",
        "feature-tolerance-desc": "Sub-millimetre precision ensures perfect fitment every time. No slop, no rattle, no guesswork.",
        "feature-anodized-title": "Anodized Finish",
        "feature-anodized-desc": "Hard-anodized surface treatment for maximum wear resistance and corrosion protection. Available in multiple colours.",
        "about-eyebrow": "// The Builder",
        "about-title": "One machine.<br>One vision.",
        "about-p1": "My name is Efe. I'm 21 years old and I run DarkRock Components out of my own CNC workshop. What started as a passion for mountain biking turned into an obsession with making parts that simply don't exist anywhere else.",
        "about-p2": "Every component I make is designed by me, machined by me, and finished by me. No middlemen, no compromises. Just raw precision and a genuine love for the sport.",
        "about-list-1": "Designed and machined in Turkey",
        "about-list-2": "Each part individually inspected before shipping",
        "about-list-3": "Custom specifications available on request",
        "about-list-4": "Direct from builder — no reseller markup",
        "about-btn": "Full Story →",
        "cta-title": "Ready to ride<br><span style='color:var(--accent)'>precision?</span>",
        "cta-sub": "Get in touch for custom specs, pricing, or wholesale inquiries. Every order is built to order.",
        "cta-btn-contact": "Contact Me →",
        "cta-btn-browse": "Browse Parts",
        "footer-desc": "Ultra-precision CNC machined MTB components. Built by a rider, for riders who demand more from their machine.",
        "footer-made-in": "Made in Turkey",
        "lang-name": "EN"
    },
    tr: {
        "nav-home": "Anasayfa",
        "nav-products": "Ürünler",
        "nav-about": "Hakkımızda",
        "nav-contact": "İletişim",
        "nav-cta": "Teklif Al →",
        "hero-tag": "CNC Hassasiyeti · 7075-T6 Alüminyum · Türkiye'de Üretildi",
        "hero-title-machined": "Sınırların",
        "hero-title-beyond": "Ötesinde",
        "hero-title-limits": "İşlendi.",
        "hero-sub": "Havacılık sınıfı alüminyumdan el işçiliği ile bitirilmiş ultra hassas MTB bileşenleri. Her gram mühendislik eseri. Her yüzey toleransına uygun işlendi.",
        "hero-btn-view": "Bileşenleri Gör ↗",
        "hero-btn-process": "Sürecimiz",
        "stat-tolerance": "mm Tolerans",
        "stat-alloy": "Alaşım Derecesi",
        "stat-cnc": "CNC İşleme",
        "stat-wasted": "Atık",
        "section-featured-eyebrow": "// Öne Çıkan Bileşenler",
        "section-featured-title": "Zorlu Koşullar İçin ",
        "section-featured-title-dim": "Üretildi.",
        "section-featured-sub": "Her parça tek bir uçak sınıfı alüminyum bloktan işlendi — sıfır taviz.",
        "product-category-cockpit": "Kokpit",
        "product-category-saddle": "Sele Sistemi",
        "product-category-brake": "Fren Sistemi",
        "product-inquire": "Bilgi Al →",
        "feature-cnc-title": "5-Eksenli CNC İşleme",
        "feature-cnc-desc": "Her bileşen, eklem yerlerini ve zayıf noktaları ortadan kaldıran profesyonel bir 5 eksenli CNC merkezinde tek bir bloktan işlenir.",
        "feature-alloy-title": "7075-T6 Alaşımı",
        "feature-alloy-desc": "Havacılık sınıfı 7075-T6 alüminyum — savaş uçağı gövdelerinde kullanılan aynı alaşım. Ağırlığına göre en güçlüsü.",
        "feature-tolerance-title": "±0.01mm Tolerans",
        "feature-tolerance-desc": "Milisaniye altı hassasiyet, her seferinde mükemmel uyumu sağlar. Boşluk yok, tıkırtı yok, tahmin yok.",
        "feature-anodized-title": "Eloksal Kaplama",
        "feature-anodized-desc": "Maksimum aşınma direnci ve korozyon koruması için sert eloksal yüzey işlemi. Birden fazla renk seçeneği mevcut.",
        "about-eyebrow": "// Üretici",
        "about-title": "Tek makine.<br>Tek vizyon.",
        "about-p1": "Benim adım Efe. 21 yaşındayım ve DarkRock Components'ı kendi CNC atölyemde yönetiyorum. Dağ bisikleti tutkusu olarak başlayan şey, başka hiçbir yerde var olmayan parçalar yapma saplantısına dönüştü.",
        "about-p2": "Yaptığım her bileşen benim tarafımdan tasarlandı, benim tarafımdan işlendi ve benim tarafımdan bitirildi. Aracı yok, taviz yok. Sadece saf hassasiyet ve spora duyulan gerçek bir sevgi.",
        "about-list-1": "Türkiye'de tasarlandı ve işlendi",
        "about-list-2": "Her parça gönderilmeden önce tek tek kontrol edilir",
        "about-list-3": "İstek üzerine özel spesifikasyonlar mevcuttur",
        "about-list-4": "Doğrudan üreticiden — satıcı kâr payı yok",
        "about-btn": "Hikayenin Tamamı →",
        "cta-title": "Hassasiyeti sürmeye<br><span style='color:var(--accent)'>hazır mısın?</span>",
        "cta-sub": "Özel özellikler, fiyatlandırma veya toptan satış soruları için iletişime geçin. Her sipariş sipariş üzerine üretilir.",
        "cta-btn-contact": "İletişime Geç →",
        "cta-btn-browse": "Parçalara Göz At",
        "footer-desc": "Ultra hassas CNC işlenmiş MTB bileşenleri. Bir sürücü tarafından, makinelerinden daha fazlasını isteyen sürücüler için üretildi.",
        "footer-made-in": "Türkiye'de Üretildi",
        "lang-name": "TR"
    },
    de: {
        "nav-home": "Startseite",
        "nav-products": "Produkte",
        "nav-about": "Über uns",
        "nav-contact": "Kontakt",
        "nav-cta": "Angebot →",
        "hero-tag": "CNC-Präzision · 7075-T6 Aluminium · Hergestellt in der Türkei",
        "hero-title-machined": "Über",
        "hero-title-beyond": "Grenzen",
        "hero-title-limits": "Hinaus.",
        "hero-sub": "Ultrapräzise MTB-Komponenten, handgefertigt aus Aluminium in Luftfahrtqualität. Jedes Gramm durchdacht. Jede Oberfläche auf Toleranz bearbeitet.",
        "hero-btn-view": "Komponenten ansehen ↗",
        "hero-btn-process": "Unser Prozess",
        "stat-tolerance": "mm Toleranz",
        "stat-alloy": "Legierungsgrad",
        "stat-cnc": "CNC-gefräst",
        "stat-wasted": "Verschwendet",
        "section-featured-eyebrow": "// Ausgewählte Komponenten",
        "section-featured-title": "Gebaut für das ",
        "section-featured-title-dim": "Unerbittliche.",
        "section-featured-sub": "Jedes Teil aus einem einzigen Block Aluminium in Luftfahrtqualität gefräst – null Kompromisse.",
        "product-category-cockpit": "Cockpit",
        "product-category-saddle": "Sattelsystem",
        "product-category-brake": "Bremssystem",
        "product-inquire": "Anfragen →",
        "feature-cnc-title": "5-Achsen CNC-gefräst",
        "feature-cnc-desc": "Jede Komponente wird auf einem professionellen 5-Achsen-CNC-Zentrum aus einem einzigen Block gefräst, wodurch Verbindungen und Schwachstellen eliminiert werden.",
        "feature-alloy-title": "7075-T6 Legierung",
        "feature-alloy-desc": "Aluminium 7075-T6 in Luftfahrtqualität – die gleiche Legierung, die auch in Kampfjet-Zellen verwendet wird. Die stärkste verfügbare für ihr Gewicht.",
        "feature-tolerance-title": "±0,01 mm Toleranz",
        "feature-tolerance-desc": "Submillimeter-Präzision sorgt jedes Mal für eine perfekte Passform. Kein Spiel, kein Klappern, kein Rätselraten.",
        "feature-anodized-title": "Eloxiertes Finish",
        "feature-anodized-desc": "Harteloxierte Oberflächenbehandlung für maximale Verschleißfestigkeit und Korrosionsschutz. In mehreren Farben erhältlich.",
        "about-eyebrow": "// Der Erbauer",
        "about-title": "Eine Maschine.<br>Eine Vision.",
        "about-p1": "Mein Name ist Efe. Ich bin 21 Jahre alt und betreibe DarkRock Components in meiner eigenen CNC-Werkstatt. Was als Leidenschaft für das Mountainbiken begann, wurde zu einer Obsession, Teile herzustellen, die es sonst nirgendwo gibt.",
        "about-p2": "Jede Komponente, die ich herstelle, wird von mir entworfen, von mir gefräst und von mir fertiggestellt. Keine Zwischenhändler, keine Kompromisse. Nur rohe Präzision und eine echte Liebe zum Sport.",
        "about-list-1": "Entworfen und gefräst in der Türkei",
        "about-list-2": "Jedes Teil wird vor dem Versand einzeln geprüft",
        "about-list-3": "Kundenspezifische Spezifikationen auf Anfrage erhältlich",
        "about-list-4": "Direkt vom Erbauer – kein Wiederverkäuferaufschlag",
        "about-btn": "Ganze Geschichte →",
        "cta-title": "Bereit für <br><span style='color:var(--accent)'>Präzision?</span>",
        "cta-sub": "Kontaktieren Sie uns für kundenspezifische Spezifikationen, Preise oder Großhandelsanfragen. Jede Bestellung wird auf Bestellung gefertigt.",
        "cta-btn-contact": "Kontaktiere mich →",
        "cta-btn-browse": "Teile durchsuchen",
        "footer-desc": "Ultrapräzise CNC-gefräste MTB-Komponenten. Gebaut von einem Fahrer für Fahrer, die mehr von ihrer Maschine verlangen.",
        "footer-made-in": "Hergestellt in der Türkei",
        "lang-name": "DE"
    }
};

let currentLang = localStorage.getItem('darkrock_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('darkrock_lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'SELECT') {
                // Special handling for select options if needed, but usually data-i18n is on options themselves
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update the button text to show what's NEXT or CURRENT
    // We'll show the current language code
    const langBtn = document.getElementById('lang-switcher-btn');
    if (langBtn) {
        langBtn.innerHTML = `<span>${translations[lang]['lang-name']}</span>`;
    }
}

function cycleLanguage() {
    const langs = ['en', 'tr', 'de'];
    let idx = langs.indexOf(currentLang);
    idx = (idx + 1) % langs.length;
    setLanguage(langs[idx]);
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    const langBtn = document.getElementById('lang-switcher-btn');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cycleLanguage();
        });
    }
});
