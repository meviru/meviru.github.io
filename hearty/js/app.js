$(document).ready(function () {

    /* FIXED HEADER */
    let header = document.querySelector(".site-header");
    fixHeader = () => {
        if (window.pageYOffset > header.clientHeight) {
            header.classList.add('site-header--fixed');
        } else {
            header.classList.remove('site-header--fixed');
        }
    }
    window.addEventListener("scroll", fixHeader);

    /* TESTIMONIAL CAROUSEL */
    var owl = $('#c-testi-carousel');
    owl.owlCarousel({
        autoplay: true,
        slideSpeed: 400,
        loop: true,
        nav: false,
        dots: true,
        center: true,
        dotsSpeed: 800,
        dragEndSpeed: 800,
        autoplaySpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /* SMOOTH SCROLLING */
    $("a[href^='#']").click(function () {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 600);
        }
    });

    /* SCROLL TOP */
    var offset = 300,
        offsetOpacity = 1200,
        $backtoTop = $('.cd-top');

    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $backtoTop.addClass('cd-is-visible') : $backtoTop.removeClass('cd-is-visible cd-fade-out');
    });

    $backtoTop.click(function (e) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    /* NAV TOGGLE */
    $(".nav-toggle").click(function () {
        $(this).stop().toggleClass('active');
        $(".site-header").stop().toggleClass("site-header--nav-active")
        $(".site-nav").stop().toggleClass("site-nav--active");
    });

    $(".site-nav > ul > li > a").click(function () {
        $(".nav-toggle").stop().removeClass('active');
        $(".site-nav").stop().removeClass("site-nav--active");
    })
});
