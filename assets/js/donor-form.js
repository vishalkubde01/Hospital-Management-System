// donor-form.js

document.addEventListener("DOMContentLoaded", () => {
  const donorForm = document.getElementById("donorForm");

  donorForm.addEventListener("submit", function (e) {
    e.preventDefault(); // stop form from submitting

    // Clear old errors
    const oldErrors = donorForm.querySelectorAll(".error");
    oldErrors.forEach(err => err.remove());

    let isValid = true;

    // --- Get form values ---
    const donorId = document.getElementById("donorId").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value.trim();
    const bloodGroup = document.getElementById("bloodGroup").value;
    const contactNo = document.getElementById("contactNo").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();

    // --- Validation rules ---
    if (!donorId) showError("donorId", "Donor ID is required");
    if (!fullName) showError("fullName", "Full Name is required");
    if (!gender) showError("gender", "Please select a gender");
    if (!dob) showError("dob", "Date of Birth is required");
    if (!bloodGroup) showError("bloodGroup", "Please select a blood group");
    if (!contactNo || contactNo.length < 10) showError("contactNo", "Enter a valid contact number");
    if (!email || !validateEmail(email)) showError("email", "Enter a valid email");
    if (!address) showError("address", "Address is required");

    // Check if errors are present
    if (donorForm.querySelectorAll(".error").length > 0) {
      isValid = false;
    }

    // --- If valid ---
    if (isValid) {
      alert("✅ Donor added successfully!");
      donorForm.reset();
    }
  });

  // Reset clears errors too
  donorForm.addEventListener("reset", () => {
    const oldErrors = donorForm.querySelectorAll(".error");
    oldErrors.forEach(err => err.remove());
  });

  // --- Helper: show error ---
  function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    if (!inputField) return;

    const error = document.createElement("div");
    error.className = "error";
    error.innerText = message;
    inputField.parentNode.appendChild(error);
  }

  // --- Helper: validate email ---
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
