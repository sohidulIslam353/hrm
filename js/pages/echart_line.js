"use strict";
$(document).ready(function () {
    function echart_resize() {
        //    =========================    basic line chart==================================
        var echart1=echarts.init(document.getElementById('echart_line1'));
        var option1=({
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Maximum temperature','Minimum temperature']
            },
            toolbox: {
                show : true
            },
            color:["#329cff", "#937eff"],
            calculable : true,
            grid: {
                x: 40,
                x2:40
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [
                {
                    name:'Maximum temperature',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'The maximum value'},
                            {type : 'min', name: 'Minimum value'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'average value'}
                        ]
                    }
                },
                {
                    name:'Minimum temperature',
                    type:'line',
                    data:[1, -2, 2, 5, 3, 2, 0],
                    markPoint : {
                        data : [
                            {name : 'Week minimum', value : -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average value'}
                        ]
                    }
                }
            ]
        });
        echart1.setOption(option1);
//    =======================    End of basic line chart===================================

//       ==============================     Stacke dline chart================================
        var echart2=echarts.init(document.getElementById('echart_line2'));
        var option2 = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Email marketing','Affiliate advertising','Video ad','Direct interview','Search Engine']
            },
            toolbox: {
                show : true
            },
            color:["#5aca82", "#937eff","#fcb410","#f86a67",'#329cff'],
            calculable : true,
            grid: {
                x: 40,
                y:70,
                x2:40
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Email marketing',
                    type:'line',
                    stack: 'Total amount',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate advertising',
                    type:'line',
                    stack: 'Total amount',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video ad',
                    type:'line',
                    stack: 'Total amount',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Direct interview',
                    type:'line',
                    stack: 'Total amount',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Search Engine',
                    type:'line',
                    stack: 'Total amount',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        echart2.setOption(option2);
//       ================================     End of stacked line chart==========================

//       ===============================     Line chart with inverted axes========================
        var echart3=echarts.init(document.getElementById('echart_line3'));
        var option3 = {
            legend: {
                data:['height(km)With the temperature(°C)']
            },
            toolbox: {
                show : true
            },
            color:["#329cff"],
            calculable : true,
            tooltip : {
                trigger: 'axis',
                formatter: "Temperature : <br/>{b}km : {c}°C"
            },
            grid: {
                x: 50,
                x2:40
            },
            xAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisLine : {onZero: false},
                    axisLabel : {
                        formatter: '{value} km'
                    },
                    boundaryGap : false,
                    data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
                }
            ],
            series : [
                {
                    name:'height(km)With the temperature(°C)',
                    type:'line',
                    smooth:true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                shadowColor : 'rgba(0,0,0,0.4)'
                            }
                        }
                    },
                    data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
                }
            ]
        };
        echart3.setOption(option3);
//       ===========================     End of line chart with inverted axes=======================

//        =====================================    Basic fill area chart=========================
        var echart4=echarts.init(document.getElementById('echart_line4'));
        var option4 = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Intention','Pre order','Deal']
            },
            toolbox: {
                show : true
            },
            color:['#31d0d6','#fcb410','#f86a67'],
            calculable : true,
            grid: {
                x: 40,
                x2:40
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Intention',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name:'Pre order',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name:'Deal',
                    type:'line',
                    smooth:true,
                    itemStyle: {normal: {areaStyle: {type: 'default'}}},
                    data:[1320, 1132, 601, 234, 120, 90, 20]
                }
            ]
        };
        echart4.setOption(option4);
//       ==========================     End of Basic area chart===============================

//       =======================     Irregular line chart=====================================
        var echart5=echarts.init(document.getElementById('echart_line5'));
        var option5 = {
            tooltip : {
                trigger: 'axis',
                axisPointer:{
                    show: true,
                    type : 'cross',
                    lineStyle: {
                        type : 'dashed',
                        width : 1
                    }
                },
                formatter : function (params) {
                    return params.seriesName + ' : [ '
                        + params.value[0] + ', '
                        + params.value[1] + ' ]';
                }
            },
            grid: {
                x: 40,
                x2:40
            },
            legend: {
                data:['Data 1','Data 2']
            },
            toolbox: {
                show : true
            },
            color:['#31d0d6','#fcb410'],
            calculable : true,
            xAxis : [
                {
                    type: 'value'
                }
            ],
            yAxis : [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#f86a67'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'Data 1',
                    type:'line',
                    data:[
                        [1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]
                    ],
                    markPoint : {
                        data : [
                            // Vertical axis，default
                            {type : 'max', name: 'Maximum value',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'top'}}}},
                            {type : 'min', name: 'Minimum value',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'bottom'}}}},
                            // 横轴
                            {type : 'max', name: 'Maximum value', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'right'}}}},
                            {type : 'min', name: 'Minimum value', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'left'}}}}
                        ]
                    },
                    markLine : {
                        data : [
                            // Vertical axis，default
                            {type : 'max', name: 'Maximum value', itemStyle:{normal:{color:'#f86a67'}}},
                            {type : 'min', name: 'Minimum value', itemStyle:{normal:{color:'#f86a67'}}},
                            {type : 'average', name : 'Average value', itemStyle:{normal:{color:'#f86a67'}}},
                            // Horizontal axis
                            {type : 'max', name: 'Maximum value', valueIndex: 0, itemStyle:{normal:{color:'#937eff'}}},
                            {type : 'min', name: 'Minimum value', valueIndex: 0, itemStyle:{normal:{color:'#937eff'}}},
                            {type : 'average', name : 'Average value', valueIndex: 0, itemStyle:{normal:{color:'#937eff'}}}
                        ]
                    }
                },
                {
                    name:'Data 2',
                    type:'line',
                    data:[
                        [1, 2], [2, 3], [4, 2], [7, 5], [11, 2], [18, 3]
                    ]
                }
            ]
        };
        echart5.setOption(option5);
