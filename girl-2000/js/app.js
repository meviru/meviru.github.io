$(document).ready(function (e) {
  var prevBtn = document.querySelector(".hero-wizard--action-prev");
  var nextBtn = document.querySelector(".hero-wizard--action-next");

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  prevBtn.addEventListener("click", function (e) {
    plusSlides(-1);
  });
  nextBtn.addEventListener("click", function (e) {
    plusSlides(1);
  });

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("hero-wizard--item");
    console.log(n + " " + slides.length);
    if (n > slides.length) {
      slideIndex = slides.length;
      return false;
    } else if (n <= 1) {
      slideIndex = 1;
      return false;
    } else {
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slides[slideIndex - 1].classList.add("active");
    }
  }
});
