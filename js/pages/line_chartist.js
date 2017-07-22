"use strict";
$(document).ready(function () {
    function chart_resize() {

//       ==========================  Line chart =================================
        var chart1 = new Chartist.Line('#line_chart', {
            labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            series: [
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                [7, 6, 4, 2, 4, 6, 7, 5, 3, 2],
                [5, 7, 8, 7, 5, 3, 2, 4, 6, 7]
            ]
        }, {
            fullWidth: true,
            chartPadding: {
                right: 20
            },
            low: 0,
            high: 10
        });
//       ========================== End of Line chart =================================

//      =================================   Holes chart================================
        var chart = new Chartist.Line('#holes_chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            series: [
                [5, 5, 10, 8, 7, 5, 4, null, null, null, 10],
                [10, 15, null, null, 12, null, 10, 13, null, 15, null, 13],
                [null, null, null, null, 0, 4, 0, 2, 3, 5, 7, 8],
                [{x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: 2}, {
                    x: 8,
                    y: 4
                }, null, null, {x: 8, y: 4}, {x: 7, y: 2}, {x: 6, y: 4}, {x: 6, y: 4}]
            ]
        }, {
            fullWidth: true,
            chartPadding: {
                right: 20
            },
            low: 0
        });
//      ================================= End of  Holes chart================================

        //      ================================Filled holes chart ==============================
        var chart = new Chartist.Line('#filled_holes_chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            series: [
                [5, 5, 9, 7, 8, 5, 4, null, null, null, 10],
                [10, 15, null, null, 11, null, 10, 13, null, 15, null, 13],
                [null, null, null, null, 0, 4, 0, 2, 1, 5, 7, 8],
                [{x: 3, y: 3}, {x: 4, y: 3}, {x: 5, y: undefined}, {x: 6, y: 4}, {x: 7, y: 2}, {
                    x: 8,
                    y: 4
                }, null, null, {x: 8, y: 4}, {x: 7, y: 2}, {x: 6, y: 4}, {x: 6, y: 4}]
            ]
        }, {
            fullWidth: true,
            chartPadding: {
                right: 20
            },
            lineSmooth: Chartist.Interpolation.cardinal({
                fillHoles: true,
            }),
            low: 0
        });
        //      ================================ end of Filled holes chart ==============================

//      ==============================  Whole numbers================================
        new Chartist.Line('#whole_numbers_chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [2, 3, 4, 2, -1, 1, 2, 1],
                [-3, -2, -3, -1, -3, -1, -2, 0],
                [0, 0, 0, 1, 2, 3, 2, 1],
                [3, 2, 1, 0.5, 1, 0, -1, 0]
            ]
        }, {
            high: 4,
            low: -4,
            fullWidth: true,
            // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
            axisY: {
                onlyInteger: true,
                offset: 20
            }
        });

//        ============================== End of whole numbers =========================================

//      =====================================  Line scatter diagram ================================
        var times = function (n) {
            return Array.apply(null, new Array(n));
        };

        var data = times(52).map(Math.random).reduce(function (data, rnd, index) {
            data.labels.push(index + 1);
            data.series.forEach(function (series) {
                series.push(Math.random() * 100)
            });

            return data;
        }, {
            labels: [],
            series: times(4).map(function () {
                return new Array()
            })
        });

        var options = {
            showLine: false,
            axisX: {
                labelInterpolationFnc: function (value, index) {
                    return index % 13 === 0 ? 'W' + value : null;
                }
            }
        };

        var responsiveOptions = [
            ['screen and (min-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 6 === 0 ? 'W' + value : null;
                    }
                }
            }]
        ];

        new Chartist.Line('#line_scatter', data, options, responsiveOptions);

//       =============================== End of line scatter diagram===========================================

//      =================================  Line chart with area=================================================
        new Chartist.Line('#line_chart_area', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [5, 9, 7, 8, 5, 3, 5, 4]
            ]
        }, {
            low: 0,
            showArea: true
        });
//       =================================== End of line chart with area==================================

//     =======================================   Bipolar line chart==============================================
        new Chartist.Line('#bipolar_line_chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 3, 1, -2, 0, 1, 0],
                [-2, -1, -2, -1, -2.5, -1, -2, -1],
                [0, 0, 0, 1, 2, 2.5, 2, 1],
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
        }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });
//     ==========================================   End of Bipolar line chart==================================

//      ===========================================  Charts using events=========================================
        var chart = new Chartist.Line('#chart_events', {
            labels: [1, 2, 3, 4, 5],
            series: [
                [12, 9, 7, 8, 5]
            ]
        });

