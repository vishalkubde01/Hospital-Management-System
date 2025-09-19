// Set today as min and default for appointment date
const today = new Date().toISOString().split("T")[0];
const appointmentDate = document.getElementById("appointmentDate");
appointmentDate.setAttribute("min", today);
appointmentDate.value = today;

// Allow only alphabets in specific fields
function allowOnlyAlphabets(id) {
  const input = document.getElementById(id);
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^A-Za-z ]/g, "");
  });
}
["patientName", "doctorName"].forEach(allowOnlyAlphabets);

// Add medicine row
document.getElementById("addRow").addEventListener("click", function () {
  const tableBody = document.querySelector("#medicineTable tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
          <td>
            <input type="text" class="form-control" placeholder="Medicine Name" required>
          </td>
          <td>
            <input type="text" class="form-control" placeholder="Dose" pattern="^[0-9]+$" required>
            <div class="invalid-feedback">Only numbers are allowed.</div>
          </td>
          <td>
            <input type="text" class="form-control" placeholder="Duration" pattern="^[0-9]+$" required>
            <div class="invalid-feedback">Only numbers are allowed.</div>
          </td>
        `;
  tableBody.appendChild(row);
});

// Bootstrap validation
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
