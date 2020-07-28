(function () {
    let root = document.documentElement;
    let header = document.querySelector(".site-header");
    let headerHeight = document.querySelector(".site-header").clientHeight;

    document.addEventListener("DOMContentLoaded", e => {
        root.style.setProperty('--header-height', headerHeight + "px");
    });

    var svgs = document.querySelectorAll(".feature-item__icon svg");
    var svgwaypoint = new Waypoint({
        element: document.getElementById('feature-section'),
        handler: function () {
            svgs.forEach(el => {
                el.classList.toggle("active");
            })
        },
        offset: '40%'
    })


    // var svgwaypoint = new Waypoint({
    //     element: document.getElementById('inner-item-left'),
    //     handler: function () {
    //         this.element.classList.add('slide-in');
    //     },
    //     offset: '75%'
    // })

    new WOW().init();

})();