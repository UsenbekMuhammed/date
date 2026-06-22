const date = localStorage.getItem("dateDate") || "не выбрана";
const time = localStorage.getItem("dateTime") || "не выбрано";
const place = localStorage.getItem("datePlace") || "не выбрано";

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

document.getElementById("letterContent").innerHTML = `
  💖 Наше свидание запланировано 💖<br><br>
  Анель выбрала:<br><br>
  📅 Дата: ${date}<br>
  ⏰ Время: ${time}<br>
  📍 Место: ${place}<br><br>
  Жду с нетерпением 😌💘
`;

const savedTime = localStorage.getItem("musicTime");
const wasPlaying = localStorage.getItem("musicWasPlaying");

if (savedTime) {
  bgMusic.currentTime = Number(savedTime);
}

bgMusic.volume = 0.7;

if (wasPlaying === "yes") {
  bgMusic.play().then(() => {
    musicBtn.innerText = "🔊";
  }).catch(() => {
    musicBtn.innerText = "🔇";
  });
}

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerText = "🔊";
  } else {
    bgMusic.pause();
    musicBtn.innerText = "🔇";
  }
});
