// Retrieve video container and switch button elements
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

// Add event listener to button
btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else {
        btn.classList.remove('slide');
        video.play();
    }
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
});