$(document).ready(function () {
  //hiding everything so that we can activate untill it show error
  $("#usernamevalidation").hide();
  $("#passwordevalidation").hide();
  $("#confirmpasswordvalidation").hide();

  //define variables to verify
  var Error = true;
  var passsword_error = true;
  var confirm_password_error = true;

  //  if user enter smthing which is not according to our rule so that we simply run the validation function
  $("#username").keyup(function () {
    username_validation();
  });

  //   defining the function here

  function username_validation() {
    var username_val = $("#username").val(); // taking value of user from input

    //checking wheather the length is less 4 or 0

    if (username_val.length == "") {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("Username Cannot be Empty.");
      $("#usernamevalidation").css("color", "red");
      $("#usernamevalidation").css("font-size", "14px");
      Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }

    //checking wheather the length is less 4 or 0

    if (username_val.length < 4) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html(
        "Username length should be greater than 4 letter."
      );
      $("#usernamevalidation").css("color", "red");
      $("#passwordvalidation").css("font-size", "14px");
      Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }
  }

  //same goes for the password

  $("#password").keyup(function () {
    password_validation();
  });

  function password_validation() {
    var password_val = $("#password").val();
    var pass_format = RegExp(
      "^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$"
    );
    if (password_val.length == "") {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html("password Cannot be Empty.");
      $("#passwordvalidation").css("color", "red");
      $("#passwordvalidation").css("font-size", "14px");
      passsword_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }
    if (password_val.length < 8 && !pass_format.test(password_val)) {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html(
        "password length should be greater than 8 and should be in correct format."
      );
      $("#passwordvalidation").css("color", "red");
      $("#passwordvalidation").css("font-size", "14px");
      passsword_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }
  }

  //define confirm password so that we can check wheather user
  //submit the right intentional password or not may be
  // user wants to write abcd but accidentally it enter acbd .

  $("#confirmpassword").keyup(function () {
    confirm_password();
  });

  function confirm_password() {
    var confirm_password_value = $("#confirmpassword").val();

    var password_val = $("#password").val();
    //taking both fields so that we can check the pass and con-password
    if (password_val != confirm_password_value) {
      $("#confirmpasswordvalidation").show();
      $("#confirmpasswordvalidation").css("color", "red");
      $("#confirmpasswordvalidation").css("font-size", "14px");
      $("#confirmpasswordvalidation").html("Password is not matching.");

      confirm_password_error = false;
      return false;
    } else {
      $("#confirmpasswordvalidation").hide();
    }
  }
  //in the end we will check all given fields
  $("#submitvalidation").click(function () {
    username_validation();
    password_validation();
    confirm_password();

    if (
      Error == true &&
      passsword_error == true &&
      confirm_password_error == true
    )
      return true;
    else return false;
  });
});
