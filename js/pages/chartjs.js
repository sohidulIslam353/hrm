"use strict";
$(document).ready(function () {
    function chart_resize() {
//         =========================  line chart================================
        var data1 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(50,156,255,0.4)",
                    borderColor: "rgba(50,156,255,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#937eff",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(50,156,255,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [50,58,45,55,40,50,40],
                    spanGaps: false
                }
            ]
        };
        var selector1 = $("#line_chart");
        Chart.Line(selector1, {
            type: 'line',
            data: data1
        });
//      ===========================     End of line chart=======================

//        ==============================   Multiple line charts=================================
        var data2 = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                fill: true,
                pointBackgroundColor: "#329cff",
                pointBorderColor: "#FFF",
                borderJoinStyle: 'miter',
                pointBorderWidth: "1",
                label: "data1",
                data: [30, 48, 35, 24, 35, 27, 50, 40, 60, 35, 46, 30],
                backgroundColor: "#937eff"
            }, {
                fill: true,
                pointBackgroundColor: "#329cff",
                pointBorderColor: "#FFF",
                borderJoinStyle: 'miter',
                pointBorderWidth: "1",
                pointStrokeColor: "#FFF",
                label: "data2",
                data: [130, 63, 103, 51, 93, 55, 80, 140, 100, 92, 108, 110],
                backgroundColor: "#31d0d6"
            }]
        };
        var selector2 = $("#line_chart2");
//           selector2.attr('width', selector2.parent().width());
        Chart.Line(selector2, {
            type: 'line',
            data: data2
        });
//        ================================   end of multiple line chart==========================

//      ===============================     Bar chart===============================
        var data3 = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(248, 106, 103, 0.2)',
                        'rgba(50,156,255, 0.2)',
                        'rgba(252, 180, 16, 0.2)',
                        'rgba(90, 202, 130, 0.2)',
                        'rgba(147, 126, 255, 0.2)',
                        'rgba(0, 123, 184, 0.2)'
                    ],
                    borderColor: [
                        'rgba(248, 106, 103,1)',
                        'rgba(50,156,255, 1)',
                        'rgba(252, 180, 16, 1)',
                        'rgba(90, 202, 130, 1)',
                        'rgba(147, 126, 255, 1)',
                        'rgba(0, 123, 184, 1)'
                    ],
                    borderWidth: 1,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };
        var selector3 = $("#bar_chart");
        new Chart(selector3, {
            type: 'bar',
            data: data3
        });
//      ======================     End of bar chart===================================

//      ============================     radar chart=======================================
        var data4 = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(50,156,255,0.2)",
                    borderColor: "#329cff",
                    pointBackgroundColor: "#329cff",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#329cff",
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    backgroundColor: "rgba(147, 126, 255, 0.2)",
                    borderColor: "#f86a67",
                    pointBackgroundColor: "#f86a67",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "#f86a67",
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        var selector4 = $("#radar_chart");
//           selector4.attr('width', selector4.parent().width());
        new Chart(selector4, {
            type: 'radar',
            data: data4,
            responsive: true
        });
//      ================================     end of radar chart====================================

//      =======================================     Polar chart=======================================
        var data5 = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#f86a67",
                    "#5aca82",
                    "#fcb410",
                    "#31d0d6",
                    "#329cff"
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Mint",
                "Blue"
            ]
        };
        var selector5 = $("#polar_chart");
//           selector5.attr('width', selector5.parent().width());
        new Chart(selector5, {
            data: data5,
            type: 'polarArea',
            options: {
                elements: {
                    arc: {
                        borderColor: "#eee"
                    }
                }
            }
        });
//      ======================================     end of polar chart======================================

//      ====================================     Pie chart==================================================
        var data6 = {
            labels: [
                "Blue",
                "Green",
                "Purple"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#329cff",
                        "#5aca82",
                        "#937eff"
                    ],
                    hoverBackgroundColor: [
                        "#329cff",
                        "#5aca82",
                        "#937eff"
                    ]
                }]
        };
        var selector6 = $("#pie_chart");
//           selector6.attr('width', selector6.parent().width());
        new Chart(selector6, {
            type: 'pie',
            data: data6
        });

//      ===================================     end of pie chart=================================================

        //      ====================================     Pie chart==================================================
        var data7 = {
            labels: [
                "Blue",
                "Green",
                "Purple"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#329cff",
                        "#5aca82",
                        "#937eff"
                    ],
                    hoverBackgroundColor: [
                        "#329cff",
                        "#5aca82",
                        "#937eff"
                    ]
                }]
        };
        var selector7 = $("#donut_chart");
//           selector7.attr('width', selector7.parent().width());
        new Chart(selector7, {
            type: 'doughnut',
            data: data7,
            options: {
                animation:{
                    animateScale:true
                }
            }
        });

//      ===================================     end of pie chart=================================================

//        ====================================   Bubble chart===================================================
        var data8 = {
            datasets: [
                {
                    label: 'First Dataset',
                    data: [
                        {
                            x: 20,
                            y: 30,
                            r: 12
                        },
                        {
                            x: 40,
                            y: 10,
                            r: 8
                        }
                    ],
                    backgroundColor:"#f86a67",
                    hoverBackgroundColor: "#f86a67"
                }]
        };
        var selector8 = $("#bubble_chart");
        new Chart(selector8, {
            type: 'bubble',
            data: data8
        });
//      ========================================     End of bubble chart========================================
    }
    chart_resize();
    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            chart_resize();
        });
    });
})