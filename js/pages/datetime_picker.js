"use strict";
$(document).ready(function () {
    $('#dp1').datepicker({
        format: 'dd-mm-yyyy',
        todayHighlight: true,
        autoclose: true,
        orientation:"bottom"
    });
    $('#dp2').datepicker({
        todayHighlight: true,
        autoclose: true,
        orientation:"bottom"
    });
    $("#dtBox").DateTimePicker();
    $('#dp3').datepicker({
        todayHighlight: true,
        autoclose: true,
        orientation:"bottom"
    });
    $('#dpYears').datepicker({
        todayHighlight: true,
        autoclose: true,
        orientation:"bottom"
    });
    $('#dpMonths').datepicker({
        todayHighlight: true,
        autoclose: true,
        startView: "months",
        minViewMode: "months",
        orientation:"bottom"
    });

    // Date range picker
    $('#date_range').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $('#date_range').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        return false;
    });

    $('#date_range').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        return false;
    });


    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    cb(moment().subtract(29, 'days'), moment());

    $('#reportrange').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment()],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);


    $('#reservation').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('#reservation').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        return false;
    });

    $('#reservation').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        return false;
    });
    // Time picker
    $('#timepicker_default').timepicker();
    $('#basic_time_picker').timepicker();
    $('#setTimeExample').timepicker();
    $('#setTimeButton').on('click', function (){
        $('#setTimeExample').timepicker('setTime', new Date());
        $('#setTimeButton').css('color','#fff');
    });
    $(".timepicker-orient-top table a").find("i").removeClass("icon-chevron-up").addClass("ti-time");
    // End of time picker
    // Clockpicker
    $('.clockpicker1').clockpicker({
        donetext: 'Done',
        placement: 'top'
    });
    $('.clockpicker2').clockpicker();
    var input = $('#single_input1').clockpicker({
        align: 'left',
        autoclose: true,
        'default': 'now'
    });
    $('#single_input2').clockpicker({
        donetext: 'Done'
    });
    $('.clockpicker2').clockpicker();
    var input = $('#single_input1').clockpicker({
        align: 'left',
        autoclose: true,
        'default': 'now'
    });
    $('#check_minutes').on("click",function(e){
        e.stopPropagation();
        input.clockpicker('show')
            .clockpicker('toggleView', 'minutes');
        $('#check_minutes').css('color','#fff');
    });
//---------date dropper
    $('.date_dropper').dateDropper();

    $(".pick-arw-r i").removeClass("pick-i-r").addClass("ti-angle-right");
    $(".pick-arw-l i").removeClass("pick-i-l").addClass("ti-angle-left");
    $(".dd-s a i").removeClass(".dd-icon-check").addClass(".ti-check");
//--------------TimeDropper
    $( ".time_dropper" ).timeDropper();
    $('.time_dropper2').timeDropper({
            mousewheel: true,
            meridians: true,
            init_animation: 'dropdown',
            setCurrentTime: false
        }
    );


//        Color picker
    $('#cp1').colorpicker({
        format: 'hex'
    });
    $('#cp-2').colorpicker({
        format:'rgba',
        align:'top'
    });
    $('#cp3').colorpicker();
    $('#cp4').colorpicker().on('changeColor', function(ev) {
        $('#colorPickerBlock').css('background-color', ev.color.toHex());
        return false;
    });
    $("#cp4").on("click",function () {
        $("#cp4").css('color','#fff');
        return false;
    });
//        End of color picker

});