"use strict";
$(document).ready(function () {
    function bar_chart_resize() {
//              ==============  Bipolar bar chart==========================
        var data = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10','W11','W12','W13'],
            series: [
                [2, 4, 6, 8, 6, 4, 2, -2, -4, -6,-4,-2,2]
            ]
        };

        var options = {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        new Chartist.Bar('#bipolar_bar_chart', data, options);
        //              ============== end of  Bipolar bar chart==========================

//                Overlapping bar chart
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [3,5,6,8,10,6,5,7,9,10,11,6],
                [2,3,6,5,12,8,6,4,8,10,5,8]
            ]
        };

        var options = {
            seriesBarDistance: 10
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        new Chartist.Bar('#overlapping_chart', data, options, responsiveOptions);
//                End of overlapping bar chart

//                Bar chart with circles
        // Create a simple bi-polar bar chart
        var chart = new Chartist.Bar('#peak_circles_chart', {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1,3,5,2,-2,-4,-6,-4,-2,3]
            ]
        }, {
            high: 10,
            low: -10,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        });

// Listen for draw events on the bar chart
        chart.on('draw', function(data) {
            // If this draw event is of type bar we can use the data to create additional content
            if(data.type === 'bar') {
                // We use the group element of the current series to append a simple circle with the bar peek coordinates and a circle radius that is depending on the value
                data.group.append(new Chartist.Svg('circle', {
                    cx: data.x2,
                    cy: data.y2,
                    r: Math.abs(Chartist.getMultiValue(data.value)) * 2 + 5
                }, 'ct-slice-pie'));
            }
        });
//                end of bar chart with circles

//                Multi line labels
        new Chartist.Bar('#multiline_label', {
            labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
            series: [
                [60000, 40000, 80000, 70000],
                [40000, 30000, 70000, 65000],
                [8000, 3000, 10000, 6000]
            ]
        }, {
            seriesBarDistance: 10,
            axisX: {
                offset: 60
            },
            axisY: {
                offset: 73,
                labelInterpolationFnc: function(value) {
                    return value + ' CHF'
                },
                scaleMinSpace: 15
            }
        });
//                End of multiline labels

//                Stacked bar chart
        new Chartist.Bar('#stacked_chart', {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            series: [
                [20,30,50,80],
                [30,40,40,30],
                [40,50,60,10]
            ]
        }, {
            stackBars: true,
            axisY: {
                offset: 45,
                labelInterpolationFnc: function(value) {
                    return (value / 1000) + 'k';
                }
            }
        }).on('draw', function(data) {
            if(data.type === 'bar') {
                data.element.attr({
                    style: 'stroke-width: 30px'
                });
            }
        });
//                End of stacked bar chart

//                Horizontal chart
        new Chartist.Bar('#horizontal_chart', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
//                        [5, 4, 3, 7, 5, 10, 3],
//                        [3, 2, 9, 5, 4, 6, 4]
                [3,5,6,8,10,6,5],
                [2,3,6,5,12,8,6]
            ]
        }, {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            axisY: {
                offset: 70
            }
        });
//                End of horizontal chart

//                Responsive configuration
        new Chartist.Bar('#responsive_chart', {
            labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
            series: [
                [5, 4, 3, 7],
                [3, 2, 9, 5],
                [1, 5, 8, 4],
                [2, 3, 4, 6],
                [4, 1, 2, 1]
            ]
        }, {
            // Default mobile configuration
            stackBars: true,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value.split(/\s+/).map(function(word) {
                        return word[0];
                    }).join('');
                }
            },
            axisY: {
                offset: 20
            }
        }, [
            // Options override for media > 400px
            ['screen and (min-width: 400px)', {
                reverseData: true,
                horizontalBars: true,
                axisX: {
                    labelInterpolationFnc: Chartist.noop
                },
                axisY: {
                    offset: 60
                }
            }],
            // Options override for media > 800px
            ['screen and (min-width: 800px)', {
                stackBars: false,
                seriesBarDistance: 10
            }],
            // Options override for media > 1000px
            ['screen and (min-width: 1000px)', {
                reverseData: false,
                horizontalBars: false,
                seriesBarDistance: 15
            }]
        ]);
//                End of responsive configuration

//                Distributed series
        new Chartist.Bar('#distributed_chart', {
            labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            series: [20, 60, 80, 125, 100, 20, 10]
        }, {
            distributeSeries: true
        });
//                End of distributed series

//                Label Placement
        new Chartist.Bar('#label_placement', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            series: [
                [5, 4, 3, 7, 5, 10, 3],
                [3, 2, 9, 5, 4, 6, 4]
            ]
        }, {
            axisX: {
                // On the x-axis start means top and end means bottom
                position: 'start'
            },
            axisY: {
                // On the y-axis start means left and end means right
                position: 'end'
            }
        });
//end of label placement
    }
    bar_chart_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            bar_chart_resize();
        })
    })
});