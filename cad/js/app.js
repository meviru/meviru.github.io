$(document).ready(function () {

    $('img[usemap]').rwdImageMaps();
    // feather icons
    feather.replace();

    // dynamic height
    var headerHeight = $(".header").outerHeight();
    var cartTitle = $(".cart-title").outerHeight();
    var fastCheckoutBtn = $(".checkout-cart-option").outerHeight();
    $("html").css({
        "--header-height": headerHeight + "px",
        "--cart-th": cartTitle + "px",
        "--cart-cta-height": fastCheckoutBtn + "px"
    });

    $("#openProductDetail").click(function () {
        $(".product-detail-sidebar").addClass("active");
    });

    $(".product-detail-sidebar .cart-title__close, #action-close").click(function () {
        $(".product-detail-sidebar").removeClass("active");
    });

    // accordion code
    // $(".sidebar .sidebar-menu > li.active.parent").children(".submenu").show();
    $(".sidebar > .sidebar-menu li.parent").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $(this).children(".submenu").stop().slideToggle(300);
    });
});