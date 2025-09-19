document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("billingForm");

  // Validation rules
  const fields = [
    { id: "billId", message: "Bill ID is required", pattern: /^[0-9]+$/, invalidMsg: "Bill ID must be numbers only" },
    { id: "patientId", message: "Patient ID is required", pattern: /^[0-9]+$/, invalidMsg: "Patient ID must be numbers only" },
    { id: "invoiceId", message: "", pattern: /^[0-9]*$/, invalidMsg: "Invoice ID must be numbers only (if entered)" },
    { id: "medicinesList", message: "Medicines List is required", pattern: /^[A-Za-z\s]+$/, invalidMsg: "Medicines List must contain only text" },
    { id: "totalAmt", message: "Total Amount is required" },
    { id: "finalAmt", message: "Final Amount is required" }
  ];

  // Create error spans under inputs
  fields.forEach(f => {
    const input = document.getElementById(f.id);
    if (input) {
      let span = document.createElement("span");
      span.className = "error-message";
      span.style.color = "red";
      span.style.fontSize = "13px";
      span.style.display = "none";
      input.parentNode.appendChild(span);
    }
  });

  // Show/hide errors
  function showError(input, message) {
    const span = input.parentNode.querySelector(".error-message");
    if (span) {
      span.innerText = message;
      span.style.display = message ? "block" : "none";
    }
    if (message) {
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
    }
  }

  // Validate fields
  function validateForm() {
    let isValid = true;

    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const value = input.value.trim();

      // Required check
      if (f.message && value === "") {
        showError(input, f.message);
        isValid = false;
        return;
      }

      // Pattern check (if defined and value not empty)
      if (f.pattern && value !== "" && !f.pattern.test(value)) {
        showError(input, f.invalidMsg);
        isValid = false;
        return;
      }

      // Clear error if valid
      showError(input, "");
    });

    return isValid;
  }

  // On form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      alert("✅ Bill Saved Successfully!");
      form.reset();

      // Reset errors
      fields.forEach(f => {
        const input = document.getElementById(f.id);
        showError(input, "");
      });
    }
  });

  // Auto-calculate Final Amount
  const totalAmt = document.getElementById("totalAmt");
  const discount = document.getElementById("discount");
  const finalAmt = document.getElementById("finalAmt");

  function calculateFinal() {
    let total = parseFloat(totalAmt.value) || 0;
    let disc = parseFloat(discount.value) || 0;
    if (disc > total) disc = 0;
    finalAmt.value = (total - disc).toFixed(2);
  }

  discount.addEventListener("input", calculateFinal);
});
