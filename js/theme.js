const pink = document.getElementById("pink");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const gray = document.getElementById("gray");

const root = document.documentElement;

const themes = {
  pink: {
    mainColor: "#ffdede",
    darkBackColor: "#ffd3d3",
    darkFontColor: "#f49a9a",
  },
  blue: {
    mainColor: "#bcd7ef",
    darkBackColor: "#81c2f2",
    darkFontColor: "#3c77ea",
  },
  purple: {
    mainColor: "#d3d7f9",
    darkBackColor: "#eac4fc",
    darkFontColor: "#d56bde",
  },
  green: {
    mainColor: "#cfead0",
    darkBackColor: "#a2dba5",
    darkFontColor: "#62d546",
  },
  gray: {
    mainColor: "#dcdcdc",
    darkBackColor: "#c5c5c5",
    darkFontColor: "#9d9c9c",
  },
};

function changeTheme(theme) {
  const colors = themes[theme];
  root.style.setProperty("--main-color", colors.mainColor);
  root.style.setProperty("--darkBack-color", colors.darkBackColor);
  root.style.setProperty("--darkFont-color", colors.darkFontColor);

  localStorage.setItem("theme", theme);
}

pink.addEventListener("click", () => changeTheme("pink"));
blue.addEventListener("click", () => changeTheme("blue"));
purple.addEventListener("click", () => changeTheme("purple"));
green.addEventListener("click", () => changeTheme("green"));
gray.addEventListener("click", () => changeTheme("gray"));

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && themes[savedTheme]) {
    changeTheme(savedTheme);
  } else {
    changeTheme("pink");
  }
});
