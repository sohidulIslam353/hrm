"use strict";
$(document).ready(function () {
    function bar_resize() {
//         =========================   basic bar chart======================
        var echart1=echarts.init(document.getElementById('echart_bar1'));
        var option1 = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Evaporation','Precipitation']
            },
            toolbox: {
                show : true
            },
            calculable : true,
            color:['#329cff','#fcb410'],
            grid:{
                x:50,
                x2:50
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaporation',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'The maximum value'},
                            {type : 'min', name: 'Minimum value'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average value'}
                        ]
                    }
                },
                {
                    name:'Precipitation',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint : {
                        data : [
                            {name : 'The highest year', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : 'Year minimum', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average value'}
                        ]
                    }
                }
            ]
        };
        echart1.setOption(option1);
//        ===========================    End of basic bar chart====================

//       ===========================     Stacked bar chart===============================
        var echart2=echarts.init(document.getElementById('echart_bar2'));
        var option2 = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            legend: {
                data:['Direct interview','Mail marketing','Affiliate advertising','Video ad','Search engine','Baidu']
            },
            toolbox: {
                show : true,
                orient: 'vertical',
                x: 'right',
                y: 'center'
            },
            grid:{
                x:50,
                x2:50,
                y:75
            },
            color:['#937eff','#fcb410','#5aca82','#329cff','#31d0d6','#f86a67','#007bb8'],
            calculable : true,
            xAxis : [
                {
                    type : 'category',
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
                    name:'Direct interview',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Mail marketing',
                    type:'bar',
                    stack: 'Advertising',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Affiliate advertising',
                    type:'bar',
                    stack: 'Advertising',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Video ad',
                    type:'bar',
                    stack: 'Advertising',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Search engine',
                    type:'bar',
                    data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine : {
                        itemStyle:{
                            normal:{
                                lineStyle:{
                                    type: 'dashed'
                                }
                            }
                        },
                        data : [
                            [{type : 'min'}, {type : 'max'}]
                        ]
                    }
                },
                {
                    name:'Baidu',
                    type:'bar',
                    barWidth : 5,
                    stack: 'Search engine',
                    data:[620, 732, 701, 734, 1090, 1130, 1120]
                }
            ]
        };
        echart2.setOption(option2);

//       ======================     End of stacked bar chart==============================

//       =========================     Thermometer bar chart==============================
        var echart3=echarts.init(document.getElementById('echart_bar3'));
        var option3 = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                },
                formatter: function (params){
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + params[0].value + '<br/>'
                        + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
                }
            },
            legend: {
                selectedMode:true,
                data:['Acutal', 'Forecast']
            },
            toolbox: {
                show : true
            },
            grid:{
                x:50,
                x2:50
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Cosco','CMA','APL','OOCL','Wanhai','Zim']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    boundaryGap: [0, 0.1]
                }
            ],
            series : [
                {
                    name:'Acutal',
                    type:'bar',
                    stack: 'sum',
                    barCategoryGap: '50%',
                    itemStyle: {
                        normal: {
                            color: '#937eff',
                            barBorderColor: '#937eff',
                            barBorderWidth: 6,
                            barBorderRadius:0,
                            label : {
                                show: true, position: 'insideTop'
                            }
                        }
                    },
                    data:[260, 200, 220, 120, 100, 80]
                },
                {
                    name:'Forecast',
                    type:'bar',
                    stack: 'sum',
                    itemStyle: {
                        normal: {
                            color: '#31d0d6',
                            barBorderColor: '#937eff',
                            barBorderWidth: 6,
                            barBorderRadius:0,
                            label : {
                                show: true,
                                position: 'top',
                                formatter: function (params) {
                                    for (var i = 0, l = option3.xAxis[0].data.length; i < l; i++) {
                                        if (option3.xAxis[0].data[i] == params.name) {
                                            return option3.series[0].data[i] + params.value;
                                        }
                                    }
                                },
                                textStyle: {
                                    color: '#937eff'
                                }
                            }
                        }
                    },
                    data:[40, 80, 50, 80, 80, 70]
                }
            ]
        };

        echart3.setOption(option3);
