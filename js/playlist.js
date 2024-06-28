let player;
const videoList = [
  {
    videoId: "l6tL4L9T5Ek",
    thumbnail: "https://img.youtube.com/vi/l6tL4L9T5Ek/0.jpg",
  },
  {
    videoId: "kfnMvo87fQU",
    thumbnail: "https://img.youtube.com/vi/kfnMvo87fQU/0.jpg",
  },
  {
    videoId: "xDfjtE05KJY",
    thumbnail: "https://img.youtube.com/vi/xDfjtE05KJY/0.jpg",
  },
  {
    videoId: "_8qmXFV-kpg",
    thumbnail: "https://img.youtube.com/vi/_8qmXFV-kpg/0.jpg",
  },
];

let currentIndex = Math.floor(Math.random() * videoList.length);

function onYouTubePlayerAPIReady() {
  // 플레이어 생성 및 설정
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: videoList[currentIndex].videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
  updateThumbnail();
}

// 로딩된 후에 실행될 동작을 설정
function onPlayerReady(event) {
  document.getElementById("backward").addEventListener("click", playBackward);
  document
    .getElementById("play-pause")
    .addEventListener("click", togglePlayPause);
  document.getElementById("forward").addEventListener("click", playForward);
}

// 플레이어 상태 변화 감지 (playerState가 ended면 다음 노래 Play)
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    playForward();
  }
}

// 이전 버튼
function playBackward() {
  currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
  loadVideo();
}

// 재생-정지 버튼
function togglePlayPause() {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
    document.querySelector("#play-pause img").src = "./img/music_play.svg";
  } else {
    player.playVideo();
    document.querySelector("#play-pause img").src = "./img/music_pause.svg";
  }
}

// 다음 버튼
function playForward() {
  currentIndex = (currentIndex + 1) % videoList.length;
  loadVideo();
}

function loadVideo() {
  player.loadVideoById(videoList[currentIndex].videoId);
  updateThumbnail();
  document.querySelector("#play-pause img").src = "./img/music_pause.svg";
  player.playVideo();
}

function updateThumbnail() {
  document.getElementById("thumbnail").src = videoList[currentIndex].thumbnail;
}
