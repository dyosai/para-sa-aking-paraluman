const memoryData = [
  {
    id: 1,
    title: "hiraya",
    type: "standard",
    image: "img/pagi1.jpeg",
    message:
      "sa bawat pag-ikot at paghinga ng daigdig, ang kaluluwa ko ay laging umuuwi sa iyong tabi. animo'y simbuyo ng mga tala at alab ng ating mga ninuno, ang pag-ibig nating ito ay nakaguhit na bago pa man isilang ang panahon. ikaw ang aking hiraya—ang pangarap na binuhay ng katotohanan.",
  },
  {
    id: 2,
    title: "kanlungan",
    type: "standard",
    image: "img/tahanan.jpeg",
    message:
      "ang wagas na pagsuyo ay hindi nasusukat sa kintab ng perpektong buhay, kundi sa tapang na ilapag ang mga sugat. sa iyong mga bisig, natagpuan ko ang huling kanlungan—isang tahimik na daungan kung saan ang mga luha ay nagiging hamog, at ang pagpapatawad sa sarili ay isang banal na yakap.",
  },
  {
    id: 3,
    title: "tadhana",
    type: "standard",
    image: "img/tadhana.JPG",
    message:
      "hindi lamang tayo pinaglaruan ng nag-iisang pagkakataon; tayo ay hinabi ng tadhana sa iisang sinulid ng liwanag. tangan ang karunungan ng mga nag-una sa atin, ang ating paglalakbay ay isang walang hanggang kundiman na patuloy na umaawit sa gitna ng kadiliman.",
  },
];

const specialPangakoLetter = {
  id: 4,
  title: "sa bawat bukas at paghinga",
  message:
    "aking paraluman, sa bawat paggising ng umaga at sa bawat pag pikit ng mga mata, pinipili kitang mahalin nang buong-buo. sa kalusugan at sa karamdaman, sa mga araw na maliwanag at maging sa mga panahong madilim ang paligid, narito ako—yakap ka ng aking mga bisig, alay ang wagas na pagsuyo ngayon, bukas, at magpakailanman.\n\n— nagmamahal, mula sa iyong pag-ibig",
};

const reassurancePages = [
  {
    id: 301,
    title: "patawad at paghilom: isang panata",
    date: "pagsuyo",
    type: "standard",
    message:
      "aking sinta, patawad kung minsan ang marahas na alon ng aking mga pangamba at kahinaan ay umaabot sa iyong baybayin. alam kong may mga panahong ang anino ko ang sumisira sa liwanag ng ating araw.\n\nngunit sa harap ng mga bituin, iniaalay ko ang panatang ito: isang pag-ibig na marunong makinig, umunawa, at magpagaling. hindi ko kailanman bibitawan ang iyong kamay sa gitna ng dilim. ang pagsuyong ito ay sagradong sumpaan—pipiliin kita araw-araw, at sisikaping maging mas karapat-dapat kaysa kahapon.",
  },
];

const binderPages = [
  {
    id: 101,
    title: "liham ng ika-15 buwan: ang kundiman ng ating tadhana",
    date: "nakakubli pa...",
    type: "locked",
    message:
      "✦ tahimik pang natutulog ang mga pahinang ito sa ilalim ng buwan... naghihintay sa tamang sandali upang umawit nang buong tinig para sa iyo, aking paraluman. ✦",
  },
];

const remindersPages = [
  {
    id: 201,
    title: "tungkol sa pagtanggap sa sarili",
    date: "malalim",
    type: "standard",
    message:
      "isang munting paalala mula sa aking puso: ang manatiling malambot sa mundong marahas ay hindi kahinaan, kundi isang pambihirang tapang. huwag kang maging malupit sa iyong sarili. ang iyong halaga ay hindi nakasalalay sa bigat ng iyong pasan, kundi sa liwanag na kusang sumasalamin sa iyong mga mata. huminga ka... ligtas ka rito.",
  },
  {
    id: 202,
    title: "ang ating patutunguhan",
    date: "gabay",
    type: "standard",
    message:
      "sa mga sandaling naliligaw ka sa gubat ng iyong mga alalahanin, alalahanin mong narito ako—isang matatag na puno na may mga ugat na bumaon nang malalim sa ating pag-ibig. walang bagyo o unos ang makakayanang bumuwag sa atin. malusog na pagsuyo at payapang paghilom ang ating tahanan.",
  },
  {
    id: 203,
    title: "ang batas ng malusog na pagsuyo",
    date: "karunungan",
    type: "standard",
    message:
      "aking paraluman, tandaan mo ito kailanman: ang tunay at malusog na pag-ibig ay hindi kailanman humihingi ng kabayaran na kasinghalaga ng iyong kaligayahan o kapayapaan ng isip. kung ang pagsuyo ay totoo, pinapalaya ka nito sa halip na gapusin. at isinusumpa ko sa ngalan ng mga bituin, gagawin ko ang lahat—araw-araw, nang walang sawa—upang ipaalala sa iyo na ang pag-ibig ko ay laging magiging kanlungan, hindi kailanman pasakit.",
  },
];

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width, height;
let mouse = { x: -1000, y: -1000 };

