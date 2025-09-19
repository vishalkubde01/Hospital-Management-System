document.addEventListener("DOMContentLoaded", function () {
  // Birth Form
  if (document.getElementById("birthForm")) {
    flatpickr("#time", {
      enableTime: true,
      noCalendar: true,
      enableSeconds: true,
      dateFormat: "h:i:S K",
      time_24hr: false,
    });

    const form = document.getElementById("birthForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
      let valid = true;

      const fields = [
        {id: "reportId", name: "Report ID"},
        {id: "patientId", name: "Patient ID"},
        {id: "patientName", name: "Patient Name"},
        {id: "childName", name: "Child Name"},
        {id: "gender", name: "Gender"},
        {id: "date", name: "Date"},
        {id: "time", name: "Time"},
        {id: "doctorName", name: "Doctor / Registrar Name"},
        {id: "birthWeight", name: "Birth Weight"},
        {id: "placeOfBirth", name: "Place of Birth"},
        {id: "fatherName", name: "Father's Name"},
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.id + "Error");
        if (!input.value.trim()) {
          errorEl.textContent = field.name + " is required";
          valid = false;
        } else if (field.id === "birthWeight" && (isNaN(input.value) || Number(input.value) <= 0)) {
          errorEl.textContent = "Please enter a valid Birth Weight";
          valid = false;
        }
      });

      if (valid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  }
});
