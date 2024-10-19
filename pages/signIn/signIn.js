

document.getElementById("signInDetail").addEventListener("click", function (event) {
  event.preventDefault();

  let localEmail = localStorage.getItem("Email");
  let localPassword = localStorage.getItem("Password");

  let logInEmail = document.getElementById("inputEmail").value;
  let logInPassword = document.getElementById("inputPassword").value;

  if (logInEmail === localEmail && logInPassword === localPassword) {
    alert("Login successful!");
   
    window.location.href= "/index.html";
  } else {

    alert("Incorrect email or password. Please try again.");
  }
});