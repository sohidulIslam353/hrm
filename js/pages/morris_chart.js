"use strict";
$(document).ready(function () {

//        ==========================    morris smooth line chart===========================
//
    var morris1=  Morris.Line({
        element: 'morris_chart1',
        data: [
            { y: '2006', a: 50, b: 250 },
            { y: '2007', a: 250,  b: 100 },
            { y: '2008', a: 100,  b: 250 },
            { y: '2009', a: 350,  b: 100 },
            { y: '2010', a: 150,  b: 300 },
            { y: '2011', a: 200,  b: 50 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#31d0d6','#fcb410'],
        resize:true
    });
//       ===========================     end of morris smooth line chart==========================

//       =============================     Morris line chart============================================

    var morris2= Morris.Line({
        element: 'morris_chart2',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#329cff','#937eff'],
        smooth:false,
        resize:true
    });
//       ========================     end of morris line chart=============================================


//       ==================================     morris area chart==============================

    var morris3=  Morris.Area({
        element: 'morris_chart3',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#fcb410','#937eff'],
        resize:true
    });
//       ===============================     end of morris area chart===========================

//       ===========================     morris bar chart=======================================

    var morris4=  Morris.Bar({
        element: 'morris_chart4',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        barColors: ['#31d0d6','#fcb410'],
        resize:true
    });
//       =======================     End of morris bar chart========================================

//     =======================================       morris stacked bar chart=============================
    var morris5= Morris.Bar({
        element: 'morris_chart5',
        data: [
            { y: '0', a: 100, b: 50, c:25 },
            { y: '1', a: 200,  b: 100, c:200 },
            { y: '2', a: 200,  b: 50, c:200 },
            { y: '3', a: 400,  b: 200, c:-300 },
            { y: '4', a: 50,  b: 100, c:250 },
            { y: '5', a: 250,  b: 150, c:250 },
            { y: '5', a: 250,  b: 150, c:250 },
            { y: '4', a: 50,  b: 100, c:250 },
            { y: '0', a: 100, b: 50, c:25 },
            { y: '1', a: 200,  b: 100, c:200 },
            { y: '2', a: 200,  b: 50, c:200 },
            { y: '3', a: 400,  b: 200, c:-300 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Series A', 'Series B', 'Series C'],
        barColors: ['#329cff','#FCB410','#5aca82'],
        stacked:true
    });
//        ===============================    end of morris stacked bar chart====================================

//       ===============================     morris donut chart=====================================
    var morris6= Morris.Donut({
        element: 'morris_chart6',
        data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ],
        colors: ['#5aca82', '#FCB410', '#329cff'],
        resize:true
    });
//       =====================================     End of morris donut chart========================

    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            morris1.redraw();
            morris2.redraw();
            morris3.redraw();
            morris4.redraw();
            morris5.redraw();
            morris6.redraw();
        });
    });
});