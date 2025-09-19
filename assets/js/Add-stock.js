document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("medicineForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop normal submit until validations pass
    let isValid = true;

    // Clear old errors
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Helper function to show error
    function showError(input, message) {
      const error = document.createElement("div");
      error.className = "error-message";
      error.style.color = "red";
      error.style.fontSize = "13px";
      error.textContent = message;
      input.parentNode.appendChild(error);
      isValid = false;
    }

    // Collect fields
    const medicineName = document.getElementById("medicineName");
    const category = document.getElementById("category");
    const manufacturer = document.getElementById("manufacturer");
    const manuDate = document.getElementById("manufacturingDate");
    const expDate = document.getElementById("expiryDate");
    const stockQuantity = document.getElementById("stockQuantity");
    const purchaseDate = document.getElementById("purchaseDate");
    const mrp = document.getElementById("mrp");
    const purchasePrice = document.getElementById("purchasePrice");
    const barcode = document.getElementById("barcode");
    const supplier = document.getElementById("supplier");

    // Required field validations
    if (!medicineName.value.trim()) showError(medicineName, "Medicine Name is required");
    if (!category.value.trim()) showError(category, "Category is required");
    if (!manufacturer.value.trim()) showError(manufacturer, "Manufacturer is required");
    if (!manuDate.value) showError(manuDate, "Manufacturing Date is required");
    if (!expDate.value) showError(expDate, "Expiry Date is required");
    if (!stockQuantity.value.trim()) showError(stockQuantity, "Stock Quantity is required");
    if (!purchaseDate.value) showError(purchaseDate, "Purchase Date is required");
    if (!mrp.value.trim()) showError(mrp, "MRP is required");
    if (!purchasePrice.value.trim()) showError(purchasePrice, "Purchase Price is required");
    if (!barcode.value.trim()) showError(barcode, "Barcode is required");
    if (!supplier.value.trim()) showError(supplier, "Supplier is required");

    // Date validations (only if both provided)
    if (manuDate.value && expDate.value) {
      const manufacturingDate = new Date(manuDate.value);
      const expiryDate = new Date(expDate.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); 

      if (manufacturingDate.getTime() === expiryDate.getTime()) {
        showError(expDate, "Manufacturing Date and Expiry Date cannot be the same");
      }
      if (manufacturingDate > expiryDate) {
        showError(expDate, "Manufacturing Date must be before Expiry Date");
      }
      if (expiryDate < today) {
        showError(expDate, "Expiry Date must be a future date");
      }
    }

    

    // Final check
    if (isValid) {
      alert("Form submitted successfully!");
      form.submit();
    }
  });
});
