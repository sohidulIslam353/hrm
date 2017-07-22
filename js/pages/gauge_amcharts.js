"use strict";
$(document).ready(function () {

//    =============================    Using svg filters=======================================
    var chartData1 = [{
        "year": "2000",
        "cars": 1691,
        "motorcycles": 737

    }, {
        "year": "2001",
        "cars": 1098,
        "motorcycles": 680,
        "bicycles": 910
    }, {
        "year": "2002",
        "cars": 975,
        "motorcycles": 664,
        "bicycles": 670
    }, {
        "year": "2003",
        "cars": 1246,
        "motorcycles": 648,
        "bicycles": 930
    }, {
        "year": "2004",
        "cars": 1218,
        "motorcycles": 637,
        "bicycles": 1010
    }, {
        "year": "2005",
        "cars": 1913,
        "motorcycles": 133,
        "bicycles": 1770
    }, {
        "year": "2006",
        "cars": 1299,
        "motorcycles": 621,
        "bicycles": 820
    }, {
        "year": "2007",
        "cars": 1110,
        "motorcycles": 10,
        "bicycles": 1050
    }, {
        "year": "2008",
        "cars": 765,
        "motorcycles": 232,
        "bicycles": 650
    }, {
        "year": "2009",
        "cars": 1145,
        "motorcycles": 219,
        "bicycles": 780
    }, {
        "year": "2010",
        "cars": 1163,
        "motorcycles": 201,
        "bicycles": 700
    }, {
        "year": "2011",
        "cars": 1780,
        "motorcycles": 85,
        "bicycles": 1470
    }, {
        "year": "2012",
        "cars": 1580,
        "motorcycles": 285
    }];

    var chart1 =  AmCharts.makeChart("amchart1", {
        "type": "serial",
        "theme": "light",

        "fontFamily": "Lato",
        "autoMargins": true,
        "addClassNames": true,
        "zoomOutText": "",
        "defs": {
            "filter": [
                {
                    "x": "-50%",
                    "y": "-50%",
                    "width": "200%",
                    "height": "200%",
                    "id": "blur",
                    "feGaussianBlur": {
                        "in": "SourceGraphic",
                        "stdDeviation": "50"
                    }
                },
                {
                    "id": "shadow",
                    "width": "150%",
                    "height": "150%",
                    "feOffset": {
                        "result": "offOut",
                        "in": "SourceAlpha",
                        "dx": "2",
                        "dy": "2"
                    },
                    "feGaussianBlur": {
                        "result": "blurOut",
                        "in": "offOut",
                        "stdDeviation": "10"
                    },
                    "feColorMatrix": {
                        "result": "blurOut",
                        "type": "matrix",
                        "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
                    },
                    "feBlend": {
                        "in": "SourceGraphic",
                        "in2": "blurOut",
                        "mode": "normal"
                    }
                }
            ]
        },
        "fontSize": 15,
        "pathToImages": "../amcharts/images/",
        "dataProvider": chartData1,
        "dataDateFormat": "YYYY",
        "marginTop": 0,
        "marginRight": 1,
        "marginLeft": 0,
        "autoMarginOffset": 5,
        "categoryField": "year",
        "categoryAxis": {
            "gridAlpha": 0.07,
            "axisColor": "#DADADA",
            "startOnAxis": true,
            "tickLength": 0,
            "parseDates": true,
            "minPeriod": "YYYY"
        },
        "valueAxes": [
            {
                "ignoreAxisWidth":true,
                "stackType": "regular",
                "gridAlpha": 0.07,
                "axisAlpha": 0,
                "inside": true
            }
        ],
        "graphs": [
            {
                "id": "g1",
                "type": "line",
                "title": "Cars",
                "valueField": "cars",
                "fillColors": [
                    "#937eff",
                    "#329cff"
                ],
                "lineAlpha": 0,
                "fillAlphas": 0.8,
                "showBalloon": false
            },
            {
                "id": "g2",
                "type": "line",
                "title": "Motorcycles",
                "valueField": "motorcycles",
                "lineAlpha": 0,
                "fillAlphas": 0.8,
                "lineColor": "#5bb5ea",
                "showBalloon": false
            },
            {
                "id": "g3",
                "title": "Bicycles",
                "valueField": "bicycles",
                "lineAlpha": 0.5,
                "lineColor": "#FFFFFF",
                "bullet": "round",
                "dashLength": 2,
                "bulletBorderAlpha": 1,
                "bulletAlpha": 1,
                "bulletSize": 15,
                "stackable": false,
                "bulletColor": "#937eff",
                "bulletBorderColor": "#FFFFFF",
                "bulletBorderThickness": 3,
                "balloonText": "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff'>[[value]]</div>"
            }
        ],
        "chartCursor": {
            "cursorAlpha": 1,
            "zoomable": false,
            "cursorColor": "#31d0d6",
            "categoryBalloonColor": "#fcb410",
            "fullWidth": true,
            "categoryBalloonDateFormat": "YYYY",
            "balloonPointerOrientation": "vertical"
        },
        "balloon": {
            "borderAlpha": 0,
            "fillAlpha": 0,
            "shadowAlpha": 0,
            "offsetX": 40,
            "offsetY": -50
        }
    });

// we zoom chart in order to have better blur (form side to side)
    chart1.addListener("dataUpdated", zoomChart1);

    function zoomChart1(){
        chart1.zoomToIndexes(1, chartData1.length - 2);
    }
//    =================================    End of using svg filters============================

//    ====================================    css animation===================================
    var chartData2 = [ {
        "date": "2012-01-01",
        "distance": 227,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2012-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2012-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2012-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2012-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2012-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2012-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2012-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2012-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2012-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2012-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }, {
        "date": "2012-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2012-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "alpha": 0.4
    }, {
        "date": "2012-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas",
        "bulletClass": "lastBullet"
    }, {
        "date": "2012-01-15"
    }, {
        "date": "2012-01-16"
    }, {
        "date": "2012-01-17"
    }, {
        "date": "2012-01-18"
    }, {
        "date": "2012-01-19"
    } ];
    var chart2 = AmCharts.makeChart( "amchart2", {
        "type": "serial",
        "theme": "light",

        "dataDateFormat": "YYYY-MM-DD",
        "dataProvider": chartData2,

        "addClassNames": true,
        "startDuration": 1,
        //"color": "#FFFFFF",
        "marginLeft": 0,

        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "minPeriod": "DD",
            "autoGridCount": true,
            "gridCount": 50,
            "gridAlpha": 0.1,
            "gridColor": "#FFFFFF",
            "axisColor": "#555555",
            "dateFormats": [ {
                "period": 'DD',
                "format": 'DD'
            }, {
                "period": 'WW',
                "format": 'MMM DD'
            }, {
                "period": 'MM',
                "format": 'MMM'
            }, {
                "period": 'YYYY',
                "format": 'YYYY'
            } ]
        },

        "valueAxes": [ {
            "id": "a1",
            "title": "distance",
            "gridAlpha": 0,
            "axisAlpha": 0
        }, {
            "id": "a2",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "labelsEnabled": false
        }, {
            "id": "a3",
            "title": "duration",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "inside": true,
            "duration": "mm",
            "durationUnits": {
                "DD": "d. ",
                "hh": "h ",
                "mm": "min",
                "ss": ""
            }
        } ],
        "graphs": [ {
            "id": "g1",
            "valueField": "distance",
            "title": "distance",
            "type": "column",
            "fillAlphas": 0.9,
            "valueAxis": "a1",
            "balloonText": "[[value]] miles",
            "legendValueText": "[[value]] mi",
            "legendPeriodValueText": "total: [[value.sum]] mi",
            "lineColor": "#329cff",
            "alphaField": "alpha"
        }, {
            "id": "g2",
            "valueField": "latitude",
            "classNameField": "bulletClass",
            "title": "latitude/city",
            "type": "line",
            "valueAxis": "a2",
            "lineColor": "#31d0d6",
            "lineThickness": 1,
            "legendValueText": "[[value]]/[[description]]",
            "descriptionField": "townName",
            "bullet": "round",
            "bulletSizeField": "townSize",
            "bulletBorderColor": "#31d0d6",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 2,
            "bulletColor": "#31d0d6",
            "labelText": "[[townName2]]",
            "labelPosition": "right",
            "balloonText": "latitude:[[value]]",
            "showBalloon": true,
            "animationPlayed": true
        }, {
            "id": "g3",
            "title": "duration",
            "valueField": "duration",
            "type": "line",
            "valueAxis": "a3",
            "lineColor": "#fcb410",
            "balloonText": "[[value]]",
            "lineThickness": 1,
            "legendValueText": "[[value]]",
            "bullet": "square",
            "bulletBorderColor": "#fcb410",
            "bulletBorderThickness": 1,
            "bulletBorderAlpha": 1,
            "dashLengthField": "dashLength",
            "animationPlayed": true
        } ],

        "chartCursor": {
            "zoomable": false,
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0,
            "valueBalloonsEnabled": false
        },
        "legend": {
            "bulletType": "round",
            "equalWidths": false,
            "valueWidth": 120,
            "useGraphSettings": true
        }
    } );
//    ===============================    End of css animation=====================================

//    =======================================    Radar chart=================================
    var chart3 = AmCharts.makeChart( "amchart3", {
        "type": "radar",
        "theme": "light",
        "marginLeft": 40,
        "marginRight": 40,
        "dataProvider": [ {
            "country": "Czech Republic",
            "litres": 156.9
        }, {
            "country": "Ireland",
            "litres": 131.1
        }, {
            "country": "Germany",
            "litres": 115.8
        }, {
            "country": "Australia",
            "litres": 109.9
        }, {
            "country": "Austria",
            "litres": 108.3
        }, {
            "country": "UK",
            "litres": 99
        } ],
        "valueAxes": [ {
            "axisTitleOffset": 20,
            "minimum": 0,
            "axisAlpha": 0.15
        } ],
        "startDuration": 2,
        "graphs": [ {
            "balloonText": "[[value]] litres of beer per year",
            "bullet": "round",
            "lineThickness": 2,
            "valueField": "litres",
            "lineColor":'#937eff'
        } ],
        "categoryField": "direction",
        "export": {
            "enabled": true
        }
    } );
//    =====================================    End of radar chart==============================

//    ==================================    polar chart=================================
    var chart4 = AmCharts.makeChart( "amchart4", {
        "type": "radar",
        "theme": "light",
        "dataProvider": [ {
            "direction": "N",
            "value": 8
        }, {
            "direction": "NE",
            "value": 9
        }, {
            "direction": "E",
            "value": 4.5
        }, {
            "direction": "SE",
            "value": 3.5
        }, {
            "direction": "S",
            "value": 9.2
        }, {
            "direction": "SW",
            "value": 8.4
        }, {
            "direction": "W",
            "value": 11.1
        }, {
            "direction": "NW",
            "value": 10
        } ],
        "valueAxes": [ {
            "gridType": "circles",
            "minimum": 0,
            "autoGridCount": false,
            "axisAlpha": 0.2,
            "fillAlpha": 0.05,
            "fillColor": "#FFFFFF",
            "gridAlpha": 0.08,
            "guides": [ {
                "angle": 225,
                "fillAlpha": 0.3,
                "fillColor": "#937eff",
                "tickLength": 0,
                "toAngle": 315,
                "toValue": 14,
                "value": 0,
                "lineAlpha": 0,

            }, {
                "angle": 45,
                "fillAlpha": 0.3,
                "fillColor": "#5aca82",
                "tickLength": 0,
                "toAngle": 135,
                "toValue": 14,
                "value": 0,
                "lineAlpha": 0,
            } ],
            "position": "left"
        } ],
        "startDuration": 1,
        "graphs": [ {
            "balloonText": "[[category]]: [[value]] m/s",
            "bullet": "round",
            "fillAlphas": 0.3,
            "valueField": "value"
        } ],
        "categoryField": "direction",
        "export": {
            "enabled": true
        }
    } );
//    =========================    End of polar chart===================================

//     ===================================   clock========================================
    var chart5 = AmCharts.makeChart( "amchart5", {
        "type": "gauge",
        "theme": "light",
        "startDuration": 0.3,
        "marginTop": 20,
        "marginBottom": 50,
        "axes": [ {
            "axisAlpha": 0.3,
            "endAngle": 360,
            "endValue": 12,
            "minorTickInterval": 0.2,
            "tickColor":'#31d0d6',
            "showFirstLabel": false,
            "startAngle": 0,
            "axisThickness": 1,
            "valueInterval": 1
        } ],
        "arrows": [ {
            "radius": "50%",
            "innerRadius": 0,
            "color": "#329cff",
            "clockWiseOnly": true,
            "nailRadius": 10,
            "nailAlpha": 1
        }, {
            "nailRadius": 0,
            "radius": "80%",
            "color": "#329cff",
            "startWidth": 6,
            "innerRadius": 0,
            "clockWiseOnly": true
        }, {
            "color": "#329cff",
            "nailRadius": 4,
            "startWidth": 3,
            "innerRadius": 0,
            "clockWiseOnly": true,
            "nailAlpha": 1
        } ],
        "export": {
            "enabled": true
        }
    } );

// update each second
    setInterval( updateClock5, 1000 );

// update clock
    function updateClock5() {
        if(chart5.arrows.length > 0){
            // get current date
            var date = new Date();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            if(chart5.arrows[ 0 ].setValue){
                // set hours
                chart5.arrows[ 0 ].setValue( hours + minutes / 60 );
                // set minutes
                chart5.arrows[ 1 ].setValue( 12 * ( minutes + seconds / 60 ) / 60 );
                // set seconds
                chart5.arrows[ 2 ].setValue( 12 * date.getSeconds() / 60 );
            }
        }
    }
//     ==========================   End of clock==========================================

//      ==================================  clock with two faces==========================
    var chart6 = AmCharts.makeChart( "amchart6", {
        "type": "gauge",
        "theme": "light",
        "startDuration": 0.1,
        "marginTop": 20,
        "marginBottom": 50,
        "axes": [ {
            "id": "axis1",
            "axisAlpha": 0,
            "endAngle": 360,
            "endValue": 12,
            "tickColor": "#937eff",
            "minorTickInterval": 0.2,
            "showFirstLabel": false,
            "startAngle": 0,
            "topTextYOffset": 100,
            "valueInterval": 1
        }, {
            "id": "axis2",
            "axisAlpha": 0,
            "endAngle": 360,
            "endValue": 60,
            "tickColor": "#329cff",
            "radius": 60,
            "showFirstLabel": false,
            "startAngle": 0,
            "valueInterval": 5,
            "labelFrequency": 0,
            "tickLength": 10
        } ],
        "arrows": [ {
            "innerRadius": 70,
            "nailRadius": 0,
            "radius": "80%",
            "startWidth": 10,
            "color": "#f86a67",
            "endWidth": 10
        }, {
            "innerRadius": 70,
            "nailRadius": 0,
            "color": "#329cff",
            "radius": "100%",
            "startWidth": 6,
            "endWidth": 6
        }, {
            "axis": "axis2",
            "color": "#f86a67",
            "innerRadius": 50,
            "nailRadius": 0,
            "radius": "100%",
            "startWidth": 6,
            "endWidth": 6,
            "alpha": 1
        } ],
        "export": {
            "enabled": true
        }
    } );

    var interval = setInterval( updateClock6, 1000 );


// update clock
    function updateClock6() {
        // get date
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if(chart6.arrows[ 0 ].setValue){
            // update hours
            chart6.arrows[ 0 ].setValue( hours + minutes / 60 );
            // update minutes
            chart6.arrows[ 1 ].setValue( 12 * ( minutes + seconds / 60 ) / 60 );
            // update seconds
            chart6.arrows[ 2 ].setValue( date.getSeconds() );

            // update date
            var dateString = AmCharts.formatDate( date, "DD MMM" );
            chart6.axes[ 0 ].setTopText( dateString );
        }
    }
//      ==============================  End of clock with two faces=======================

//      ============================================  Animated gauge===============================
    var chart7 = AmCharts.makeChart("amchart7", {
        "theme": "light",
        "type": "gauge",
        "axes": [{
            "topTextFontSize": 20,
            "topTextYOffset": 70,
            "axisColor": "#f86a67",
            "axisThickness": 1,
            "endValue": 100,
            "gridInside": true,
            "inside": true,
            "radius": "80%",
            "valueInterval": 10,
            "tickColor": "#f86a67",
            "startAngle": -90,
            "endAngle": 90,
            "bandOutlineAlpha": 0,
            "bands": [{
                "color": "#329cff",
                "endValue": 100,
                "innerRadius": "105%",
                "radius": "130%",
                "gradientRatio": [0.5, 0, -0.5],
                "startValue": 0
            }, {
                "color": "#31d0d6",
                "endValue": 0,
                "innerRadius": "105%",
                "radius": "130%",
                "gradientRatio": [0.5, 0, -0.5],
                "startValue": 0
            }]
        }],
        "arrows": [{
            "alpha": 1,
            "innerRadius": "35%",
            "color": "#fcb410",
            "nailRadius": 0,
            "radius": "130%"
        }]
    });

    setInterval(randomValue7, 2000);

// set random value
    function randomValue7() {
        var value = Math.round(Math.random() * 100);
        chart7.arrows[0].setValue(value);
        chart7.axes[0].setTopText(value + " %");
        // adjust darker band to new value
        chart7.axes[0].bands[1].setEndValue(value);
    }
//      ====================================  End of animated gauge====================================

//      ====================================  angular gauge withtwo axes============================
    var chart8 = AmCharts.makeChart( "amchart8", {
        "theme": "light",
        "type": "gauge",
        "marginRight": 15,
        "axes": [ {
            "axisColor": "#329cff",
            "axisThickness": 3,
            "endValue": 240,
            "gridInside": false,
            "inside": false,
            "radius": "100%",
            "valueInterval": 20,
            "tickColor": "#329cff"
        }, {
            "axisColor": "#fcb410",
            "axisThickness": 3,
            "endValue": 160,
            "radius": "80%",
            "valueInterval": 20,
            "tickColor": "#fcb410"
        } ],
        "arrows": [ {
            "color": "#937eff",
            "innerRadius": "20%",
            "nailRadius": 0,
            "radius": "85%"
        } ],
        "export": {
            "enabled": true
        }
    } );

    setInterval( randomValue8, 2000 );

// set random value
    function randomValue8() {
        var value = Math.round( Math.random() * 240 );
        chart8.arrows[ 0 ].setValue( value );
    }
//      =================================  End of angular gauge with two axes========================

})