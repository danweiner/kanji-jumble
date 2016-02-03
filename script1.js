$(document).ready(function() {
  $(".char").click(function() {
      if ($("ul").hasClass("open")) {
        $("ul").slideUp();
        $("ul").removeClass("open");
      } else {
        $("ul").slideDown();
        $("ul").addClass("open");
      }
    });

    $( window ).resize(function() {
      $("ul").removeAttr("style");
    });

});