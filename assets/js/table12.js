$(document).ready(function () {
  $("#doctorTable").DataTable({
    pagingType: "simple",
    responsive: {
      details: {
        renderer: function (api, rowIdx, columns) {
          var data = $.map(columns, function (col) {
            return col.hidden
              ? "<tr><td>" + col.title + "</td><td>" + col.data + "</td></tr>"
              : "";
          }).join("");

          return data
            ? $('<table class="table table-sm table-borderless"/>').append(data)
            : false;
        },
      },
    },
    columnDefs: [
      {
        targets: [0, 1, 2, 3, 8, 9],
        responsivePriority: 1,
      },
      {
        targets: [4, 5, 6, 7],
        responsivePriority: 2,
      },
    ],
    order: [[0, "asc"]],
  });
});
