function validateForm() {
  //here is an example
  var x = document.forms["SignUp"]["Username"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  // Continue with the resty
}
