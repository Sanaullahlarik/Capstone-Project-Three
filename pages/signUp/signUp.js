document.getElementById("submitDetail").addEventListener('click', function(event){
  event.preventDefault();

  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("inputEmail").value;
  let userPassword = document.getElementById("inputPassword").value;
   

  if (userName && userEmail && userPassword) {
    localStorage.setItem("name", userName)
    localStorage.setItem("email", userEmail)
    localStorage.setItem("password",userPassword)
    window.location.href = "../signIn/signIn.html"
    alert("successfully registered")
  }else{
    alert("Invalid Data")
  }
})