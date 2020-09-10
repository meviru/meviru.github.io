import $ from "jquery";

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
  var pageContentTitle = $(".page-content--header-title");
  menuItemActive.css({
    top: menuItem[0].offsetTop,
    width: menuItem.first().children("a").outerWidth(),
  });
  menuItem.click(function (e) {
    menuItem.removeClass("active");
    pageContentTitle.text($(this).text());
    $(this).addClass("active");
    menuItemActive.css({
      top: $(this)[0].offsetTop,
      width: $(this).children("a").outerWidth(),
    });
  });

  var handIcon = $(".page-content--header-option-hand");
  var selectMenu = $(".selected-menu-option");
  var docItem = $(".doc-item--inner");
  handIcon.click(function (e) {
    $(this).toggleClass("active");
    selectMenu.toggleClass("active");
    selectMenu.removeClass("enabled");
    docItem.toggleClass("active");
    docItem.removeClass("selected");
  });

  docItem.click(function (e) {
    if (docItem.hasClass("active")) {
      $(this).toggleClass("selected");
      if (docItem.hasClass("selected")) {
        selectMenu.addClass("enabled");
      } else {
        selectMenu.removeClass("enabled");
      }
    }
  });

  var starIcon = $(".doc-item--action-star");
  starIcon.click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("star-filled");
  });

  var filterSelect = $(".filter-select > a");
  var filterDropdown = $(".filter-select--dropdown");
  filterSelect.click(function (e) {
    e.stopPropagation();
    filterDropdown.toggleClass("active");
  });

  var navToggle = $(".nav-toggle");
  navToggle.click(function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("active");
  });

  document.oncontextmenu = function () {
    return false;
  };
  var contextMenu = $(".inner-menu--context-menu");
  var createMenu = $(".inner-menu--create-menu");

  var currentDocItem;
  var docItemMain = $(".doc-item");
  docItemMain.bind("contextmenu", function (e) {
    e.stopPropagation();
    var xPos = e.pageX;
    var yPos = e.pageY;
    currentDocItem = $(this);
    function setMenu(target) {
      target.css({
        left: xPos + "px",
        top: yPos + "px",
      });
    }

    if (
      e.target.classList.contains("doc-item--stripe") ||
      e.target.classList.contains("doc-item--title") ||
      e.target.classList.contains("doc-item--inner") ||
      e.target.classList.contains("doc-item--name") ||
      e.target.classList.contains("doc-item--tags") ||
      e.target.classList.contains("doc-item--tags-tag")
    ) {
      setMenu(contextMenu);
      createMenu.removeClass("active");
      contextMenu.addClass("active");
      return false;
    } else if (e.target.classList.contains("doc-item")) {
      setMenu(createMenu);
      contextMenu.removeClass("active");
      createMenu.addClass("active");
      return false;
    }
  });

  var colorItem = $(".inner-menu--color span");
  colorItem.click(function (e) {
    e.stopPropagation();
    var color = $(this).attr("data-color");
    currentDocItem.find('.doc-item--stripe').css({"background": color});
  });

  var modalBackdrop = $(".modal-backdrop");
  var modalClose = $(".modal-close");
  var modalWrapper = $(".modal-wrapper");

  var contextMenuItem = $(".inner-menu li a[data-id]");
  contextMenuItem.click(function (e) {
    e.preventDefault();
    var dataId = $(this).attr("data-id");
    $("body").addClass("modal-open");
    modalBackdrop.fadeIn();
    setTimeout(function () {
      $("#" + dataId).addClass("active");
    }, 200);
  });

  var selectedMenuOption = $(".selected-menu-option li a[data-id]");
  selectedMenuOption.click(function (e) {
    e.preventDefault();
    var dataId = $(this).attr("data-id");
    $("body").addClass("modal-open");
    modalBackdrop.fadeIn();
    setTimeout(function () {
      $("#" + dataId).addClass("active");
    }, 200);
  });

  modalClose.click(function (e) {
    e.preventDefault();
    $("body").removeClass("modal-open");
    modalBackdrop.fadeOut();
    $(this).parents(".modal-wrapper").removeClass("active");
  });

  modalWrapper.click(function (e) {
    e.stopPropagation();
    if (e.target !== this) {
      return;
    } else {
      $("body").removeClass("modal-open");
      modalBackdrop.fadeOut();
      $(this).removeClass("active");
    }
  });

  //search modal
  var searchItem = $("#page-content--search");
  var searchModal = $(".search-modal");
  var searchModalClose = $(".search-modal--close");

  searchItem.click(function (e) {
    e.preventDefault();
    $("body").addClass("modal-open");
    searchModal.fadeIn();
    $(this).parents(".modal-wrapper").removeClass("active");
  });
  searchModalClose.click(function (e) {
    e.preventDefault();
    $("body").removeClass("modal-open");
    searchModal.fadeOut();
    $(this).parents(".search-modal").removeClass("active");
  });

  //close modal when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      modalBackdrop.fadeOut();
      $(".modal-wrapper.active").removeClass("active");
    }
  });

  $("body,html").click(function (e) {
    filterDropdown.removeClass("active");
    contextMenu.removeClass("active");
    createMenu.removeClass("active");
    sidebar.classList.remove("active");
  });
});