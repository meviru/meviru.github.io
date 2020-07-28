$(document).ready(function () {
    let root = document.documentElement;
    let header = document.querySelector(".site-header");
    let headerHeight = document.querySelector(".site-header").clientHeight;
    let navToggle = document.querySelector(".nav-toggle");
    let nav = document.querySelector(".navigation");

    root.style.setProperty('--header-height', headerHeight + "px");

    var svgs = document.querySelectorAll(".feature-item__icon svg");
    new Waypoint({
        element: document.getElementById('feature-section'),
        handler: function () {
            svgs.forEach(el => {
                el.classList.toggle("active");
            })
        },
        offset: '40%'
    })

    var videoItem = document.querySelector(".video-wrapper video");
    videoItem.playsInline = true;
    videoItem.autoplay = true;
    videoItem.muted = false;
    videoItem.play();

    navToggle.addEventListener("click", e => {
        navToggle.classList.toggle('active');
        $(nav).slideToggle(300);
    });

    new WOW().init();

});