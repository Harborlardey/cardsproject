$(document).ready(function () {
  $(".card").click(function () {
    $(".card").removeClass("flipped");
    $(this).toggleClass("flipped");
  });
});
