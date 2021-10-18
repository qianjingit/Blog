// 声明
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//播放按钮开关
function togglePlay() {
    if(video.paused) {
        video.play();
        console.log('点击播放');
    } else {
        video.pause();
        console.log('点击暂停');
    }
}
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

//按钮样式切换
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);




