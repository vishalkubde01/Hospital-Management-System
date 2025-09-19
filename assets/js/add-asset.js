
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize flatpickr date pickers
    if (document.getElementById("uniqueAssetForm")) {
      flatpickr("#uniquePurchaseDate", {
        dateFormat: "Y-m-d",
        maxDate: "today",
      });

      flatpickr("#uniqueWarranty", {
        dateFormat: "Y-m-d",
        minDate: "today",
      });

      const uniqueForm = document.getElementById("uniqueAssetForm");

      uniqueForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Clear previous error messages
        document.querySelectorAll(".error-text").forEach(el => el.textContent = "");

        let isValid = true;

        const fields = [
          { id: "uniqueAssetId", name: "Asset ID" },
          { id: "uniqueModel", name: "Model" },
          { id: "uniqueSerialNumber", name: "Serial Number" },
          { id: "uniqueVendor", name: "Vendor" },
          { id: "uniqueWarranty", name: "Warranty" },
          { id: "uniqueAmcDetails", name: "AMC/CMC Details" },
          { id: "uniqueDepartment", name: "Department / Branch" },
          { id: "uniquePurchaseDate", name: "Purchase Date" },
        ];

        fields.forEach(field => {
          const input = document.getElementById(field.id);
          const errorEl = document.getElementById(field.id + "Error");

          if (!input.value.trim()) {
            errorEl.textContent = `${field.name} is required`;
            isValid = false;
          }
        });

        if (isValid) {
          alert("Asset registered successfully!");
          uniqueForm.reset();
        }
      });
    }
  });

