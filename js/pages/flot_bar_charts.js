'use strict';
$(document).ready(function () {
//        ========================   Basic bar chart======================
    var d1 = [["1", 100],["2", 80],["3", 66],["4", 48],["5", 68],["6", 48],["7",66],["8", 80],["9", 64],["10", 48],["11",64],["12",100]];
    $.plot("#bar_chart1", [{
        data: d1,
        label: "Project",
        color: "#329cff"
    }], {
        series: {
            bars: {
                align: "center",
                lineWidth: 0,
                show: !0,
                barWidth: .6,
                fill: .9
            }
        },
        grid: {
            borderColor: "#ddd",
            borderWidth: 1,
            hoverable: !0
        },
        legend: {
            container: '#basicFlotLegend1',
            show: true
        },
        tooltip: true,
        tooltipOpts: {
            content: '%s: %y'
        },

        xaxis: {
            tickColor: "#ddd",
            mode: "categories"
        },
        yaxis: {
            tickColor: "#ddd"
        },
        shadowSize: 0
    });
//      =============================     End of basic bar chart===========================

//      =====================================     categories chart=====================================
    var data2 = [ ["Jan", 10], ["Feb", 8], ["Mar", 4], ["Apr", 13], ["May", 17], ["Jun", 9] ];

    $.plot("#bar_chart2", [ data2 ], {
        series: {
            bars: {
                show: true,
                barWidth: 0.6,
                align: "center"
            }
        },
        xaxis: {
            mode: "categories",
            tickLength: 0
        },
        grid: {
            borderColor: "#ddd",
            borderWidth: 1,
            hoverable: !0
        },
        colors: ["#f86a67"]
    });

//      ========================================     End of categories chart===============================

//      ===========================================     Annotating chart====================================
    var d3 = [];
    for (var i = 0; i < 20; ++i) {
        d3.push([i, Math.sin(i)]);
    }

    var data3 = [{ data: d3, label: "Pressure", color: "#333" }];

    var markings = [
        { color: "#fff", yaxis: { from: 1 } },
        { color: "#fff", yaxis: { to: -1 } },
        { color: "#31d0d6", lineWidth: 1, xaxis: { from: 2, to: 2 } },
        { color: "#31d0d6", lineWidth: 1, xaxis: { from: 8, to: 8 } }
    ];

    var chart3 = $("#bar_chart3");

    var plot3 = $.plot(chart3, data3, {
//               bars: { show: true, barWidth: 0.5, fill: 0.9 },
        bars: {
            show:true, barWidth:.5, fill:'0.9', fillColor: {
                colors:[ '#329cff','#937eff','#f86a67','#31d0d6','#5aca82','#007bb8','#fcb410',{
                    opacity: .5
                }
                    , {
                        opacity: 1
                    }
                ]
            }
        },
        xaxis: { ticks: [], autoscaleMargin: 0.02 },
        yaxis: { min: -2, max: 2 },
        grid: { markings: markings,
            borderColor: "#ddd",
            borderWidth: 1,
            hoverable: !0
        }
    });

    var o = plot3.pointOffset({ x: 2, y: -1.2});

    // Append it to the placeholder that Flot already uses for positioning

    chart3.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Warming up</div>");

    o = plot3.pointOffset({ x: 8, y: -1.2});
    chart3.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Actual measurements</div>");

    // Draw a little arrow on top of the last label to demonstrate canvas
    // drawing

    var ctx = plot3.getCanvas().getContext("2d");
    ctx.beginPath();
    o.left += 4;
    ctx.moveTo(o.left, o.top);
    ctx.lineTo(o.left, o.top - 10);
    ctx.lineTo(o.left + 10, o.top - 5);
    ctx.lineTo(o.left, o.top);
    ctx.fillStyle = "#937eff";
    ctx.fill();
//      ======================================     End of annotating chart===================================

//      =======================================     Threshold chart============================================
    var d4 = [];
    for (var i = 0; i <= 60; i += 1) {
        d4.push([i, parseInt(Math.random() * 30 - 10)]);
    }

    function plotWithOptions4(t4) {
        $.plot("#bar_chart4", [{
            data: d4,
            color: "#5aca82",
            threshold: {
                below: t4,
                color: "#f86a67"
            },
            lines: {
                steps: true
            }
        }],{
            grid: {
                borderColor: "#ddd",
                borderWidth: 1,
                hoverable: !0
            }
        });
    }

    plotWithOptions4(0);

    $(".controls button").click(function (e) {
        e.preventDefault();
        var t4 = parseFloat($(this).text().replace("Threshold at ", ""));
        plotWithOptions4(t4);
    });
//       =================================    End of threshold chart===============================================

//       =====================================    Stacked chart=============================================
    var d1_5 = [];
    for (var i = 0; i <= 10; i += 1) {
        d1_5.push([i, parseInt(Math.random() * 30)]);
    }

    var d2_5 = [];
    for (var i = 0; i <= 10; i += 1) {
        d2_5.push([i, parseInt(Math.random() * 30)]);
    }

    var d3_5 = [];
    for (var i = 0; i <= 10; i += 1) {
        d3_5.push([i, parseInt(Math.random() * 30)]);
    }

    var stack = 0,
        bars = true,
        lines = false,
        steps = false;

    function plotWithOptions5() {
        $.plot("#bar_chart5", [ d1_5, d2_5, d3_5 ], {
            series: {
                stack: stack,
                lines: {
                    show: lines,
                    fill: true,
                    steps: steps
                },
                bars: {
                    show: bars,
                    barWidth: 0.6
                }
            },
            colors:['#329cff','#5aca82','#937eff'],
            grid: {
                borderColor: "#ddd",
                borderWidth: 1,
                hoverable: !0
            }
        });
    }

    plotWithOptions5();

    $(".stackControls button").click(function (e) {
        e.preventDefault();
        stack = $(this).text() == "With stacking" ? true : null;
        plotWithOptions5();
    });

    $(".graphControls button").click(function (e) {
        e.preventDefault();
        bars = $(this).text().indexOf("Bars") != -1;
        lines = $(this).text().indexOf("Lines") != -1;
        steps = $(this).text().indexOf("steps") != -1;
        plotWithOptions5();
    });
//      =========================     End of stacked chart4======================================================

//      ====================================     Error bars======================================
    function drawArrow(ctx, x, y, radius){
        ctx.beginPath();
        ctx.moveTo(x + radius, y + radius);
        ctx.lineTo(x, y);
        ctx.lineTo(x - radius, y + radius);
        ctx.stroke();
    }

    function drawSemiCircle(ctx, x, y, radius){
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI, false);
        ctx.moveTo(x - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.stroke();
    }

    var data1_7 = [
        [1,1,.5,.1,.3],
        [2,2,.3,.5,.2],
        [3,3,.9,.5,.2],
        [1.5,-.05,.5,.1,.3],
        [3.15,1.,.5,.1,.3],
        [2.5,-1.,.5,.1,.3]
    ];

    var data1_points = {
        show: true,
        radius: 5,
        fillColor: "blue",
        errorbars: "xy",
        xerr: {show: true, asymmetric: true, upperCap: "-", lowerCap: "-"},
        yerr: {show: true, color: "red", upperCap: "-"}
    };

    var data2_7 = [
        [.7,3,.2,.4],
        [1.5,2.2,.3,.4],
        [2.3,1,.5,.2]
    ];

    var data2_points = {
        show: true,
        radius: 5,
        errorbars: "y",
        yerr: {show:true, asymmetric:true, upperCap: drawArrow, lowerCap: drawSemiCircle}
    };

    var data3_7 = [
        [1,2,.4],
        [2,0.5,.3],
        [2.7,2,.5]
    ];

    var data3_points = {
        //do not show points
        radius: 0,
        errorbars: "y",
        yerr: {show:true, upperCap: "-", lowerCap: "-", radius: 5}
    };

    var data4_7 = [
        [1.3, 1],
        [1.75, 2.5],
        [2.5, 0.5]
    ];

    var data4_errors = [0.1, 0.4, 0.2];
    for (var i = 0; i < data4_7.length; i++) {
        data4_errors[i] = data4_7[i].concat(data4_errors[i])
    }

    var data7 = [
        {color: "#329cff", points: data1_points, data: data1_7, label: "data1"},
        {color: "#f86a67",  points: data2_points, data: data2_7, label: "data2"},
        {color: "#5aca82", lines: {show: true}, points: data3_points, data: data3_7, label: "data3"},
        // bars with errors
        {color: "#fcb410", bars: {show: true, align: "center", barWidth: 0.25}, data: data4_7, label: "data4"},
        {color: "#fcb410", points: data3_points, data: data4_errors}
    ];

    $.plot($("#bar_chart7"), data7 , {
        legend: {
            position: "sw",
            show: true
        },
        series: {
            lines: {
                show: false
            }
        },
        xaxis: {
            min: 0.6,
            max: 3.1
        },
        yaxis: {
            min: 0,
            max: 3.5
        },
        zoom: {
            interactive: true
        },
        pan: {
            interactive: true
        },
        grid:{
            borderColor: "#ddd",
            borderWidth: 1,
            hoverable: !0
        }
    });
//    =======================   End of error bars======================================================
});