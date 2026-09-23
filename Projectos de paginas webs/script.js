const targetDate = new Date("2026-09-29T00:00:00").getTime();
const togetherStartDate = new Date("2026-06-29T00:00:00").getTime();

const translations = {
  es: {
    nav: { home: "Ir al inicio", label: "Navegación principal", story: "Historia", moments: "Momentos", future: "Futuro", ducks: "Patos" },
    hero: {
      eyebrow: "Una pequeña cápsula de lo nuestro · 2026",
      title: "Todo empezó<br /><em>el 12 de junio.</em>",
      intro: "Nuestra primera conversación fue el 7 de junio y, el 12, empezamos a ser algo más que amigos. Desde el segundo en que te vi, supe que quería estar contigo.",
      button: "Ver nuestra historia",
      note: "para mi persona favorita"
    },
    anniversary: { eyebrow: "Próximo capítulo", title: "3 meses de nosotros", copy: "El 29 de septiembre celebramos todo lo que ya hemos vivido y todo lo bonito que todavía nos queda." },
    countdown: { label: "Cuenta atrás para nuestro aniversario", days: "días", hours: "horas", minutes: "min", seconds: "seg" },
    together: { label: "Tiempo que llevamos juntos", title: "Llevamos juntos", days: "días", hours: "horas", minutes: "minutos" },
    months: { june: "junio", juneShort: "jun", september: "septiembre" },
    images: { cover: "Flores rosas sobre una mesa", one: "Dos personas caminando juntas", two: "Pareja disfrutando de un momento juntos", three: "Pareja abrazada al atardecer", letter: "Un recuerdo especial" },
    story: {
      eyebrow: "La línea del tiempo", title: "De una conversación<br /><em>a nuestra historia.</em>",
      first: { eyebrow: "La primera conversación", title: "El 7 de junio tuvimos nuestra primera conversación.", copy: "Gracias a Dun na Coiribe, al Erasmus en Galway y a Arriba Eventos, aquel primer momento pudo convertirse en el comienzo de nuestra historia." },
      second: { eyebrow: "Algo más que amigos", title: "El 12 de junio empezamos a ser algo más.", copy: "En el segundo en que te vi me enamoré de ti y supe que quería estar contigo, aunque todavía no fuéramos una pareja oficial." },
      lake: { eyebrow: "Un día especial", title: "El 22 de junio fuimos a un lago precioso.", copy: "Fue uno de esos días tranquilos y bonitos que se quedan guardados para siempre." },
      official: { eyebrow: "Nuestra fecha", title: "El 29 de junio nuestra relación se hizo oficial.", copy: "Ese día dejamos de ser solo algo especial y empezamos oficialmente nuestra historia juntos." },
      madrid: { date: "28 ago — 05 sep", month: "Madrid", eyebrow: "Nuestro viaje", title: "Del 28 de agosto al 5 de septiembre, vivimos Madrid y Toledo.", copy: "Fui a buscarte al aeropuerto y te llevé a conocer Madrid y Toledo. Fueron días increíbles juntos, hasta que te marchaste el día 5." },
      third: { eyebrow: "Lo que viene", title: "Tres meses y mil planes.", copy: "Una fecha para brindar por lo que hemos construido y por todos los recuerdos que aún nos faltan." }
    },
    moments: { eyebrow: "Pequeñas escenas, grandes recuerdos", title: "Momentos que<br /><em>guardaría siempre.</em>" },
    gallery: { one: "Un recuerdo para guardar", two: "Nuestras pequeñas escenas", three: "Siempre contigo", four: "Un día bonito", five: "Lo nuestro", six: "Momentos compartidos", seven: "Donde todo se siente fácil", eight: "Nuestras risas", nine: "Un instante nuestro", ten: "Juntos, siempre", eleven: "Una historia en fotos", twelve: "Un lugar favorito", thirteen: "Todo lo que vivimos", fourteen: "Una sonrisa contigo", fifteen: "Pequeños momentos", sixteen: "Lo bonito de nosotros", seventeen: "Para recordar siempre" },
    letter: { open: "Abrir mi nota", close: "Ocultar mi nota", download: "Descargar la nota", eyebrow: "Una nota para ti", copy: "El 7 de junio tuvimos nuestra primera conversación. Y el 12, aunque todavía no éramos una pareja oficial, empezamos a ser algo más que amigos. En el segundo en que te vi me enamoré de ti y supe que quería estar contigo. Gracias por convertir aquel instante en el comienzo de nuestra historia.", signature: "Con todo mi amor,<br /><em>Roberto</em> ♡" },
    footer: "Hecho para nosotros",
    theme: { dark: "Cambiar a modo claro", light: "Cambiar a modo oscuro", title: "Cambiar modo de color" },
    lightbox: { title: "Vista ampliada", close: "Cerrar imagen" },
    title: "Nuestra historia | 12.06 - 29.06"
  },
  ro: {
    nav: { home: "Mergi la inceput", label: "Navigare principala", story: "Povestea", moments: "Momente", future: "Viitorul", ducks: "Rate" },
    hero: {
      eyebrow: "O mica capsula a povestii noastre · 2026",
      title: "Totul a inceput<br /><em>pe 12 iunie.</em>",
      intro: "Prima noastra conversatie a fost pe 7 iunie, iar pe 12 am inceput sa fim mai mult decat prieteni. Din secunda in care te-am vazut, am stiut ca vreau sa fiu alaturi de tine.",
      button: "Vezi povestea noastra",
      note: "pentru persoana mea preferata"
    },
    anniversary: { eyebrow: "Urmatorul capitol", title: "3 luni impreuna", copy: "Pe 29 septembrie sarbatorim tot ce am trait deja si tot ce frumos ne asteapta." },
    countdown: { label: "Numaratoare inversa pana la aniversarea noastra", days: "zile", hours: "ore", minutes: "min", seconds: "sec" },
    together: { label: "Timpul petrecut impreuna", title: "Suntem impreuna de", days: "zile", hours: "ore", minutes: "minute" },
    months: { june: "iunie", juneShort: "iun", september: "septembrie" },
    images: { cover: "Flori roz pe o masa", one: "Doua persoane mergand impreuna", two: "Un cuplu bucurandu-se de un moment impreuna", three: "Un cuplu imbratisat la apus", letter: "O amintire speciala" },
    story: {
      eyebrow: "Linia timpului", title: "De la o conversatie<br /><em>la povestea noastra.</em>",
      first: { eyebrow: "Prima conversatie", title: "Pe 7 iunie am avut prima noastra conversatie.", copy: "Datorita Dun na Coiribe, programului Erasmus din Galway si lui Arriba Eventos, acel prim moment a devenit inceputul povestii noastre." },
      second: { eyebrow: "Mai mult decat prieteni", title: "Pe 12 iunie am inceput sa fim mai mult.", copy: "Din secunda in care te-am vazut m-am indragostit de tine si am stiut ca vreau sa fiu alaturi de tine, chiar daca nu eram inca un cuplu oficial." },
      lake: { eyebrow: "O zi speciala", title: "Pe 22 iunie am fost la un lac foarte frumos.", copy: "A fost una dintre acele zile linistite si frumoase pe care le pastrezi pentru totdeauna." },
      official: { eyebrow: "Ziua noastra", title: "Pe 29 iunie relatia noastra a devenit oficiala.", copy: "In acea zi am lasat in urma ceva special si am inceput oficial povestea noastra impreuna." },
      madrid: { date: "28 aug — 05 sept", month: "Madrid", eyebrow: "Calatoria noastra", title: "Intre 28 august si 5 septembrie am descoperit Madridul si Toledo.", copy: "Am venit sa te iau de la aeroport si ti-am aratat Madridul si Toledo. Au fost zile incredibile impreuna, pana cand ai plecat pe 5." },
      third: { eyebrow: "Ce urmeaza", title: "Trei luni si o mie de planuri.", copy: "O zi pentru a sarbatori ce am construit si toate amintirile care ne asteapta." }
    },
    moments: { eyebrow: "Scene mici, amintiri mari", title: "Momente pe care<br /><em>le-as pastra mereu.</em>" },
    gallery: { one: "O amintire de pastrat", two: "Scenele noastre mici", three: "Mereu alaturi de tine", four: "O zi frumoasa", five: "Povestea noastra", six: "Momente impartasite", seven: "Unde totul pare usor", eight: "Rasetele noastre", nine: "Un moment al nostru", ten: "Impreuna, mereu", eleven: "O poveste in fotografii", twelve: "Un loc preferat", thirteen: "Tot ce am trait", fourteen: "Un zambet alaturi de tine", fifteen: "Momente mici", sixteen: "Frumusetea noastra", seventeen: "De pastrat mereu" },
    letter: { open: "Deschide biletul meu", close: "Ascunde biletul meu", download: "Descarca biletul", eyebrow: "Un bilet pentru tine", copy: "Pe 7 iunie am avut prima noastra conversatie. Iar pe 12, chiar daca nu eram inca un cuplu oficial, am inceput sa fim mai mult decat prieteni. Din secunda in care te-am vazut m-am indragostit de tine si am stiut ca vreau sa fiu alaturi de tine. Iti multumesc ca ai transformat acel moment in inceputul povestii noastre.", signature: "Cu toata dragostea mea,<br /><em>Roberto</em> ♡" },
    footer: "Facut pentru noi",
    theme: { dark: "Schimba la modul deschis", light: "Schimba la modul intunecat", title: "Schimba modul de culoare" },
    lightbox: { title: "Imagine marita", close: "Inchide imaginea" },
    title: "Povestea noastra | 12.06 - 29.06"
  },
  en: {
    nav: { home: "Go to home", label: "Main navigation", story: "Story", moments: "Moments", future: "Future", ducks: "Ducks" },
    hero: {
      eyebrow: "A little capsule of us · 2026",
      title: "It all began<br /><em>on June 12.</em>",
      intro: "Our first conversation was on June 7, and on June 12 we became more than friends. From the second I saw you, I knew I wanted to be with you.",
      button: "See our story",
      note: "for my favorite person"
    },
    anniversary: { eyebrow: "Next chapter", title: "3 months of us", copy: "On September 29 we celebrate everything we have lived and everything beautiful still ahead." },
    countdown: { label: "Countdown to our anniversary", days: "days", hours: "hours", minutes: "min", seconds: "sec" },
    together: { label: "Time we have been together", title: "Together for", days: "days", hours: "hours", minutes: "minutes" },
    months: { june: "June", juneShort: "Jun", september: "September" },
    images: { cover: "Pink flowers on a table", one: "Two people walking together", two: "A couple enjoying a moment together", three: "A couple embracing at sunset", letter: "A special memory" },
    story: {
      eyebrow: "The timeline", title: "From one conversation<br /><em>to our story.</em>",
      first: { eyebrow: "Our first conversation", title: "We had our first conversation on June 7.", copy: "Thanks to Dun na Coiribe, Erasmus in Galway and Arriba Eventos, that first moment became the beginning of our story." },
      second: { eyebrow: "More than friends", title: "On June 12 we started becoming something more.", copy: "The second I saw you I fell in love with you and knew I wanted to be with you, even though we were not officially a couple yet." },
      lake: { eyebrow: "A special day", title: "On June 22 we went to a beautiful lake.", copy: "It was one of those peaceful, beautiful days that stay with you forever." },
      official: { eyebrow: "Our date", title: "On June 29 our relationship became official.", copy: "That day, what had been something special became the official beginning of our story together." },
      madrid: { date: "Aug 28 — Sep 05", month: "Madrid", eyebrow: "Our trip", title: "From August 28 to September 5, we explored Madrid and Toledo.", copy: "I picked you up at the airport and took you to see Madrid and Toledo. We had incredible days together until you left on the 5th." },
      third: { eyebrow: "What comes next", title: "Three months and a thousand plans.", copy: "A date to celebrate what we have built and all the memories still waiting for us." }
    },
    moments: { eyebrow: "Small scenes, big memories", title: "Moments I would<br /><em>keep forever.</em>" },
    gallery: { one: "A memory to keep", two: "Our little scenes", three: "Always with you", four: "A beautiful day", five: "What we share", six: "Moments together", seven: "Where everything feels easy", eight: "Our laughter", nine: "A moment of ours", ten: "Together, always", eleven: "A story in photos", twelve: "A favorite place", thirteen: "Everything we lived", fourteen: "A smile with you", fifteen: "Little moments", sixteen: "The beauty of us", seventeen: "To remember always" },
    letter: { open: "Open my note", close: "Hide my note", download: "Download the note", eyebrow: "A note for you", copy: "We had our first conversation on June 7. Then, on June 12, even though we were not officially a couple yet, we became more than friends. The second I saw you I fell in love with you and knew I wanted to be with you. Thank you for turning that moment into the beginning of our story.", signature: "With all my love,<br /><em>Roberto</em> ♡" },
    footer: "Made for us",
    theme: { dark: "Switch to light mode", light: "Switch to dark mode", title: "Change color mode" },
    lightbox: { title: "Enlarged view", close: "Close image" },
    title: "Our story | 12.06 - 29.06"
  }
};

