// validation.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reportForm");

  // Function to show error message under the field
  function showError(field, message) {
    field.classList.add("is-invalid");

    // Check if error span already exists
    let errorSpan = field.parentElement.querySelector(".error-message");
    if (!errorSpan) {
      errorSpan = document.createElement("span");
      errorSpan.className = "error-message";
      errorSpan.style.color = "red";
      errorSpan.style.fontSize = "12px";
      field.parentElement.appendChild(errorSpan);
    }
    errorSpan.textContent = message;
  }

  // Function to clear error
  function clearError(field) {
    field.classList.remove("is-invalid");
    let errorSpan = field.parentElement.querySelector(".error-message");
    if (errorSpan) {
      errorSpan.textContent = "";
    }
  }

  // Validate text fields with regex
  function validateText(field, regex, message) {
    if (!field.value.trim() || !regex.test(field.value.trim())) {
      showError(field, message);
      return false;
    }
    clearError(field);
    return true;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submit until valid
    let isValid = true;

    // Report ID
    const reportID = document.getElementById("reportID");
    if (!validateText(reportID, /^[A-Za-z0-9\-]+$/, "Report ID is required (letters, numbers, or -)")) {
      isValid = false;
    }

    // Patient ID
    const patientID = document.getElementById("patientID");
    if (!validateText(patientID, /^[A-Za-z0-9\-]+$/, "Patient ID is required (letters, numbers, or -)")) {
      isValid = false;
    }

    // Radiologist ID
    const radiologistID = document.getElementById("radiologistID");
    if (!validateText(radiologistID, /^[A-Za-z0-9\-]+$/, "Radiologist ID is required (letters, numbers, or -)")) {
      isValid = false;
    }

    // Imaging Type
    const imagingType = document.getElementById("imagingType");
    if (!imagingType.value) {
      showError(imagingType, "Imaging Type is required");
      isValid = false;
    } else {
      clearError(imagingType);
    }

    // Body Part
    const bodyPart = document.getElementById("bodyPart");
    if (!validateText(bodyPart, /^[A-Za-z\s]+$/, "Body Part is required (letters only)")) {
      isValid = false;
    }

    // Scan Date
    const scanDate = document.getElementById("scanDate");
    if (!scanDate.value) {
      showError(scanDate, "Scan Date is required");
      isValid = false;
    } else {
      clearError(scanDate);
    }

    // Report Date
    const reportDate = document.getElementById("reportDate");
    if (!reportDate.value) {
      showError(reportDate, "Report Date is required");
      isValid = false;
    } else {
      clearError(reportDate);
    }

    // Findings
    const findings = document.getElementById("findings");
    if (!findings.value.trim() || findings.value.trim().length < 10) {
      showError(findings, "Findings must be at least 10 characters");
      isValid = false;
    } else {
      clearError(findings);
    }

    // Report Status
    const reportStatus = document.getElementById("reportStatus");
    if (!reportStatus.value) {
      showError(reportStatus, "Report Status is required");
      isValid = false;
    } else {
      clearError(reportStatus);
    }

    // Submit if valid
    if (isValid) {
      form.submit();
    }
  });
});
