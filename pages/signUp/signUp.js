document.getElementById("userDetails").addEventListener("submit", function (event) {
event.preventDefault();

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    if (userName && userEmail && userPassword) {
      localStorage.setItem("Name", userName);
      localStorage.setItem("Email", userEmail);
      localStorage.setItem("Password", userPassword);
      alert("Sign up successful! Please log in.");
      window.location.href = "/pages/signIn/signIn.html";
    } else {
      alert("Please fill all details.");
    }
  });

// let form = document.getElementById('userDetails');
// let userName = document.getElementById("userName");
// let userEmail = document.getElementById("userEmail");
// let userPassword = document.getElementById("userPassword");


// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let name = userName.value;
//   let email = userEmail.value;
//   let Password = userPassword.value;

//   if (userName && userEmail && userPassword) 
//     localStorage.setItem("Name", userName)
//   localStorage.setItem("Email", userEmail);
//   localStorage.setItem("Password", userPassword);
//   alert("Sign up successful! Please log in.");
//   window.location.href = "/pages/signIn/signIn.html";
// } else {
//   alert("Please fill all details.");
// }
// });
