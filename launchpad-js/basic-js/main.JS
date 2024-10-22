document.getElementById("contactForm").addEventListener("submit", function(event) {
   event.preventDefault(); // Prevent form submission
   const feedback = document.getElementById("formFeedback");
   feedback.textContent = "Form submitted successfully!"; // Simple feedback message
});
