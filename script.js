const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('timestamp');

// Reproducir y pausar video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Actualizar el icono a pausa
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'

    }
}

// Actualiza el progreso en el span de tiempo
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Obtener minutos
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    // Obtener segundos
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    time.innerHTML = mins + ':' + secs;


}

// Pone el progreso del video
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Detiene el video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}



// Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

