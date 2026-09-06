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
    title: "parsa sayo, 4:50",
    date: "maligayang ika-15 buwan",
    type: "special-interactive",
    parts: [
      {
        act: "act i.",
        heading: "happy 450 days, mahal",
        text: `happy 450 days, mahal.

four hundred and fifty days of choosing you, finding you, learning you, and somehow finding pieces of myself along the way.

ang dami na nating araw na pinagdaanan—mga ordinaryong umaga, mahahabang gabi, mga tawanan na hanggang sumakit na ang ating tiyan, mga katahimikang hindi kailangang punuin ng salita, at mga sandaling isang tingin mo lang ay sapat na para gumaan ang mundo ko.

and if you ask me what i'm most grateful for, it isn't simply that i've had 450 days with you my dear.

it's that those 450 days became ours.

sa bawat araw na nagdaan, sa bawat paghinga, sa bawat maliit na sandaling baka hindi natin napansin, unti-unting nabuo ang isang kuwentong walang ibang makakapagsulat kundi tayo.

you became a familiar kind of light in the quietest parts of my life.

hindi dahil palagi mong pinapawi ang dilim, kundi dahil sa presensya mo, natutunan kong hindi pala kailangang matakot sa dilim.

so please, stay for more.

for more ordinary mornings.
for more ridiculous conversations.
for more little adventures.
for more silences.
for more "kumain ka na ba?"
for more apologies and forgiveness.
for more growing pains.
for more versions of ourselves that we have yet to meet.

because i don't want our story to be remembered simply because it lasted.

i want it to be remembered because we lived it.

mahal, this story was never meant to be perfect.

it was meant to be ours.

and if there are still hundreds, thousands, or countless more days waiting somewhere ahead of us—

i'd still love for them to have your name beside mine.`,
      },
      {
        act: "act ii.",
        heading: "the good, the bad, and the ugly",
        text: `they say every relationship has its own language.

and perhaps ours was never meant to be written entirely in beautiful words.

may mga araw na madali tayong nagkakaintindihan, pero mayroon ding mga araw na parang magkaibang wika ang ginagamit ng puso natin.

ang pag-ibig ay hindi laging gentle.

sometimes, it is inconvenient.
sometimes, it is uncomfortable.
sometimes, it asks us to look at parts of ourselves we would rather leave unseen.

we have had our good.

we have had our bad.

and yes, we've had our ugly.

may mga tampuhan, mga pagkukulang, mga salitang sana'y sinabi nang mas mahinahon, mga sandaling pareho nating hindi alam kung paano hahawakan ang bigat ng isa't isa.

pero doon ko rin natutunan na ang isang relasyon ay hindi sinusukat sa kung gaano kadalas kayo nagkakasundo.

sometimes, it is revealed in what you do after the disagreement.

kung marunong ka bang bumalik.
kung marunong kang makinig.
kung kaya mong magsabi ng "mali ako."
kung kaya mong magsabi ng "nasaktan ako."
at higit sa lahat, kung kaya mong sabihin, "let's understand each other before we try to win."

because love is not a competition where one person has to lose for the other to be right.

ang tunay na intimacy ay hindi lamang ang pagkakilala sa pinakamagandang bahagi ng isa't isa.

it is being trusted with the difficult parts, too.

and choosing not to weaponize what you've learned about them.

kaya oo, may mga unos.

may mga sugat.

may mga luha.

but perhaps these things do not automatically mean that our love is broken.

sometimes, they are simply proof that two imperfect people are learning how to hold something precious without always knowing how.

and i think that's one of the bravest things about us.

we keep learning.`,
      },
      {
        act: "act iii.",
        heading: "the ugly, the bad, and the good",
        text: `and now, perhaps, let me contradict everything i just said.

maybe the good does not come before the bad.

maybe the beauty was never in having a beautiful story from the beginning.

maybe—

the ugly came first.

the misunderstandings.
the fears.
the insecurities.
the parts of ourselves we didn't know how to explain.
the moments when loving each other felt less like poetry and more like work.

and yet, somehow, there was still something beautiful growing underneath it all.

because sometimes, the light means more when you have already known the dark.

ang isang kandila ay hindi nagiging mahalaga dahil wala itong dilim na haharapin.

nagiging mahalaga ito dahil kahit napapalibutan ng dilim, pinipili pa rin nitong magliwanag.

and maybe that is us.

not perfect.
not untouched.
not without scars.

but still here.

still learning.

still choosing.

may kakaibang ganda sa dalawang taong hindi naman palaging alam ang tamang gawin, pero parehong may kagustuhang matutunan ito.

the goal was never to become a couple who never hurts.

the goal is to become two people who know how to repair.

to know when to hold.
when to listen.
when to speak.
when to apologize.
when to give space.
and when to reach for each other's hand again.

because a lasting love isn't necessarily one without cracks.

sometimes, it is one that learns how to let the light pass through them.

so if our story has taught me anything, it is this:

i don't love you because our path has always been beautiful.

i love you because even when the path became difficult, there was still something in us that whispered—

"let's try again."

and perhaps that is our own kind of kundiman.

not a song without sadness,

but a song that remains beautiful because it knows how to sing through it.`,
      },
      {
        act: "act iv.",
        heading: "i love you, i'm sorry",
        text: `mahal,

i love you.

and i am sorry.

sorry for the moments when i failed to understand you the way you needed to be understood.

sorry for the times my words were heavier than i intended them to be, for the moments when my own emotions became louder than my willingness to listen.

i'm still learning.

i'm still becoming.

and i know that loving someone does not automatically make us experts at loving them.

kaya gusto kong malaman mo:

i see you.

i hear you.

and i am trying.

not to become someone who simply agrees with everything you say, but someone who is willing to understand where you're coming from.

i want to meet you halfway—

but i also want us to remember that halfway should never mean that one of us disappears.

i don't want you to abandon your needs for mine.

and i don't want to abandon mine for yours.

i want us to learn the harder, healthier kind of love:

the kind where we can say, "this is what i need,"
without making the other person feel guilty for having needs of their own.

the kind where our differences don't automatically become threats.

the kind where we can disagree without becoming enemies.

the kind where "i love you" does not mean "i always agree with you."

because you are not supposed to become me.

and i am not supposed to become you.

we are two different people who somehow found each other in this enormous world—

and perhaps the miracle is not that we are the same.

the miracle is that despite our differences, we keep trying to understand.

so on our 450th day, i don't want to promise you perfection.

i'd rather promise you something more honest:

that i will keep learning.

i will keep listening.

i will keep trying to meet you halfway without losing myself along the way.

and when we get lost in the noise of our own feelings, i hope we remember that we are not enemies standing across from each other.

we are two people standing on the same side, trying to solve the same problem.

ikaw at ako.

hindi laban sa isa't isa,

kundi magkatabi.

450 days down.

and somehow, mahal,

i still want more.

more days.
more growth.
more laughter.
more healing.
more ordinary moments that one day we'll realize were actually the extraordinary ones.

happy 450 days, mahal.

thank you for being part of my becoming.

and if life gives us another 450 days—

i hope we meet them not as perfect people,

but as two people who still choose to say,

"ikaw pa rin."

— nagmamahal nang walang hanggan,
simong pagi ✨`,
      },
    ],
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
    triggerMedievalOpenAnimation(() => {
      if (archiveWrapper) archiveWrapper.style.display = "none";
      if (letterWrapper) letterWrapper.classList.add("active-view");
      openSelectedLetter(specialPangakoLetter);
    });
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
  '🩷 "quack! tandaan mo, ikaw ay mahalaga."',
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

