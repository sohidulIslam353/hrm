"use strict";
$(document).ready(function () {

    $(".widget_social_icons").on("mouseenter",function () {
        $(this).find(".widget_social_inner1").css("top","0");
        $(this).find(".widget_social_inner1 i").css({
            'font-size' : '20px'
        });

        $(this).find(".widget_social_inner2").css("display","table-row");
    }).on("mouseleave",function () {
        $(this).find(".widget_social_inner1").css("top","20px");
        $(this).find(".widget_social_inner1 i").css({
            'font-size' : '45px'
        });
        $(this).find(".widget_social_inner2").css("display","none");
    });

// Default time
    var timenow = moment().format("h:mm");

    $(".conversation-list").slimscroll({
        height: "275px",
        size: '5px',
        opacity: 0.2
    });
// End of default time
// Chat
    $("form#main_input_box3").on("submit",function(event) {
        event.preventDefault();
        var scrollTo_int = $(".conversation-list").prop('scrollHeight') + 'px';
        $(".conversation-list").append('<li class="clearfix odd m-t-20"><div class="chat-avatar"><img src="img/admin.jpg" alt="male" class="img-fluid rounded-circle chat_msg_img"><i>' + timenow + '</i></div><div class="conversation-text"><div class="ctext-wrap"><i>Me</i><p>' + $("#custom_textbox").val() + '</p></div></div></li>');
        $("#custom_textbox").val('');
        $(".conversation-list").slimscroll({ scrollTo: scrollTo_int });
    });
// End of chat
});