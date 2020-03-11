$(document).ready(function() {
  $("#circle").click(function() {
    console.log("clicked Circle");
    $("#subject").removeClass();
    $("#subject").addClass("Circle");
  });

  $("#rectangle").click(function() {
    console.log("clicked rectangle");
    $("#subject").removeClass();
    $("#subject").addClass("Rectangle");
  });

  $("#square").click(function() {
    console.log("clicked Square");
    $("#subject").removeClass();
    $("#subject").addClass("Square");
  });

  $("#red").click(function() {
    console.log("clicked red");
    $("#subject").css("background-color", "red");
  });

  $("#blue").click(function() {
    console.log("clicked blue");
    $("#subject").css("background-color", "blue");
  });

  $("#green").click(function() {
    console.log("clicked green");
    $("#subject").css("background-color", "green");
  });

  $("#right").click(function() {
    console.log("clicked right");
    $("#subject").animate({
      left: "+40em"
    });
  });

  $("#middle").click(function() {
    console.log("clicked middle");
    $("#subject").animate({
      left: "+25em"
    });
  });

  $("#left").click(function() {
    console.log("clicked left");
    $("#subject").animate({
      left: "+10em"
    });
  });

  $("#hide").click(function() {
    $("#subject").toggle();
  });

  $("#ShapesSlider").click(function() {
    $("#shapes").slideToggle();
  });

  $("#ColorsSlider").click(function() {
    $("#Color").slideToggle();
  });

  $("#MovementSlider").click(function() {
    $("#Moves").slideToggle();
  });
  //console.log($("#circle"));
});
