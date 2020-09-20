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

  $(".faq-item--title").click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass("active");
    $(this).next().slideToggle(300);
  });

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

  class InfiniteSlider {
    constructor(
      animTime = "10000",
      selector = ".slider",
      container = "#slider-container"
    ) {
      this.slider = document.querySelector(selector);
      this.container = document.querySelector(container);
      this.width = 0;
      this.oldWidth = 0;
      this.duration = parseInt(animTime);
      this.start = 0;
      this.refresh = 0; //0, 1, or 2, as in steps of the animation
      this._prevStop = false;
      this._stop = false;
      this._oldTimestamp = 0;
    }

    animate() {
      /* fix for browsers who like to run JS before images are loaded */
      const imgs = Array.prototype.slice
        .call(this.slider.querySelectorAll("img"))
        .filter((img) => {
          return img.naturalWidth === 0;
        });
      if (imgs.length > 0) {
        window.requestAnimationFrame(this.animate.bind(this));
        return;
      }

      /* Add another copy of the slideshow to the end, keep track of original width */
      this.oldWidth = this.slider.offsetWidth;
      const sliderText =
        '<div class="image-container slider-extra">' + this.slider.innerHTML + "</div>";
      this.slider.innerHTML += sliderText;

      /* can have content still when we move past original slider */
      this.width = this.slider.offsetWidth;
      const minWidth = 2 * screen.width;

      /* Add more slideshows if needed to keep a continuous stream of content */
      while (this.width < minWidth) {
        this.slider.innerHTML += sliderText;
        this.width = this.slider.width;
      }
      this.slider
        .querySelector(".slider-extra:last-child")
        .classList.add("slider-last");

      /* loop animation endlesssly (this is pretty cool) */
      window.requestAnimationFrame(this.controlAnimation.bind(this));
    }

    stagnate() {
      this.container.style.overflowX = "scroll";
    }

    controlAnimation(timestamp) {
      //console.log('this.stop: ' + this._stop + '\nthis.prevStop: ' + this._prevStop)
      if (this._stop === true) {
        if (this._prevStop === false) {
          this.slider.style.marginLeft = getComputedStyle(
            this.slider
          ).marginLeft;
          this._prevStop = true;
          this._oldTimestamp = timestamp;
        }
      } else if (this._stop === false && this._prevStop === true) {
        this._prevStop = false;
        this.start = this.start + (timestamp - this._oldTimestamp);
      } else {
        //reset animation
        if (this.refresh >= 1) {
          this.start = timestamp;
          this.slider.style.marginLeft = 0;
          this.refresh = 0;
          window.requestAnimationFrame(this.controlAnimation.bind(this));
          return;
        }
        if (timestamp - this.start >= this.duration) {
          this.refresh = 1;
        }

        const perc = ((timestamp - this.start) / this.duration) * this.oldWidth;
        this.slider.style.marginLeft = -perc + "px";
      }
      window.requestAnimationFrame(this.controlAnimation.bind(this));
      return;
    }
  }

  const slider = new InfiniteSlider(35000);
  slider.animate();
});
