"use strict";
$(document).ready(function(){


    // =============start gallery2 js==========
    var gallery2= $("#gallery2").unitegallery({
        gallery_theme: "video",
        gallery_width: 1100,
        gallery_height: 600
    });
    // api.resize(width, height)
// =============end gallery2 js==========


    $(".sidebar-toggle").on("click",function () {
        setTimeout(function () {
            gallery2.resize();
        },100);
    });
});
