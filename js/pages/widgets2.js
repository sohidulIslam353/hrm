"use strict";
$(document).ready(function () {
    var options = {
        useEasing: true,
        useGrouping: true,
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    new CountUp("views_1", 0, 35, 0, 2.5, options).start();
    new CountUp("views_2", 0, 200, 0, 2.5, options).start();
    new CountUp("views_3", 0, 750, 0, 2.5, options).start();
    new CountUp("views_4", 0, 5000, 0, 2.5, options).start();
    new CountUp("income1", 0, 150, 0, 2.5, options).start();
    new CountUp("income2", 0, 1200, 0, 2.5, options).start();
    new CountUp("income3", 0, 5400, 0, 2.5, options).start();
    new CountUp("income4", 0, 9000, 0, 2.5, options).start();


    function sparkline_resize() {
        var barParentdiv1 = $('.widget2_bar1').closest('div');
        var barCount1 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212, 209, 210, 209, 210, 210, 211, 212, 210];
        var barSpacing1 = 2;
        $(".widget2_bar1").sparkline(barCount1, {
            type: 'bar',
            barWidth: (barParentdiv1.width() - (barCount1.length * barSpacing1)) / barCount1.length,
            height: '70',
            barSpacing: barSpacing1,
            barColor: '#329cff',
            tooltipSuffix: 'Views'
        });

        $(".widget2_bar2").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
            type: 'line',
            width: '100%',
            height: '70',
            lineColor: '#5aca82',
            fillColor: '#C1F0F2',
            tooltipSuffix: 'Views'
        });

        $(".widget2_bar3").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
            type: 'line',
            width: '100%',
            height: '70',
            lineColor: '#fcb410',
            fillColor: '#fff',
            tooltipSuffix: 'Views'
        });

        var barParentdiv4 = $('.widget2_bar4').closest('div');
        var barCount4 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212, 209, 210, 209, 210, 210, 211, 212, 210];
        var barSpacing4 = 2;
        $(".widget2_bar4").sparkline(barCount4, {
            type: 'bar',
            barWidth: (barParentdiv4.width() - (barCount4.length * barSpacing4)) / barCount4.length,
            height: '70',
            barSpacing: barSpacing4,
            barColor: '#937eff',
            tooltipSuffix: 'Views'
        });

        $(".widget2_chart5").sparkline([209, 215,212,215,210,212,210,215,210,212,214,216,218], {
            type: 'line',
            width: '100%',
            height: '95',
            lineColor: '#329cff',
            fillColor: '#329cff',
            tooltipSuffix: 'Visitors'
        });

//       ===============================     sales section=================================
        var barParentdiv21 = $('#sales_widget21').closest('div');
        var barCount21 = [210, 212, 209, 213, 211, 210, 212,213,214];
        var barSpacing21 = 2;
        $("#sales_widget21").sparkline(barCount21, {
            type: 'bar',
            barWidth: (barParentdiv21.width() - (barCount21.length * barSpacing21)) / barCount21.length,
            height: '30',
            barSpacing: barSpacing21,
            barColor: '#329cff',
            tooltipSuffix: 'Sales'
        });

        var barParentdiv22 = $('#sales_widget22').closest('div');
        var barCount22 = [215,214,213,212,211,210,209,208,207];
        var barSpacing22 = 2;
        $("#sales_widget22").sparkline(barCount22, {
            type: 'bar',
            barWidth: (barParentdiv22.width() - (barCount22.length * barSpacing22)) / barCount22.length,
            height: '30',
            barSpacing: barSpacing22,
            barColor: '#937eff',
            tooltipSuffix: 'Users'
        });

        var barParentdiv23 = $('#sales_widget23').closest('div');
        var barCount23 = [207,208,209,210,211,212,213,214,215];
        var barSpacing23 = 2;
        $("#sales_widget23").sparkline(barCount23, {
            type: 'bar',
            barWidth: (barParentdiv23.width() - (barCount23.length * barSpacing23)) / barCount23.length,
            height: '30',
            barSpacing: barSpacing23,
            barColor: '#fcb410',
            tooltipSuffix: 'Likes'
        });

        var barParentdiv24 = $('#sales_widget24').closest('div');
        var barCount24 = [210, 212, 209, 213, 211, 210, 212,213,214];
        var barSpacing24 = 2;
        $("#sales_widget24").sparkline(barCount24, {
            type: 'bar',
            barWidth: (barParentdiv24.width() - (barCount24.length * barSpacing24)) / barCount24.length,
            height: '30',
            barSpacing: barSpacing24,
            barColor: '#5aca85',
            tooltipSuffix: 'Views'
        });
//       ==============================     End of sales section===========================
    }
    sparkline_resize();


//       ================================     chart6=====================================
    var morris=  Morris.Area({
        element: 'widget2_chart6',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#fcb410','#329cff'],
        resize:true
    });
//       ============================     End of vhart6====================================

//      ===================================  circlifull==================================
    $("#circliful1").circliful({
        animation: 1,
        animationStep: 6,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 1,
        percent: 80,
        foregroundColor: '#329cff',
        iconColor: '#329cff',
        icon: 'f07a',
        iconSize: '40',
        iconPosition: 'middle'
    });
    $("#circliful2").circliful({
        animation: 1,
        animationStep: 6,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 1,
        percent: 60,
        foregroundColor: '#937eff',
        iconColor: '#937eff',
        icon: 'f0c0',
        iconSize: '40',
        iconPosition: 'middle'
    });
    $("#circliful3").circliful({
        animation: 1,
        animationStep: 6,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 1,
        percent: 75,
        foregroundColor: '#fcb410',
        iconColor: '#fcb410',
        icon: 'f164',
        iconSize: '40',
        iconPosition: 'middle'
    });
    $("#circliful4").circliful({
        animation: 1,
        animationStep: 6,
        foregroundBorderWidth: 4,
        backgroundBorderWidth: 1,
        percent: 90,
        foregroundColor: '#5aca82',
        iconColor: '#5aca82',
        icon: 'f06e',
        iconSize: '40',
        iconPosition: 'middle'
    });
