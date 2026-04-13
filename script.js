let player;
let isPlaying = false;


function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '1',
    width: '1',
    videoId: '_CEu4L9IfVs', // Dolphin sound video ID
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: '_CEu4L9IfVs',
      modestbranding: 1,
      rel: 0
    }
  });
}


document.getElementById('playButton').addEventListener('click', function () {
  if (!player) return;

  if (!isPlaying) {
    player.playVideo();
    this.textContent = "Pause Dolphin Audio";
    isPlaying = true;
  } else {
    player.pauseVideo();
    this.textContent = "Play Dolphin Audio";
    isPlaying = false;
  }
});