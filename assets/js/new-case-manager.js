function validateField(field) {
  let value = field.value.trim();
  let errorElement = field.parentElement.querySelector("p");
  errorElement.textContent = ""; // clear old error

  switch (field.id) {
    // case "caseId":
    //   if (!/^[0-9]+$/.test(value)) {
    //     errorElement.textContent = "Case ID must be numbers only.";
    //   }
    //   break;

    // case "patientId":
    //   if (!/^[0-9]+$/.test(value)) {
    //     errorElement.textContent = "Patient ID must be numbers only.";
    //   }
    //   break;

    case "patientName":
      if (!/^[A-Za-z\s]+$/.test(value)) {
        errorElement.textContent = "Name must contain only letters.";
      }
      break;

    // case "doctorId":
    //   if (!/^[0-9]+$/.test(value)) {
    //     errorElement.textContent = "Doctor ID must be numbers only.";
    //   }
    //   break;

    case "caseDescription":
      if (value === "" || value.length > 100) {
        errorElement.textContent =
          "Case Description required (max 100 characters).";
      }
      break;

    case "diagnosis":
      if (value === "" || value.length > 100) {
        errorElement.textContent = "Diagnosis required (max 100 characters).";
      }
      break;

    case "prescriptions":
      if (value === "" || value.length > 100) {
        errorElement.textContent =
          "Prescriptions required (max 100 characters).";
      }
      break;

    case "admissionDate":
      if (value === "") {
        errorElement.textContent = "Please select admission date.";
      }
      break;
  }
}

document.querySelectorAll("#caseForm input").forEach((input) => {
  input.addEventListener("blur", function () {
    validateField(this);
  });
});

document.getElementById("caseForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll("#caseForm input").forEach((input) => {
    validateField(input);
    let error = input.parentElement.querySelector("p").textContent;
    if (error !== "") valid = false;
  });

  if (valid) {
    alert(
      (caseId = document.getElementById("caseId").value),
      (patientId = document.getElementById("patientId").value),
      (patientName = document.getElementById("patientName").value),
      (doctorId = document.getElementById("doctorId").value),
      (caseDescription = document.getElementById("caseDescription").value),
      (diagnosis = document.getElementById("diagnosis").value),
      (prescriptions = document.getElementById("prescriptions").value),
      (admissionDate = document.getElementById("admissionDate").value)
    );

    this.submit();

    //    caseId = document.getElementById("caseId").value;
    //    patientId = document.getElementById("patientId").value;
    //    patientName = document.getElementById("patientName").value;
    //    doctorId = document.getElementById("doctorId").value;
    //    caseDescription = document.getElementById("caseDescription").value;
    //    diagnosis = document.getElementById("diagnosis").value;
    //    prescriptions = document.getElementById("prescriptions").value;
    //    admissionDate = document.getElementById("admissionDate").value;
    //   console.log(Data);
  }
});

// function submit() {
//   var caseId = document.getElementById("caseId").value;
//   var patientId = document.getElementById("patientId").value;
//   var patientName = document.getElementById("patientName").value;
//   var doctorId = document.getElementById("doctorId").value;
//   var caseDescription = document.getElementById("caseDescription").value;
//   var diagnosis = document.getElementById("diagnosis").value;
//   var prescriptions = document.getElementById("prescriptions").value;
//   var admissionDate = document.getElementById("admissionDate").value;
// //   console.log(Data);
// }

var Data = {};

function saveForm(event) {
  event.preventDefault(); // Prevent page reload

  // Get form elements
  var caseId = document.getElementById("caseId").value;
  var patientId = document.getElementById("patientId").value;
  var patientName = document.getElementById("patientName").value;
  var doctorId = document.getElementById("doctorId").value;
  var caseDescription = document.getElementById("caseDescription").value;
  var diagnosis = document.getElementById("diagnosis").value;
  var prescriptions = document.getElementById("prescriptions").value;
  var admissionDate = document.getElementById("admissionDate").value;

  // Save into the object
  Data = {
    caseId: caseId,
    patientId: patientId,
    patientName: patientName,
    doctorId: doctorId,
    caseDescription: caseDescription,
    diagnosis: diagnosis,
    prescriptions: prescriptions,
    admissionDate: admissionDate,
  };

  // Show in console (for checking)
  console.log("Saved Data:", Data);
  alert("Form data saved!");
}

// new-case-manager.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("caseForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    // Collect all form data into an object
    const caseData = {
      caseId: document.getElementById("caseId").value,
      patientId: document.getElementById("patientId").value,
      patientName: document.getElementById("patientName").value,
      doctorId: document.getElementById("doctorId").value,
      caseDescription: document.getElementById("caseDescription").value,
      diagnosis: document.getElementById("diagnosis").value,
      prescriptions: document.getElementById("prescriptions").value,
      admissionDate: document.getElementById("admissionDate").value,
    };

    // Show the object in console (for testing)
    console.log("Saved Case Data:", caseData);

    // Example: show success message
    // alert("Case data saved successfully!");
  });
});
