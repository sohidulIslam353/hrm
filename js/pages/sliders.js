'use strict';

$(document).ready(function() {
//    bootstrap sliders js
// Bootstrap slider
    $('#ex1Slider').slider({
        formater: function (value) {
            return 'Current value: ' + value;
        }
    });

    /* Example 2 */
    $("#bootstrap_slider2").slider({});

    /* Example 3 */
    var RGBChange = function () {
        $('#RGB_color').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
    };

    var r = $('#red').slider()
        .on('slide', RGBChange)
        .data('slider');
    var g = $('#green').slider()
        .on('slide', RGBChange)
        .data('slider');
    var b = $('#blue').slider()
        .on('slide', RGBChange)
        .data('slider');
    /* Example 5 */
    $("#bootstrap_slider5").slider();
    $("#destroyEx5Slider").on("click", function () {
        $("#bootstrap_slider5").slider('destroy');
    });

    /* Example 6 */
    $("#bootstrap_slider6").slider();
    $("#bootstrap_slider6").on('slide', function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    /* Example 7 */
    $("#bootstrap_slider7").slider();
    $("#ex7-enabled").on("click", function () {
        if (this.checked) {
            $("#bootstrap_slider7").slider("enable");
            $("#enable_text").text('Disable');
            $("#slider_enabled").text('Enabled Slider');
        } else {
            $("#bootstrap_slider7").slider("disable");
            $("#enable_text").text('Enable');
            $("#slider_enabled").text('Disabled Slider');
        }
    });

    /* Example 8 */
    $("#bootstrap_slider8").slider({
        tooltip: 'always'
    });

    /* Example 9 */
    $("#bootstrap_slider9").slider({
        step: 0.01,
        value: 8.115
    });
    $("#bootstrap_slider10").slider();
    $(".slider").on("mouseenter mouseleave", function () {
        $(this).find(".tooltip.tooltip-main").toggleClass("show").removeClass("in");
    });
//end bootstrap slider js

//    icon slider1
    $("#slider1").ionRangeSlider({
        type: "single",
        min: 0,
        max: 100,
        from: 50,
        keyboard: true
    });
//    icon slider2
    $("#slider2").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 5000,
        from: 2000,
        to: 4000,
        step: 100
    });
//    icon slider3
    $("#slider3").ionRangeSlider({
        type: "double",
        values: [
            "one", "two", "three",
            "four", "five", "six",
            "seven", "eight", "nine", "ten"
        ]
    });
//    icon slider4
    var $range = $("#slider4"),
        $result1 = $("#result_4");

    var track = function () {
        var $this = $(this),
            value = $this.prop("value");

        $result1.html("Value: " + value);
    };

    $range.ionRangeSlider({
        type: "single",
        min: 0,
        max: 100,
        from: 50
    });

    $range.on("change", track);

//    icon slider5
    var $range = $("#slider5"),
        $result2 = $("#result_5");
    var track = function () {
        var $this = $(this),
            value = $this.prop("value").split(";");

        $result2.html(value[0] + " - " + value[1]);
    };
    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        to: 80
    });
    $range.on("change", track);

//    icon slider6

    var $range = $("#range_52"),
        $create_btn = $(".js-create-52"),
        $destroy_btn = $(".js-destroy-52"),
        $update_btn = $(".js-update-52"),
        slider;
    var create = function () {
        $range.ionRangeSlider({
            type: "double",
            min: 0,
            max: 1000,
            grid: true
        });
        slider = $range.data("ionRangeSlider");
    };
    $create_btn.on("click", function () {
        create();
    });
    $destroy_btn.on("click", function () {
        slider && slider.destroy();
    });
    $update_btn.on("click", function () {
        slider && slider.update({
            from: 100,
            to: 900
        });
    });
});