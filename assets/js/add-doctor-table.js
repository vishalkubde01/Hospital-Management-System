 $(document).ready(function () {
      $('#doctorTable').DataTable({
        pagingType: 'simple',
        responsive: true,
        order: [[0, 'asc']],
        columnDefs: [
          { targets: [0, 1, 2], responsivePriority: 1 },
          { targets: [3, 4, 5, 6], responsivePriority: 2 }
        ]
      });
    });