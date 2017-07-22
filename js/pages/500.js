"use strict";
$(document).ready(function () {
    $(window).on("load",function() {
        $('.preloader img').fadeOut();
        $('.preloader').fadeOut(1000);
    });
    if ($(window).width() > 991) {
        $('.error500_page').mousemove(function (e) {
            var x = -(e.pageX + this.offsetLeft) / 20;
            var y = -(e.pageY + this.offsetTop) / 20;
            $(this).css('background-position', x + 'px ' + y + 'px');
        });
    }
});