"use strict";
$(document).ready(function () {
    $(".sidebar-toggle").on("click", function() {
        setTimeout(function() {
            gmap1.refresh();
            gmap2.refresh();
            gmap3.refresh();
            gmap4.refresh();
            gmap5.refresh();
        }, 200);
    });
    var gmap = $(".gmap");
    gmap.css("height", "400px");

//     ==========================   geo_location==================================
    var gmap1= new GMaps({
        div: '#geo_location',
        lat: -12.043333,
        lng: -77.028333
    });
    GMaps.geolocate({
        success: function(position) {
            gmap1.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error) {
            alert('geo_location failed: '+error.message);
        },
        not_supported: function() {
            alert("Your browser does not support geo_location");
        },
        always: function() {
            alert("Done!");
        }
    });
//     ===========================   End of geo_location==============================

//     ==================================   Geocoding==================================
    var gmap2= new GMaps({
        div: '#geo_code',
        lat: -12.043333,
        lng: -77.028333
    });
    var input = document.getElementById('address');
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-33.8902, 151.1759),
        new google.maps.LatLng(-33.8474, 151.2631));
    var options = {
        bounds: defaultBounds,
        types: ['establishment']
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    $('#geocoding_form').submit(function(e) {
        e.preventDefault();
        gmap2.removeMarkers();
        GMaps.geocode({
            address: $('#address').val().trim(),
            callback: function(results, status) {
                if (status == 'OK') {
                    var latlng = results[0].geometry.location;
                    gmap2.setCenter(latlng.lat(), latlng.lng());
                    gmap2.addMarker({
                        lat: latlng.lat(),
                        lng: latlng.lng()
                    });
                }
            }
        });
    });
//     =========================   End of Geocoding======================================

//     ======================================   polylines===============================
    var gmap3= new GMaps({
        div: '#polylines',
        lat: -12.043333,
        lng: -77.028333,
        mapType:'terrain'
    });
    var path3 = [[-12.044012922866312, -77.02470665341184], [-12.05449279282314, -77.03024273281858], [-12.055122327623378, -77.03039293652341], [-12.075917129727586, -77.02764635449216], [-12.07635776902266, -77.02792530422971], [-12.076819390363665, -77.02893381481931], [-12.088527520066453, -77.0241058385925], [-12.090814532191756, -77.02271108990476]];

    gmap3.drawPolyline({
        path: path3,
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
    });
//     ====================================   End of polylines==========================

//     ==========================================   Overlays================================
    var gmap4= new GMaps({
        div: '#overlays',
        lat: -12.043333,
        lng: -77.028333,
        mapType:'hybrid'
    });
    gmap4.drawOverlay({
        lat: -12.043333,
        lng: -77.028333,
        content: '<div class="overlay">Lima<div class="overlay_arrow above"></div></div>'
    });
//     ==============================   End of overlays=======================================

//     ========================================   Polygon======================================
    var gmap5= new GMaps({
        div: '#polygon',
        lat: -12.043333,
        lng: -77.028333
    });
    var path5 = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511],	[-12.044804866577001,-77.02154422636042]];

    var polygon = gmap5.drawPolygon({
        paths: path5, // pre-defined polygon shape
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6
    });
//     ======================================   End of polygon==================================
});