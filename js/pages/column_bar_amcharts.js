"use strict";
$(document).ready(function () {
//    =======================    column with rotated series====================================
    var chart1=AmCharts.makeChart("amchart1", {
        "type": "serial",
        "theme": "light",
        "marginRight": 70,
        "dataProvider": [{
            "country": "USA",
            "visits": 3025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 1882,
            "color": "#FF6600"
        }, {
            "country": "Japan",
            "visits": 1809,
            "color": "#FF9E01"
        }, {
            "country": "Germany",
            "visits": 1322,
            "color": "#FCD202"
        }, {
            "country": "UK",
            "visits": 1122,
            "color": "#F8FF01"
        }, {
            "country": "France",
            "visits": 1114,
            "color": "#B0DE09"
        }, {
            "country": "India",
            "visits": 984,
            "color": "#04D215"
        }, {
            "country": "Spain",
            "visits": 711,
            "color": "#0D8ECF"
        }, {
            "country": "Netherlands",
            "visits": 665,
            "color": "#0D52D1"
        }, {
            "country": "Russia",
            "visits": 580,
            "color": "#2A0CD0"
        }, {
            "country": "South Korea",
            "visits": 443,
            "color": "#8A0CCF"
        }, {
            "country": "Canada",
            "visits": 441,
            "color": "#CD0D74"
        }],
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left",
            "title": "Visitors from country"
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<b>[[category]]: [[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "type": "column",
            "valueField": "visits"
        }],
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 45
        },
        "export": {
            "enabled": true
        }

    });
    $(".chart1_input_range").off().on("input change", function() {
        var chart_property1=$(this).data("property");
        var x1=chart1;
        chart1.startDuration=0,
        "fillAlphas"==chart_property1&&(x1=chart1.graphs[0]),
            x1[chart_property1]=this.value,
            chart1.validateNow()
    });
//    =======================    End of column with rotated series==============================

//    ========================    stacked column chart==================================
    AmCharts.makeChart("amchart2", {
        "type": "serial",
        "theme": "light",
        "legend": {
            "horizontalGap": 10,
            "maxColumns": 1,
            "position": "bottom",
            "useGraphSettings": true,
            "markerSize": 10
        },
        "dataProvider": [{
            "year": 2003,
            "europe": 2.5,
            "namerica": 2.5,
            "asia": 2.1,
            "lamerica": 0.3,
            "meast": 0.2,
            "africa": 0.1
        }, {
            "year": 2004,
            "europe": 2.6,
            "namerica": 2.7,
            "asia": 2.2,
            "lamerica": 0.3,
            "meast": 0.3,
            "africa": 0.1
        }, {
            "year": 2005,
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "lamerica": 0.3,
            "meast": 0.3,
            "africa": 0.1
        }],
        "valueAxes": [{
            "stackType": "regular",
            "axisAlpha": 0.3,
            "gridAlpha": 0
        }],
        "graphs": [{
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Europe",
            "type": "column",
            "color": "#fff",
            "valueField": "europe",
            "lineColor":'#329cff'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "North America",
            "type": "column",
            "color": "#fff",
            "valueField": "namerica",
            "lineColor":'#fcb410'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Asia-Pacific",
            "type": "column",
            "color": "#fff",
            "valueField": "asia",
            "lineColor":'#5aca82'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Latin America",
            "type": "column",
            "color": "#fff",
            "valueField": "lamerica",
            "lineColor":'#f86a67'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Middle-East",
            "type": "column",
            "color": "#fff",
            "valueField": "meast",
            "lineColor":'#31d0d6'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Africa",
            "type": "column",
            "color": "#fff",
            "valueField": "africa",
            "lineColor":'#937eff'
        }],
        "categoryField": "year",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
        },
        "export": {
            "enabled": true
        }

    });

//    ===========================    End of stacked column chart==============================

