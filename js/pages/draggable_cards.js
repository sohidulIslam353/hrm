'use strict';
$(document).ready(function() {

    $("#sortable_portlets").find(".sortable").sortable({
        connectWith: "#sortable_portlets .sortable",
        handle: ".ti-move",
        items: ".card",
        cancel: ".notsort",
        opacity: 0.8,
        placeholder: 'portlet-placeholder ui-corner-all',
        forcePlaceholderSize: true,
        tolerance: "pointer"
    });

    /*----------------------------*/
    $("#sortable_portlets2").find(".sortable").sortable({
        connectWith: "#sortable_portlets2 .sortable",
        handle: ".ti-move",
        items: ".card",
        cancel: ".notsort",
        opacity: 0.8,
        placeholder: 'portlet-placeholder ui-corner-all',
        forcePlaceholderSize: true,
        tolerance: "pointer",
        sort: function( event, ui ) {
            $(this).find(".ui-sortable-helper").addClass("sorted_portlet");
        }
    });
//--------------------
    dragula([document.getElementById('left-copys'), document.getElementById('right-copys')], {
        copy: true
    });
    dragula([document.getElementById('left-rm-spill'),document.getElementById('right-rm-spill')], {
        removeOnSpill: true
    });

});




