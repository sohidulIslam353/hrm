"use strict";
$(document).ready(function() {

    function dyn_notice() {
        var percent = 0;
        var notice = new PNotify({
            text: "Please Wait",
            type: 'info',
            icon: 'fa fa-spinner fa-spin',
            hide: false,

            buttons: {
                closer: false,
                sticker: false
            },
            opacity: .75,
            shadow: false,
            width: "170px"
        });

        setTimeout(function () {
            notice.update({title: false});
            var interval = setInterval(function () {
                percent += 2;
                var options = {
                    text: percent + "% complete."
                };
                if (percent == 80)
                    options.title = "Almost There";
                if (percent >= 100) {
                    window.clearInterval(interval);
                    options.title = "Done!";
                    options.type = "success";
                    options.hide = true;
                    options.buttons = {
                        closer: true,
                        sticker: true
                    };
                    options.icon = 'fa fa-check';
                    options.opacity = 1;
                    options.shadow = true;
                    options.width = PNotify.prototype.options.width;
                }
                notice.update(options);
            }, 120);
        }, 2000);
    }
    function fake_load() {
        var cur_value = 1,
            progress;

        // Make a loader.
        var loader = new PNotify({
            title: "Creating series of tubes",
            text: '<div class="progress progress-striped active" style="margin:0">\
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0">\
        <span class="sr-only">0%</span>\
    </div>\
</div>',
            //icon: 'fa fa-moon-o fa-spin',
            icon: 'fa fa-cog fa-spin',
            hide: false,
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            },
            before_open: function(notice) {
                progress = notice.get().find("div.progress-bar");
                progress.width(cur_value + "%").attr("aria-valuenow", cur_value).find("span").html(cur_value + "%");
                // Pretend to do something.
                var timer = setInterval(function() {
                    if (cur_value == 70) {
                        loader.update({
                            title: "Aligning discrete worms",
                            icon: "fa fa-circle-o-notch fa-spin"
                        });
                    }
                    if (cur_value == 80) {
                        loader.update({
                            title: "Connecting end points",
                            icon: "fa fa-refresh fa-spin"
                        });
                    }
                    if (cur_value == 90) {
                        loader.update({
                            title: "Dividing and conquering",
                            icon: "fa fa-spinner fa-spin"
                        });
                    }
                    if (cur_value >= 100) {
                        // Remove the interval.
                        window.clearInterval(timer);
                        loader.remove();
                        return;
                    }
                    cur_value += 1;
                    progress.width(cur_value + "%").attr("aria-valuenow", cur_value).find("span").html(cur_value + "%");
                }, 65);
            }
        });
    }

    // Basic notifications


    $(".notify_desktop").on("click", function () {
        PNotify.desktop.permission();
        new PNotify({
            title: 'Desktop Info',
            text: 'If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular PNotify notice.',
            type: 'info',
            delay:3000,
            desktop: {
                desktop: true
            }
        }).get().on("click",function (e) {
            if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target))
                return;
            alert('Hey! You clicked the desktop notification!');
        });
        return false;
    });
    $(".notify_desktopsuccess").on("click", function () {
        PNotify.desktop.permission();
        new PNotify({
            title: 'Desktop Success',
            text: 'If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular PNotify notice.',
            type: 'success',
            delay:3000,
            desktop: {
                desktop: true
            }
        }).get().on("click",function (e) {
            if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target))
                return;
            alert('Hey! You clicked the desktop notification!');
        });
        return false;
    });
    $(".notify_desktoperror").on("click", function () {
        PNotify.desktop.permission();
        (new PNotify({
            title: 'Desktop Error',
            text: 'If you\'ve given me permission, I\'ll appear as a desktop notification. If you haven\'t, I\'ll still appear as a regular PNotify notice.',
            type: 'error',
            delay:3000,
            desktop: {
                desktop: true
            }
        })).get().click(function(e) {
            if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)) return;
            alert('Hey! You clicked the desktop notification!');
        });
        return false;
    });


    $(".notify_dyn_notice").on("click", function () {
        dyn_notice();
        return false;
    });
    $(".notify_regerror").on("click", function () {
        new PNotify({
            title: 'Oh No!',
            text: 'Something terrible happened.',
            delay:3000,
            type: 'error'
        });
        return false;
    });
    $(".notify_formnotice").on("click", function () {
        var notice = new PNotify({
            text: $('#form_notice').html(),
            icon: false,
            width: 'auto',
            hide: false,
            type: 'warning',
            delay:3000,
            buttons: {
                closer: false,
                sticker: false
            },
            insert_brs: false
        });
        notice.get().find('form.pf-form').on('click', '[name=cancel]', function () {
            notice.remove();
        }).submit(function () {
            var username = $(this).find('input[name=username]').val();
            if (!username) {
                alert('Please provide a username.');
                return false;
            }
            notice.update({
                title: 'Welcome',
                text: 'Successfully logged in as ' + username,
                icon: true,
                width: PNotify.prototype.options.width,
                hide: true,
                delay:3000,
                buttons: {
                    closer: true,
                    sticker: true
                },
                type: 'success'
            });
            return false;
        });
        return false;
    });
    $(".notify_regularinfo").on("click", function () {
        new PNotify({
            title: 'New Thing',
            text: 'Just to let you know, something happened.',
            delay:3000,
            type: 'info'
        });
        return false;
    });

    // End of basic notifications

    // Animated notifications
    $(".notify_fromtop").on("click", function () {
        new PNotify({
            title: 'From the top! Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            type: 'warning',
            delay:50000,
            animate: {
                animate: true,
                in_class: 'slideInDown',
                out_class: 'slideOutUp'
            }
        });
        return false;
    });
    $(".notify_zoom").on("click", function () {
        new PNotify({
            title: 'Zoom Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            type: 'info',
            delay:3000,
            animate: {
                animate: true,
                in_class: 'zoomInLeft',
                out_class: 'zoomOutRight'
            }
        });
        return false;
    });
    $(".notify_zippy").on("click", function () {
        new PNotify({
            title: 'Zippy Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            type: 'error',
            delay:3000,
            animate: {
                animate: true,
                in_class: 'bounceInLeft',
                out_class: 'bounceOutRight'
            }
        });
        return false;
    });
    $(".notify_off_handle").on("click", function () {
        new PNotify({
            title: 'Off the handle Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            type: 'success',
            delay:3000,
            animate: {
                animate: true,
                in_class: 'bounceInDown',
                out_class: 'hinge'
            }
        });
        return false;
    });
    $(".notify_cards").on("click", function () {
        new PNotify({
            title: 'Shuffling cards Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            type: 'info',
            delay:3000,
            animate: {
                animate: true,
                in_class: 'rotateInDownLeft',
                out_class: 'rotateOutUpRight'
            }
        });
        return false;
    });
    // End of animated notifications

    $(".notify_bignotice").on("click", function () {
        new PNotify({
            title: 'Big Notice',
            text: 'Check me out! I\'m tall and wide, even though my text isn\'t.',
            width: '500px',
            delay:3000,
            min_height: '400px',
            type: 'error'
        });
        return false;
    });

    // Own animation style
    $(".notify_btn").on("click", function () {
        var animate_in = $('#animate_in').val(),
            animate_out = $('#animate_out').val();
        new PNotify({
            title: 'Animate.css Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            animate: {
                animate: true,
                delay:3000,
                in_class: animate_in,
                out_class: animate_out
            }
        });
        return false;
    });
    // End of Own animation style

    // Attension seekers
    $(".notify_bounce").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'success',
            delay:3000,
            after_init: function (notice) {
                notice.attention('bounce');
            }
        });
        return false;
    });
    $(".notify_flash").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'warning',
            delay:3000,
            after_init: function (notice) {
                notice.attention('flash');
            }
        });
        return false;
    });
    $(".notify_pulse").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'info',
            delay:3000,
            after_init: function (notice) {
                notice.attention('pulse');
            }
        });
        return false;
    });
    $(".notify_rubberband").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'error',
            after_init: function (notice) {
                notice.attention('rubberBand');
            }
        });
        return false;
    });
    $(".notify_shake").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'success',
            delay:3000,
            after_init: function (notice) {
                notice.attention('rubberBand');
            }
        });
        return false;
    });
    $(".notify_swing").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'warning',
            delay:3000,
            after_init: function (notice) {
                notice.attention('swing');
            }
        });
        return false;
    });
    $(".notify_tada").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'info',
            delay:3000,
            after_init: function (notice) {
                notice.attention('tada');
            }
        });
        return false;
    });
    $(".notify_wobble").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'error',
            delay:3000,
            after_init: function (notice) {
                notice.attention('wobble');
            }
        });
        return false;
    });
    $(".notify_jello").on("click", function () {
        new PNotify({
            title: 'Attention Seeker',
            text: 'Click the button to see how you can highlight the notice with the Animate module',
            type: 'success',
            after_init: function (notice) {
                notice.attention('jello');
            }
        });
        return false;
    });
    //End of  Attension seekers

    // Confirm Module Confirmation dialogs and prompts
    $(".notify_confirm_dialog").on("click", function () {
        new PNotify({
            title: 'Confirmation Needed',
            text: 'Are you sure?',
            icon: 'fa fa-question-circle',
            hide: false,
            type: 'success',
            delay:3000,
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            }
        }).get().on('pnotify.confirm', function () {
            swal('Ok cool').done();
        }).on('pnotify.cancel', function () {
            swal('Oh ok. Chicken, I see.').done();

        });
        return false;
    });
    $(".notify_modal_dialog").on("click", function () {
        new PNotify({
            title: 'Confirmation Needed',
            text: 'Are you sure?',
            icon: 'fa fa-question-circle',
            hide: false,
            type: 'info',
            delay:3000,
            confirm: {
                confirm: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            },
            addclass: 'stack-modal',
            stack: {'dir1': 'down', 'dir2': 'right', 'modal': true}
        }).get().on('pnotify.confirm', function () {
            swal('Ok cool').done();
        }).on('pnotify.cancel', function () {
            swal('Oh ok. Chicken, I see.').done();
        });
        return false;
    });
    $(".notify_custom_buttons").on("click", function () {
        new PNotify({
            title: 'Choose a Side',
            text: 'You have three options to choose from.',
            icon: 'fa fa-question-circle',
            hide: false,
            type: 'error',
            delay:3000,
            confirm: {
                confirm: true,
                buttons: [
                    {
                        text: 'Fries',
                        click: function (notice) {
                            notice.update({
                                title: 'You\'ve Chosen a Side',
                                text: 'You want fries.',
                                icon: true,
                                type: 'info',
                                delay:3000,
                                hide: true,
                                confirm: {
                                    confirm: false
                                },
                                buttons: {
                                    closer: true,
                                    sticker: true
                                }
                            });
                        }
                    },
                    {
                        text: 'Mash',
                        click: function (notice) {
                            notice.update({
                                title: 'You\'ve Chosen a Side',
                                text: 'You want mashed potatoes.',
                                icon: true,
                                type: 'info',
                                delay:3000,
                                hide: true,
                                confirm: {
                                    confirm: false
                                },
                                buttons: {
                                    closer: true,
                                    sticker: true
                                }
                            });
                        }
                    },
                    {
                        text: 'Fruit',
                        click: function (notice) {
                            notice.update({
                                title: 'You\'ve Chosen a Side',
                                text: 'You want fruit.',
                                icon: true,
                                type: 'info',
                                delay:3000,
                                hide: true,
                                confirm: {
                                    confirm: false
                                },
                                buttons: {
                                    closer: true,
                                    sticker: true
                                }
                            });
                        }
                    }
                ]
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            }
        });
        return false;
    });
    $(".non_blocking").on('click',function(){
        new PNotify({
            title: 'Zippy Effect',
            text: 'I use effects from Animate.css. Such smooth CSS3 transitions make me feel like butter.',
            type: 'error',
            nonblock: {
                nonblock: true,
                nonblock_opacity: .9
            },
            delay:3000,
            animate: {
                animate: true,
                in_class: 'bounceInLeft',
                out_class: 'bounceOutRight'
            }
        });
        return false;

    });
    $(".notify_alert_button").on("click", function () {
        new PNotify({
            title: 'You Will Receive a Side',
            text: 'You have no choice.',
            icon: 'fa fa-info-circle',
            hide: false,
            type: 'warning',
            delay:3000,
            confirm: {
                confirm: true,
                buttons: [
                    {
                        text: 'Ok',
                        addClass: 'btn-primary',
                        click: function (notice) {
                            notice.remove();
                        }
                    },
                    null
                ]
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            }
        });
        return false;
    });
    $(".notify_prompt_dialog").on("click", function () {
        new PNotify({
            title: 'Input Needed',
            text: 'What side would you like?',
            icon: 'fa fa-question-circle',
            hide: false,
            type: 'success',
            delay:3000,
            confirm: {
                prompt: true
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            }
        }).get().on('pnotify.confirm', function(e, notice, val){
            notice.cancelRemove().update({
                title: 'You\'ve Chosen a Side', text: 'You want '+$('<div/>').text(val).html()+'.', icon: true, type: 'info', hide: true,
                confirm: {
                    prompt: false
                },
                buttons: {
                    closer: true,
                    sticker: true
                }
            });
        }).on('pnotify.cancel', function(e, notice){
            notice.cancelRemove().update({
                title: 'You Don\'t Want a Side', text: 'No soup for you!', icon: true, type: 'info', hide: true,
                confirm: {
                    prompt: false
                },
                buttons: {
                    closer: true,
                    sticker: true
                }
            });
        });
        return false;
    });
    $(".notify_multiprompt_dialog").on("click", function () {
        new PNotify({
            title: 'Input Needed',
            text: 'Write me a poem, please.',
            icon: 'fa fa-question-circle',
            hide: false,
            type: 'error',
            delay:340000,
            confirm: {
                prompt: true,
                prompt_multi_line: true,
                prompt_default: 'Roses are red,\nViolets are blue,\n'
            },
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            }
        }).get().on('pnotify.confirm', function(e, notice, val){
            notice.cancelRemove().update({
                title: 'Your Poem', text: $('<div/>').text(val).html(), icon: true, type: 'info', hide: true,
                confirm: {
                    prompt: false
                },
                buttons: {
                    closer: true,
                    sticker: true
                }
            });
        }).on('pnotify.cancel', function(e, notice){
            notice.cancelRemove().update({
                title: 'You Don\'t Like Poetry', text: 'Roses are dead,\nViolets are dead,\nI suck at gardening.', icon: true, type: 'info', hide: true,
                confirm: {
                    prompt: false
                },
                buttons: {
                    closer: true,
                    sticker: true
                }
            });
        });
        return false;
    });
    // End of Confirm Module Confirmation dialogs and prompts

    // Callbacks Module Manipulate the notice during its lifecycle
    $(".notify_callback").on("click", function () {
        var dont_alert = function(){};
        new PNotify({
            title: 'I\'m Here',
            text: 'I have a callback for each of my events. I\'ll call all my callbacks while I change states.',
            before_init: function(opts){
                alert('I\'m called before the notice initializes. I\'m passed the options used to make the notice. I can modify them. Watch me replace the word callback with tire iron!');
                opts.text = opts.text.replace(/callback/g, 'tire iron');
            },
            after_init: function(notice){
                alert('I\'m called after the notice initializes. I\'m passed the PNotify object for the current notice: '+notice+'\n\nThere are more callbacks you can assign, but this is the last notice you\'ll see. Check the code to see them all.');
            },
            before_open: function(notice){
                var source_note = 'Return false to cancel opening.';
                dont_alert('I\'m called before the notice opens. I\'m passed the PNotify object for the current notice: '+notice);
            },
            after_open: function(notice){
                dont_alert('I\'m called after the notice opens. I\'m passed the PNotify object for the current notice: '+notice);
            },
            before_close: function(notice, timer_hide){
                var source_note = 'Return false to cancel close. Use PNotify.queueRemove() to set the removal timer again.';
                dont_alert('I\'m called before the notice closes. I\'m passed the PNotify object for the current notice: '+notice);
                dont_alert('I also have an argument called timer_hide, which is true if the notice was closed because the timer ran down. Value: '+timer_hide);
            },
            after_close: function(notice, timer_hide){
                dont_alert('I\'m called after the notice closes. I\'m passed the PNotify object for the current notice: '+notice);
                dont_alert('I also have an argument called timer_hide, which is true if the notice was closed because the timer ran down. Value: '+timer_hide);
            }
        });
        return false;
    });

    $(".notify_callback1").on("click", function () {
        new PNotify({
            title: 'Notice',
            text: 'Right now I\'m a notice.',
            before_close: function (notice) {
                notice.update({
                    title: 'Error',
                    text: 'Uh oh. Now I\'ve become an error.',
                    type: 'error',
                    delay:3000,


                    before_close: function (notice) {
                        notice.update({
                            title: 'Success',
                            text: 'I fixed the error!',
                            type: 'success',
                            before_close: function (notice) {
                                notice.update({
                                    title: 'Info',
                                    text: 'Everything\'s cool now.',
                                    type: 'info',
                                    before_close: null

                                });
                                notice.attention('swing');
                                notice.queueRemove();
                                return false;
                            }
                        });
                        notice.attention('swing');
                        notice.queueRemove();
                        return false;
                    }
                });
                notice.attention('swing');
                notice.queueRemove();

                return false;
            }
        });
        return false;
    });
    // End of Callbacks Module Manipulate the notice during its lifecycle

    PNotify.prototype.options.styling = "fontawesome";

    // History
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as a module.
            define('pnotify.history', ['jquery', 'pnotify'], factory);
        } else if (typeof exports === 'object' && typeof module !== 'undefined') {
            // CommonJS
            module.exports = factory(require('jquery'), require('./pnotify'));
        } else {
            // Browser globals
            factory(root.jQuery, root.PNotify);
        }
    }(typeof window !== "undefined" ? window : this, function($, PNotify){
        var history_menu,
            history_handle_top;
        $(function(){
            $(".all-notifications").on("click",function(){


//            $("body").on("pnotify.history-all", function(){


                // Display all notices. (Disregarding non-history notices.)
                $.each(PNotify.notices, function(){
                    if (this.modules.history.inHistory) {
                        if (this.elem.is(":visible")) {
                            // The hide variable controls whether the history pull down should
                            // queue a removal timer.
                            if (this.options.hide)
                                this.queueRemove();
                        } else if (this.open)
                            this.open();
                    }
                });
            });
            $('.last-notification').on("click", function(){

                var pushTop = (PNotify.prototype.options.stack.push === "top");

                // Look up the last history notice, and display it.
                var i = (pushTop ? 0 : -1);

                var notice;
                do {
                    if (i === -1)
                        notice = PNotify.notices.slice(i);
                    else
                        notice = PNotify.notices.slice(i, i+1);
                    if (!notice[0])
                        return false;

                    i = (pushTop ? i + 1 : i - 1);
                } while (!notice[0].modules.history.inHistory || notice[0].elem.is(":visible"));
                if (notice[0].open)
                    notice[0].open();
            });
        });
        PNotify.prototype.options.history = {
            // Place the notice in the history.
            history: true,
            // Display a pull down menu to redisplay previous notices.
            menu: false,
            // Make the pull down menu fixed to the top of the viewport.
            fixed: true,
            // Maximum number of notifications to have onscreen.
            maxonscreen: Infinity,
            // The various displayed text, helps facilitating internationalization.
            labels: {
                redisplay: "Redisplay",
                all: "All",
                last: "Last"
            }
        };
        PNotify.prototype.modules.history = {
            // The history variable controls whether the notice gets redisplayed
            // by the history pull down.
            inHistory: false,

            init: function(notice, options){
                // Make sure that no notices get destroyed.
                notice.options.destroy = false;

                this.inHistory = options.history;

                if (options.menu) {
                    // If there isn't a history pull down, create one.
                    if (typeof history_menu === "undefined") {
                        history_menu = $("<div />", {
                            "class": "ui-pnotify-history-container "+notice.styles.hi_menu,
                            "mouseleave": function(){
                                history_menu.animate({top: "-"+history_handle_top+"px"}, {duration: 100, queue: false});
                            }
                        })
                            .append($("<div />", {"class": "ui-pnotify-history-header", "text": options.labels.redisplay}))
                            .append($("<button />", {
                                "class": "ui-pnotify-history-all "+notice.styles.hi_btn,
                                "text": options.labels.all,
                                "mouseenter": function(){
                                    $(this).addClass(notice.styles.hi_btnhov);
                                },
                                "mouseleave": function(){
                                    $(this).removeClass(notice.styles.hi_btnhov);
                                },
                                "click": function(){
                                    $(this).trigger("pnotify.history-all");
                                    return false;
                                }
                            }))
                            .append($("<button />", {
                                "class": "ui-pnotify-history-last "+notice.styles.hi_btn,
                                "text": options.labels.last,
                                "mouseenter": function(){
                                    $(this).addClass(notice.styles.hi_btnhov);
                                },
                                "mouseleave": function(){
                                    $(this).removeClass(notice.styles.hi_btnhov);
                                },
                                "click": function(){
                                    $(this).trigger("pnotify.history-last");
                                    return false;
                                }
                            }))
                            .appendTo("body");

                        // Make a handle so the user can pull down the history tab.
                        var handle = $("<span />", {
                            "class": "ui-pnotify-history-pulldown "+notice.styles.hi_hnd,
                            "mouseenter": function(){
                                history_menu.animate({top: "0"}, {duration: 100, queue: false});
                            }
                        })
                            .appendTo(history_menu);

                        // Get the top of the handle.
                        history_handle_top = handle.offset().top + 2;
                        // Hide the history pull down up to the top of the handle.
                        history_menu.css({top: "-"+history_handle_top+"px"});

                        // Apply the fixed styling.
                        if (options.fixed) {
                            history_menu.addClass('ui-pnotify-history-fixed');
                        }
                    }
                }
            },
            update: function(notice, options){
                // Update values for history menu access.
                this.inHistory = options.history;
                if (options.fixed && history_menu) {
                    history_menu.addClass('ui-pnotify-history-fixed');
                } else if (history_menu) {
                    history_menu.removeClass('ui-pnotify-history-fixed');
                }
            },
            beforeOpen: function(notice, options){
                // Remove oldest notifications leaving only options.maxonscreen on screen
                if (PNotify.notices && (PNotify.notices.length > options.maxonscreen)) {
                    // Oldest are normally in front of array, or if stack.push=="top" then
                    // they are at the end of the array! (issue #98)
                    var el;
                    if (notice.options.stack.push !== "top")
                        el = PNotify.notices.slice(0, PNotify.notices.length - options.maxonscreen);
                    else
                        el = PNotify.notices.slice(options.maxonscreen, PNotify.notices.length);

                    $.each(el, function(){
                        if (this.remove)
                            this.remove();
                    });
                }
            }
        };
        $.extend(PNotify.styling.jqueryui, {
            hi_menu: "ui-state-default ui-corner-bottom",
            hi_btn: "ui-state-default ui-corner-all",
            hi_btnhov: "ui-state-hover",
            hi_hnd: "ui-icon ui-icon-grip-dotted-horizontal"
        });
        $.extend(PNotify.styling.bootstrap2, {
            hi_menu: "well",
            hi_btn: "btn",
            hi_btnhov: "",
            hi_hnd: "icon-chevron-down"
        });
        $.extend(PNotify.styling.bootstrap3, {
            hi_menu: "well",
            hi_btn: "btn btn-default",
            hi_btnhov: "",
            hi_hnd: "glyphicon glyphicon-chevron-down"
        });
        $.extend(PNotify.styling.fontawesome, {
            hi_menu: "well",
            hi_btn: "btn btn-default",
            hi_btnhov: "",
            hi_hnd: "fa fa-chevron-down"
        });
        return PNotify;
    }));


    $(".fake_loader").on("click",function () {

//    function fake_load() {
        var cur_value = 1,
            progress;

        // Make a loader.
        var loader = new PNotify({
            title: "Creating series of tubes",
            text: '<div class="progress progress-striped active" style="margin:0">\
    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0">\
        <span class="sr-only">0%</span>\
    </div>\
</div>',
            //icon: 'fa fa-moon-o fa-spin',
            icon: 'fa fa-cog fa-spin',
            hide: false,
            buttons: {
                closer: false,
                sticker: false
            },
            history: {
                history: false
            },
            before_open: function(notice){
                progress = notice.get().find("div.progress-bar");
                progress.width(cur_value+"%").attr("aria-valuenow", cur_value).find("span").html(cur_value+"%");
                // Pretend to do something.
                var timer = setInterval(function(){
                    if (cur_value == 70) {
                        loader.update({title: "Aligning discrete worms", icon: "fa fa-circle-o-notch fa-spin"});
                    }
                    if (cur_value == 80) {
                        loader.update({title: "Connecting end points", icon: "fa fa-refresh fa-spin"});
                    }
                    if (cur_value == 90) {
                        loader.update({title: "Dividing and conquering", icon: "fa fa-spinner fa-spin"});
                    }
                    if (cur_value >= 100) {
                        // Remove the interval.
                        window.clearInterval(timer);
                        loader.remove();
                        return;
                    }
                    cur_value += 1;
                    progress.width(cur_value+"%").attr("aria-valuenow", cur_value).find("span").html(cur_value+"%");
                }, 65);
            }
        });
    });

    $(".custom_style").on('click',function () {
        new PNotify({
            title: 'Custom Styling',
            text: 'I have an additional class that\'s used to give me special styling. I always wanted to be pretty. I also use the nonblock module.',
            addclass: 'custom',
            icon: 'ti-image',
            delay:3000,
            opacity: .8,
            nonblock: {
                nonblock: true
            }
        });
    });
});