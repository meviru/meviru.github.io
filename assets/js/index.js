(function () {
  // your page initialization code here
  // the DOM will be available here
  gsap
    .timeline()
    .to(
      ".preloader--title span",
      1,
      {
        opacity: 1,
        stagger: 0.7,
        ease: "power4.inOut",
      },
      "+=1"
    )
    .to(
      ".preloader--sub-title span",
      0.5,
      {
        opacity: 1,
        stagger: 0.3,
        ease: "power4.inOut",
      },
      "+=0.2"
    )
    .to(
      ".preloader--inner",
      0.8,
      {
        opacity: 0,
        y: -150,
        ease: "power4.inOut",
      },
      "+=0.5"
    )
    .to(
      ".preloader",
      1.8,
      {
        height: 10,
        ease: "expo.inOut",
      },
      "-=1.1"
    )
    .from(
      ".header",
      2,
      {
        y: 30,
        opacity: 0,
        ease: "expo.inOut",
      },
      "-=1.5"
    )
    .from(
      ".hero-wrapper--title",
      1.5,
      {
        y: "100%",
        ease: "expo.inOut",
      },
      "-=1.9"
    )
    .from(
      ".hero-wrapper--desc",
      1,
      {
        opacity: 0,
        y: "50",
        ease: "power4.inOut",
      },
      "-=1.5"
    );
})();
