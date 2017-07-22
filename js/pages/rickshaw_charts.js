"use strict";
$(document).ready(function () {
    //       ====================     Line chart=============================
    var seriesData1 = [
        [],
        [],
        []
    ];
    var random1 = new Rickshaw.Fixtures.RandomData(200);

    for (var i = 0; i < 200; i++) {
        random1.addData(seriesData1);
    }
    var graph1 = new Rickshaw.Graph({
        element: document.querySelector("#rickshaw_chart1"),
        renderer: 'line',
        series: [{
            color: "#31d0d6",
            data: seriesData1[0],
            name: 'New York'
        }, {
            color: "#fcb410",
            data: seriesData1[1],
            name: 'London'
        }, {
            color: "#937eff",
            data: seriesData1[2],
            name: 'Tokyo'
        }]
    });
    graph1.configure({ width: $("#rickshaw_chart1").width() });
    graph1.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph1
    });
    var legend_chart1 = new Rickshaw.Graph.Legend({
        graph: graph1,
        element: document.getElementById('legend_chart1')
    });
    new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph1,
        legend: legend_chart1
    });
//       ==================================     end of line chart====================

    //         =====================   simple animation chart===============================
    var tv = 250;
    var graph2 = new Rickshaw.Graph({
        element: document.getElementById("rickshaw_chart2"),

        renderer: 'line',
        series: new Rickshaw.Series.FixedDuration([{ name: 'one' }], undefined, {
            timeInterval: tv,
            maxDataPoints: 100,
            timeBase: new Date().getTime() / 1000
        })
    });

    graph2.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph2
    });
    var i2 = 0;
    var iv = setInterval(function() {

        var data2 = { one: Math.floor(Math.random() * 40) + 120 };

        var randInt = Math.floor(Math.random() * 100);
        data2.two = (Math.sin(i++/ 40) + 4) * (randInt + 400);
        data2.three = randInt + 300;

        graph2.series.addData(data2);
        graph2.render();

    }, tv);
//       ============================     end of simple animation chart=======================

//       ==============================     scaled series chart======================================
    var data, i3, max, min, point, random3, scales, series, _i, _j, _k, _l, _len, _len1, _len2, _ref;

    data = [
        [],
        []
    ];

    random3 = new Rickshaw.Fixtures.RandomData(12 * 60 * 60);

    for (i3 = _i = 0; _i < 100; i3 = ++_i) {
        random3.addData(data);
    }

    scales = [];

    _ref = data[1];
    for (_j = 0, _len = _ref.length; _j < _len; _j++) {
        point = _ref[_j];
        point.y *= point.y;
    }

    for (_k = 0, _len1 = data.length; _k < _len1; _k++) {
        series = data[_k];
        min = Number.MAX_VALUE;
        max = Number.MIN_VALUE;
        for (_l = 0, _len2 = series.length; _l < _len2; _l++) {
            point = series[_l];
            min = Math.min(min, point.y);
            max = Math.max(max, point.y);
        }
        if (_k === 0) {
            scales.push(d3.scale.linear().domain([min, max]).nice());
        } else {
            scales.push(d3.scale.pow().domain([min, max]).nice());
        }
    }

    var graph3 = new Rickshaw.Graph({
        element: document.getElementById("rickshaw_chart3"),
        renderer: 'line',
        series: [{
            color: '#31d0d6',
            data: data[0],
            name: 'Series A',
            scale: scales[0]
        }, {
            color: '#fcb410',
            data: data[1],
            name: 'Series B',
            scale: scales[1]
        }]
    });
    new Rickshaw.Graph.Axis.Time({
        graph: graph3
    });

    new Rickshaw.Graph.HoverDetail({
        graph: graph3
    });

    graph3.render();
    var legend_chart3 = new Rickshaw.Graph.Legend({
        graph: graph3,
        element: document.getElementById('legend_chart3')
    });
    new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph3,
        legend: legend_chart3
    });
//       =============================     end of scaled series chart================================

//      ============================  Area chart==============================================
    var graph4 = new Rickshaw.Graph({
        series: [ { data: [{ x: 0, y: 5 },
            { x: 1, y: 8 },
            { x: 2, y: 10 },
            { x: 3, y: 11 },
            { x: 4, y: 9 },
            { x: 5, y: 7 },
            { x: 6, y: 10 },
            { x: 7, y: 12 },
            { x: 8, y: 13 },
            { x: 9, y: 12 },
            { x: 10, y: 10 },
            { x: 11, y: 6 }],
            color:'#329cff'
        }],
        renderer: 'area',
        element: document.querySelector('#rickshaw_chart4')
    });

    graph4.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph4
    });
//      ================================  stacked area chart=======================================

//     =============================   multiple area chart=========================================
    var graph5 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw_chart5"),
        renderer: 'area',
        stroke: true,
        series: [ {
            data: [ { x: 0, y: 40 }, { x: 1, y: 49 },{ x: 2, y: 42 }, { x: 3, y: 35 },{ x: 4, y: 37 }],
            color: 'rgba(49, 208, 214,0.5)',
            name: 'Tokyo',
            stroke: 'rgba(0,0,0,0.15)'
        }, {
            data: [ { x: 0, y: 22 }, { x: 1, y: 25 },{ x: 2, y: 23 }, { x: 3, y: 19 },{ x: 4, y: 21 }],
            color: 'rgba(	90, 202, 130,0.5)',
            name: 'Newyork',
            stroke: 'rgba(0,0,0,0.15)'
        } ]
    } );

    graph5.renderer.unstack = true;
    graph5.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph5
    });
    var legend_chart5 = new Rickshaw.Graph.Legend({
        graph: graph5,
        element: document.getElementById('legend_chart5')
    });
    new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph5,
        legend: legend_chart5
    });