//       ===========================     End of thermometer bar chart=======================

//       ==================================     Change water fall bar chart========================
        var echart4=echarts.init(document.getElementById('echart_bar4'));
        var option4 = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            grid:{
                x:50,
                x2:50
            },
            legend: {
                data:['Expenditure','Income']
            },
            toolbox: {
                show : true
            },
            color:['#fcb410','#31d0d6'],
            xAxis : [
                {
                    type : 'category',
                    splitLine: {show:false},
                    data :  function (){
                        var list = [];
                        for (var i = 1; i <= 11; i++) {
                            list.push('Nov' + i + 'Day');
                        }
                        return list;
                    }()
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Auxiliary',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle:{
                        normal:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        },
                        emphasis:{
                            barBorderColor:'rgba(0,0,0,0)',
                            color:'rgba(0,0,0,0)'
                        }
                    },
                    data:[0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
                },
                {
                    name:'Income',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle : { normal: {label : {show: true, position: 'top'}}},
                    data:[900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
                },
                {
                    name:'Expenditure',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle : { normal: {label : {show: true, position: 'bottom'}}},
                    data:['-', '-', '-', '108', '150', '-', '-', '-', '119', '361', '203']
                },
                // {
                //     name:'Expenditure',
                //     type:'bar',
                //     stack: 'Total amount',
                //     itemStyle : { normal: {label : {show: true, position: 'top'}}},
                //     data:['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
                // }
            ]
        };
        echart4.setOption(option4);
//       =========================     End of change waterfall bar chart===========================

//       ================================     Inverted bar chart================================
        var echart5=echarts.init(document.getElementById('echart_bar5'));
        var option5 = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Year 2011', 'Year 2012']
            },
            grid:{
                x:110,
                x2:50
            },
            toolbox: {
                show : true
            },
            color:['#31d0d6','#329cff'],
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01]
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['Brazil','Indonesia','United States','India','China','World Population(Million)']
                }
            ],
            series : [
                {
                    name:'Year 2011',
                    type:'bar',
                    data:[18, 23, 29, 10, 99, 80]
                },
                {
                    name:'Year 2012',
                    type:'bar',
                    data:[19, 23, 30, 55, 40, 75]
                }
            ]
        };
        echart5.setOption(option5);
//       ==============================     End of inverted bar chart=============================

//       ================================     Stacked floating bar chart===============================
        var echart6=echarts.init(document.getElementById('echart_bar6'));
        var placeHoledStyle = {
            normal:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            },
            emphasis:{
                barBorderColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)'
            }
        };
        var dataStyle = {
            normal: {
                label : {
                    show: true,
                    position: 'insideLeft',
                    formatter: '{c}%'
                }
            }
        };
        var option6 = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                },
                formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
            },
            legend: {
                y: 55,
                itemGap : document.getElementById('echart_bar6').offsetWidth / 8,
                data:['GML', 'PYP','WTC', 'ZTW']
            },
            color:['#f86a67','#007bb8','#5aca82','#fcb410'],
            toolbox: {
                show : true
            },
            grid: {
                x:50,
                x2:50,
                y:100
            },
            xAxis : [
                {
                    type : 'value',
                    position: 'top',
                    splitLine: {show: false},
                    axisLabel: {show: false}
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    splitLine: {show: false},
                    data : ['Chongqing', 'Tianjin', 'Shanghai', 'Beijing']
                }
            ],
            series : [
                {
                    name:'GML',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle : dataStyle,
                    data:[38, 50, 33, 72]
                },
                {
                    name:'GML',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle: placeHoledStyle,
                    data:[62, 50, 67, 28]
                },
                {
                    name:'PYP',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle : dataStyle,
                    data:[61, 41, 42, 30]
                },
                {
                    name:'PYP',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle: placeHoledStyle,
                    data:[39, 59, 58, 70]
                },
                {
                    name:'WTC',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle : dataStyle,
                    data:[37, 35, 44, 60]
                },
                {
                    name:'WTC',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle: placeHoledStyle,
                    data:[63, 65, 56, 40]
                },
                {
                    name:'ZTW',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle : dataStyle,
                    data:[71, 50, 31, 39]
                },
                {
                    name:'ZTW',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle: placeHoledStyle,
                    data:[29, 50, 69, 61]
                }
            ]
        };
        echart6.setOption(option6);
