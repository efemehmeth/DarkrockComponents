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
    "section-featured-title": "Built for the",
    "section-featured-title-dim": "Relentless.",
    "section-featured-sub": "Each part machined from a single billet of aircraft-grade aluminum — zero compromises.",
    "product-inquire": "Inquire →",
    "footer-desc": "Ultra-precision CNC machined MTB components. Built by a rider, for riders who demand more from their machine.",
    "footer-made-in": "Made in Turkey",
    "lang-toggle": "TR"
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
    "section-featured-title": "Süreklilik İçin",
    "section-featured-title-dim": "İnşa Edildi.",
    "section-featured-sub": "Her parça tek bir uçak sınıfı alüminyum bloktan işlendi — sıfır taviz.",
    "product-inquire": "Bilgi Al →",
    "footer-desc": "Ultra hassas CNC işlenmiş MTB bileşenleri. Bir sürücü tarafından, makinelerinden daha fazlasını isteyen sürücüler için üretildi.",
    "footer-made-in": "Türkiye'de Üretildi",
    "lang-toggle": "DE"
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
    "section-featured-title": "Gebaut für das",
    "section-featured-title-dim": "Unerbittliche.",
    "section-featured-sub": "Jedes Teil aus einem einzigen Block Aluminium in Luftfahrtqualität gefräst – null Kompromisse.",
    "product-inquire": "Anfragen →",
    "footer-desc": "Ultrapräzise CNC-gefräste MTB-Komponenten. Von einem Fahrer für Fahrer gebaut, die mehr von ihrer Maschine verlangen.",
    "footer-made-in": "Hergestellt in der Türkei",
    "lang-toggle": "EN"
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
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  // Update language toggle button text
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.innerText = translations[lang]['lang-toggle'];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = translations[currentLang]['lang-toggle'].toLowerCase();
      setLanguage(nextLang);
    });
  }
});
