$(document).ready(function () {

    // HERO SLIDER 
    var owl = $('#c-hero-slider');
    owl.slick({
        adaptiveHeight: true,
        autoplay: true,
        speed: 1500,
        fade: true,
        swipe: false,
        arrows: false,
        draggable: false,
        dots: false,
        slidesToShow: 1,
        cssEase: 'ease-in-out',
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