//       ==========================     End of stacked floating bar chart==============================

//        =================================    Tornado bar chart=====================================
        var echart7=echarts.init(document.getElementById('echart_bar7'));
        var option7 = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            legend: {
                data:['Profit', 'Expenditure', 'Income']
            },
            toolbox: {
                show : true
            },
            calculable : true,
            grid:{
                x:50,
                x2:50
            },
            color:['#329cff','#937eff','#f86a67'],
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    axisTick : {show: false},
                    data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
                }
            ],
            series : [
                {
                    name:'Profit',
                    type:'bar',
                    itemStyle : { normal: {label : {show: true, position: 'right'}}},
                    data:[20, 17, 24, 24, 20, 22, 21]
                },
                {
                    name:'Income',
                    type:'bar',
                    stack: 'Total amount',
                    barWidth : 5,
                    itemStyle: {normal: {
                        label : {show: true, position: 'right'}
                    }},
                    data:[32, 30, 34, 37, 39, 45, 42]
                },
                {
                    name:'Expenditure',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle: {normal: {
                        label : {show: true, position: 'left'}
                    }},
                    data:[-12, -13, -10, -13, -19, -23, -21]
                }
            ]
        };
        echart7.setOption(option7);
//        ============================    End of tornado bar chart======================================

//        ============================    Irregular bar chart=========================================
        var echart8=echarts.init(document.getElementById('echart_bar8'));
        var option8 = {
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
            legend: {
                data:['Data 1','Data 2']
            },
            toolbox: {
                show : true
            },
            color:['#329cff','#31d0d6'],
            calculable : true,
            xAxis : [
                {
                    type : 'value'
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#dc143c'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'Data 1',
                    type:'bar',
                    data:[
                        [1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]
                    ],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'The maximum value',symbol: 'emptyCircle', itemStyle:{normal:{color:'#f86a67',label:{position:'top'}}}},
                            {type : 'min', name: 'Minimum value',symbol: 'emptyCircle', itemStyle:{normal:{color:'#f86a67',label:{position:'bottom'}}}},
                            {type : 'max', name: 'The maximum value', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#fcb410',label:{position:'right'}}}},
                            {type : 'min', name: 'Minimum value', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#fcb410',label:{position:'left'}}}}
                        ]
                    },
                    markLine : {
                        data : [

                            {type : 'max', name: 'The maximum value', itemStyle:{normal:{color:'#f86a67'}}},
                            {type : 'min', name: 'Minimum value', itemStyle:{normal:{color:'#f86a67'}}},
                            {type : 'average', name : 'Average value', itemStyle:{normal:{color:'#f86a67'}}},

                            {type : 'max', name: 'The maximum value', valueIndex: 0, itemStyle:{normal:{color:'#fcb410'}}},
                            {type : 'min', name: 'Minimum value', valueIndex: 0, itemStyle:{normal:{color:'#fcb410'}}},
                            {type : 'average', name : 'Average value', valueIndex: 0, itemStyle:{normal:{color:'#fcb410'}}}
                        ]
                    }
                },
                {
                    name:'Data 2',
                    type:'bar',
                    barHeight:10,
                    data:[
                        [1, 2], [2, 3], [4, 4], [7, 5], [11, 11], [18, 15]
                    ]
                }
            ]
        };
        echart8.setOption(option8);