//     ===========================   end of multiple area chart========================================

//      =================== bar chart=========================================================
    var graph6 = new Rickshaw.Graph({
        element: document.querySelector("#rickshaw_chart6"),
        renderer: 'bar',
        series: [{
            data: [ { x: 0, y: 20 }, { x: 1, y: 35 },{ x: 2, y: 55 }, { x: 3, y: 50 },{ x: 4, y: 38 }, { x: 5, y: 30 }],
            color: '#937eff'
        }]
    });
    graph6.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph6
    });
//     ==============================   End of bar chart=========================================

//      ===================================  stacked bar chart7===================================
    var graph7 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw_chart7"),
        renderer: 'bar',
        series: [{
            data: [ { x: 0, y: 40 }, { x: 1, y: 24 },{ x: 2, y: 45 }, { x: 3, y: 49 },{ x: 4, y: 25 }],
            color: '#329cff',
            name:'USA'
        }, {
            data: [ { x: 0, y: 20 }, { x: 1, y: 49 },{ x: 2, y: 50 }, { x: 3, y: 24 },{ x: 4, y: 20 }],
            color: '#fcb410',
            name:'India'
        }]
    });
    graph7.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph7
    });
    var legend_chart7 = new Rickshaw.Graph.Legend({
        graph: graph7,
        element: document.getElementById('legend_chart7')
    });
    new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph7,
        legend: legend_chart7
    });

//     ==============================   end of stacked bar chart======================================

//      ===============================  Scatter plot=================================================
    var data8 = [
        [],
        []
    ];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i8 = 0; i8 < 100; i8++) {
        random.addData(data8);
    }
    var graph8 = new Rickshaw.Graph( {
        element: document.querySelector("#rickshaw_chart8"),
        renderer: 'scatterplot',
        stroke: true,
        series: [{
            data: data8[0],
            color: '#937eff',
            name:'Football'
        },{
            data: data8[1],
            color: '#fcb410',
            name:'Cricket'
        }]
    });
    graph8.render();
    new Rickshaw.Graph.HoverDetail({
        graph: graph8
    });
    var legend_chart8 = new Rickshaw.Graph.Legend({
        graph: graph8,
        element: document.getElementById('legend_chart8')
    });
    new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph8,
        legend: legend_chart8
    });
//     ==============================   end of scatter plot===========================================

//       ====================== Multiple renders chart===========================================
    var data9 = [
        [],
        [],
        [],
        [],
        []
    ];
    var random9 = new Rickshaw.Fixtures.RandomData(50);

    for (var i9 = 0; i9 < 75; i9++) {
        random9.addData(data9);
    }

    var graph9 = new Rickshaw.Graph({
        element: document.getElementById("rickshaw_chart9"),
        renderer: 'multi',

        dotSize: 5,
        series: [{
            name: 'temperature',
            data: data9.shift(),
            color: '#8acbe8',
            renderer: 'stack'
        }, {
            name: 'heat index',
            data: data9.shift(),
            color: '#e6f1d0',
            renderer: 'stack'
        }, {
            name: 'dewpoint',
            data: data9.shift(),
            color: '#0fb0c0',
            renderer: 'scatterplot'
        }, {
            name: 'pop',
            data: data9.shift().map(function(d) {
                return { x: d.x, y: d.y / 4 } }),
            color: '#ff9933',
            renderer: 'bar'
        }, {
            name: 'humidity',
            data: data9.shift().map(function(d) {
                return { x: d.x, y: d.y * 1.5 } }),
            renderer: 'line',
            color: '#347dff'
        }]
    });


    new Rickshaw.Graph.Axis.Time({ graph: graph9 });

    graph9.render();

    new Rickshaw.Graph.HoverDetail({
        graph: graph9
    });
    var slider9 = new Rickshaw.Graph.RangeSlider.
        Preview({
        graph: graph9,
        element: document.querySelector('#rickshaw_slider')
    });
    var legend_chart9 = new Rickshaw.Graph.Legend({
        graph: graph9,
        element: document.querySelector('#legend_chart9')
    });

    new Rickshaw.Graph.Behavior.Series.Highlight({
        graph: graph9,
        legend: legend_chart9,
        disabledColor: function() {
            return 'rgba(0, 0, 0, 0.2)' }
    });

    new Rickshaw.Graph.Behavior.Series.Toggle({
        graph: graph9,
        legend: legend_chart9
    });


//     =========================   ewnd of multuple renders chart==================================

    function resize() {
        graph1.configure({ width: $("#rickshaw_chart1").width() });
        graph1.render();
        graph2.configure({ width: $("#rickshaw_chart2").width() });
        graph2.render();
        graph3.configure({ width: $("#rickshaw_chart3").width() });
        graph3.render();
        graph4.configure({ width: $("#rickshaw_chart4").width() });
        graph4.render();
        graph5.configure({ width: $("#rickshaw_chart5").width() });
        graph5.render();
        graph6.configure({ width: $("#rickshaw_chart6").width() });
        graph6.render();
        graph7.configure({ width: $("#rickshaw_chart7").width() });
        graph7.render();
        graph8.configure({ width: $("#rickshaw_chart8").width() });
        graph8.render();
        graph9.configure({ width: $("#rickshaw_chart9").width() });
        graph9.render();
    }
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            resize();
        },100);
    });
    $(window).on("resize", function() {
        resize();
    });
});