let currentLanguage = "es";

function getTranslation(language, key) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function applyLanguage(language) {
  const dictionary = translations[language];
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = dictionary.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getTranslation(language, element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = getTranslation(language, element.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", getTranslation(language, element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", getTranslation(language, element.dataset.i18nAlt));
  });
  document.querySelector(".language-toggle").firstChild.textContent = `${language.toUpperCase()} `;
  const darkMode = document.body.classList.contains("dark-mode");
  document.querySelector(".theme-toggle").setAttribute("aria-label", darkMode ? dictionary.theme.dark : dictionary.theme.light);
  document.querySelector(".theme-toggle").setAttribute("title", dictionary.theme.title);
  const letterContent = document.querySelector("#letter-content");
  document.querySelector(".letter-button span").textContent = letterContent.hidden ? dictionary.letter.open : dictionary.letter.close;
  document.querySelectorAll(".language-menu button").forEach((button) => button.classList.toggle("selected", button.dataset.language === language));
  localStorage.setItem("preferred-language", language);
}

function updateCountdown() {
  const remaining = Math.max(0, targetDate - Date.now());
  const values = {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60)
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}

function updateTogetherCounter() {
  const elapsed = Math.max(0, Date.now() - togetherStartDate);
  const values = {
    "together-days": Math.floor(elapsed / 86400000),
    "together-hours": Math.floor((elapsed / 3600000) % 24),
    "together-minutes": Math.floor((elapsed / 60000) % 60)
  };
  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}

