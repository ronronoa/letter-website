const audio = document.getElementById('audio');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    } else {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
    }
}
