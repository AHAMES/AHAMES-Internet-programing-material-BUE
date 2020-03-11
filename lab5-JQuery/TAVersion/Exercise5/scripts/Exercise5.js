function validateForm() {
  var x = document.forms["SignUp"]["Username"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  x = document.forms["SignUp"]["Age"].value;
  if (x == "" || (x.match(/\D/) == null) == false || x < 0) {
    alert("Not a number or number less than 0");
    return false;
  }

  x = document.forms["SignUp"]["Address"].value;
  if (x == "") {
    alert("Address must be filled out");
    return false;
  }

  x = document.forms["SignUp"]["Email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  } else if (!x.includes("@")) {
    alert("Does not have mail format");
  }
  x = document.forms["SignUp"]["gender"].value;

  x = document.forms["SignUp"]["language"];
  var checkboxesChecked = [];
  // loop over them all
  for (var i = 0; i < x.length; i++) {
    // And stick the checked ones onto an array...
    if (x[i].checked) {
      checkboxesChecked.push(x[i]);
    }
  }
  // Return false if the array if it is empty, or null
  if (!(checkboxesChecked.length > 0 ? checkboxesChecked : null)) {
    alert("must check at least one language");
    return false;
  }

  x = document.forms["SignUp"]["password"].value;

  var y = document.forms["SignUp"]["re-type"].value;

  if (x != y) {
    alert("Password retype does not match");
    return false;
  }
  if (x.length < 8) {
    alert("password length not enough, minimum 8");
    return false;
  }
  if (/\d/.test(x) == false) {
    //Checks if it contains any number
    alert("password does not contain a number");
    return false;
  }
  if (/[A-Za-z]/.test(x) == false) {
    alert("password does not contain a letter");
    return false;
  }
}
