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

    $("#openProductDetail, .openProductDetail").click(function () {
        $(".product-detail-sidebar").addClass("active");
        $(".cart-sidebar").removeClass('active');
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

    $(".toggle-btn").click(function(e){
        $(".sidebar").toggleClass('active');
    });

    $(".sidebar-close").click(function(e){
        $(".sidebar").removeClass('active');
    });

    $(".cart-toggle").click(function(e){
        $(".cart-sidebar").toggleClass('active');
    });

    $(".cart-close").click(function(e){
        $(".cart-sidebar").removeClass('active');
    })
});