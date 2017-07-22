"use strict";
$(document).ready(function () {
    function c3_resize(){


//         ==========================   line chart=============================
        var chart1 = c3.generate({
            bindto: '#line_chart',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 30, 20, 35, 15, 25]
                ]
            },
            color: {
                pattern: ['#329cff','#5aca82','#007bb8','#fcb410']
            },
            grid: {
                y: {
                    show: true
                }
            }
        });

        setTimeout(function () {
            chart1.load({
                columns: [
                    ['data1', 230, 190, 300, 500, 300, 400]
                ]
            });
        }, 800);

        setTimeout(function () {
            chart1.load({
                columns: [
                    ['data3', 130, 100, 200, 300, 200, 100]
                ]
            });
        }, 1200);

        setTimeout(function () {
            chart1.unload({
                ids: 'data1'
            });
        }, 1500);
//           ============================= End of line chart=========================

//         ===============================   time series chart============================
        var chart2 = c3.generate({
            bindto: '#time_series',
            data: {
                x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['data1', 50, 200, 100, 400, 150, 250],
                    ['data2', 150, 300, 200, 500, 250, 350]
                ]
            },
            color: {
                pattern: ['#937eff','#007bb8','#fcb410']
            },
            padding: {
                right: 25
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%m-%d'
                    }
                }
            }
        });

        setTimeout(function () {
            chart2.load({
                columns: [
                    ['data3', 300, 500, 400, 700, 450, 550]
                ]
            });
        }, 1200);
//          =========================  End of time series chart============================
        //         =============================   Spline chart==========================
        var chart3 = c3.generate({
            bindto: '#spline_chart',
            data: {
                columns: [
                    ['data1', 50, 250, 100, 350, 150, 200],
                    ['data2', 250, 100, 250, 100, 300, 50]
                ],
                type: 'spline'
            },
            color: {
                pattern: ['#329cff','#fcb410']
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            }
        });
//          ===============================  End of spline chart==========================

//           =============================== Line chart with regions================================
        var chart4 = c3.generate({
            bindto:'#regions_chart',
            data: {
                columns: [
                    ['data1', 50,100,75,150,110,200],
                    ['data2', 100,50,30,60,80,50]
                ],
                regions: {
                    'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
                    'data2': [{'end':3}]
                }
            },
            color: {
                pattern: ['#937eff','#007bb8']
            }
        });
//            ====================== End of line chart with regions ====================================

//         ================================   XY Line Chart============================
        var chart5 = c3.generate({
            bindto:'#xy_line_chart',
            data: {
                xs: {
                    'data1': 'x1',
                    'data2': 'x2'
                },
                columns: [
                    ['x1', 10, 30, 40, 50, 70, 100],
                    ['x2', 30, 50, 75, 100, 120],
                    ['x1', 10, 30, 40, 50, 70, 100],
                    ['x2', 30, 50, 80, 100, 120],
                    ['data1', 50, 200, 100, 300, 150, 250],
                    ['data2', 30, 200, 120, 300, 190]
                ]
            },
            padding: {
                right: 0,
                left:30
            },
            color: {
                pattern: ['#937eff','#329cff']
            }
        });

//         ==============================   End of xy line chart==========================

//            Additional y axis
        var chart6 = c3.generate({
            bindto:'#additional_axis',
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ],
                axes: {
                    data1: 'y',
                    data2: 'y2'
                }
            },
            color: {
                pattern: ['#937eff','#5aca82']
            },
            axis: {
                y2: {
                    show: true
                }
            }
        });

        setTimeout(function() {
            chart6.axis.range({ max: { y: 600, y2: 100 }, min: { y: -100, y2: 0 } });
        }, 1000);

        setTimeout(function() {
            chart6.axis.max({ x: 10 });
        }, 2000);

        setTimeout(function() {
            chart6.axis.min({ x: -10 });
        }, 3000);

        setTimeout(function() {
            chart6.axis.range({ max: { x: 5 }, min: { x: 0 } });
        }, 4000);
//          =============  End of additional y-axis========================

//       ==========================   simple xy line chart=========================
        var chart7 = c3.generate({
            bindto:'#simple_line_chart',
            data: {
                x: 'x',
                columns: [
                    ['x', 30, 50, 100, 230, 300, 330],
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 300, 200, 300, 250, 450]
                ]
            },
            padding:{
                right:10
            },
            color: {
                pattern: ['#329cff','#fcb410','#f86a67']
            }
        });

        setTimeout(function () {
            chart7.load({
                columns: [
                    ['data1', 100, 250, 150, 200, 100, 350]
                ]
            });
        }, 1000);

        setTimeout(function () {
            chart7.load({
                columns: [
                    ['data2', 80, 150, 100, 180, 80, 150]
                ]
            });
        }, 1500);
//       =========================     end of simple xy line chart=======================

        //       =================== Step chart==========================
        var chart8 = c3.generate({
            bindto:'#step_chart',
            color: {
                pattern: ['#329cff','#fcb410']
            },
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 100],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'step',
                    data2: 'area-step'
                }
            }
        });
//   ======================    End of step chart==============================

//      =============================== Area chart=================================
        var chart9 = c3.generate({
            bindto:'#area_chart',
            color: {
                pattern: ['#937eff','#f86a67']
            },
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 0],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'area',
                    data2: 'area-spline'
                }
            }
        });
//   ===============================    End of area chart=========================

//   ======================    Stacked area chart====================================
        var chart10 = c3.generate({
            bindto:'#stacked_area_chart',
            color: {
                pattern: ['#31d0d6','#329cff']
            },
            data: {
                columns: [
                    ['data1', 300, 350, 300, 0, 0, 120],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                types: {
                    data1: 'area-spline',
                    data2: 'area-spline'
                    // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                },
                groups: [['data1', 'data2']]
            }
        });
//   ==============================    End of stacked area chart============================
    }
    c3_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            c3_resize();
        });
    });
})