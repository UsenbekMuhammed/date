const date = localStorage.getItem("dateDate");
const time = localStorage.getItem("dateTime");
const place = localStorage.getItem("datePlace");

document.getElementById("letterContent").innerHTML = `
  💖 Наше свидание запланировано 💖<br><br>
  Анель выбрала:<br><br>
  📅 Дата: ${date}<br>
  ⏰ Время: ${time}<br>
  📍 Место: ${place}<br><br>
  Жду с нетерпением 😌💘
`;
