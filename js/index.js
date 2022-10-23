import { createItem } from "./projectItem.js";
$(window).ready((e) => {
  // preloader
  $(".preloader").addClass("preloader-hide");

  // fetching data and returning elements
  $.getJSON({ url: "./data/projects.json" }).done((items) => {
    items.forEach((item) => {
      $(".project-items").append(createItem(item));
    });

    // observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    const projectItems = $(".project-item").toArray();
    projectItems.forEach((item) => {
      console.log(item);
      observer.observe(item);
    });
  });

  // color mode
  $(".clr-btn").click(() => {
    $("body").toggleClass("lightmode");
  });

  // btn functionalities
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
    if ($(window).scrollTop() >= $(window).height() * 1.2) {
      $(".up-btn").removeClass("up-btn-hide");
    } else {
      $(".up-btn").addClass("up-btn-hide");
    }
  });
});
