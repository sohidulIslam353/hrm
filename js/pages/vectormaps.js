"use strict";
$(document).ready(function () {
    // ================================World map================================
    $('#world_map').vectorMap({
        map: 'world_en',
        backgroundColor: '#fff',
        hoverOpacity: 0.7,
        selectedColor: '#f86a67',
        values: sample_data,
        normalizeFunction: 'polynomial',
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert(message);
        }
    });
    // =====================================End of world map=================================

    // ==============================Russia map===============================================
    $('#russia_map').vectorMap({
        map: 'russia_en',
        backgroundColor: '#fff',
        color: '#fcb410',
        selectedColor: '#f86a67',
        hoverColor: '#329cff',
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert(message);
        }
    });
    // =================================End of russia map========================================

    // ====================================Usa map=============================================
    $('#usa_map').vectorMap({
        map: 'usa_en',
        backgroundColor: '#fff',
        color: '#937eff',
        selectedColor: '#f86a67',
        hoverColor: '#ff9933',
        colors: {
            mo: '#f86a67',
            fl: '#5aca82',
            or: '#329cff'
        },
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert(message);
        }
    });
    // ====================================End of usa map=====================================

    // ================================================Canada map=============================
    $('#canada_map').vectorMap({
        map: 'canada_en',
        backgroundColor: '#fff',
        color: '#31d0d6',
        selectedColor: '#f86a67',
        hoverColor: '#fcb410',
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert(message);
        }
    });
    // ====================================End of canada map================================

    // ==========================================Europe map===================================
    $('#europe_map').vectorMap({
        map: 'europe_en',
        backgroundColor: '#fff',
        color: '#5aca82',
        selectedColor: '#f86a67',
        hoverColor: '#fcb410',
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert(message);
        }
    });
    // ===================================End of europe map===================================

//      =====================================  Australia map================================
    $('#australia_map').vectorMap({
        map: 'australia_en',
        backgroundColor: '#fff',
        color: '#007bb8',
        selectedColor: '#f86a67',
        hoverColor: '#fcb410',
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert(message);
        }
    });
//   ===========================     End of australia map====================================
    $(".sidebar-toggle").on("click",function(e) {
        setTimeout(function(){
            $(window).trigger('resize');
        },200);
    });
});