//    ==============================    Gantt charts with dates================================
    AmCharts.makeChart( "amchart3", {
        "type": "gantt",
        "theme": "light",
        "marginRight": 70,
        "period": "DD",
        "dataDateFormat": "YYYY-MM-DD",
        "columnWidth": 0.5,
        "valueAxis": {
            "type": "date"
        },
        "brightnessStep": 7,
        "graph": {
            "lineAlpha": 1,
            "lineColor": "#fff",
            "fillAlphas": 0.85,
            "balloonText": "<b>[[task]]</b>:<br />[[open]] -- [[value]]"
        },
        "rotate": true,
        "categoryField": "category",
        "segmentsField": "segments",
        "colorField": "color",
        "startDateField": "start",
        "endDateField": "end",
        "dataProvider": [ {
            "category": "Module #1",
            "segments": [ {
                "start": "2016-01-01",
                "end": "2016-01-14",
                "color": "#329cff",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-16",
                "end": "2016-01-27",
                "task": "Producing specifications"
            }, {
                "start": "2016-02-05",
                "end": "2016-04-18",
                "task": "Development"
            }, {
                "start": "2016-04-18",
                "end": "2016-04-30",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Module #2",
            "segments": [ {
                "start": "2016-01-08",
                "end": "2016-01-10",
                "color": "#937eff",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-12",
                "end": "2016-01-15",
                "task": "Producing specifications"
            }, {
                "start": "2016-01-16",
                "end": "2016-02-05",
                "task": "Development"
            }, {
                "start": "2016-02-10",
                "end": "2016-02-18",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Module #3",
            "segments": [ {
                "start": "2016-01-02",
                "end": "2016-01-08",
                "color": "#fcb410",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-08",
                "end": "2016-01-16",
                "task": "Producing specifications"
            }, {
                "start": "2016-01-19",
                "end": "2016-03-01",
                "task": "Development"
            }, {
                "start": "2016-03-12",
                "end": "2016-04-05",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Module #4",
            "segments": [ {
                "start": "2016-01-01",
                "end": "2016-01-19",
                "color": "#5aca82",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-19",
                "end": "2016-02-03",
                "task": "Producing specifications"
            }, {
                "start": "2016-03-20",
                "end": "2016-04-25",
                "task": "Development"
            }, {
                "start": "2016-04-27",
                "end": "2016-05-15",
                "task": "Testing and QA"
            } ]
        }, {
            "category": "Module #5",
            "segments": [ {
                "start": "2016-01-01",
                "end": "2016-01-12",
                "color": "#f86a67",
                "task": "Gathering requirements"
            }, {
                "start": "2016-01-12",
                "end": "2016-01-19",
                "task": "Producing specifications"
            }, {
                "start": "2016-01-19",
                "end": "2016-03-01",
                "task": "Development"
            }, {
                "start": "2016-03-08",
                "end": "2016-03-30",
                "task": "Testing and QA"
            } ]
        } ],
        "valueScrollbar": {
            "autoGridCount": true,
            "color":'#536973'
        },
        "chartCursor": {
            "cursorColor": "#31d0d6",
            "valueBalloonsEnabled": false,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.5,
            "valueLineBalloonEnabled": true,
            "valueLineEnabled": true,
            "zoomable": false,
            "valueZoomable": true
        },
        "export": {
            "enabled": true
        }
    } );
//    =========================    End of gantt chart with dates================================

//    ============================    3D cylinder chart==========================================
    var chart4 = AmCharts.makeChart("amchart4", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": "USA",
            "visits": 4025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 1882,
            "color": "#FF6600"
        }, {
            "country": "Japan",
            "visits": 1809,
            "color": "#FF9E01"
        }, {
            "country": "Germany",
            "visits": 1322,
            "color": "#FCD202"
        }, {
            "country": "UK",
            "visits": 1122,
            "color": "#F8FF01"
        }, {
            "country": "France",
            "visits": 1114,
            "color": "#B0DE09"
        }, {
            "country": "India",
            "visits": 984,
            "color": "#04D215"
        }, {
            "country": "Spain",
            "visits": 711,
            "color": "#0D8ECF"
        }, {
            "country": "Netherlands",
            "visits": 665,
            "color": "#0D52D1"
        }, {
            "country": "Russia",
            "visits": 580,
            "color": "#2A0CD0"
        }, {
            "country": "South Korea",
            "visits": 443,
            "color": "#8A0CCF"
        }, {
            "country": "Canada",
            "visits": 441,
            "color": "#CD0D74"
        }, {
            "country": "Brazil",
            "visits": 395,
            "color": "#754DEB"
        }, {
            "country": "Italy",
            "visits": 386,
            "color": "#DDDDDD"
        }, {
            "country": "Taiwan",
            "visits": 338,
            "color": "#333333"
        }],
        "valueAxes": [{
            "position": "left",
            "axisAlpha":0,
            "gridAlpha":0
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius":1,
            "valueField": "visits"
        }],
        "depth3D": 40,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha":0,
            "gridAlpha":0

        },
        "export": {
            "enabled": true
        }

    }, 0);
    $(".chart4_input_range").off().on("input change", function() {
        var chart_property4=$(this).data("property");
        var x4=chart4;
        chart4.startDuration=0,
        "topRadius"==chart_property4&&(x4=chart4.graphs[0]),
            x4[chart_property4]=this.value,
            chart4.validateNow()
    });
//    ===============================    end of 3d cylinder chart==================================

//     =============================   3D column chart========================================
    var chart5 = AmCharts.makeChart("amchart5", {
        "theme": "light",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": "USA",
            "visits": 4025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 1882,
            "color": "#FF6600"
        }, {
            "country": "Japan",
            "visits": 1809,
            "color": "#FF9E01"
        }, {
            "country": "Germany",
            "visits": 1322,
            "color": "#FCD202"
        }, {
            "country": "UK",
            "visits": 1122,
            "color": "#F8FF01"
        }, {
            "country": "France",
            "visits": 1114,
            "color": "#B0DE09"
        }, {
            "country": "India",
            "visits": 984,
            "color": "#04D215"
        }, {
            "country": "Spain",
            "visits": 711,
            "color": "#0D8ECF"
        }, {
            "country": "Netherlands",
            "visits": 665,
            "color": "#0D52D1"
        }, {
            "country": "Russia",
            "visits": 580,
            "color": "#2A0CD0"
        }, {
            "country": "South Korea",
            "visits": 443,
            "color": "#8A0CCF"
        }, {
            "country": "Canada",
            "visits": 441,
            "color": "#CD0D74"
        }, {
            "country": "Brazil",
            "visits": 395,
            "color": "#754DEB"
        }, {
            "country": "Italy",
            "visits": 386,
            "color": "#DDDDDD"
        }, {
            "country": "Australia",
            "visits": 384,
            "color": "#999999"
        }, {
            "country": "Taiwan",
            "visits": 338,
            "color": "#333333"
        }, {
            "country": "Poland",
            "visits": 328,
            "color": "#000000"
        }],
        "valueAxes": [{
            "position": "left",
            "title": "Visitors"
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "fillColorsField": "color",
            "fillAlphas": 1,
            "lineAlpha": 0.1,
            "type": "column",
            "valueField": "visits"
        }],
        "depth3D": 20,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "labelRotation": 90
        },
        "export": {
            "enabled": true
        }

    });
    $(".chart5_input_range").off().on("input change", function() {
        var chart_property5=$(this).data("property");
        var x5=chart5;
        chart5.startDuration=0,
        "fillAlphas"==chart_property5&&(x5=chart5.graphs[0]),
            x5[chart_property5]=this.value,
            chart5.validateNow()
    });
