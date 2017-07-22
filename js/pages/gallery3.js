"use strict";
$(document).ready(function(){

    $(".gallery3").flipping_gallery({
        enableScroll: true,
        autoplay: 3000
    });
    $(".next").click(function() {
        $(".gallery3").flipForward();
        return false;
    });
    $(".prev").click(function() {
        $(".gallery3").flipBackward();
        return false;
    });

});
