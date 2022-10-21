import { createItem } from "./projectItem.js";
$(window).ready((e) => {
  // preloader
  $(".preloader").addClass("preloader-hide");

  // fetching data and returning elements
  $.getJSON({ url: "./data/projects.json" }).done((items) => {
    items.forEach((item) => {
      $(".project-items").append(createItem(item));
    });
  });
  // color mode
  $(".clr-btn").click(() => {
    $("body").toggleClass("lightmode");
  });
  $(".projects-btn").click(() => {
    $(window).scrollTop($(".project-section").offset().top);
  });
  $(".contact-btn").click(() => {
    $(window).scrollTop($(".contact-section").offset().top);
  });
  $(".up-btn").click(() => {
    $(window).scrollTop(0);
  });
  $(window).scroll(() => {
    console.log($(window).scrollTop(), $(window).height() * 1.2);
    if ($(window).scrollTop() >= $(window).height() * 1.2) {
      $(".up-btn").removeClass("up-btn-show");
    } else {
      $(".up-btn").addClass("up-btn-show");
    }
  });
});
