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
            600: {
                items: 2
            },
            1000: {
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
});