//     ===================================   End of 3d column chart==============================

//    ==========================    Layered column amchart=======================================
    var chart6 = AmCharts.makeChart("amchart6", {
        "theme": "light",
        "type": "serial",
        "dataProvider": [{
            "country": "USA",
            "year2004": 3.5,
            "year2005": 4.2
        }, {
            "country": "UK",
            "year2004": 1.7,
            "year2005": 3.1
        }, {
            "country": "Canada",
            "year2004": 2.8,
            "year2005": 2.9
        }, {
            "country": "Japan",
            "year2004": 2.6,
            "year2005": 2.3
        }, {
            "country": "France",
            "year2004": 1.4,
            "year2005": 2.1
        }, {
            "country": "Brazil",
            "year2004": 2.6,
            "year2005": 4.9
        }],
        "valueAxes": [{
            "unit": "%",
            "position": "left",
            "title": "GDP growth rate",
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "title": "2004",
            "type": "column",
            "valueField": "year2004",
            "lineColor":'#329cff'
        }, {
            "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "title": "2005",
            "type": "column",
            "clustered":false,
            "columnWidth":0.5,
            "valueField": "year2005",
            "lineColor":'#fcb410'
        }],
        "plotAreaFillAlphas": 0.1,
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start"
        },
        "export": {
            "enabled": true
        }

    });
