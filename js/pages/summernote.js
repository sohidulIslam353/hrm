"use strict";
$(document).ready(function () {
    $('.summernote_default').summernote({
        height: 300
    });

    $('.airmode').summernote({
        height: 300,
        airMode: true
    });
    $('.multi_summernote').summernote({
        height: 200
    });
    $("#edit").on('click', function () {
        $('.click2edit').summernote({focus: true});
        $(".note-toolbar button").removeClass('btn-default').addClass('btn-secondary');
    });

    $("#save").on('click', function () {
        var makrup = $('.click2edit').summernote('code');
        $('.click2edit').summernote('destroy');
    });
    $(".note-toolbar button").removeClass('btn-default').addClass('btn-secondary');
    var header = $('.header').height();
    if ($(window).width() <= 992) {
        $(".modal").css("top",header);
    }
});