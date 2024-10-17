document.getElementById("signInDetail").addEventListener("click", function(event) {
  event.preventDefault();

  let localEmail = localStorage.getItem("email");
  let localPassword = localStorage.getItem("password");

  let logInEmail = document.getElementById("inputEmail").value;
  let logInPassword = document.getElementById("inputPassword").value;
  if (logInEmail === localEmail && logInPassword === localPassword) {
    window.location.href = "../../index.html";
   
  } 
  else {
   alert("Invalid Data")
}
});