//        ===========================    End of irregular bar chart======================================

//        =============================    Multiple series rainbow bar chart===============================
        var echart9=echarts.init(document.getElementById('echart_bar9'));
        var option9 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                x: 'center',
                data:['2010','2011','2012','2013']
            },
            toolbox: {
                show: true
            },
            calculable: true,
            color:['#f86a67','#31d0d6','#fcb410','#937eff'],
            grid: {
                y: 80,
                y2: 50,
                x2: 40,
                x:40
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Food', 'Clothes', 'Live', 'Other']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '2010',
                    type: 'bar',
                    data: [4804.7,1444.3,1332.1,908,871.8,1983.7,1627.6,499.2]
                },
                {
                    name: '2011',
                    type: 'bar',
                    data: [5506.3,1674.7,1405,1023.2,969,2149.7,1851.7,581.3]
                },
                {
                    name: '2012',
                    type: 'bar',
                    data: [6040.9,1823.4,1484.3,1116.1,1063.7,2455.5,2033.5,657.1]
                },
                {
                    name: '2013',
                    type: 'bar',
                    data: [6311.9,1902,1745.1,1215.1,1118.3,2736.9,2294,699.4]
                }
            ]
        };
        echart9.setOption(option9);
//        ============================    End of multiple series rainbow bar chart==========================

//        =================================    Multilevel control bar chart===============================
        var echart10=echarts.init(document.getElementById('echart_bar10'));
        var option10 = {
            tooltip : {
                show: true,
                trigger: 'item'
            },
            legend: {
                data:['Mail marketing','Affiliate advertising','Direct interview','Search engine']
            },
            toolbox: {
                show : true
            },
            grid:{
                x:30,
                x2:35,
                y:80
            },
            color:['#329cff','#937eff','#31d0d6'],
            calculable : true,
            xAxis : [
                {
                    type : 'category',
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
                    name:'Mail marketing',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderColor:'#5aca82',
                            barBorderWidth: 5
                        },
                        emphasis: {
                            barBorderWidth: 5,
                            barBorderColor:'#5aca82',
                            label : {
                                show : true,
                                position : 'top',
                                formatter : "{a} {b} {c}",
                                textStyle : {
                                    color: '#329cff'
                                }
                            }
                        }
                    },
                    data:[22, 23, 10, 23, 19, 33, 21]
                },
                {
                    name:'Affiliate advertising',
                    type:'bar',
                    stack: 'Total amount',
                    data:[12, '-', 45, 13, 19, 23, 11]
                },
                {
                    name:'Direct interview',
                    type:'bar',
                    stack: 'Total amount',
                    itemStyle: {
                        normal: {
                            barBorderWidth: 6,
                            barBorderColor:'#5aca82',
                            color: '#5aca82'
                        },
                        emphasis: {
                            barBorderColor:'#5aca82',
                            color: '#329cff'
                        }
                    },
                    data:[
                        32, 33, 10, 33,
                        {
                            value: 39,
                            symbolSize : 10,
                            itemStyle: {
                                normal: {
                                    color :'#fcb410'
                                },
                                emphasis: {
                                    color: 'skyBlue'
                                }
                            }
                        },
                        33, 32
                    ]
                },
                {
                    name:'Search engine',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            borderRadius: 5,
                            label : {
                                show : true
                            }
                        }
                    },
                    data:[
                        62, 73,
                        {
                            value: 70,
                            itemStyle : { normal: {label : {position: 'inside'}}}
                        },
                        73, 89, 93, 82
                    ],
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average value'},
                            {type : 'max'},
                            {type : 'min'}
                        ]
                    }
                }
            ]
        };
        echart10.setOption(option10);
//        ===================================    End of multilevel control bar chart============================

    }
    bar_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            bar_resize();
        });
    });
    $(window).resize(function () {
        bar_resize();
    })
})