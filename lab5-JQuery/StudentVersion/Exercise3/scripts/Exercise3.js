$(document).ready(function() {
  //Create the table
  var checkerBoard = [];
  for (var i = 0; i < 8; i++) {
    checkerBoard.push($("<tr>"));
    for (var j = 0; j < 8; j++) {
      checkerBoard[i].append("<td>");
    }
  }
  $("tbody").append(checkerBoard); // deploys the table

  // Your code goes here
});
