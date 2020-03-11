$(document).ready(function() {
  var checkerBoard = [];
  for (var i = 0; i < 8; i++) {
    checkerBoard.push($("<tr>"));
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

  $("#chessBt").mouseover(function() {});
});
