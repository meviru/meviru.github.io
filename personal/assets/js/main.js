$(function () {

  /*=====================================
   Start Typed
   =====================================*/
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        backDelay: 3000,
        loop: true,
        loopCount: false,
        showCursor: true,
        attr: null,
        contentType: 'html'
    });

    /*=====================================
     Start mixtup
    =====================================*/

    var containerEl = document.querySelector('.work-blocks');
    var mixer = mixitup(containerEl);

    /*=====================================
      Start Owl Carousel
     =====================================*/

    var blog_slider = $('#blog-slider');
    blog_slider.owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        991: {
          items: 2
        },
        1140: {
          items: 3
        }
      }
    });
    
    var testimonials_slider = $('#testimonials-slider');
    testimonials_slider.owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        autoplayTimeout:5000,
        smartSpeed: 400,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          991: {
            items: 1
          },
          1140: {
            items: 1
          }
        }
    });

    var testimonials_slider_1 = $('#testimonials-slider-1');
    testimonials_slider_1.owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        margin: 30,
        autoplayTimeout:5000,
        smartSpeed: 800,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          991: {
            items: 1
          },
          992: {
            items: 3
          },
          1140: {
            items: 3
          }
        }
    });

     var testimonials_slider_2 = $('#testimonials-slider-2');
    testimonials_slider_2.owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        margin: 30,
        autoplayTimeout:5000,
        smartSpeed: 800,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          991: {
            items: 2
          },
          992: {
            items: 2
          },
          1140: {
            items: 2
          }
        }
    });

     var testimonials_slider_3 = $('#testimonials-slider-3');
     testimonials_slider_3.owlCarousel({
        autoplay: true,
        loop: true,
        margin: 30,
        autoplayTimeout:5000,
        smartSpeed: 800,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          991: {
            items: 2
          },
          1140: {
            items: 2
          }
        }
    });

    /*=====================================
      Start Partical JS 
     =====================================*/

     /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('home', 'assets/js/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });

    /*=====================================
     Start Navbar Toggle
    =====================================*/
    var toggle = $('#menu-toggle');
    toggle.on('click',function(){
      $('#navbar').stop().toggleClass('active');
      $('#navbar .navbar-collapse').toggleClass('active');
      $(this).toggleClass('is-active');
    });

    /*=====================================
     Start OnePage Nav
     =====================================*/
     var navUl = $('#navbar ul');
     navUl.onePageNav({
        currentClass : 'active',
        begin: function() {
          //I get fired when the animation is starting
          $('#navbar').removeClass('active');
          $('#navbar .navbar-collapse').removeClass('active');
          $('#menu-toggle').removeClass('is-active');
        }
     });

    /*=======================================================================================
     Start Smooth Scroll (Add data-scroll='smooth' attribute on anchor tag for smooth scroll)
     ======================================================================================== */
     var smoothScroll = $("a[data-scroll='smooth']");

     smoothScroll.on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function(){
                // window.location.hash = hash;
              });
          }
      });

     /*=====================================
     Start Fixed Naviation
     =====================================*/

     var scrollTop = $(window).scrollTop();
     
     if(scrollTop > 60) {
        $('body').addClass('fixedNav');
      }
      else {
        $('body').removeClass('fixedNav');
    }

    /*=====================================
     Start progress bar animation
     =====================================*/
    $(".progress").each(function() {
        $(this).waypoint(function() {
          var progressBar = $(".progress-bar");
          progressBar.each(function(index){
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
      });
     });

    $(".progress-item").each(function() {
        $(this).waypoint(function() {
          var progressBar = $(".progress-item .progress-bar");
          progressBar.each(function(index){
          $(this).css("height", $(this).attr("aria-valuenow") + "%");
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
      });
     });

    /*=====================================
     start WOW JS
     =====================================*/
     var wow = new WOW({
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      });

      wow.init();


    $('#skills-main').waypoint(function() {
      $('#skills-main .chart').easyPieChart({
        animate: 1000,
        scaleColor: false,
        trackColor: '#e5e5e5',
        barColor: '#444',
        lineCap:'butt',
        lineWidth: 10,
        size: 110,
      });
    }, {
      triggerOnce: true,
      offset: 'bottom-in-view'
    });

  });

/*=====================================
  Start Counter JS
 =====================================*/

var a = 0;
$(window).scroll(function() {
  var oTop = $('.counter-section').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    a = 1;
  }
});

/*=====================================
  ScrollTop Reveal
 =====================================*/
var menu = $('.header .navbar').offset().top + 130;
$(window).on('scroll',function(){
  
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 500) {
    $('#scrollTop').addClass('active');
  }
  else {
    $('#scrollTop').removeClass('active');
  }

  if(scrollTop > 60) {
    $('body').addClass('fixedNav');
  }
  else {
    $('body').removeClass('fixedNav');
  }

  /*=====================================
    Fixed menu when at top
  =====================================*/
  if(scrollTop > menu) {
    $('#home-4 .navbar').addClass('stickIt');
  }
  else {
   $('#home-4 .navbar').removeClass('stickIt'); 
  }

});