//      =============================  End of circliful=====================================

    $('#nt_example1').newsTicker({
        direction: 'down',
        row_height: 90,
        max_rows: 3,
        duration: 2000
    });
    // ========================to do list==============

    $('body').on('click', '.border_color', function() {
        $('#btn_color').removeClass('btn-secondary btn-danger btn-primary btn-info btn-mint btn-success btn-purple').addClass($(this).data('color'));
        $('#btn_color').data('badge', $(this).data('badge'));
        $('#btn_color').css("color", "#fff");
        return false;
    });
    $('[data-toggle="popover"]').popover({
        html: true,
        placement: 'right',
        content: function() {
            return $($(this).data('contentwrapper')).html();
        }
    });
    $(".border_danger").on('click',function() {
        $(".todo_primarybadge").addClass('border_danger')
    });
    $("form#main_input_box").submit(function(event) {
        event.preventDefault();
        var deleteButton = " <a href='' class='tododelete redcolor'><span class='ti-trash'></span></a>";
        var striks = " <span class='dividor'>|</span> ";
        var editButton = " <a href='#' class='todoedit'><span class='ti-pencil'></span></a>";
        var checkBox = '<label class="custom-control custom-checkbox checkbox_hide"> ' +
            '<input type="checkbox" class="custom-control-input striked large"> ' +
            '<span class="custom-control-indicator"></span> </label>';
        var twoButtons = "<div class='col-3 showbtns todoitembtns'>" + editButton + striks + deleteButton + "</div>";
        var badgeClass = $('#btn_color').data('badge');
        $(".list_of_items").prepend("<div class='todolist_list showactions'>" + "<div class='row'><div class='col-9 nopad custom_textbox1'> <div class='todo_badge " + badgeClass + "'> </div> <div class='todoitemcheck'>" + checkBox + "</div>" + "<div class='todotext todoitem'>" + $("#custom_textbox").val() + "</div> </div>" +   twoButtons + "</div><span class='seperator'></span>");
        $("#custom_textbox").val('');
        $('#btn_color').css("color", "#fff");
        return false;
    });
    $(".todo_section").on('click','.tododelete', function(e) {
        e.preventDefault();
        $(this).closest('.todolist_list').remove();
    });
    $(".todo_section").on('click','.striked', function(e) {
        $(this).closest('.todolist_list').find('.todotext').toggleClass('strikethrough');
        $(this).closest('.todolist_list').find('.showbtns').toggle();
    });
    $(".todo_section").on('click',".todoedit", function(e) {
        console.log('ddfg');
        var editButton = " <a href='#' class='todoedit'><span class='ti-pencil'></span></a>";
        e.preventDefault();
        $(this).closest('.todolist_list').find('.striked').toggle();
        $(this).closest('.todolist_list').find('.checkbox_hide').toggle();
        if ($(this).text() == " ") {
            $(this).closest('.todolist_list').find(".showbtns").toggleClass("opacityfull");
            var text1 = $(this).closest('.todolist_list').find("input[type='text'][name='text']").val().trim();
            if (text1 === '') {
                alert('Come on! you can\'t create a todo without title');
                $(this).closest('.todolist_list').find("input[type='text'][name='text']").focus();
                $(this).closest('.todolist_list').find(".striked").hide();
                $(this).closest('.todolist_list').find(".checkbox_hide").hide();
                return;
            }
            $(this).closest('.todolist_list').find('.todotext').html(text1);
            $(this).html("<span class='ti-pencil'></span>");
            $(this).closest('.todolist_list').find(".showbtns").toggleClass("opacityfull");
            return;
        }
        var text = '';
        text = $(this).closest('.todolist_list').find('.todotext').text();
        text = "<input type='text' class='form-control' name='text' value='" + text + "' onkeypress='return event.keyCode != 13;' />";
        $(this).closest('.todolist_list').find('.todotext').html(text);
        $(this).html("<span class='ti-check'></span> ");
        text = '';
        return;
    });
    $("#custom_textbox").on("keypress", function(e) {
        if (e.which === 32 && !this.value.length)
            e.preventDefault();
    });
    $('.todo_section').slimscroll({
        height: '230px',
        size: '5px',
        opacity: 0.2
    });
    // ======================to do list end=============================

//      ==========================  Real time charts=====================
    //server load
    var flot2 = function() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 100;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        var plot2 = $.plot("#order_realtime", [getRandomData()], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#5aca82"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'},
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot2.setData([getRandomData()]);
            plot2.draw();
            setTimeout(update, 30);
        }
        update();
    };
    flot2();



    //server load
    var flot3 = function() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 100;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        var plot3 = $.plot("#sale_realtime", [getRandomData()], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#329cff"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'},
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot3.setData([getRandomData()]);
            plot3.draw();
            setTimeout(update, 30);
        }
        update();
    };
    flot3();




    //server load
    var flot4 = function() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 100;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        var plot4 = $.plot("#users_realtime", [getRandomData()], {
            series: {
                shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            },
            colors: ["#fcb410"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'},
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot4.setData([getRandomData()]);
            plot4.draw();
            setTimeout(update, 30);
        }
        update();
    };
    flot4();
//      ==========================  End of real time charts=============================
    // =================top 4 sections countup js==================

    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            morris.redraw();
            sparkline_resize();
        },200);
    });
    $(window).resize(function () {
        setTimeout(function () {
            sparkline_resize();
        })
    })
});