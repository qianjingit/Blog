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

//进度条
function handleProgress() {
   const percent = (video.currentTime / video.duration) * 100;
   progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);

//播放时间节点
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
progress.addEventListener('click', scrub); 

//进度条拖动
let mousedown = false;
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);

//快进快退
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
skipButtons.forEach(button => button.addEventListener('click', skip));


//音量调节和播放速度调节
function handleRangeUpdate() {
    video[this.name] = this.value;
}
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));







