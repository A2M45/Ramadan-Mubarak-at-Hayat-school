// Données de traduction
const translations = {
  ar: {
    welcome: "مرحبًا بكم في موقع رمضان",
    prayer_times: "أوقات الصلاة",
    tarawih_times: "أوقات التراويح",
    mosques: "المساجد",
    advice: "نصائح رمضانية",
    contact: "اتصل بنا",
    fajr: "الفجر",
    dhuhr: "الظهر",
    asr: "العصر",
    maghrib: "المغرب",
    isha: "العشاء"
  },
  fr: {
    welcome: "Bienvenue sur le site de Ramadan",
    prayer_times: "Heures de prière",
    tarawih_times: "Heures de Tarawih",
    mosques: "Mosquées",
    advice: "Conseils pour le Ramadan",
    contact: "Contactez-nous",
    fajr: "Fajr",
    dhuhr: "Dhuhr",
    asr: "Asr",
    maghrib: "Maghrib",
    isha: "Isha"
  }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
  document.querySelector("html").setAttribute("lang", lang);
  document.querySelector("html").setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Mettre à jour le texte des éléments
  document.querySelector("header h1").textContent = translations[lang].welcome;
  document.querySelector("#prayer-times h2")?.textContent = translations[lang].prayer_times;
  document.querySelector("#tarawih-times h2")?.textContent = translations[lang].tarawih_times;
  document.querySelector("#mosques h2")?.textContent = translations[lang].mosques;
  document.querySelector("#advice h2")?.textContent = translations[lang].advice;
  document.querySelector("#contact h2")?.textContent = translations[lang].contact;

  // Mettre à jour les libellés des heures de prière
  document.querySelector("#fajr-time")?.previousSibling.textContent = translations[lang].fajr + ": ";
  document.querySelector("#dhuhr-time")?.previousSibling.textContent = translations[lang].dhuhr + ": ";
  document.querySelector("#asr-time")?.previousSibling.textContent = translations[lang].asr + ": ";
  document.querySelector("#maghrib-time")?.previousSibling.textContent = translations[lang].maghrib + ": ";
  document.querySelector("#isha-time")?.previousSibling.textContent = translations[lang].isha + ": ";
}

// Basculer entre l'arabe et le français
document.getElementById("language-toggle")?.addEventListener("click", () => {
  const currentLang = document.querySelector("html").getAttribute("lang");
  const newLang = currentLang === "ar" ? "fr" : "ar";
  changeLanguage(newLang);
  document.getElementById("language-toggle").textContent = newLang === "ar" ? "Français" : "عربي";
});

// Données des heures de prière
const prayerTimes = {
  fajr: "05:00",
  dhuhr: "13:00",
  asr: "16:30",
  maghrib: "19:00",
  isha: "20:30"
};

// Afficher les heures de prière
document.getElementById('fajr-time').textContent = prayerTimes.fajr;
document.getElementById('dhuhr-time').textContent = prayerTimes.dhuhr;
document.getElementById('asr-time').textContent = prayerTimes.asr;
document.getElementById('maghrib-time').textContent = prayerTimes.maghrib;
document.getElementById('isha-time').textContent = prayerTimes.isha;

// Données des mosquées
const mosques = [
  "مسجد باركي",
  "مسجد الإمام مالك",
  "مسجد عبد الحميد بن باديس"
];

// Afficher les mosquées
const mosquesList = document.getElementById('mosques-list');
mosques.forEach(mosque => {
  const li = document.createElement('li');
  li.textContent = mosque;
  mosquesList.appendChild(li);
});


// Initialiser la langue par défaut (arabe)
changeLanguage("ar");
