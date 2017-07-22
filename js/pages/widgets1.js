"use strict";
$(document).ready(function() {
    var options = {
        useEasing: true,
        useGrouping: true,
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    new CountUp("info1", 0, 250, 0, 2.5, options).start();
    new CountUp("info2", 0, 179, 0, 2.5, options).start();
    new CountUp("info3", 0, 500, 0, 2.5, options).start();
    new CountUp("info4", 0, 600, 0, 2.5, options).start();
    new CountUp("info5", 0, 546, 0, 2.5, options).start();
    new CountUp("info6", 0, 599, 0, 2.5, options).start();
    new CountUp("info7", 0, 254, 0, 2.5, options).start();
    new CountUp("info8", 0, 198, 0, 2.5, options).start();
    new CountUp("info9", 0, 250, 0, 2.5, options).start();
    new CountUp("info10", 0, 179, 0, 2.5, options).start();
    new CountUp("info11", 0, 500, 0, 2.5, options).start();
    new CountUp("info12", 0, 600, 0, 2.5, options).start();
    new CountUp("info13", 0, 999, 0, 2.5, options).start();
    new CountUp("info14", 0, 700, 0, 2.5, options).start();
    new CountUp("info15", 0, 111, 0, 2.5, options).start();


    function resize() {



        $(".sparkline_flip1").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
            type: 'line',
            width: '100%',
            height: '70',
            lineColor: '#5aca82',
            fillColor: '#C1F0F2',
            tooltipSuffix: ' Views'
        });
        $(".sparkline_flip3").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
            type: 'line',
            width: '100%',
            height: '70',
            lineColor: '#5aca82',
            fillColor: '#C1F0F2',
            tooltipSuffix: ' Likes'
        });



        $(".sparkline_widget1").sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212], {
            type: 'line',
            width: '100%',
            height: '70',
            lineColor: '#5aca82',
            fillColor: '#C1F0F2',
            tooltipSuffix: ' Visitors'
        });


        var barParentdiv2 = $('.sparkline_widget2').closest('div');
        var barCount2 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212, 209, 210, 209, 210, 210, 211, 212, 210];
        var barSpacing2 = 2;
        $(".sparkline_widget2").sparkline(barCount2, {
            type: 'bar',
            barWidth: (barParentdiv2.width() - (barCount2.length * barSpacing2)) / barCount2.length,
            height: '70',
            barSpacing: barSpacing2,
            barColor: '#329cff',
            tooltipSuffix: ' Sales'
        });

        var barParentdiv2 = $('.sparkline_flip2').closest('div');
        var barCount2 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 210, 212, 211, 210, 212, 211, 213, 212];
        var barSpacing2 = 2;
        $(".sparkline_flip2").sparkline(barCount2, {
            type: 'bar',
            barWidth: (barParentdiv2.width() - (barCount2.length * barSpacing2)) / barCount2.length,
            height: '70',
            width:'100%',
            barSpacing: barSpacing2,
            barColor: '#329cff',
            tooltipSuffix: ' Registrations'
        });


//       =========================     Mouse speed================================================
        var mrefreshinterval = 500; // update display every 500ms
        var lastmousex = -1;
        var lastmousey = -1;
        var lastmousetime;
        var mousetravel = 0;
        var mpoints = [];
        var mpoints_max = 30;
        $('html').mousemove(function (e) {
            var mousex = e.pageX;
            var mousey = e.pageY;
            if (lastmousex > -1) {
                mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
            }
            lastmousex = mousex;
            lastmousey = mousey;
        });
        var mdraw = function () {
            var md = new Date();
            var timenow = md.getTime();
            if (lastmousetime && lastmousetime != timenow) {
                var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                mpoints.push(pps);
                if (mpoints.length > mpoints_max)
                    mpoints.splice(0, 1);
                mousetravel = 0;
                $('.sparkline_widget3').sparkline(mpoints, {
                    width: '100%',
                    tooltipSuffix: ' mb per Second',
                    height: '70',
                    chartRangeMax: 24,
                    lineColor: '#5aca82',
                    fillColor: '#ace4c0',
                    highlightLineColor: 'rgba(50, 156, 255,.1)',
                    highlightSpotColor: 'rgba(50, 156, 255,.2)'
                });
            }
            lastmousetime = timenow;
            setTimeout(mdraw, mrefreshinterval);
        };
        // We could use setInterval instead, but I prefer to do it this way
        setTimeout(mdraw, mrefreshinterval);
//       ==========================     end of mouse speed=============================================


//       ==========================     Composite bar========================================
        var barParentdiv8 = $('.sparkline_widget4').closest('div');
        var barCount8 = [209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212];
        var barSpacing8 = 2;
        $(".sparkline_widget4").sparkline(barCount8, {
            type: 'bar',
            width: '100%',
            height:'70',
            barWidth: (barParentdiv8.width() - (barCount8.length * barSpacing8)) / barCount8.length,
            barSpacing: barSpacing8,
            barColor: '#fcb410',
            tooltipSuffix: ' Comments'
        });
        $('.sparkline_widget4').sparkline([209, 210, 209, 210, 210, 211, 212, 210, 210, 211, 213, 212, 211, 210, 212, 211, 210, 212],
            {
                composite: true,
                fillColor: false,
                width: "100%",
                spotColor: '#f0ad4e',
                lineColor: '#31d0d6',
                tooltipSuffix: ' Review'
            });
//       ==============================     End of composite bar================================
//================Swiper js Starts==============

    }
    resize();

    var swiper1 = new Swiper('.widget_swiper1', {
        pagination: '.swiper-pagination1',
        paginationClickable: true,
        autoplay: 500,
        loop:true,
        height:150
    });
    var swiper2 = new Swiper('.widget_swiper2', {
        pagination: '.swiper-pagination2',
        paginationClickable: true,
        autoplay: 1000,
        loop:true,
        height:150
    });
    var swiper3 = new Swiper('.widget_swiper3', {
        pagination: '.swiper-pagination3',
        paginationClickable: true,
        autoplay: 2000,
        loop:true,
        height:150
    });

    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            resize();
            swiper1.update();
            swiper2.update();
            swiper3.update();
        },100);
    });
    $(window).resize(function () {
        resize();
    });


//   flip js

    $("#top_widget1, #top_widget2, #top_widget3, #top_widget4").flip({
        axis: 'y',
        trigger: 'hover'
    });



});
