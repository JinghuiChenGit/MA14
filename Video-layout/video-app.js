let currentVideo = document.querySelector('video');
let videoList = document.querySelector('ul');
let headerContent = document.querySelector('content');
window.addEventListener('scroll', function () {
    let fadeLevel = 1 + window.scrollY / -600;
    currentVideo.style.opacity = fadeLevel;
    videoList.style.opacity = fadeLevel;
    headerContent.style.opacity = fadeLevel;
})


function playVideo(vid) {
    document.getElementById("container").src = vid;
}

function controlVideo() {
    var video = document.getElementById("video-box");
    var btn = document.getElementById("vid-control-btn");

    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

