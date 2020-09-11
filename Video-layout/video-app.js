let currentVideo = document.querySelector('video');
let videoList = document.querySelector('ul')
window.addEventListener('scroll', function () {
    let fadeLevel = 1 + window.scrollY / -600;
    currentVideo.style.opacity = fadeLevel;
    videoList.style.opacity = fadeLevel;
})


function playVideo(vid) {
    document.getElementById("container").src = vid;
}