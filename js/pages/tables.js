'use strict';
$(document).ready(function() {

    $('#example1').DataTable({
        "pageLength": 10,
        "lengthMenu": [7, 10, 25, 50]
    } );
    $('#example2').DataTable( {
        "pageLength": 10,
        "lengthMenu": [7, 10, 25, 50]
    } );
    $('#example3').DataTable( {
        "pageLength": 10,
        "lengthMenu": [7, 10, 25, 50],
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    } );
    $("#example3 tfoot select option:first-child").text('select');

    $('#sample_1').dataTable({
        "pageLength": 10,
        "lengthMenu": [7, 10, 25, 50]
    });
//--------------datatables js--------
    //automatic colimn hide
    $('#row_details').DataTable({
        "ordering": false,
        "info": false,
        "searching": false

    });
    //horizontal and vertical scroll
    $('#scroll_table').DataTable( {
        "scrollY": 400,
        "scrollX": true
    });

    //Show and hide columns
    var table = $('#show_hide_table').DataTable({
        "pageLength": 10,
        "lengthMenu": [7, 10, 25, 50]
    });

    $('button.toggle-vis').on('click', function(e) {
        e.preventDefault();

        // Get the column API object
        var column = table.column($(this).attr('data-column'));

        // Toggle the visibility
        column.visible(!column.visible());
    });


//Export table data
    $("#advanced_table3").DataTable({
        dom: "Bfrtip",
        buttons: ["copy", "csv", "print"]
    });
    $(".buttons-copy, .buttons-csv, .buttons-print").addClass("btn btn-primary");
    $(".dt-buttons").addClass("btn-group");

    $('#editable_table').DataTable({
        "pageLength": 10,
        "lengthMenu": [7, 10, 25, 50]
    } );

    //Delete row
    var table2 = $('#delete_row').DataTable();

    $('#delete_row tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');

        }
        else {
            table2.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');

        }
    });

    $('#deleteRow').click(function () {
        table2.row('.selected').remove().draw(false);
    });
    //Advanced Tables
    $('#multiple_control').DataTable({
        "dom": '<"top"iflp<"clear">>rt<"bottom"iflp<"clear">>' });



    $('#autofill').DataTable( {
        autoFill: true
    } );
    var events = $('#events');
    var table3 = $('#state_saving').DataTable( {
        keys: true,
        "searching": false
    } );

    table3.on( 'key', function ( e, datatable, key, cell, originalEvent ) {
        events.prepend( '<div>Key press: '+key+' for cell <i>'+cell.data()+'</i></div>' );
    } )
        .on( 'key-focus', function ( e, datatable, cell ) {
            events.prepend( '<div>Cell focus: <i>'+cell.data()+'</i></div>' );
        } )
        .on( 'key-blur', function ( e, datatable, cell ) {
            events.prepend( '<div>Cell blur: <i>'+cell.data()+'</i></div>' );
        } );

});

//advanced table
window.onload = function () {
    $(function () {
        var inputMapper = {
            "fname": 1,
            "lname": 2,
            "uname": 3,
            "dept": 4
        };
        var dtInstance = $("#mark_search").DataTable({
            "lengthMenu": [10, 25, 50, "ALL"],
            bLengthChange: false,
            mark: true

        });
        $("input").on("input", function () {
            var $this = $(this);
            var val = $this.val();
            var key = $this.attr("name");
            dtInstance.columns(inputMapper[key] - 1).search(val).draw();
        });
    });
};

