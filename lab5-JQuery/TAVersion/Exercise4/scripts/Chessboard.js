$(document).ready(function() {
  var checkerBoard = [];
  for (var i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      checkerBoard.push($("<tr>").addClass("even"));
    } else {
      checkerBoard.push($("<tr>").addClass("odd"));
    }
    for (var j = 0; j < 8; j++) {
      checkerBoard[i].append("<td>");
    }
  }
  $("tbody").append(checkerBoard);

  $("#horizbtn").mouseover(function() {
    $("td:even").css("background-color", "");

    $("td:odd").css("background-color", "");

    $("tr:even").css("background-color", "white");

    $("tr:odd").css("background-color", "black");
  });

  $("#vertibtn").mouseover(function() {
    $("td:odd").css("background-color", "white");

    $("td:even").css("background-color", "black");

    $("tr:even").css("background-color", "");

    $("tr:odd").css("background-color", "");
  });

  $("#Chessbtn").mouseover(function() {
    $(".odd td:odd").css("background-color", "white");
    $(".odd td:even").css("background-color", "black");
    $(".even td:odd").css("background-color", "black");
    $(".even td:even").css("background-color", "white");
  });
});
