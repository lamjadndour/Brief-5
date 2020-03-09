var name = "0";
var email = "0";
var password;
var passwordconf;
function getData() {
  name = document.getElementById("fullName").value;
  email = document.getElementById("email").value;

  password = document.getElementById("password").value;
  passwordconf = document.getElementById("passwordConf").value;
  for (var i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      while (i < email.length) {
        i++;
        if (email[i] == ".") {
          console.log("found the .");
          break;
        }
      }
    }
  }
  if (password != passwordconf) {
    console.log(password);
    console.log(passwordconf);
    alert("password is not the same!! ");
  }
}
