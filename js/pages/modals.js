"use strict";
$(document).ready(function () {
    $(".fadein").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#fadein').addClass('animated fadeIn').one(animationEnd, function() {
            $(this).removeClass('animated fadeIn');
        });
    });
    $(".fadedown").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#fadedown').addClass('animated fadeInDown').one(animationEnd, function() {
            $(this).removeClass('animated fadeInDown');
        });
    });

    $(".slideinleft").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#slideinleft').addClass('animated slideInLeft').one(animationEnd, function() {
            $(this).removeClass('animated slideInLeft');
        });
    });

    $(".slideinright").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#slideinright').addClass('animated slideInRight').one(animationEnd, function() {
            $(this).removeClass('animated slideInRight');
        });
    });

    $(".rotatein").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rotatein').addClass('animated rotateIn').one(animationEnd, function() {
            $(this).removeClass('animated rotateIn');
        });
    });
    $(".rotateinupleft").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rotateinupleft').addClass('animated rotateInUpLeft').one(animationEnd, function() {
            $(this).removeClass('animated rotateInUpLeft');
        });
    });

    $(".rotateindownright").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rotateindownright').addClass('animated rotateInDownRight').one(animationEnd, function() {
            $(this).removeClass('animated rotateInDownRight');
        });
    });

    $(".zoomin").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#zoomin').addClass('animated zoomIn').one(animationEnd, function() {
            $(this).removeClass('animated zoomIn');
        });
    });

    $(".flipinx").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#flipinx').addClass('animated flipInX').one(animationEnd, function() {
            $(this).removeClass('animated flipInX');
        });
    });

    $(".bounce").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#bounce').addClass('animated bounce').one(animationEnd, function() {
            $(this).removeClass('animated bounce');
        });
    });

    $(".flipiny").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#flipiny').addClass('animated flipInY').one(animationEnd, function() {
            $(this).removeClass('animated flipInY');
        });
    });


    $(".aside3").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#aside3').addClass('animated slideInRight').one(animationEnd, function() {
            $(this).removeClass('animated slideInRight');
        });
    });
    $(".aside2").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#aside2').addClass('animated slideInUp').one(animationEnd, function() {
            $(this).removeClass('animated slideInUp');
        });
    });
    $(".aside4").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.content_scroll').addClass('animated slideInLeft').one(animationEnd, function() {
            $(this).removeClass('animated slideInLeft');
        });
    });
    $('.dropback1').on('click',function(){
        $('#dropback1').modal({
            backdrop: false
        });
    });
});