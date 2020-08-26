$(document).ready(function () {
  var root = document.documentElement,
    header = document.querySelector(".site-header"),
    sidebar = document.querySelector(".page-sidebar");
  root.style.setProperty("--header-height", header.offsetHeight + "px");
  root.style.setProperty("--sidebar-width", sidebar.offsetWidth + "px");

  var navItem = $(".site-header--nav ul li");
  navItem.click(function (e) {
    navItem.removeClass("active");
    $(this).addClass("active");
  });

  var menuItem = $(".page-sidebar--nav-menu li");
  var menuItemActive = $(".page-sidebar--nav-menu-active");
  menuItemActive.css({
    top: menuItem[0].offsetTop,
    width: menuItem.first().children("a").outerWidth(),
  });
  menuItem.click(function (e) {
    menuItem.removeClass("active");
    $(this).addClass("active");
    console.log($(this));
    menuItemActive.css({
      top: $(this)[0].offsetTop,
      width: $(this).children("a").outerWidth(),
    });
  });

  var handIcon = $(".page-content--header-option-hand");
  handIcon.click(function (e) {
    $(this).toggleClass("active");
  });

  var filterSelect = $(".filter-select > a");
  filterSelect.click(function (e) {
    $(this).siblings(".filter-select--dropdown").toggleClass("active");
  });
});
