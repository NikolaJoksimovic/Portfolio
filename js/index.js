$(window).ready(() => {
  $(".preloader").addClass("preloader-hide");

  $(".clr-btn").click((e) => {
    $("body").toggleClass("lightmode");
  });
});