//       ============================     End of irregular line chart=========================

//       =============================     Line chart with time axis===============================
        var echart6=echarts.init(document.getElementById('echart_line6'));
        var option6 = {
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                    var date = new Date(params.value[0]);
                    data = date.getFullYear() + '-'
                        + (date.getMonth() + 1) + '-'
                        + date.getDate() + ' '
                        + date.getHours() + ':'
                        + date.getMinutes();
                    return data + '<br/>'
                        + params.value[1] + ', '
                        + params.value[2];
                }
            },
            color:['#937eff'],
            toolbox: {
                show : true,
            },
            dataZoom: {
                show: true,
                start : 70
            },
            legend : {
                data : ['series1']
            },
            grid: {
                x:40,
                x2:40
            },
            xAxis : [
                {
                    type : 'time',
                    splitNumber:10
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name: 'series1',
                    type: 'line',
                    showAllSymbol: true,
                    symbolSize: function (value){
                        return Math.round(value[2]/10) + 2;
                    },
                    data: (function () {
                        var d = [];
                        var len = 0;
                        var now = new Date();
                        var value;
                        while (len++ < 200) {
                            d.push([
                                new Date(2014, 9, 1, 0, len * 10000),
                                (Math.random()*30).toFixed(2) - 0,
                                (Math.random()*100).toFixed(2) - 0
                            ]);
                        }
                        return d;
                    })()
                }
            ]
        };
        echart6.setOption(option6);
//       ===========================     End of line chart wih time axis===========================

//       =============================     Multilevel control line chart=============================
        var echart7=echarts.init(document.getElementById('echart_line7'));
        var option7 = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Email marketing','Affiliate advertising','Direct interview','Search engine']
            },
            toolbox: {
                show : true
            },
            color:['#329cff','#fcb410','#937eff','#f86a67'],
            calculable : true,
            grid: {
                x: 40,
                y:70,
                x2:40
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Email marketing',
                    type:'line',
                    stack: 'Total amount',
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                            }
                        }
                    },
                    data:[
                        120, 132, 301, 134,
                        {value:90, symbol:'droplet',symbolSize:5},
                        230, 210
                    ]
                },
                {
                    name:'Affiliate advertising',
                    type:'line',
                    stack: 'Total amount',
                    smooth: true,
                    symbolSize: 8,
                    data:[
                        120, 82,
                        {
                            value:201,
                            symbol: 'star',
                            symbolSize : 15,
                            itemStyle : { normal: {label : {
                                show: true,
                                textStyle : {
                                    fontSize : '20',
                                    fontFamily : 'Microsoft ya black',
                                    fontWeight : 'bold'
                                }
                            }}}
                        },
                        {
                            value:134,
                            symbol: 'none'
                        },
                        190,
                        {
                            value : 230,
                            symbol: 'emptypin',
                            symbolSize: 8
                        },
                        110
                    ]
                },
                {
                    name:'Direct interview',
                    type:'line',
                    stack: 'Total amount',
                    symbol: 'arrow',
                    symbolSize: 6,
                    symbolRotate: -45,
                    itemStyle: {
                        normal: {
                            color: 'red',
                            lineStyle: {
                                width: 2,
                                type: 'dashed'
                            }
                        },
                        emphasis: {
                            color: 'blue'
                        }
                    },
                    data:[
                        320, 332, '-', 334,
                        {
                            value: 390,
                            symbol: 'star6',
                            symbolSize : 20,
                            symbolRotate : 10,
                            itemStyle: {
                                normal: {
                                    color: 'yellowgreen'
                                },
                                emphasis: {
                                    color: 'orange',
                                    label : {
                                        show: true,
                                        position: 'inside',
                                        textStyle : {
                                            fontSize : '20'
                                        }
                                    }
                                }
                            }
                        },
                        330, 320
                    ]
                },
                {
                    name:'Search engine',
                    type:'line',
                    symbol:'emptyCircle',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 2,
                                shadowColor : 'rgba(0,0,0,0.5)',
                                shadowBlur: 10,
                                shadowOffsetX: 8,
                                shadowOffsetY: 8
                            }
                        },
                        emphasis : {
                            label : {show: true}
                        }
                    },
                    data:[
                        620, 732, 791,
                        {value:734, symbol:'emptyHeart',symbolSize:10},
                        890, 930, 820
                    ]
                }
            ]
        };
        echart7.setOption(option7);

//       ============================     End of Multilevel control line chart===========================

//       ========================================     Logerthemic Chart=============================
        var echart8=echarts.init(document.getElementById('echart_line8'));
        var option8 = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: 'center',
                data: ["2 of the index", "3 of the index"]
            },
            color:['#329cff','#937eff'],
            grid: {
                x: 45,
                x2:40
            },
            xAxis: [
                {
                    type: "category",
                    name: "x",
                    splitLine: {show: false},
                    data: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
                }
            ],
            yAxis: [
                {
                    type: "log",
                    name: "y"
                }
            ],
            toolbox: {
                show: true
            },
            calculable: true,
            series: [
                {
                    name: "3 of the index",
                    type: "line",
                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]

                },
                {
                    name: "2 of the index",
                    type: "line",
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]

                }
            ]
        };
        echart8.setOption(option8);
//       ============================     End of logerthemic chart=====================================
    }
    echart_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            echart_resize();
        });
    });
    $(window).resize(function () {
        echart_resize();
    })


})