const validUsers = ["pagi", "pagiw"];
const validPasses = ["mahal", "mahal ko"];

const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");
const unlockBtn = document.getElementById("unlockBtn");
const loginGate = document.getElementById("login-gate");
const errorMsg = document.getElementById("errorMsg");
const welcomePopup = document.getElementById("welcome-popup");
const closePopupBtn = document.getElementById("close-popup-btn");

const cassetteWidget = document.getElementById("cassette-widget");
const soundscapeWidget = document.getElementById("soundscape-widget");
const lampWidget = document.getElementById("lamp-widget");
const blurWidget = document.getElementById("blur-widget");
const blurStatus = document.getElementById("blur-status");

const bgMusic = document.getElementById("bg-music");
const rainAudio = document.getElementById("rain-audio");
const forestAudio = document.getElementById("forest-audio");
const chimeAudio = document.getElementById("chime-audio");
const audioStatus = document.getElementById("audio-status");
const soundStatus = document.getElementById("sound-status");

const mainApp = document.getElementById("main-app");
const archiveWrapper = document.getElementById("archive-wrapper");
const letterWrapper = document.getElementById("letter-wrapper");
const polaroidContainer = document.getElementById("polaroid-container");
const reassuranceContainer = document.getElementById("reassurance-container");
const binderContainer = document.getElementById("binder-container");
const remindersContainer = document.getElementById("reminders-container");
const backButton = document.getElementById("back-button");
const typewriterText = document.getElementById("typewriter-text");
const letterTitle = document.getElementById("letter-title");
const liveUtcTime = document.getElementById("live-utc-time");
const sillyGoose = document.getElementById("silly-goose");
const gooseSpeech = document.getElementById("goose-speech");
const floatingLetterSeal = document.getElementById("floating-letter-seal");

let typeInterval;
let currentSoundscape = 0;
let blurEnabled = true;

function handleLogin() {
  const uVal = userInput ? userInput.value.trim().toLowerCase() : "";
  const pVal = passInput ? passInput.value.trim().toLowerCase() : "";

  if (
    validUsers.includes(uVal) &&
    validPasses.some((pass) => pVal.includes(pass))
  ) {
    if (errorMsg) errorMsg.innerText = "";
    if (loginGate) {
      loginGate.classList.add("unlocked");
      if (bgMusic) bgMusic.play().catch(() => {});
      if (cassetteWidget) cassetteWidget.classList.add("playing");
      if (audioStatus) audioStatus.innerText = "tumutugtog";
      if (mainApp) {
        mainApp.classList.remove("hidden");
        setTimeout(() => mainApp.classList.add("fade-in"), 50);
        buildHeroPolaroids();
        buildReassuranceJournal();
        buildBinderJournal();
        buildRemindersJournal();
      }
      if (welcomePopup) {
        setTimeout(() => {
          welcomePopup.classList.remove("fade-out");
        }, 800);
      }
    }
  } else {
    if (errorMsg) {
      errorMsg.textContent =
        "maling susi... subukan mong muli, aking sinta. ✨";
      setTimeout(() => {
        errorMsg.textContent = "";
      }, 3500);
    }
    if (userInput) userInput.style.borderColor = "#c25562";
    if (passInput) passInput.style.borderColor = "#c25562";
  }
}

if (unlockBtn) unlockBtn.addEventListener("click", handleLogin);
if (passInput) {
  passInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleLogin();
  });
}

