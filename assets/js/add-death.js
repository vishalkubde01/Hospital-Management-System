document.addEventListener("DOMContentLoaded", function () {
  const recordForm = document.getElementById("recordForm");

  if (recordForm) {
    // Initialize flatpickr for Time input
    flatpickr("#deathTime", {
      enableTime: true,
      noCalendar: true,
      enableSeconds: true,
      dateFormat: "h:i:S K",
      time_24hr: false,
    });

    recordForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let valid = true;

      // Clear previous error messages
      document.querySelectorAll(".record-error").forEach(el => el.textContent = "");

      const fields = [
        { id: "recordId", name: "Report ID", type: "text" },
        { id: "patientUniqueId", name: "Patient ID", type: "text" },
        { id: "patientFullName", name: "Patient Name", type: "text" },
        { id: "deathDate", name: "Date of Death", type: "date" },
        { id: "deathTime", name: "Time of Death", type: "time" },
        { id: "deathCause", name: "Cause of Death", type: "text" },
        { id: "deathPlace", name: "Place of Death", type: "text" },
        { id: "registrarName", name: "Doctor / Registrar Name", type: "text" },
        { id: "patientAge", name: "Age", type: "number" }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.id + "Error");

        if (!input || !errorEl) return;

        const value = input.value.trim();

        if (value === "") {
          errorEl.textContent = `${field.name} is required`;
          valid = false;
        } else if (field.id === "patientAge") {
          if (isNaN(value) || Number(value) <= 0) {
            errorEl.textContent = "Please enter a valid age (positive number)";
            valid = false;
          }
        }
      });

      if (valid) {
        alert("Death record submitted successfully!");
        recordForm.reset();
      }
    });
  }
});
