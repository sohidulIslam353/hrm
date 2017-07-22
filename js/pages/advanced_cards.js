"use strict";
$(document).ready(function() {
    var swiper = new Swiper('.widget_swiper', {
        centeredSlides: true,
        autoplay: 2000,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    $(".wrapper").on("resize", function() {
        setTimeout(function() {
            swiper.update();
        }, 400);
    });
    $(".sidebar-toggle").on("click", function() {
        setTimeout(function() {
            swiper.update();
        }, 400);
    });
    $(".card_collapse").on('show.bs.collapse', function() {
        $(this).prev("div").find("i").removeClass("ti-plus").addClass("ti-minus");
    });
    $(".card_collapse").on('hide.bs.collapse', function() {
        $(this).prev("div").find("i").removeClass("ti-minus").addClass("ti-plus");
    });
    $(".sidebar-toggle").on("click", function() {
        setTimeout(function() {
            swiper.update();
        }, 200);
    })

});