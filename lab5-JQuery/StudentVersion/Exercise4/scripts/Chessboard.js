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
});
