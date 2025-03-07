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

// Récupérer les heures de prière via l'API
fetch('/api/prayer-times')
  .then(response => response.json())
  .then(data => {
    document.getElementById('fajr-time').textContent = data.fajr;
    document.getElementById('dhuhr-time').textContent = data.dhuhr;
    document.getElementById('asr-time').textContent = data.asr;
    document.getElementById('maghrib-time').textContent = data.maghrib;
    document.getElementById('isha-time').textContent = data.isha;
  })
  .catch(error => console.error('Erreur lors de la récupération des heures de prière:', error));

// Récupérer les mosquées via l'API
fetch('/api/mosques')
  .then(response => response.json())
  .then(data => {
    const mosquesList = document.getElementById('mosques-list');
    if (mosquesList) {
      mosquesList.innerHTML = ""; // Vider la liste avant d'ajouter de nouveaux éléments
      data.forEach(mosque => {
        const li = document.createElement('li');
        li.textContent = mosque;
        mosquesList.appendChild(li);
      });
    }
  })
  .catch(error => console.error('Erreur lors de la récupération des mosquées:', error));

// Initialiser la langue par défaut (arabe)
changeLanguage("ar");
