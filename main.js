const cardEl = document.getElementById("card");
// window.onload = function () {
//   var loginModal = document.getElementById("login-modal");
//   var registerModal = document.getElementById("register-modal");

//   loginModal.style.display = "none";
//   registerModal.style.display = "none";
// };

// function openLoginModal() {
//   var loginModal = document.getElementById("login-modal");
//   var registerModal = document.getElementById("register-modal");

//   loginModal.style.display = "block";
//   registerModal.style.display = "none";
// }
// function closeLoginModal() {
//   var loginModal = document.getElementById("login-modal");
//   loginModal.style.display = "none";
// }

// function openRegisterModal() {
//   var registerModal = document.getElementById("register-modal");
//   var loginModal = document.getElementById("login-modal");

//   registerModal.style.display = "block";
//   loginModal.style.display = "none";
// }
// function closeRegisternModal() {
//   var registernModal = document.getElementById("register-modal");
//   registernModal.style.display = "none";
// }

window.onload = function () {
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");
  loginModal.style.display = "none";
  registerModal.style.display = "none";
};
function openLoginModal() {
  var loginModal = document.getElementById("login-modal");
  var registerModal = document.getElementById("register-modal");
  loginModal.style.display = "block";
  registerModal.style.display = "none";
  cardEl.style.display = "none";
}
function closeLoginModal() {
  var loginModal = document.getElementById("login-modal");
  loginModal.style.display = "none";
  cardEl.style.display = "block";
}
function openRegisterModal() {
  var registerModal = document.getElementById("register-modal");
  var loginModal = document.getElementById("login-modal");
  registerModal.style.display = "block";
  loginModal.style.display = "none";
  cardEl.style.display = "none";
}
function closeRegisternModal() {
  var registernModal = document.getElementById("register-modal");
  registernModal.style.display = "none";
  cardEl.style.display = "block";
}
let user = JSON.parse(localStorage.getItem("user"));
if (user && user.username) {
  const userName = document.getElementById("username");
  const fullName = user?.username;

  const firstName = fullName.split(" ")[0];
  userName.innerHTML = ` ${firstName}`;
} else {
  console.log("User not found or not logged in.");
}
const handleSubmitLogin = async (e) => {
  e.preventDefault();
  const form = document.getElementById("loginForm");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  try {
    // Send POST request to the login endpoint
    const response = await fetch(
      "https://afritechbackend.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    //HANDLE RESPONSE
    const result = await response.json();
    localStorage.setItem("user", JSON.stringify(result.user));
    if (response.ok) {
      alert(result.message);
      form.reset();
      closeLoginModal();
      window.location.href = "home.html";
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.log("Error:", error);
    alert("An error occurred.Please try again sometime.");
  }
};
document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "index.html";
});
// const handleSubmitRegister = async (e) => {
//   e.preventDefault();
  
//   // Get the form and data
//   const form = document.getElementById("registerForm");
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData);

//   // Optional: Perform client-side validation
//   if (!data.username || !data.password || !data.email) {
//     alert("Please fill in all required fields.");
//     return;
//   }

//   try {
//     // Send POST request to the register endpoint
//     const response = await fetch(
//       "https://afritechbackend.onrender.com/api/auth/register",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     // Parse the response
//     const result = await response.json();

//     if (response.ok) {
//       // Success
//       alert("User created successfully");
//       form.reset();
//       openLoginModal(); // Assuming this is a function to display the login modal
//     } else {
//       // Handle server-side validation errors or other issues
//       alert(`Error: ${result.message || "Unable to register. Please try again."}`);
//     }
//   } catch (error) {
//     // Handle network or unexpected errors
//     console.error("Error:", error);
//     alert("A network error occurred. Please try again later.");
//   }
// };
// window.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("registerForm");
//   form.addEventListener("submit", handleSubmitRegister);
// });

// document.getElementById("registerForm").addEventListener("submit", async(e)=>{
//   e.preventDefault();
//   const form = document.getElementById("registerForm");
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData);
//   if (!data.username || !data.password || !data.email) {
//     alert("Please fill in all required fields.");
//     return;
//   }
//   try {
//     // Send POST request to the register endpoint
//     const response = await fetch(
//       "https://afritechbackend.onrender.com/api/auth/register",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     // Parse the response
//     const result = await response.json();

//     if (response.ok) {
//       // Success
//       alert("User created successfully");
//       form.reset();
//       openLoginModal(); // Assuming this is a function to display the login modal
//     } else {
//       // Handle server-side validation errors or other issues
//       alert(`Error: ${result.message || "Unable to register. Please try again."}`);
//     }
//   } catch (error) {
//     // Handle network or unexpected errors
//     console.error("Error:", error);
//     alert("A network error occurred. Please try again later.");
//   }
// });
