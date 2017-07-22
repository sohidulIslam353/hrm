"use strict";
$(document).ready(function () {
    //Notification basic example
    $('#basicInfo').on('click',function () {
        Lobibox.notify('info', {
            rounded: true,
            icon: false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.',
            soundPath: 'vendors/lobibox/sounds/'
        });
    });
    $('#basicWarning').on('click',function () {
        Lobibox.notify('warning', {
            rounded: true,
            icon: false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.',
            soundPath: 'vendors/lobibox/sounds/'
        });
    });
    $('#basicError').on('click',function () {
        Lobibox.notify('error', {
            rounded: true,
            icon: false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.',
            soundPath: 'vendors/lobibox/sounds/'
        });
    });

    $('#basicSuccess').on('click',function () {
        Lobibox.notify('success', {
            rounded: true,
            icon: false,
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.',
            soundPath: 'vendors/lobibox/sounds/'
        });
    });

//-----With Image
    $('#imageinfo').on('click',function () {
        Lobibox.notify('info', {
            img: 'img/people2.png',
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#imagewarning').on('click',function () {
        Lobibox.notify('warning', {
            img: 'img/people2.png',
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#imageerror').on('click',function () {
        Lobibox.notify('error', {
            img: 'img/people2.png',
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#imagesuccess').on('click',function () {
        Lobibox.notify('success', {
            img: 'img/people2.png',
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
//-----------Custom title------
    $('#custominfo').on('click',function () {
        Lobibox.notify('info', {
            icon:false,
            sound:false,
            title: 'Your title is here',
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#customwarning').on('click',function () {
        Lobibox.notify('warning', {
            icon:false,
            sound:false,
            title: 'Your title is here',
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#customerror').on('click',function () {
        Lobibox.notify('error', {
            icon:false,
            sound:false,
            title: 'Your title is here',
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#customsuccess').on('click',function () {
        Lobibox.notify('success', {
            icon:false,
            sound:false,
            title: 'Your title is here',
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
//-----------Increase delay time---------
    $('#delayinfo').on('click',function () {
        Lobibox.notify('info', {
            icon:false,
            sound:false,
            delay:7000,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#delaywarning').on('click',function () {
        Lobibox.notify('warning', {
            icon:false,
            sound:false,
            delay:7000,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#delayerror').on('click',function () {
        Lobibox.notify('error', {
            icon:false,
            sound:false,
            delay:7000,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#delaysuccess').on('click',function () {
        Lobibox.notify('success', {
            icon:false,
            sound:false,
            delay:7000,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });

//------sticky without delay---

    $('#stickyinfo').on('click',function () {
        Lobibox.notify('info', {
            icon:false,
            delay: false,
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#stickywarning').on('click',function () {
        Lobibox.notify('warning', {
            icon:false,
            delay: false,
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#stickyerror').on('click',function () {
        Lobibox.notify('error', {
            icon:false,
            delay: false,
            sound:false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });
    $('#stickysuccess').on('click',function () {
        Lobibox.notify('success', {
            icon:false,
            delay: false,
            sound:false,
            rounded: true,
            delayIndicator: false,
            msg: 'Lorem ipsum dolor sit amet against apennine any created, spend loveliest, building stripes.'
        });
    });

//-------------Animations------------
    $('#anim_info').on('click',function () {
        Lobibox.notify('info', {
            size: 'mini',
            icon: false,
            sound:false,
            showClass: 'fadeInDown',
            hideClass: 'fadeUpDown',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'
        });
    });

    $('#anim_warning').on('click',function () {
        Lobibox.notify('warning', {
            size: 'mini',
            icon: false,
            sound:false,
            showClass: 'bounceIn',
            hideClass: 'bounceOut',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'
        });
    });
    $('#anim_error').on('click',function () {
        Lobibox.notify('error', {
            size: 'mini',
            icon: false,
            sound:false,
            showClass: 'rollIn',
            hideClass: 'rollOut',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'
        });
    });
    $('#anim_success').on('click',function () {
        Lobibox.notify('success', {
            size: 'mini',
            icon: false,
            sound:false,
            showClass: 'zoomInUp',
            hideClass: 'zoomOutDown',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.',

        });
    });
//-------------positions---------------------

    $('#posnone').on('click',function () {
        Lobibox.notify('info', {
            size: 'mini',
            icon: false,
            sound:false,
            position: 'top left',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'

        });
    });

    $('#posn_two').on('click',function () {
        Lobibox.notify('warning', {
            size: 'mini',
            icon: false,
            sound:false,
            position: 'top right',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'

        });
    });

    $('#posn_three').on('click',function () {
        Lobibox.notify('error', {
            size: 'mini',
            icon: false,
            sound:false,
            position: 'bottom left',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'

        });
    });

    $('#posn_four').on('click',function () {
        Lobibox.notify('success', {
            size: 'mini',
            icon: false,
            sound:false,
            position: 'bottom right',
            msg: 'Lorem ipsum dolor sit amet hears farmer indemnity inherent.'

        });
    });
    $("#notification1").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message: '<p>This is just a simple notice. Everything is in order and this is a.</p>',
            layout: 'growl',
            effect: 'scale',
            type: 'notice' // notice, warning, error or success

        });
        // show the notification
        notification.show();
    });

    $("#notification2").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message : '<p>Hello there! I\'m a classic notification but I have some elastic jelliness thanks to bounce.js. </p>',
            layout : 'growl',
            effect : 'jelly',
            type : 'notice' // notice, warning, error or success

        });

        // show the notification
        notification.show();
    });


    $("#notification3").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message : '<p>This notification has slight elasticity to it thanks to bounce.js.</p>',
            layout : 'growl',
            effect : 'slide',
            type : 'notice' // notice, warning or error

        });

        // show the notification
        notification.show();
    });

    $("#notification4").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message : '<p>Your preferences have been saved successfully. See all your settings in your.</p>',
            layout : 'growl',
            effect : 'genie',
            type : 'notice' // notice, warning or error

        });

        // show the notification
        notification.show();
    });

    var notification5 = document.getElementById( 'notification5' );
    $("#notification5").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message : '<p>Your preferences have been saved successfully. See all your settings in your <a href="#">profile overview</a>.</p>',
            layout : 'attached',
            effect : 'flip',
            type : 'notice', // notice, warning or error
            onClose : function() {
                notification5.disabled = false;
            }
        });

        // show the notification
        notification.show();
    });

    $("#notification6").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message: '<span class="icon icon-megaphone"></span><p>You have some interesting news in your inbox. Go now.</p>',
            layout: 'bar',
            effect: 'slidetop',
            type: 'notice'// notice, warning or error

        });

        // show the notification
        notification.show();
    });

    $("#notification7").on("click",function() {

        // create the notification
        var notification = new NotificationFx({
            message : '<p><span class="icon icon-settings"></span> Your preferences have been saved successfully. See all your settings in your profile overview.</p>',
            layout : 'bar',
            effect : 'exploader',
            ttl : 9000000,
            type : 'notice' // notice, warning or error

        });

        // show the notification
        notification.show();

    });
    $("#notification9").on("click",function() {

        var svgshape = document.getElementById( 'notification-shape2' ),
            notification9 = document.getElementById( 'notification9' );


        // create the notification
        var notification = new NotificationFx({
            wrapper : svgshape,
            message : '<p>Whatever you did, it was successful!</p>',
            layout : 'other',
            effect : 'loadingcircle',
            ttl : 9000,
            type : 'notice' // notice, warning or error

        });
        // show the notification
        notification.show();


    });

    var notification10=document.getElementById("notification10");
    $("#notification10").on("click",function() {
        // create the notification
        var notification = new NotificationFx({
            message : '<p>I am using a beautiful spinner from SpinKit</p>',
            layout : 'other',
            effect : 'boxspinner',
            ttl : 9000,
            type : 'notice', // notice, warning or error
            onClose : function() {
                notification10.disabled = false;
            }
        });

        // show the notification
        notification.show();


    });
    var notification11=document.getElementById("notification11");
    $("#notification11").on("click",function() {

        // create the notification
        var notification = new NotificationFx({
            message : '<div class="ns-thumb"><img src="img/avatar51.png"/></div><div class="ns-content"><p>Zoe Moulder accepted your invitation.</p></div>',
            layout : 'other',
            ttl : 6000,
            effect : 'thumbslider',
            type : 'notice', // notice, warning, error or success
            onClose : function() {
                notification11.disabled = false;
            }
        });

        // show the notification
        notification.show();
    });

    (function() {
        var svgshape = document.getElementById( 'notification-shape' ),
            s = Snap( svgshape.querySelector( 'svg' ) ),
            path = s.select( 'path' ),
            pathConfig = {
                from : path.attr( 'd' ),
                to : svgshape.getAttribute( 'data-path-to' )
            },

            notification12 = document.getElementById( 'notification12' );

        // make sure..
        notification12.disabled = false;

        notification12.addEventListener( 'click', function() {
            // simulate loading (for demo purposes only)
            classie.add( notification12, 'active' );
            setTimeout( function() {

                path.animate( { 'path' : pathConfig.to }, 300, mina.easeinout );

                classie.remove( notification12, 'active' );

                // create the notification
                var notification = new NotificationFx({
                    wrapper : svgshape,
                    message : '<p><img src="img/avatar51.png" class="text-center rounded-circle" alt="user"/> <br /> <br /> I\'m appearing in a morphed shape thanks to Snap.svg</p>',
                    layout : 'other',
                    effect : 'cornerexpand',
                    type : 'notice', // notice, warning or error
                    onClose : function() {
                        notification12.disabled = false;
                        setTimeout(function() {
                            path.animate( { 'path' : pathConfig.from }, 300, mina.easeinout );
                        }, 200 );
                    }
                });

                // show the notification
                notification.show();

            }, 1200 );

            // disable the button (for demo purposes only)
            this.disabled = true;

        } );
    })();

    $("#notification12").on("click",function () {
        $("#notification-shape").css("display","block");

    });
    setInterval(function(){
        if ( $('#notification-shape').children().length < 2 ) {
            $("#notification-shape").css("display", "none");
        }
        else{
            $("#notification-shape").css("display", "block");
        }
    }, 500);
    var header = $('.header').height();
    if ($(window).width() <= 992) {
        $(".lobibox-notify-wrapper.top,.notification-shape").css("top",header);
    }
});