const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicStarted = false;

document.addEventListener("click", () => {
  if (!musicStarted) {
    bgMusic.volume = 0.35;
    bgMusic.play();
    musicStarted = true;
    musicBtn.innerText = "🔊";
  }
}, { once: true });

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerText = "🔊";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "🔇";
  }
});
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const planner = document.getElementById("planner");
const question = document.getElementById("question");
const catGif = document.getElementById("catGif");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const finalText = document.getElementById("finalText");
const placeButtons = document.querySelectorAll(".place");

let yesScale = 1;
let noScale = 1;
let selectedPlace = "";
let noClickCount = 0;

function setNoPosition() {
  const yesRect = yesBtn.getBoundingClientRect();

  noBtn.style.left = yesRect.right + 18 + "px";
  noBtn.style.top = yesRect.top + "px";
}

window.addEventListener("load", setNoPosition);
window.addEventListener("resize", setNoPosition);

function moveNoButton() {
  noClickCount++;

  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.max(padding, Math.random() * maxX);
  const randomY = Math.max(padding, Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  yesScale += 0.16;
  noScale -= 0.06;

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${Math.max(noScale, 0.35)})`;

  const texts = [
    "Точно? 🥺",
    "Подумай ещё 😭",
    "Ну Анель 😅",
    "Не убегай от судьбы 💘",
    "А если подумать? 🌸",
    "нет"
  ];

  noBtn.innerText = texts[Math.min(noClickCount - 1, texts.length - 1)];

  createHeart(randomX, randomY);
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  question.innerText = "АНЕЛЬ СКАЗАЛА ДААА 💞";
  catGif.src = "images/cat-happy.gif";
  catGif.classList.add("happy-cat");

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  planner.style.display = "block";

  bigCelebration();
});

placeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    placeButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedPlace = button.innerText;
    updateFinal();
  });
});

dateInput.addEventListener("change", updateFinal);
timeInput.addEventListener("change", updateFinal);

function updateFinal() {
  if (dateInput.value && timeInput.value && selectedPlace) {
    finalText.style.display = "block";

    finalText.innerHTML = `
      💖 Наше свидание запланировано 💖<br><br>
      📅 Дата: ${dateInput.value}<br>
      ⏰ Время: ${timeInput.value}<br>
      📍 Место: ${selectedPlace}<br><br>
      Анель, теперь назад пути нет 😌💘
    `;

    bigCelebration();
  }
}

function createPetals() {
  const petals = ["🌸", "🌷", "🌼", "💮", "💗"];

  for (let i = 0; i < 35; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerText = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 6 + "s";
    petal.style.animationDelay = Math.random() * 6 + "s";
    petal.style.opacity = 0.5 + Math.random() * 0.5;

    document.body.appendChild(petal);
  }
}

function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * window.innerWidth + "px";
  firework.style.top = Math.random() * window.innerHeight * 0.65 + "px";

  document.body.appendChild(firework);

  setTimeout(() => firework.remove(), 1000);
}

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = ["💖", "💘", "💕", "🌸"][Math.floor(Math.random() * 4)];
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1400);
}

function bigCelebration() {
  for (let i = 0; i < 25; i++) {
    setTimeout(createFirework, i * 80);
  }

  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      createHeart(
        Math.random() * window.innerWidth,
        window.innerHeight - 80
      );
    }, i * 45);
  }
}

createPetals();
