// Restrict past dates
const dateInput = document.getElementById("appointmentDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

document.addEventListener("DOMContentLoaded", function () {
  const patientName = document.getElementById("patientName");

  patientName.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z\s]/g, "");
  });
});
