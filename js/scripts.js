$(document).ready(function() {
  $(".clickable").click(function() {

    $("#initially-showing").toggle();
    $(".initially-hidden").toggle();
    $("body").toggleClass("blackout");
    $(".jumbotron").toggleClass("dark");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("whiteout");
    $(".jumbotron").removeClass();
    $(".jumbotron").addClass("whiteout");
    $("img").removeClass();
    $("img").addClass("whiteoutimage");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue");
    $(".jumbotron").removeClass();
    $(".jumbotron").addClass("blue");
    $("img").removeClass();
    $("img").addClass("whiteoutimage");

    });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red");
    $(".jumbotron").removeClass();
    $(".jumbotron").addClass("red");
    $("img").removeClass();
    $("img").addClass("whiteoutimage");
  });

});
