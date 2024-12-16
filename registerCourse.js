const handleSubmitRegisterCourse = async (e) => {
    e.preventDefault();
    const form = document.getElementById("registerCourseForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); 
    try {
      // Send POST request to the register course endpoint
      const response = await fetch("https://afritechbackend.onrender.com/api/courseRegistration/registerCourse/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
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