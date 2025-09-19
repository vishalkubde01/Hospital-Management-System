$(document).ready(function () {
      $("#medicineTable").DataTable({
        pagingType: "simple",
        responsive: true,
        columnDefs: [
          { targets: [0, 1, 2], responsivePriority: 1 },
          { targets: [3, 4, 5, 6, 7, 8, 9], responsivePriority: 2 },
        ],
        order: [[0, "asc"]],
      });
    });