updateCountdown();
updateTogetherCounter();
setInterval(updateCountdown, 1000);
setInterval(updateTogetherCounter, 60000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
setTimeout(() => {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  });
}, 350);

const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
languageToggle.addEventListener("click", () => {
  const isOpen = languageToggle.getAttribute("aria-expanded") === "true";
  languageToggle.setAttribute("aria-expanded", String(!isOpen));
  languageMenu.hidden = isOpen;
});

document.querySelectorAll(".language-menu button").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
    languageToggle.setAttribute("aria-expanded", "false");
    languageMenu.hidden = true;
  });
});

const themeToggle = document.querySelector(".theme-toggle");
const letterButton = document.querySelector(".letter-button");
const letterContent = document.querySelector("#letter-content");
const downloadNoteButton = document.querySelector(".download-note");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
let lightboxOrigin;
letterButton.addEventListener("click", () => {
  const isOpen = letterButton.getAttribute("aria-expanded") === "true";
  letterButton.setAttribute("aria-expanded", String(!isOpen));
  letterContent.hidden = isOpen;
  letterButton.querySelector("span").textContent = isOpen ? translations[currentLanguage].letter.open : translations[currentLanguage].letter.close;
});

downloadNoteButton.addEventListener("click", () => {
  const noteText = [
    document.querySelector(".letter-content .eyebrow").innerText,
    "",
    document.querySelector(".letter-text").innerText,
    "",
    document.querySelector(".signature").innerText
  ].join("\n");
  const file = new Blob([noteText], { type: "text/plain;charset=utf-8" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = "nota-para-ti.txt";
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
});

function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxOrigin?.focus();
}

document.querySelectorAll(".gallery-card img, .hero-image img, .letter-image").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxOrigin = image;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    document.querySelector(".lightbox-close").focus();
  });
});

document.querySelectorAll("[data-lightbox-close]").forEach((element) => {
  element.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

function applyTheme(theme) {
  const darkMode = theme === "dark";
  document.body.classList.toggle("dark-mode", darkMode);
  themeToggle.setAttribute("aria-pressed", String(darkMode));
  themeToggle.textContent = darkMode ? "☼" : "◐";
  const dictionary = translations[currentLanguage];
  themeToggle.setAttribute("aria-label", darkMode ? dictionary.theme.dark : dictionary.theme.light);
  themeToggle.setAttribute("title", dictionary.theme.title);
  localStorage.setItem("preferred-theme", darkMode ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  applyTheme(document.body.classList.contains("dark-mode") ? "light" : "dark");
});

applyLanguage(localStorage.getItem("preferred-language") || "es");
applyTheme(localStorage.getItem("preferred-theme") || "light");
