const todayDate = document.getElementById("date");
const todayTime = document.getElementById("time");
const todayWeather = document.getElementById("weather");

const date = new Date();

const year = date.getFullYear();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = monthNames[date.getMonth()];
const day = String(date.getDate()).padStart(2, "0");

todayDate.innerText = `${month} ${day}, ${year}`;

function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  todayTime.innerText = `${hour}:${minute}:${second}`;
}

getTime();
setInterval(getTime, 1000);
