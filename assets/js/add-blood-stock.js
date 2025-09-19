 document.addEventListener("DOMContentLoaded", function () {
    const medicineForm = document.getElementById("medicineForm");

    if (medicineForm) {
      medicineForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;

        // Clear previous errors
        document.querySelectorAll(".record-error").forEach(el => el.textContent = "");

        const fields = [
          { id: "medicineId", name: "Medicine ID" },
          { id: "medicineName", name: "Medicine Name" },
          { id: "category", name: "Category" },
          { id: "batchNo", name: "Batch No." },
          { id: "manufacturer", name: "Manufacturer" },
          { id: "expiryDate", name: "Expiry Date" },
          { id: "stockQty", name: "Stock Quantity" },
          { id: "barcode", name: "Barcode" }
        ];

        fields.forEach(field => {
          const input = document.getElementById(field.id);
          const errorEl = document.getElementById(field.id + "Error");

          if (!input || !errorEl) return;

          const value = input.value.trim();

          if (value === "") {
            errorEl.textContent = `${field.name} is required`;
            valid = false;
          } else if (field.id === "stockQty") {
            if (isNaN(value) || !Number.isInteger(Number(value)) || Number(value) <= 0) {
              errorEl.textContent = "Enter a valid stock quantity (whole number only)";
              valid = false;
            }
          }
        });

        if (valid) {
          alert("Medicine stock record submitted successfully!");
          medicineForm.reset();
        }
      });
    }
  });