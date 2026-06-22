const date = localStorage.getItem("dateDate") || "не выбрана";
const time = localStorage.getItem("dateTime") || "не выбрано";
const place = localStorage.getItem("datePlace") || "не выбрано";

document.getElementById("letterContent").innerHTML = `
  💖 Наше свидание запланировано 💖<br><br>
  Анель выбрала:<br><br>
  📅 Дата: ${date}<br>
  ⏰ Время: ${time}<br>
  📍 Место: ${place}<br><br>
  Жду с нетерпением 😌💘
`;