// Add this inside your triggerMedievalOpenAnimation function call specifically for binder pages or special letters:
function triggerMedievalOpenAnimation(callback, isSpecialFireworks = false) {
  const sealOverlay = document.createElement("div");
  sealOverlay.className = "medieval-wax-seal-overlay";
  sealOverlay.innerHTML = `
    <div class="medieval-parchment-scroll">
      <div class="wax-seal-badge">${isSpecialFireworks ? "🎆🌷" : "💌"}</div>
      <p>${isSpecialFireworks ? "binubuksan ang sagradong selyo ng ika-15 buwan..." : "binubuksan ang selyo ng panahon..."}</p>
    </div>
  `;
  document.body.appendChild(sealOverlay);

  if (isSpecialFireworks) {
    launchMagicalFireworks();
  }

  setTimeout(() => {
    sealOverlay.classList.add("seal-opening");
  }, 600);

  setTimeout(() => {
    sealOverlay.remove();
    if (callback) callback();
  }, 1200);
}

function launchMagicalFireworks() {
  const symbols = ["🎆", "✨", "💖", "🌷", "🌟"];
  for (let i = 0; i < 25; i++) {
    const firework = document.createElement("div");
    firework.className = "tulip-petal-particle";
    firework.innerText = symbols[Math.floor(Math.random() * symbols.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 220 + 60;
    firework.style.left = `${window.innerWidth / 2}px`;
    firework.style.top = `${window.innerHeight / 2}px`;
    firework.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    firework.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    firework.style.setProperty("--rot", `${Math.random() * 360}deg`);
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1500);
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
      triggerMedievalOpenAnimation(() => {
        if (archiveWrapper) archiveWrapper.style.display = "none";
        if (letterWrapper) letterWrapper.classList.add("active-view");
        openSelectedLetter(letter);
      });
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
      triggerMedievalOpenAnimation(() => {
        if (archiveWrapper) archiveWrapper.style.display = "none";
        if (letterWrapper) letterWrapper.classList.add("active-view");
        openSelectedLetter(page);
      });
    });
    reassuranceContainer.appendChild(tab);
  });
}