if (closePopupBtn && welcomePopup) {
  closePopupBtn.addEventListener("click", () => {
    welcomePopup.classList.add("fade-out");
  });
}

if (floatingLetterSeal) {
  floatingLetterSeal.addEventListener("click", (e) => {
    createTulipBurst(e);
    if (archiveWrapper) archiveWrapper.style.display = "none";
    if (letterWrapper) letterWrapper.classList.add("active-view");
    openSelectedLetter(specialPangakoLetter);
  });
}

function playTherapeuticChime() {
  if (chimeAudio) {
    chimeAudio.currentTime = 0;
    chimeAudio.volume = 0.4;
    chimeAudio.play().catch(() => {});
  }
}

document.addEventListener("click", (e) => {
  if (
    e.target.closest(".click-sound") ||
    e.target.closest(".polaroid-card") ||
    e.target.closest(".binder-page-tab")
  ) {
    playTherapeuticChime();
  }
});

function updatePocketWatchClock() {
  if (liveUtcTime) {
    const now = new Date();
    liveUtcTime.innerText = now.toUTCString().slice(17, 25);
  }
}
setInterval(updatePocketWatchClock, 1000);
updatePocketWatchClock();

const gooseQuotes = [
  '🩷 "honk! mahal na mahal ka ni pagi ~"',
  '🩷 "quack: ngumiti ka na, paraluman!"',
  '🩷 "silly goose reminder: magpahinga ka rin."',
  '🩷 "honk! ikaw ang paborito niyang tula."',
  '🩷 "andito lang si pagi para sa\'yo, yakap mahigpit ~"',
];

if (sillyGoose) {
  sillyGoose.addEventListener("click", () => {
    const randomQuote =
      gooseQuotes[Math.floor(Math.random() * gooseQuotes.length)];
    if (gooseSpeech) gooseSpeech.innerText = randomQuote;
  });
}

