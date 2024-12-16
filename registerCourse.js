function openLoginModal() {
  var loginModal = document.getElementById("login-modal");
  var registerModal = document.getElementById("register-modal");
  loginModal.style.display = "block";
  registerModal.style.display = "none";
  cardEl.style.display = "none";
}
const handleSubmitRegisterCourse = async (e) => {
  e.preventDefault();
  const form = document.getElementById("registerCourseForm");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  try {
    // Send POST request to the register course endpoint
    const response = await fetch(
      "https://afritechbackend.onrender.com/api/courseRegistration/registerCourse/",
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
    if (response.ok) {
      alert(result.message);
      window.location.href = "thanks.html";
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    console.log("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};
const handleSubmitContact = async (e) => {
  e.preventDefault();
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (!data.name || !data.email || !data.message) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    const response = await fetch(
      "https://afritechbackend.onrender.com/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      form.reset();
      window.location.href = "home.html";
    } else {
      alert(`Error: ${result.message}`);
    }
  } catch (error) {
    throw new Error(error);
  }
};
const handleSubmitRegister = async (e) => {
  e.preventDefault();

  // Get the form and data
  const form = document.getElementById("registerForm");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Optional: Perform client-side validation
  if (!data.username || !data.password || !data.email) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    // Send POST request to the register endpoint
    const response = await fetch(
      "https://afritechbackend.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // Parse the response
    const result = await response.json();

    if (response.ok) {
      // Success
      alert("User created successfully");
      form.reset();
      openLoginModal(); // Assuming this is a function to display the login modal
    } else {
      // Handle server-side validation errors or other issues
      alert(
        `Error: ${result.message || "Unable to register. Please try again."}`
      );
    }
  } catch (error) {
    // Handle network or unexpected errors
    console.error("Error:", error);
    alert("A network error occurred. Please try again later.");
  }
};
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", handleSubmitRegister);

  //   const contactForm = document.getElementById("contactForm");
  // contactForm.addEventListener("submit", handleSubmitContact);
});
