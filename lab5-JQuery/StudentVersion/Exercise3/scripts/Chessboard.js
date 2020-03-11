$(document).ready(function() {
  // If you don't want to change the original code
  // make changes in this file and change the link in the html file

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

  // You will have to modify the checkerBoard to give it alternatingly odd and even classes
});
