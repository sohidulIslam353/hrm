"use strict";
$(document).ready(function () {
    $("#search-field").keyup(function () {
        var srch = $(this).val().trim().toLowerCase();
        $(".chat-list").hide()
            .filter(function () {
                return $(this).html().trim().toLowerCase().indexOf(srch) != -1;
            }).show();
    });
    $('.chat_scroll').slimScroll({
        height: '420px',
        size: '5px',
        color: '#ccc'
    });
});