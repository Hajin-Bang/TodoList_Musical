const todayDate = document.getElementById("date");
const todayTime = document.getElementById("time");
const todayWeather = document.getElementById("weather");

const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

todayDate.innerText = `${year}.${month}.${day}`;

function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  todayTime.innerText = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime, 1000);
