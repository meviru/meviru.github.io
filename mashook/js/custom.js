jQuery(document).ready(function ($) {
    // COUNTER FUNCTION
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    $(".nav-toggle").click(function () {
        $(this).toggleClass("active");
        $("body").toggleClass("header__nav-active");
    });
});