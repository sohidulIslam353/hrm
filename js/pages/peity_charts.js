"use strict";
$(document).ready(function () {
    $(".pie_chart").peity("pie");
    $('.donut_chart').peity('donut');
    $(".line_chart").peity("line");
    $(".bar_chart").peity("bar");
    var updatingChart = $(".updating_line_chart").peity("line");

    setInterval(function() {
        var random = Math.round(Math.random() * 10);
        var values = updatingChart.text().split(",");
        values.shift();
        values.push(random);
        updatingChart.text(values.join(",")).change()
    }, 1000);

    $('.pie_chart_event select').change(function() {
        var text = $(this).val() + '/' + 5;
        $(this).closest('.pie_chart_event').find(".pie_event").text(text).change();
        $('#notice').text('Chart updated: ' + text)
    }).change();
    $('.pie_event').peity('pie');
    $(".peity").css("margin-right","15px");

});
