$(document).ready(function () {
  // HERO SLIDER
  var owl = $("#c-hero-slider");
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
    cssEase: "ease-in-out",
  });

  // SMOOTH SCROLLING
  $(".site-nav a[href^='#']").click(function () {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 60,
        },
        600
      );
    }
  });

  // SCROLL TOP
  var offset = 300,
    offsetOpacity = 1200,
    $backtoTop = $(".cd-top");

  $(window).scroll(function () {
    $(this).scrollTop() > offset
      ? $backtoTop.addClass("cd-is-visible")
      : $backtoTop.removeClass("cd-is-visible cd-fade-out");
  });

  $backtoTop.click(function (e) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  });

  //  NAV TOGGLE
  $(".nav-toggle").click(function () {
    $(this).stop().toggleClass("active");
    $(".site-header").stop().toggleClass("site-header--nav-active");
    $(".site-nav").stop().toggleClass("site-nav--active");
    $(".lang-dropdown").removeClass("active");
  });

  $(".site-nav > ul > li > a").click(function () {
    $(".nav-toggle").stop().removeClass("active");
    $(".site-nav").stop().removeClass("site-nav--active");
  });

  $(".lang-translator").click(function (e) {
    e.preventDefault();
    $(".lang-dropdown").toggleClass("active");
  });
  
  $(".faq-item--title").click(function(e){
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).next().slideToggle(300);
  })

  var $form_modal = $(".cd-user-modal"),
    $form_login = $form_modal.find("#cd-login"),
    $form_signup = $form_modal.find("#cd-signup"),
    $form_forgot_password = $form_modal.find("#cd-reset-password"),
    $form_modal_tab = $(".cd-switcher"),
    $tab_login = $form_modal_tab.children("li").eq(0).children("a"),
    $tab_signup = $form_modal_tab.children("li").eq(1).children("a"),
    $forgot_password_link = $form_login.find(".cd-form-bottom-message a"),
    $back_to_login_link = $form_forgot_password.find(
      ".cd-form-bottom-message a"
    ),
    $main_nav = $(".action-cta");

  //open modal
  $main_nav.on("click", function (event) {
    $form_modal.addClass("is-visible");
    //show the selected form
    $(event.target).is(".cd-signup") ? signup_selected() : login_selected();
  });

  //close modal
  $(".cd-user-modal").on("click", function (event) {
    if (
      $(event.target).is($form_modal) ||
      $(event.target).is(".cd-close-form")
    ) {
      $form_modal.removeClass("is-visible");
    }
  });
  //close modal when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $form_modal.removeClass("is-visible");
    }
  });

  //switch from a tab to another
  $form_modal_tab.on("click", function (event) {
    event.preventDefault();
    $(event.target).is($tab_login) ? login_selected() : signup_selected();
  });

  //show forgot-password form
  $forgot_password_link.on("click", function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on("click", function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    $form_login.addClass("is-selected");
    $form_signup.removeClass("is-selected");
    $form_forgot_password.removeClass("is-selected");
    $tab_login.addClass("selected");
    $tab_signup.removeClass("selected");
  }

  function signup_selected() {
    $form_login.removeClass("is-selected");
    $form_signup.addClass("is-selected");
    $form_forgot_password.removeClass("is-selected");
    $tab_login.removeClass("selected");
    $tab_signup.addClass("selected");
  }

  function forgot_password_selected() {
    $form_login.removeClass("is-selected");
    $form_signup.removeClass("is-selected");
    $form_forgot_password.addClass("is-selected");
  }
});