//    =============================    End of layered column amchart================================

//      ======================  Stacked and Clustered Column Chart========================================
    var chart7 = AmCharts.makeChart( "amchart7", {
        "type": "serial",
        "theme": "light",
        "depth3D": 20,
        "angle": 30,
        "legend": {
            "horizontalGap": 10,
            "useGraphSettings": true,
            "markerSize": 10
        },
        "dataProvider": [ {
            "year": 2003,
            "europe": 2.5,
            "namerica": 2.5,
            "asia": 2.1,
            "lamerica": 1.2,
            "meast": 0.2,
            "africa": 0.1
        }, {
            "year": 2004,
            "europe": 2.6,
            "namerica": 2.7,
            "asia": 2.2,
            "lamerica": 1.3,
            "meast": 0.3,
            "africa": 0.1
        }, {
            "year": 2005,
            "europe": 2.8,
            "namerica": 2.9,
            "asia": 2.4,
            "lamerica": 1.4,
            "meast": 0.3,
            "africa": 0.1
        } ],
        "valueAxes": [ {
            "stackType": "regular",
            "axisAlpha": 0,
            "gridAlpha": 0
        } ],
        "graphs": [ {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Europe",
            "type": "column",
            "color": "#fff",
            "valueField": "europe",
            "lineColor":'#329cff'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "North America",
            "type": "column",
            "color": "#fff",
            "valueField": "namerica",
            "lineColor":'#fcb410'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Asia-Pacific",
            "type": "column",
            "newStack": true,
            "color": "#fff",
            "valueField": "asia",
            "lineColor":'#5aca82'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Latin America",
            "type": "column",
            "color": "#fff",
            "valueField": "lamerica",
            "lineColor":'#f86a67'

        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Middle-East",
            "type": "column",
            "color": "#fff",
            "valueField": "meast",
            "lineColor":'#937eff'
        }, {
            "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
            "fillAlphas": 0.8,
            "labelText": "[[value]]",
            "lineAlpha": 0.3,
            "title": "Africa",
            "type": "column",
            "color": "#fff",
            "valueField": "africa",
            "lineColor":'#31d0d6'
        } ],
        "categoryField": "year",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "position": "left"
        },
        "export": {
            "enabled": true
        }

    } );
    $(".chart7_input_range").off().on("input change", function() {
        var chart_property7=$(this).data("property");
        var x7=chart7;
        chart7.startDuration=0,
        "fillAlphas"==chart_property7&&(x7=chart7.graphs[0]),
            x7[chart_property7]=this.value,
            chart7.validateNow()
    });
//      ====================  end of Stacked and Clustered Column Chart===================================

