const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const gray = document.getElementById("gray");

const time = document.getElementById("time");
const musicBox = document.getElementById("music-box");
const themeBox = document.getElementById("theme-box");

let nowTheme = "";

// function saveNowTheme(nowTheme) {
//   localStorage.setItem("theme", nowTheme);
// }

// function changeTheme(event) {
//   nowTheme = event.target.id;
//   time.classList.add(nowTheme);
//   musicBox.classList.add(nowTheme);
//   themeBox.classList.add(nowTheme);

//   saveNowTheme(nowTheme);
// }

// pink.addEventListener("click", changeTheme);
// blue.addEventListener("click", changeTheme);
// purple.addEventListener("click", changeTheme);
// green.addEventListener("click", changeTheme);
// gray.addEventListener("click", changeTheme);

// const savedTheme = localStorage.getItem("theme");
// const DEFAULT_THEME = "pink";

// if (savedTheme) {
//   time.classList.add(savedTheme);
//   musicBox.classList.add(savedTheme);
//   themeBox.classList.add(savedTheme);
// } else {
//   time.classList.add(DEFAULT_THEME);
//   musicBox.classList.add(DEFAULT_THEME);
//   themeBox.classList.add(DEFAULT_THEME);
// }
