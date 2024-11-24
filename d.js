document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Validate the inputs
    if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
      return;
    }
  
    // If validation passes, show a success message
    alert(`Thank you, ${name}! Your message has been sent.`);
  
    // Optionally, clear the form
    document.getElementById("contactForm").reset();
  });
  