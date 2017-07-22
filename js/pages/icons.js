"use strict";
$(document).ready(function () {
//       ================================== Icons Search==========================
    $('#icon_search1').on("input", function() {
        $(".fa_icon").each(function() {
            var regex = new RegExp($("#icon_search1").val().trim().toLowerCase());
            var x = $(this).clone().children().remove().end().text();
            var res = x.match(regex, "i");
            if (res == null) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
        return false;
    });
//       ==================================== end of icons search===================
//      =======================================  Icons modal=================================
    $(".icons_list .fa_icon .font_text").on('click',function () {
        var text=$(this).html();
        $(".modal_font_text").html(text);
        $('#icon_text').text(text);
        $('#font_modal').modal('show');
    });
//          =================================  end of icons modal=======================
    var header = $('.header').height();
    $(".modal").css("top",header);
});