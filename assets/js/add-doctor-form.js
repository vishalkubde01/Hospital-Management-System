document.getElementById("doctorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  function setError(id, message) {
    const field = document.getElementById(id);
    const errorDiv = field.parentElement.querySelector(".error-message");
    errorDiv.textContent = message;
    isValid = false;
  }

  function clearError(id) {
    const field = document.getElementById(id);
    const errorDiv = field.parentElement.querySelector(".error-message");
    errorDiv.textContent = "";
  }

  // fields
  const doctorname = document.getElementById("doctorname");
  const license = document.getElementById("licensenumber");
  const qualification = document.getElementById("qualification");
  const gender = document.getElementById("gender");
  const email = document.getElementById("email");
  const contactNo = document.getElementById("contactNo");
  const specialization = document.getElementById("specialization");
  const experience = document.getElementById("experience");
  const department = document.getElementById("department");
  const status = document.getElementById("status");

  // validations
  doctorname.value.trim() === "" ? setError("doctorname", "Doctor’s Name is required") : clearError("doctorname");
  license.value.trim() === "" ? setError("licensenumber", "License Number is required") : clearError("licensenumber");
  qualification.value.trim() === "" ? setError("qualification", "Qualification is required") : clearError("qualification");
  gender.value === "" ? setError("gender", "Gender is required") : clearError("gender");

  // email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    setError("email", "Enter a valid Email");
  } else {
    clearError("email");
  }

  // contact number validation (10 digits)
  if (!/^\d{10}$/.test(contactNo.value.trim())) {
    setError("contactNo", "Enter a valid 10-digit Contact No.");
  } else {
    clearError("contactNo");
  }

  specialization.value.trim() === "" ? setError("specialization", "Specialization is required") : clearError("specialization");
  experience.value.trim() === "" || isNaN(experience.value) ? setError("experience", "Valid Experience is required") : clearError("experience");
  department.value === "" ? setError("department", "Department is required") : clearError("department");
  status.value === "" ? setError("status", "Status is required") : clearError("status");

  if (isValid) {
    alert("Form submitted successfully!");
    this.submit();
  }
});
