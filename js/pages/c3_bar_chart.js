"use strict";
$(document).ready(function () {
    function bar_resize() {
//          =========================  bar chart=====================
        var chart1 = c3.generate({
            bindto:'#bar_chart',
            color: {
                pattern: ['#329cff','#937eff','#5aca82']
            },
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
            },
            grid: {
                y: {
                    lines: [{value:0}]
                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
            }
        });

        setTimeout(function () {
            chart1.load({
                columns: [
                    ['data3', 130, -150, 200, 300, -200, 100]
                ]
            });
        }, 1000);
//       ==========================     End of bar chart========================

//       =======================     Stacked bar chart========================
        var chart2 = c3.generate({
            bindto:'#stacked_bar_chart',
            color: {
                pattern: ['#329cff','#fcb410','#5aca82','#937eff']
            },
            data: {
                columns: [
                    ['data1', -30, 200, 200, 400, -150, 250],
                    ['data2', 130, 100, -100, 200, -150, 50],
                    ['data3', -230, 200, 200, -300, 250, 250]
                ],
                type: 'bar',
                groups: [
                    ['data1', 'data2']
                ]
            },
            grid: {
                y: {
                    lines: [{value:0}]
                }
            }
        });
        setTimeout(function () {
            chart2.groups([['data1', 'data2', 'data3']])
        }, 1000);

        setTimeout(function () {
            chart2.load({
                columns: [['data4', 100, -50, 150, 200, -300, -100]]
            });
        }, 1500);

        setTimeout(function () {
            chart2.groups([['data1', 'data2', 'data3', 'data4']])
        }, 2000);
//       ===========================     End of stacked bar chart============================

//       ====================     Scatter plot================================
        var chart3 = c3.generate({
            bindto:'#scatter_plot',
            color: {
                pattern: ['#329cff','#fcb410','#5aca82','#937eff']
            },
            data: {
                xs: {
                    setosa: 'setosa_x',
                    versicolor: 'versicolor_x'
                },
                // iris data from R
                columns: [
                    ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                    ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]
                ],
                type: 'scatter'
            },
            axis: {
                x: {
                    label: 'Sepal.Width',
                    tick: {
                        fit: false
                    }
                },
                y: {
                    label: 'Petal.Width'
                }
            }
        });

        setTimeout(function () {
            chart3.load({
                xs: {
                    virginica: 'virginica_x'
                },
                columns: [
                    ["virginica_x", 3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0],
                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                ]
            });
        }, 1000);

        setTimeout(function () {
            chart3.unload({
                ids: 'setosa'
            });
        }, 2000);

        setTimeout(function () {
            chart3.load({
                columns: [
                    ["virginica", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]
                ]
            });
        }, 3000);

//       =============================     End of scatter plot===========================

//          ==============================  Rotated axis================================
        c3.generate({
            bindto:'#rotated_axis',
            color: {
                pattern: ['#329cff','#fcb410']
            },
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ],
                types: {
                    data1: 'bar'
                }
            },
            axis: {
                rotated: true
            }
        });
//          ====================================  end of rotated axis===============================
//       ====================================     Chart Type================================
        c3.generate({
            bindto: '#chart_type',
            color: {
                pattern: ['#329cff','#937eff','#5aca82']
            },
            data: {
                columns: [
                    ['data1', 30, 200, 100, 400, 150, 250],
                    ['data2', 50, 20, 10, 40, 15, 25]
                ],
                axes: {
                    data2: 'y2'
                },
                types: {
                    data2: 'bar' // ADD
                }
            },
            axis: {
                y: {
                    label: {
                        text: 'Y Label',
                        position: 'outer-middle'
                    }
                },
                y2: {
                    show: true,
                    label: {
                        text: 'Y2 Label',
                        position: 'outer-middle'
                    }
                }
            }
        });
//       ======================================     End of chart type======================

//       ======================     Pie chart==================================
        var chart5= c3.generate({
            bindto: '#pie_chart',
            color: {
                pattern: ['#329cff','#f86a67','#5aca82','#937eff']
            },
            data: {
                // iris data from R
                columns: [
                    ['data1', 40],
                    ['data2', 120]
                ],
                type : 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            }
        });

        setTimeout(function () {
            chart5.load({
                columns: [
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart5.unload({
                ids: 'data1'
            });
            chart5.unload({
                ids: 'data2'
            });
        }, 2500);
//       =========================================     End of pie chart===================

//       ==========================     Donut Chart===================================
        var chart6 = c3.generate({
            bindto: '#donut_chart',
            color: {
                pattern: ['#937eff','#5aca82','f86a67','#329cff']
            },
            data: {
                columns: [
                    ['data1', 40],
                    ['data2', 120]
                ],
                type : 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Iris Petal Width"
            }
        });

        setTimeout(function () {
            chart6.load({
                columns: [
                    ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                    ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                    ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8]
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart6.unload({
                ids: 'data1'
            });
            chart6.unload({
                ids: 'data2'
            });
        }, 2500);
//       =============================     End of donut chart==============================

//       ================================     Guage Chart=================================
        var chart7 = c3.generate({
            bindto: '#guage_chart',
            data: {
                columns: [
                    ['data', 91.4]
                ],
                type: 'gauge',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            gauge: {
            },
            color: {
                pattern: ['#329cff', '#5aca82', '#fcb410', '#937eff'], // the three color levels for the percentage values.
                threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
            size: {
                height: 180
            }
        });

        setTimeout(function () {
            chart7.load({
                columns: [['data', 10]]
            });
        }, 1000);

        setTimeout(function () {
            chart7.load({
                columns: [['data', 50]]
            });
        }, 2000);

        setTimeout(function () {
            chart7.load({
                columns: [['data', 70]]
            });
        }, 3000);

        setTimeout(function () {
            chart7.load({
                columns: [['data', 0]]
            });
        }, 4000);

        setTimeout(function () {
            chart7.load({
                columns: [['data', 100]]
            });
        }, 5000);
//       ==================================     End of guage chart=================================

//       =================================     Combination chart========================================
        c3.generate({
            bindto: '#combination_chart',
            color: {
                pattern: ['#329cff','#fcb410','#5aca82','#937eff','#31d0d6','#f86a67']
            },
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150],
                    ['data6', 90, 70, 20, 50, 60, 120]
                ],
                type: 'bar',
                types: {
                    data3: 'spline',
                    data4: 'line',
                    data6: 'area'
                },
                groups: [
                    ['data1','data2']
                ]
            }
        });
//       ===========================     End of combination chart=================================
    }
    bar_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            bar_resize();
        });
    });
});