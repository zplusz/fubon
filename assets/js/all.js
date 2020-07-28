"use strict";

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      if ($(".goTop").hasClass("hide")) {
        $(".goTop").toggleClass("hide");
      }
    } else {
      $(".goTop").addClass("hide");
    }
  });
  $(".jq-goTop").on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});
//# sourceMappingURL=all.js.map
