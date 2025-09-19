$(document).ready(function () {
  $("#appointmentTable").DataTable({
    pagingType: "simple",
    responsive: {
      details: {
        renderer: function (api, rowIdx, columns) {
          var data = $.map(columns, function (col, i) {
            return col.hidden
              ? "<tr><td><strong>" +
                  col.title +
                  "</strong></td><td>" +
                  col.data +
                  "</td></tr>"
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
        targets: [0, 1, 2, 3, 4, 8],
        responsivePriority: 1,
      },
      {
        targets: [5, 6, 7],
        responsivePriority: 2,
      },
    ],
    order: [[0, "asc"]],
  });
});
