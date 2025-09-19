$(document).ready(function () {
  $("#doctorTable").DataTable({
    pagingType: "simple",
    responsive: {
      details: {
        type: "column",
        target: 0, // SR NO column becomes toggle
      },
    },
    columnDefs: [
      { className: "control", orderable: false, targets: 0 }, // control on SR NO
      { responsivePriority: 1, targets: 0 }, // SR NO always visible
      { responsivePriority: 2, targets: 1 }, // Patient Name
      { responsivePriority: 3, targets: -1 }, // Action always visible
    ],
    order: [[0, "asc"]],
  });
});