function resizeCanvas() {
  if (canvas) {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

const sparkles = Array.from({ length: 50 }, () => ({
  x: Math.random() * (width || 800),
  y: Math.random() * ((height || 600) * 0.75),
  size: Math.random() * 3.2 + 1,
  baseX: Math.random() * (width || 800),
  baseY: Math.random() * ((height || 600) * 0.75),
  angle: Math.random() * Math.PI * 2,
  speed: Math.random() * 0.015 + 0.005,
  alpha: Math.random() * 0.8 + 0.2,
}));

const tulips = Array.from(
  { length: Math.floor(window.innerWidth / 28) },
  (_, i) => ({
    x: i * 28 + Math.random() * 12,
    height: Math.random() * 65 + 45,
    swaySpeed: Math.random() * 0.022 + 0.01,
    swayAmount: Math.random() * 12 + 8,
    color:
      i % 4 === 0
        ? "#f092a1"
        : i % 4 === 1
          ? "#e87a8c"
          : i % 4 === 2
            ? "#d9596d"
            : "#f7b2bd",
  }),
);

const butterflies = Array.from({ length: 8 }, () => ({
  x: Math.random() * (width || 800),
  y: Math.random() * ((height || 600) * 0.6),
  size: Math.random() * 14 + 10,
  speedX: Math.random() * 0.6 - 0.3,
  speedY: Math.random() * 0.4 - 0.2,
  angle: Math.random() * Math.PI * 2,
  flapSpeed: Math.random() * 0.1 + 0.05,
}));

let timeTicker = 0;
function animateCanvas() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  timeTicker += 0.03;

  ctx.fillStyle = "#1b2d22";
  ctx.beginPath();
  ctx.moveTo(0, height - 90);
  ctx.quadraticCurveTo(width * 0.3, height - 120, width * 0.7, height - 80);
  ctx.quadraticCurveTo(width * 0.9, height - 65, width, height - 95);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.fill();

  ctx.fillStyle = "#15261b";
  ctx.beginPath();
  ctx.moveTo(0, height - 45);
  ctx.quadraticCurveTo(width * 0.35, height - 75, width * 0.8, height - 40);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.fill();

  tulips.forEach((t, index) => {
    const baseY = height - 40;
    const sway = Math.sin(timeTicker * t.swaySpeed + index) * t.swayAmount;
    const tipX = t.x + sway;
    const tipY = baseY - t.height;
    ctx.strokeStyle = "#43694f";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(t.x, baseY);
    ctx.quadraticCurveTo(t.x + sway * 0.5, baseY - t.height * 0.5, tipX, tipY);
    ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.beginPath();
    ctx.ellipse(tipX, tipY - 8, 8.5, 13, sway * 0.05, 0, Math.PI * 2);
    ctx.fill();
  });

  butterflies.forEach((b) => {
    b.x += b.speedX + Math.sin(b.angle) * 0.5;
    b.y += b.speedY + Math.cos(b.angle) * 0.3;
    b.angle += b.flapSpeed;

    if (b.x < 0) b.x = width;
    if (b.x > width) b.x = 0;
    if (b.y < 0) b.y = height * 0.7;
    if (b.y > height * 0.7) b.y = 0;

    ctx.font = `${b.size}px serif`;
    ctx.fillStyle = "rgba(255, 182, 193, 0.75)";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "rgba(255, 112, 166, 0.5)";
    ctx.fillText("🦋", b.x, b.y);
    ctx.shadowBlur = 0;
  });

  sparkles.forEach((s) => {
    s.angle += s.speed;
    s.baseX += Math.cos(s.angle) * 0.35;
    s.baseY += Math.sin(s.angle) * 0.35;
    let dx = mouse.x - s.baseX;
    let dy = mouse.y - s.baseY;
    let dist = Math.sqrt(dx * dx + dy * dy);
    let targetX = s.baseX;
    let targetY = s.baseY;
    if (dist < 130) {
      let angle = Math.atan2(dy, dx);
      targetX -= Math.cos(angle) * (130 - dist);
      targetY -= Math.sin(angle) * (130 - dist);
    }
    ctx.fillStyle = `rgba(255, 218, 175, ${s.alpha})`;
    ctx.shadowBlur = 16;
    ctx.shadowColor = "rgba(255, 190, 130, 0.98)";
    ctx.beginPath();
    ctx.arc(targetX, targetY, s.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  requestAnimationFrame(animateCanvas);
}
animateCanvas();

if (cassetteWidget && bgMusic) {
  cassetteWidget.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
      cassetteWidget.classList.add("playing");
      if (audioStatus) audioStatus.innerText = "tumutugtog";
    } else {
      bgMusic.pause();
      cassetteWidget.classList.remove("playing");
      if (audioStatus) audioStatus.innerText = "musika";
    }
  });
}

if (soundscapeWidget) {
  soundscapeWidget.addEventListener("click", () => {
    currentSoundscape = (currentSoundscape + 1) % 3;
    if (currentSoundscape === 0) {
      if (rainAudio) rainAudio.pause();
      if (forestAudio) forestAudio.pause();
      if (soundStatus) soundStatus.innerText = "tahimik";
    } else if (currentSoundscape === 1) {
      if (forestAudio) forestAudio.pause();
      if (rainAudio) rainAudio.play().catch(() => {});
      if (soundStatus) soundStatus.innerText = "ulan";
    } else if (currentSoundscape === 2) {
      if (rainAudio) rainAudio.pause();
      if (forestAudio) forestAudio.play().catch(() => {});
      if (soundStatus) soundStatus.innerText = "gubat";
    }
  });
}

if (lampWidget) {
  lampWidget.addEventListener("click", () =>
    document.body.classList.toggle("lamp-off"),
  );
}

if (blurWidget && blurStatus) {
  blurWidget.addEventListener("click", () => {
    blurEnabled = !blurEnabled;
    if (blurEnabled) {
      document.body.classList.remove("no-blur");
      blurStatus.innerText = "on";
    } else {
      document.body.classList.add("no-blur");
      blurStatus.innerText = "off";
    }
  });
}

function createTulipBurst(e) {
  const rect = e.target.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const petals = ["🌷", "🌸", "✨", "🦋"];

  for (let i = 0; i < 14; i++) {
    const petal = document.createElement("div");
    petal.className = "tulip-petal-particle";
    petal.innerText = petals[Math.floor(Math.random() * petals.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 110 + 40;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const rot = Math.random() * 360 - 180;

    petal.style.left = `${originX}px`;
    petal.style.top = `${originY}px`;
    petal.style.setProperty("--dx", `${dx}px`);
    petal.style.setProperty("--dy", `${dy}px`);
    petal.style.setProperty("--rot", `${rot}deg`);
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 1200);
  }
}

function buildHeroPolaroids() {
  if (!polaroidContainer) return;
  polaroidContainer.innerHTML = "";
  const rotations = ["-2deg", "2deg", "-1deg"];
  memoryData.forEach((letter, index) => {
    const card = document.createElement("div");
    card.className = "polaroid-card vignette-paper capiz-frame click-sound";
    card.style.setProperty("--rot", rotations[index % rotations.length]);
    card.innerHTML = `<div style="width: 100%; height: 95px; overflow: hidden; background: #fffaf5; margin-bottom: 6px; border-radius: 4px;"><img src="${letter.image}" alt="${letter.title}" style="width: 100%; height: 100%; object-fit: cover;"></div><span>${letter.title}</span>`;
    card.addEventListener("click", (e) => {
      createTulipBurst(e);
      if (archiveWrapper) archiveWrapper.style.display = "none";
      if (letterWrapper) letterWrapper.classList.add("active-view");
      openSelectedLetter(letter);
    });
    polaroidContainer.appendChild(card);
  });
}

function buildReassuranceJournal() {
  if (!reassuranceContainer) return;
  reassuranceContainer.innerHTML = "";
  reassurancePages.forEach((page) => {
    const tab = document.createElement("div");
    tab.className = "binder-page-tab click-sound";
    tab.innerHTML = `<span>🕊️ ${page.title}</span><span class="date-tag">${page.date}</span>`;
    tab.addEventListener("click", (e) => {
      createTulipBurst(e);
      if (archiveWrapper) archiveWrapper.style.display = "none";
      if (letterWrapper) letterWrapper.classList.add("active-view");
      openSelectedLetter(page);
    });
    reassuranceContainer.appendChild(tab);
  });
}

function buildBinderJournal() {
  if (!binderContainer) return;
  binderContainer.innerHTML = "";
  binderPages.forEach((page) => {
    const tab = document.createElement("div");
    if (page.type === "locked") {
      tab.className = "binder-page-tab locked click-sound";
      tab.style.opacity = "0.65";
      tab.style.cursor = "not-allowed";
      tab.innerHTML = `<span>🔒 ${page.title}</span><span class="date-tag" style="background: #999;">nakakubli</span>`;
      tab.addEventListener("click", () =>
        alert(
          "✦ nakakubli pa ang liham na ito at bubuksan lamang sa tamang panahon. ✦",
        ),
      );
    } else {
      tab.className = "binder-page-tab click-sound";
      tab.innerHTML = `<span>🌷 ${page.title}</span><span class="date-tag">${page.date}</span>`;
      tab.addEventListener("click", (e) => {
        createTulipBurst(e);
        if (archiveWrapper) archiveWrapper.style.display = "none";
        if (letterWrapper) letterWrapper.classList.add("active-view");
        openSelectedLetter(page);
      });
    }
    binderContainer.appendChild(tab);
  });
}

function buildRemindersJournal() {
  if (!remindersContainer) return;
  remindersContainer.innerHTML = "";
  remindersPages.forEach((page) => {
    const tab = document.createElement("div");
    tab.className = "binder-page-tab click-sound";
    tab.innerHTML = `<span>✨ ${page.title}</span><span class="date-tag">${page.date}</span>`;
    tab.addEventListener("click", (e) => {
      createTulipBurst(e);
      if (archiveWrapper) archiveWrapper.style.display = "none";
      if (letterWrapper) letterWrapper.classList.add("active-view");
      openSelectedLetter(page);
    });
    remindersContainer.appendChild(tab);
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    if (letterWrapper) letterWrapper.classList.remove("active-view");
    if (archiveWrapper) archiveWrapper.style.display = "flex";
  });
}

function runTypewriter(text) {
  clearInterval(typeInterval);
  if (typewriterText) typewriterText.innerHTML = "";
  let charIdx = 0;
  typeInterval = setInterval(() => {
    if (charIdx < text.length) {
      if (typewriterText) typewriterText.innerHTML += text.charAt(charIdx);
      charIdx++;
    } else {
      clearInterval(typeInterval);
    }
  }, 40);
}

function openSelectedLetter(letter) {
  if (letterTitle) letterTitle.innerText = letter.title.toLowerCase();
  runTypewriter(letter.message);
}
