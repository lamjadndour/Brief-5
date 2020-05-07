//////////// SIGN-UP ////////////////
/////////////////////////////////////
function ft_signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var error_message = document.getElementById("err_msg_inscr");

  error_message.style.padding = "10px";
  error_message.style.color = "red";
  error_message.style.fontSize = "22px";
  error_message.style.textAlign = "center";





  // validation Name
  var text;
  if (!name.match(/^[A-Z]/)) {
    text = "champ de nom n'pas valide";
    error_message.innerHTML = text;
    return false;
  }

  // validation Email
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    text = "champ de email n'pas valide";
    error_message.innerHTML = text;
    return false;
  }

  // Validate confirmation password
  if (pass1 != pass2 || pass1 == '') {
    text = "Vous n'avez pas saisi deux fois le même mot de passe";
    error_message.innerHTML = text;
    return false;

  }
  else {
    alert("Sign-up Successfully!");
    return true;
  }
}

//////////// RESERVATION ////////////////
/////////////////////////////////////

function ft_reserver() {
  var fullname = document.getElementById("fullName").value;
  var date = document.getElementById("datenaissance").value;
  var cin = document.getElementById("cin").value;
  var phone = document.getElementById("phone").value;
  var date1 = document.getElementById("date1").value;
  var date2 = document.getElementById("date2").value;
  var emailR = document.getElementById("email2").value;
  var error_message2 = document.getElementById("error_message2");

  error_message2.style.padding = "10px";
  error_message2.style.color = "red";
  error_message2.style.fontSize = "22px";
  error_message2.style.textAlign = "center";

  // ---------validation Name
  var text;
  if (!fullname.match(/^[A-Z]/)) {
    text = "champ de nom n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }
  // ----validation Date de naissance
  if (!date.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)) {
    text = "champ de date de naissance n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }
  // ----validation cih
  if (!cin.match(/^[A-Z]{2}[0-9]{5}$/)) {
    text = "champ de CIN n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }

  // ---------validation Phone
  if (isNaN(phone) || phone.length != 10) {
    text = "champ de telephone n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }

  // ---------validation date
  if (!date1.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)) {
    text = "champ de date depare n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }
  if (!date2.match(/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/)) {
    text = "champ de date d'arrivée n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }

  // ---------validation Email
  if (!emailR.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    text = "champ de email n'pas valide";
    error_message2.innerHTML = text;
    return false;
  }

  else {
    alert("hello " + fullname + " votre reservation demarer le " + date1 + " et termine le " + date2 + " vous recever voter ticket a :" + emailR);
    return true;
  }
}