// Listening for draw events that get emitted by the Chartist chart
        chart.on('draw', function (data) {
            // If the draw event was triggered from drawing a point on the line chart
            if (data.type === 'point') {
                // We are creating a new path SVG element that draws a triangle around the point coordinates
                var triangle = new Chartist.Svg('path', {
                    d: ['M',
                        data.x,
                        data.y - 15,
                        'L',
                        data.x - 15,
                        data.y + 8,
                        'L',
                        data.x + 15,
                        data.y + 8,
                        'z'].join(' '),
                    style: 'fill-opacity: 1'
                }, 'ct-area');

                // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
                data.element.replace(triangle);
            }
        });
//    ===============================    End of charts using events========================================

//    ====================================    smil animations=========================================

        var chart = new Chartist.Line('#smil_animations', {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
                [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
        }, {
            low: 0
        });

// Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
            delays = 80,
            durations = 500;

// Once the chart is fully created we reset the sequence
        chart.on('created', function () {
            seq = 0;
        });

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        chart.on('draw', function (data) {
            seq++;

            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: seq * delays + 1000,
                        // Duration of the animation
                        dur: durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: 'easeOutQuart'
                };

                var pos2Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: 'easeOutQuart'
                };

                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                };

                data.element.animate(animations);
            }
        });

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
        chart.on('created', function () {
            if (window.__exampleAnimateTimeout) {
                clearTimeout(window.__exampleAnimateTimeout);
                window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
        });

//    ===============================================    End of smil animations================================

//     ===========================================   Svg path animation=======================================
        var chart = new Chartist.Line('#svg_path', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [1, 5, 2, 5, 4, 3],
                [2, 3, 4, 8, 1, 2],
                [5, 4, 3, 2, 1, 0.5]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        });

        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
//     ============================================   End of svg path animation====================================

//    ==========================================    Line interpolation========================================
        var chart = new Chartist.Line('#line_interpolation', {
            labels: [1, 2, 3, 4, 5],
            series: [
                [1, 5, 10, 0, 1],
                [10, 15, 0, 1, 2]
            ]
        }, {
            // Remove this configuration to see that chart rendered with cardinal spline interpolation
            // Sometimes, on large jumps in data values, it's better to use simple smoothing.
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            fullWidth: true,
            chartPadding: {
                right: 20
            },
            low: 0
        });

//      ===============================================  End of line interpolation=====================================

//     =================================================   Series overrides======================================
        var chart = new Chartist.Line('#series_overrides', {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
            // Naming the series with the series object array notation
            series: [{
                name: 'series-1',
                data: [5, 2, -4, 2, 0, -2, 5, -3]
            }, {
                name: 'series-2',
                data: [4, 3, 5, 3, 1, 3, 6, 4]
            }, {
                name: 'series-3',
                data: [2, 4, 3, 1, 4, 5, 3, 2]
            }]
        }, {
            fullWidth: true,
            // Within the series options you can use the series names
            // to specify configuration that will only be used for the
            // specific series.
            series: {
                'series-1': {
                    lineSmooth: Chartist.Interpolation.step()
                },
                'series-2': {
                    lineSmooth: Chartist.Interpolation.simple(),
                    showArea: true
                },
                'series-3': {
                    showPoint: false
                }
            }
        }, [
            // You can even use responsive configuration overrides to
            // customize your series configuration even further!
            ['screen and (max-width: 320px)', {
                series: {
                    'series-1': {
                        lineSmooth: Chartist.Interpolation.none()
                    },
                    'series-2': {
                        lineSmooth: Chartist.Interpolation.none(),
                        showArea: false
                    },
                    'series-3': {
                        lineSmooth: Chartist.Interpolation.none(),
                        showPoint: true
                    }
                }
            }]
        ]);

//    ============================================    End of series overrides==============================

//    =================================================    Time series=================================
        // Requires Moment.js

        var chart = new Chartist.Line('#time_series', {
            series: [
                {
                    name: 'series-1',
                    data: [
                        {x: new Date(143134652600), y: 53},
                        {x: new Date(143234652600), y: 40},
                        {x: new Date(143340052600), y: 45},
                        {x: new Date(143366652600), y: 40},
                        {x: new Date(143410652600), y: 20},
                        {x: new Date(143508652600), y: 32},
                        {x: new Date(143569652600), y: 18},
                        {x: new Date(143579652600), y: 11}
                    ]
                },
                {
                    name: 'series-2',
                    data: [
                        {x: new Date(143134652600), y: 53},
                        {x: new Date(143234652600), y: 35},
                        {x: new Date(143334652600), y: 30},
                        {x: new Date(143384652600), y: 30},
                        {x: new Date(143568652600), y: 10}
                    ]
                }
            ]
        }, {
            axisX: {
                type: Chartist.FixedScaleAxis,
                divisor: 5,
                labelInterpolationFnc: function (value) {
                    return moment(value).format('MMM D');
                }
            }
        });
    }
    chart_resize();
//     =========================================   End of time series==============================
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            chart_resize();
        });
    });
});