function buildBinderJournal() {
  if (!binderContainer) return;
  binderContainer.innerHTML = "";
  binderPages.forEach((page) => {
    const tab = document.createElement("div");
    tab.className = "binder-page-tab click-sound";
    tab.innerHTML = `<span>🌷 ${page.title}</span><span class="date-tag">${page.date}</span>`;
    tab.addEventListener("click", (e) => {
      createTulipBurst(e);
      const isSpecial = page.type === "special-interactive";
      triggerMedievalOpenAnimation(() => {
        if (archiveWrapper) archiveWrapper.style.display = "none";
        if (letterWrapper) letterWrapper.classList.add("active-view");
        openSelectedLetter(page);
      }, isSpecial);
    });
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
      triggerMedievalOpenAnimation(() => {
        if (archiveWrapper) archiveWrapper.style.display = "none";
        if (letterWrapper) letterWrapper.classList.add("active-view");
        openSelectedLetter(page);
      });
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
  }, 35);
}

let currentLetterPartIdx = 0;
let activeSpecialLetter = null;

function openSelectedLetter(letter) {
  activeSpecialLetter = letter;
  currentLetterPartIdx = 0;

  if (letter.type === "special-interactive") {
    renderSpecialMultiPartLetter();
  } else {
    if (letterTitle) letterTitle.innerText = letter.title.toLowerCase();
    runTypewriter(letter.message);
    const existingNextBtn = document.getElementById("next-part-btn");
    if (existingNextBtn) existingNextBtn.remove();
  }
}

function renderSpecialMultiPartLetter() {
  if (!activeSpecialLetter || !activeSpecialLetter.parts) return;
  const currentPart = activeSpecialLetter.parts[currentLetterPartIdx];

  if (letterTitle) {
    letterTitle.innerText = activeSpecialLetter.title.toLowerCase();
  }

  // Create an exquisite heading block inside the paper before the typewriter text
  if (typewriterText) {
    typewriterText.innerHTML = `
      <div class="letter-act-badge">✦ ${currentPart.act.toUpperCase()} ✦</div>
      <div class="letter-part-heading">${currentPart.heading}</div>
      <div class="letter-divider"></div>
      <div id="typewriter-body"></div>
    `;
  }

  // Run the typewriter effect specifically on the body text container
  const targetBody = document.getElementById("typewriter-body");
  clearInterval(typeInterval);
  let charIdx = 0;
  typeInterval = setInterval(() => {
    if (charIdx < currentPart.text.length) {
      if (targetBody) targetBody.innerHTML += currentPart.text.charAt(charIdx);
      charIdx++;
    } else {
      clearInterval(typeInterval);
    }
  }, 25);

  // Manage navigation button
  let nextBtn = document.getElementById("next-part-btn");
  if (!nextBtn) {
    nextBtn = document.createElement("button");
    nextBtn.id = "next-part-btn";
    nextBtn.className = "click-sound btn-tulip";
    nextBtn.style.marginTop = "20px";
    const navButtons = document.querySelector(".nav-buttons");
    if (navButtons) navButtons.prepend(nextBtn);
  }

  if (currentLetterPartIdx < activeSpecialLetter.parts.length - 1) {
    nextBtn.innerText = "susunod na pahina →";
    nextBtn.onclick = () => {
      currentLetterPartIdx++;
      renderSpecialMultiPartLetter();
    };
  } else {
    nextBtn.innerText = "tapusin ang liham ✨";
    nextBtn.onclick = () => {
      if (letterWrapper) letterWrapper.classList.remove("active-view");
      if (archiveWrapper) archiveWrapper.style.display = "flex";
      const existingNextBtn = document.getElementById("next-part-btn");
      if (existingNextBtn) existingNextBtn.remove();
    };
  }
}
