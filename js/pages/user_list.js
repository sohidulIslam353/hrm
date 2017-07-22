"use strict";
$(document).ready(function () {
    $('#users_table').DataTable({
        "ordering": true,
        "info": false,
        "searching": true,
        dom: "Bfrtip",
        buttons: ["copy", "csv", "print"]
    });
    $(".buttons-copy, .buttons-csv, .buttons-print").addClass("btn btn-primary");
    $(".dt-buttons").addClass("btn-group");
});