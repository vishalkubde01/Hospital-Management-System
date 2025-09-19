document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("financeForm");

  // Invoice Number → only numbers
  const invoiceNumber = document.getElementById("invoiceNumber");
  invoiceNumber.addEventListener("input", () => {
    invoiceNumber.value = invoiceNumber.value.replace(/[^0-9]/g, "");
  });

  // Patient Details → allow letters, numbers, spaces
  const patientDetails = document.getElementById("patientDetails");
  patientDetails.addEventListener("input", () => {
    patientDetails.value = patientDetails.value.replace(/[^A-Za-z0-9\s]/g, "");
  });

  // Doctor / Department → only text
  const doctorDept = document.getElementById("doctorDept");
  doctorDept.addEventListener("input", () => {
    doctorDept.value = doctorDept.value.replace(/[^A-Za-z\s]/g, "");
  });

  // Allow only numbers in numeric fields
  const numberInputs = ["charges", "discounts", "taxes", "totalAmount"];
  numberInputs.forEach(id => {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9]/g, "");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Invoice Number
    const invoiceNumberError = document.getElementById("invoiceNumberError");
    if (invoiceNumber.value.trim() === "") {
      invoiceNumberError.style.display = "block";
      isValid = false;
    } else {
      invoiceNumberError.style.display = "none";
    }

    // Patient Details
    const patientDetailsError = document.getElementById("patientDetailsError");
    if (patientDetails.value.trim() === "") {
      patientDetailsError.style.display = "block";
      isValid = false;
    } else {
      patientDetailsError.style.display = "none";
    }

    // Doctor / Department
    const doctorDeptError = document.getElementById("doctorDeptError");
    if (doctorDept.value.trim() === "") {
      doctorDeptError.style.display = "block";
      isValid = false;
    } else {
      doctorDeptError.style.display = "none";
    }

    // Date of Service
    const serviceDate = document.getElementById("serviceDate");
    const serviceDateError = document.getElementById("serviceDateError");
    if (serviceDate.value === "") {
      serviceDateError.style.display = "block";
      isValid = false;
    } else {
      serviceDateError.style.display = "none";
    }

    // Charges
    const charges = document.getElementById("charges");
    const chargesError = document.getElementById("chargesError");
    if (charges.value === "" || parseFloat(charges.value) < 0) {
      chargesError.style.display = "block";
      isValid = false;
    } else {
      chargesError.style.display = "none";
    }

    // Service Description
    const serviceDescription = document.getElementById("serviceDescription");
    const serviceDescriptionError = document.getElementById("serviceDescriptionError");
    if (serviceDescription.value.trim() === "") {
      serviceDescriptionError.style.display = "block";
      isValid = false;
    } else {
      serviceDescriptionError.style.display = "none";
    }

    // ✅ Success
    if (isValid) {
      alert("Invoice added successfully!");
      form.reset();
    }
  });
});
