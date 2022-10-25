import { createItem } from "./projectItem.js";

$(window).ready((e) => {
  // preloader
  setTimeout(() => {
    $(".preloader").addClass("preloader-hide");
  }, 1000);

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
      observer.observe(item);
    });
  });

  // color mode
  const local_storage = $(window)[0].localStorage;
  let mode = local_storage.getItem("mode");

  if (mode === "lightmode") {
    $("body").addClass("lightmode");
  }

  $(".clr-btn").click(() => {
    mode = local_storage.getItem("mode");
    if (mode === "lightmode") {
      local_storage.setItem("mode", "darkmode");
      $("body").removeClass("lightmode");
    } else {
      local_storage.setItem("mode", "lightmode");
      $("body").addClass("lightmode");
    }
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

  // age-calc
  const my_dob = new Date("12/18/1995, 3:45:00 AM");
  const min = 1000 * 60;
  const hour = 60 * min;
  const day = 24 * hour;
  const year = 365 * day;

  setInterval(() => {
    const curr_age = new Date().getTime() - my_dob;
    const years = Math.floor(curr_age / year);
    const days = Math.floor((curr_age - years * year) / day);
    const hours = Math.floor((curr_age - years * year - days * day) / hour);
    const minutes = Math.floor(
      (curr_age - years * year - days * day - hours * hour) / min
    );
    const seconds = Math.floor(
      (curr_age - years * year - days * day - hours * hour - minutes * min) /
        1000
    );

    $("#age-years").text(`${years}`);
    $("#age-days").text(`${days < 10 ? `0${days}` : days}`);
    $("#age-hours").text(`${hours < 10 ? `0${hours}` : hours}`);
    $("#age-minutes").text(` ${minutes < 10 ? `0${minutes}` : minutes}`);
    $("#age-seconds").text(`${seconds < 10 ? `0${seconds}` : seconds}`);
  }, 1000);
});
