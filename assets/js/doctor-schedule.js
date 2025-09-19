document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("scheduleForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    clearErrors();

    const doctorId = document.getElementById("doctorId");
    const doctorName = document.getElementById("doctorName");
    const department = document.getElementById("department");
    const days = form.querySelectorAll(".checkbox-group input:checked");
    const startTime = document.getElementById("startTime");
    const endTime = document.getElementById("endTime");
    const maxPatients = document.getElementById("maxPatients");
    const fee = document.getElementById("fee");

    // Doctor ID
    if (doctorId.value.trim() === "") {
      showError(doctorId, "Doctor ID is required");
      valid = false;
    }

    // Doctor Name
    if (doctorName.value.trim() === "") {
      showError(doctorName, "Doctor Name is required");
      valid = false;
    }

    // Department
    if (department.value === "") {
      showError(department, "Please select a department");
      valid = false;
    }

    // Available Days
    if (days.length === 0) {
      const checkboxGroup = form.querySelector(".checkbox-group");
      showError(checkboxGroup, "Please select at least one day");
      valid = false;
    }

    // Start & End Time
    if (startTime.value === "") {
      showError(startTime, "Start time is required");
      valid = false;
    }
    if (endTime.value === "") {
      showError(endTime, "End time is required");
      valid = false;
    }
    if (startTime.value && endTime.value && startTime.value >= endTime.value) {
      showError(endTime, "End time must be after start time");
      valid = false;
    }

    // Max Patients
    if (maxPatients.value === "" || parseInt(maxPatients.value) <= 0) {
      showError(maxPatients, "Enter valid number of patients");
      valid = false;
    }

    // Fee
    if (fee.value === "" || parseFloat(fee.value) <= 0) {
      showError(fee, "Enter a valid fee");
      valid = false;
    }

    if (valid) {
      alert("Doctor Schedule saved successfully!");
      form.reset();
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error";
    error.innerText = message;
    input.parentNode.appendChild(error);
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach((el) => el.remove());
  }
});
