/* ========================================
   MoonLog — i18n (zh-CN / en)
   ======================================== */

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.privacy": "Privacy Policy",
    "nav.support": "Support",

    // Index page
    "header.subtitle.index": "Trade Review System",
    "hero.title": "Every trade deserves a review",
    "hero.desc": "A structured review framework to help you identify trading patterns, improve decisions, and build discipline.",
    "hero.btn.privacy": "Privacy Policy",
    "hero.btn.support": "Support",
    "feature.record.title": "Trade Recording",
    "feature.record.desc": "Quickly log every buy and sell, with support for trade plans and strategy notes.",
    "feature.review.title": "Structured Review",
    "feature.review.desc": "Five-factor review framework covering holding period, expectation deviation, and execution quality.",
    "feature.privacy.title": "Privacy First",
    "feature.privacy.desc": "Data is stored in your own iCloud. We cannot access any of your trading information.",
    "feature.pattern.title": "Pattern Recognition",
    "feature.pattern.desc": "Discover your trading habits and behavioral patterns through tags and statistics.",

    // Privacy page
    "header.subtitle.privacy": "Privacy Policy",
    "privacy.date": "Effective: July 2026",
    "privacy.overview.title": "Overview",
    "privacy.overview.text": 'MoonLog ("we") is a trade review tool for individual investors. We highly value your privacy and <strong>will not collect, store, or sell your personal trading data</strong>. This privacy policy explains how we handle information when you use MoonLog.',
    "privacy.storage.title": "Data Storage",
    "privacy.storage.text": "All data you create in MoonLog (trade records, review notes, portfolio info, etc.) is stored in the following locations:",
    "privacy.storage.local": "<strong>Local Device</strong> — Data is saved on your iPhone/iPad local storage",
    "privacy.storage.icloud": "<strong>iCloud</strong> — If you enable iCloud sync, data syncs to your personal iCloud account via Apple's CloudKit",
    "privacy.storage.note": "We <strong>do not have our own servers</strong> to store any of your data. Your data is entirely managed by you and Apple's iCloud infrastructure.",
    "privacy.network.title": "Network Requests",
    "privacy.network.text": "MoonLog makes network requests in the following scenarios:",
    "privacy.network.stock.title": "Stock Market Data",
    "privacy.network.stock.text": "To display the latest stock prices and market data, MoonLog requests publicly available market data from third-party sources. No personal information is involved.",
    "privacy.network.ai.title": "AI Analysis",
    "privacy.network.ai.text": "When you actively use the AI analysis feature, MoonLog sends necessary trade data to an AI service provider for analysis. This data is only used to generate reports and is not permanently stored.",
    "privacy.network.ocr.title": "OCR Recognition",
    "privacy.network.ocr.text": "When you use the screenshot recognition feature, images are sent to an OCR service for text recognition. Original images are not retained on any server after processing.",
    "privacy.thirdparty.title": "Third-Party Services",
    "privacy.thirdparty.text": "MoonLog is committed to providing a clean user experience:",
    "privacy.thirdparty.noads": "<strong>No Ad SDKs</strong> — We do not integrate any advertising frameworks",
    "privacy.thirdparty.notrack": "<strong>No User Tracking</strong> — We do not use third-party analytics or tracking tools",
    "privacy.thirdparty.nosale": "<strong>No Data Sales</strong> — We will never sell your data to any third party",
    "privacy.camera.title": "Camera & Photo Library",
    "privacy.camera.text": "MoonLog may request camera or photo library access for the following purposes only:",
    "privacy.camera.ocr": "<strong>OCR Screenshot Recognition</strong> — Automatically recognize trade info from screenshots to help you quickly record trades",
    "privacy.camera.note": "Selected images are only used for the current recognition operation and <strong>will not be uploaded or saved to any of our servers</strong>.",
    "privacy.delete.title": "Data Deletion",
    "privacy.delete.text": "You can delete your data at any time:",
    "privacy.delete.single": "<strong>Delete Individual Records</strong> — Delete any trade record or review note directly in the app",
    "privacy.delete.all": "<strong>Delete All Data</strong> — Uninstalling MoonLog will delete all local data",
    "privacy.delete.icloud": '<strong>iCloud Data</strong> — You can delete MoonLog\'s iCloud data in Settings → Apple ID → iCloud → Manage Storage',
    "privacy.contact.title": "Contact Us",
    "privacy.contact.text": "If you have any questions about this privacy policy, feel free to contact us.",

    // Support page
    "header.subtitle.support": "Support",
    "support.faq.title": "FAQ",
    "support.faq.q1": "Is my data safe?",
    "support.faq.a1": "Absolutely. All your trade records and review data are stored on your own device and iCloud account. MoonLog does not have its own servers and cannot access any of your data. Even if MoonLog ceases operation, your data will not be affected.",
    "support.faq.q2": "How do I sync data across devices?",
    "support.faq.a2": "MoonLog uses Apple's iCloud for data sync. Make sure all your devices are signed in with the same Apple ID and that MoonLog's iCloud sync is enabled in Settings → Apple ID → iCloud. Data will automatically stay in sync across your devices.",
    "support.faq.q3": "How do I delete all my data?",
    "support.faq.a3": "Uninstalling MoonLog will delete all local data. To also clear iCloud data, go to Settings → Apple ID → iCloud → Manage Storage, find MoonLog and delete its data.",
    "support.faq.q4": "How do I report issues?",
    "support.faq.a4": 'You can go to Settings → App Feedback in the app to choose a feedback method, or use the channels below:',
    "support.feedback.title": "Feedback Channels",
    "support.feedback.text": "We offer multiple feedback options. Choose the one most convenient for you:",
    "support.feedback.feature.title": "Feature Requests",
    "support.feedback.feature.text": "Have a feature suggestion or improvement idea? Submit via the Feishu form — we carefully evaluate every request.",
    "support.feedback.feature.link": "Submit Feature Request →",
    "support.feedback.bug.title": "Bug Reports",
    "support.feedback.bug.text": "Encountered a bug or anomaly? Submit a bug report via the Feishu form to help us quickly locate and fix the issue.",
    "support.feedback.bug.link": "Submit Bug Report →",
    "support.feedback.email.title": "Email Feedback",
    "support.feedback.email.text": "You can also email us directly. Sending from within the app will automatically include device info to help us troubleshoot.",
    "support.feedback.appstore.title": "App Store Review",
    "support.feedback.appstore.text": "If you enjoy MoonLog, please rate and review us on the App Store — it means a lot to us.",
    "support.contact.title": "Contact Us",
    "support.contact.text": "Have any questions or suggestions? We're here to help.",

    // Footer
    "footer.rights": "© 2026 MoonLog. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.support": "Support"
  }
};

const zhTexts = {};

function collectZhTexts() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    zhTexts[key] = el.innerHTML;
  });
}

function setLang(lang) {
  localStorage.setItem("moonlog-lang", lang);
  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (lang === "en" && translations.en[key]) {
      el.innerHTML = translations.en[key];
    } else if (zhTexts[key]) {
      el.innerHTML = zhTexts[key];
    }
  });

  // Update title
  const titleKey = document.querySelector("title")?.getAttribute("data-i18n");
  if (titleKey && lang === "en" && translations.en[titleKey]) {
    document.title = translations.en[titleKey];
  } else if (titleKey && zhTexts[titleKey]) {
    document.title = zhTexts[titleKey];
  }

  // Update toggle button states
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function initI18n() {
  collectZhTexts();
  // Also collect title
  const titleEl = document.querySelector("title");
  if (titleEl && titleEl.getAttribute("data-i18n")) {
    zhTexts[titleEl.getAttribute("data-i18n")] = titleEl.textContent;
  }

  const saved = localStorage.getItem("moonlog-lang") || "zh";
  if (saved === "en") {
    setLang("en");
  }
}

document.addEventListener("DOMContentLoaded", initI18n);