//      ==============================  floating bar chart===========================================
    var chart8 = AmCharts.makeChart("amchart8", {
        "theme": "light",
        "type": "serial",
        "dataProvider": [{
            "name": "John",
            "startTime": 8,
            "endTime": 11,
            "color": "#937eff"
        }, {
            "name": "Joe",
            "startTime": 10,
            "endTime": 13,
            "color": "#fcb410"
        }, {
            "name": "Susan",
            "startTime": 11,
            "endTime": 18,
            "color": "#31d0d6"
        }, {
            "name": "Eaton",
            "startTime": 15,
            "endTime": 19,
            "color": "#329cff"
        }],
        "valueAxes": [{
            "axisAlpha": 0,
            "gridAlpha": 0.1
        }],
        "startDuration": 1,
        "graphs": [{
            "balloonText": "<b>[[category]]</b><br>starts at [[startTime]]<br>ends at [[endTime]]",
            "colorField": "color",
            "fillAlphas": 0.8,
            "lineAlpha": 0,
            "openField": "startTime",
            "type": "column",
            "valueField": "endTime"
        }],
        "rotate": true,
        "columnWidth": 1,
        "categoryField": "name",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "gridAlpha": 0.1,
            "position": "left"
        },
        "export": {
            "enabled": true
        }
    });
//     ========================   End of floating bar chart============================================

//     ========================   column chart with images on top======================================
    var chart9 = AmCharts.makeChart("amchart9",
        {
            "type": "serial",
            "theme": "light",
            "dataProvider": [{
                "name": "John",
                "points": 35654,
                "color": "#329cff",
                "bullet": "img/people2.png"
            }, {
                "name": "Damon",
                "points": 65456,
                "color": "#5aca82",
                "bullet": "img/people3.png"
            }, {
                "name": "Patrick",
                "points": 45724,
                "color": "#937eff",
                "bullet": "img/people5.png"
            }, {
                "name": "Mark",
                "points": 13654,
                "color": "#fcb410",
                "bullet": "img/people3.png"
            }],
            "valueAxes": [{
                "maximum": 80000,
                "minimum": 0,
                "axisAlpha": 0,
                "dashLength": 4,
                "position": "left"
            }],
            "startDuration": 1,
            "graphs": [{
                "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
                "bulletOffset": 10,
                "bulletSize": 52,
                "colorField": "color",
                "cornerRadiusTop": 8,
                "customBulletField": "bullet",
                "fillAlphas": 0.8,
                "lineAlpha": 0,
                "type": "column",
                "valueField": "points"
            }],
            "marginTop": 0,
            "marginRight": 0,
            "marginLeft": 0,
            "marginBottom": 0,
            "autoMargins": false,
            "categoryField": "name",
            "categoryAxis": {
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "tickLength": 0
            },
            "export": {
                "enabled": true
            }
        });
//     ==================================   end of column chart with images on top===============

//      ====================================  3D bar chart===================================
    var chart10 = AmCharts.makeChart("amchart10", {
        "theme": "light",
        "type": "serial",
        "dataProvider": [{
            "year": 2005,
            "income": 23.5
        }, {
            "year": 2006,
            "income": 26.2
        }, {
            "year": 2007,
            "income": 30.1
        }, {
            "year": 2008,
            "income": 29.5
        }, {
            "year": 2009,
            "income": 24.6
        }],
        "valueAxes": [{
            "title": "Income in millions, USD"
        }],
        "graphs": [{
            "balloonText": "Income in [[category]]:[[value]]",
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "title": "Income",
            "type": "column",
            "valueField": "income",
            "lineColor":'#937eff'
        }],
        "depth3D": 20,
        "angle": 30,
        "rotate": true,
        "categoryField": "year",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left"
        },
        "export": {
            "enabled": true
        }
    });
    $(".chart10_input_range").off().on("input change", function() {
        var chart_property10=$(this).data("property");
        var x10=chart10;
        chart10.startDuration=0,
        "fillAlphas"==chart_property10&&(x10=chart10.graphs[0]),
            x10[chart_property10]=this.value,
            chart10.validateNow()
    });
//    =============================    End of 3D bar chart4======================================
})