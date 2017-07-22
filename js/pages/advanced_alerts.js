"use strict";
$(document).ready(function () {
    $(".alert1").on("click",function(){
        $.alert({
            title: 'Alert alert!',
            content: 'This is a simple alert. <br> with some <strong>HTML</strong> <em>contents</em>',
            icon: 'ti-settings',
            animation: 'zoom',
            closeAnimation: 'zoom',
            buttons: {
                okay: {
                    text: 'Okay',
                    btnClass: 'btn-blue'
                }
            }
        });
    });

    $(".alert2").on("click",function(){
        $.confirm({
            title: 'A secure action',
            content: 'Its smooth to do multiple confirms at a time. <br> Click confirm or cancel for another modal',
            icon: 'ti-help-alt',
            animation: 'scale',
            closeAnimation: 'scale',
            opacity: 0.5,
            buttons: {
                'confirm': {
                    text: 'Proceed',
                    btnClass: 'btn-info',
                    action: function () {
                        $.confirm({
                            title: 'This maybe critical',
                            content: 'Critical actions can have multiple confirmations like this one.',
                            icon: 'ti-alert',
                            animation: 'zoom',
                            closeAnimation: 'zoom',
                            buttons: {
                                confirm: {
                                    text: 'Yes, sure!',
                                    btnClass: 'btn-warning',
                                    action: function () {
                                        $.alert('A very critical action <strong>triggered!</strong>');
                                    }
                                },
                                cancel: function () {
                                    $.alert('you clicked on <strong>cancel</strong>');
                                }
                            }
                        });
                    }
                },
                cancel: function () {
                    $.alert('you clicked on <strong>cancel</strong>');
                },
                moreButtons: {
                    text: 'something else',
                    action: function () {
                        $.alert('you clicked on <strong>something else</strong>');
                    }
                }
            }
        });
    });

    $(".alert3").on("click",function(){

        $.alert({
            title: 'Oh no',
            type: 'orange',
            content: 'Something bad, bad happened.'
        });
    });
    $(".alert4").on("click",function(){
        $.confirm({
            title: 'A simple form',
            content: 'url:http://craftpip.github.io/jquery-confirm/form.html',
            buttons: {
                sayMyName: {
                    text: 'Say my name',
                    btnClass: 'btn-orange',
                    action: function () {
                        var input = this.$content.find('input#input-name');
                        var errorText = this.$content.find('.text-danger');
                        if (input.val() == '') {
                            errorText.html('Please don\'t keep the name field empty!').slideDown(200);
                            return false;
                        } else {
                            $.alert('Hello ' + input.val() + ', i hope you have a great day!');
                        }
                    }
                },
                later: function () {
                    // do nothing.
                }
            }
        });
    });

    // using as dialogs
    $('.alert5').on('click', function () {
        $.dialog({
            title: 'Title comes here',
            content: 'Just need a popup without buttons, <strong>no problem!</strong><br>' +
            '<h3>disable the buttons</h3>' +
            '<h4><strong>and you get a dialog modal</strong></h4>' +
            '<h5><em>Well, that close icon is shown if no buttons are here (u need something to close the modal right), u can explicitly control that too.</em></h5>' +
            '<button type="button" class="btn btn-success">Click me to change the content</button>',
            animation: 'scale',
            onOpen: function () {
                var that = this;
                this.$content.find('button').click(function () {
                    that.setContent('As simple as that !');
                })
            }
        });
    });

    // background dismiss
    $('.alert6').on('click', function () {
        $.alert({
            title: 'Background dismiss',
            content: 'Click outside the modal to close it.',
            animation: 'top',
            closeAnimation: 'bottom',
            backgroundDismiss: true,
            buttons: {
                okay: {
                    text: 'okay',
                    btnClass: 'btn-blue',
                    action: function () {
                        // do nothing
                    }
                }
            }
        });
    });

    // asynchronous content
    $('.alert7').on('click', function () {
        $.dialog({
            title: 'Asynchronous content',
            content: 'url:adv_alert_tabledata.html',
            animation: 'zoom',
            columnClass: 'medium',
            closeAnimation: 'scale',
            backgroundDismiss: true
        });
    });
    //auto Close
    $('.alert8').on('click', function () {
        $.confirm({
            title: 'Auto close',
            content: 'Some actions maybe critical, prevent it with the Auto close. This dialog will automatically trigger cancel after the timer runs out.',
            autoClose: 'cancelAction|10000',
            escapeKey: 'cancelAction',
            buttons: {
                confirm: {
                    btnClass: 'btn-red',
                    text: 'Delete ben\'s account',
                    action: function () {
                        $.alert('You deleted Ben\'s account!');
                    }
                },
                cancelAction: {
                    text: 'Cancel',
                    action: function () {
                        $.alert('Ben just got saved!');
                    }
                }
            }
        });
    });
    // key strokes
    $('.alert9').on('click', function () {
        $.confirm({
            title: 'Keystrokes',
            escapeKey: true, // close the modal when escape is pressed.
            content: 'Press the <strong>escape key</strong> to close the modal. That works.' +
            '<br> press <strong>enter key</strong> to trigger okay.' +
            '<br> press <strong>shift or ctrl key</strong> to trigger cancel.',
            backgroundDismiss: true, // for escapeKey to work, backgroundDismiss should be enabled.
            buttons: {
                okay: {
                    keys: [
                        'enter'
                    ],
                    action: function () {
                        $.alert('<strong>Okay button</strong> was triggered.');
                    }
                },
                cancel: {
                    keys: [
                        'ctrl',
                        'shift'
                    ],
                    action: function () {
                        $.alert('<strong>Cancel button</strong> was triggered.');
                    }
                }
            }
        });
    });

    // alignment
    $('.alert10').on('click', function () {
        $.confirm({
            title: 'Gracefully center aligned',
            content: '<p>You can add content and not worry about the alignment. The goal is to make a Interactive dialog!.</p>' +
            '<button type="button" class="btn btn-success">Click me to add more content</button> <span> <br></span> ',
            buttons: {
                someButton: {
                    text: 'Add wow',
                    btnClass: 'btn-green',
                    action: function () {
                        this.$content.find('span').append('<br>Wowww');
                        return false; // prevent dialog from closing.
                    }
                },
                someOtherButton: {
                    text: 'Clear it',
                    btnClass: 'btn-orange',
                    action: function () {
                        this.$content.find('span').html('');
                        return false; // prevent dialog from closing.
                    }
                },
                close: function () {
                    // lets the user close the modal.
                }
            },
            onOpen: function () {
                // onOpen attach the events.
                var that = this;
                this.$content.find('button').click(function () {
                    that.$content.find('span').append('<br>This is awesome!!!!');
                });
            }
        });
    });
    // working with images
    // todo: images is not tested yet.
    $('.alert11').on('click', function () {
        $.confirm({
            title: 'Adding images',
            content: 'Images from flickr <br><img src="https://c2.staticflickr.com/4/3891/14354989289_2eec0ba724_b.jpg">',
            animation: 'zoom',
            animationClose: 'top',
            buttons: {
                confirm: {
                    text: 'Add more',
                    btnClass: 'btn-blue',
                    action: function () {
                        this.$content.append('<img src="https://c2.staticflickr.com/6/5248/5240523362_8d6d315391_b.jpg">');
                        return false; // prevent dialog from closing.
                    }
                },
                cancel: function () {
                    // lets the user close the modal.
                }
            }
        });
    });

    // animations
    $(' .alert12').on('click', function () {
        $.alert({
            title: 'Animations',
            content: 'jquery-confirm provides a lot of open &amp; close animations out of the box. <br>The best part is, you can add custom ones too.',
            animation: 'rotate',
            closeAnimation: 'right',
            buttons: {
                zoom: function () {
                    this.setCloseAnimation('zoom');
                },
                rotate: function () {
                    this.setCloseAnimation('rotate');
                },
                scale: function () {
                    this.setCloseAnimation('scale');
                },
                top: function () {
                    this.setCloseAnimation('top');
                }
            },
            backgroundDismiss: function () {
                return false;
            },
        });
    });

    $('.alert13').on('click', function () {
        $.alert({
            title: 'A draggable dialog',
            content: 'This dialog is draggable, use the title to drag it around. It wont touch the screen borders',
            type: 'blue',
            draggable: true
        });
    });
//    --------------Themes---------


    $(".alert_theme1").on("click",function () {
        $.confirm({
            theme: 'light'
        });
    });
    $(".alert_theme2").on("click",function () {
        $.confirm({
            theme: 'dark'
        });
    });
    $(".alert_theme3").on("click",function () {
        $.confirm({
            theme: 'supervan'
        });
    });

    $(".alert_theme4").on("click",function () {
        $.confirm({
            theme: 'material'
        });
    });
    $(".alert_theme5").on("click",function () {
        $.confirm({
            theme: 'bootstrap'
        });
    });
//    ------------2D Animations-----------
    $('.alert_2d1').on('click', function () {
        $.confirm({
            animation: 'right',
            closeAnimation: 'right'
        });
    });
    $('.alert_2d2').on('click', function () {
        $.confirm({
            animation: 'left',
            closeAnimation: 'left'
        });
    });
    $('.alert_2d3').on('click', function () {
        $.confirm({
            animation: 'bottom',
            closeAnimation: 'bottom'
        });
    });
    $('.alert_2d4').on('click', function () {
        $.confirm({
            animation: 'top',
            closeAnimation: 'top'
        });
    });
    $('.alert_2d5').on('click', function () {
        $.confirm({
            animation: 'rotate',
            closeAnimation: 'rotate'
        });
    });

//    ------------------3D Animations---------
    $('.alert_3d1').on('click', function () {
        $.confirm({
            animation: 'scale',
            closeAnimation: 'scale'
        });
    });
    $('.alert_3d2').on('click', function () {
        $.confirm({
            animation: 'zoom',
            closeAnimation: 'zoom'
        });
    });
    $('.alert_3d3').on('click', function () {
        $.confirm({
            animation: 'scaleY',
            closeAnimation: 'scaleY'
        });
    });
    $('.alert_3d4').on('click', function () {
        $.confirm({
            animation: 'scaleX',
            closeAnimation: 'scaleX'
        });
    });

    $('.alert_3d5').on('click', function () {
        $.confirm({
            animation: 'rotateY',
            closeAnimation: 'rotateY'
        });
    });
    $('.alert_3d6').on('click', function () {
        $.confirm({
            animation: 'rotateX',
            closeAnimation: 'rotateX'
        });
    });
//    ----------Animation Bounce---------
    $('.alert_bounce1').on('click', function () {
        $.confirm({
            animationBounce: 1.5
        });
    });
    $('.alert_bounce2').on('click', function () {
        $.confirm({
            animationBounce: 3
        });
    });
    $('.alert_bounce3').on('click', function () {
        $.confirm({
            animationBounce: 5
        });
    });
//    --------------Animation Speed---------
    $('.alert_speed1').on('click', function () {
        $.confirm({
            animationSpeed: 2000
        });
    });
    $('.alert_speed2').on('click', function () {
        $.confirm({
            animationSpeed: 200
        });
    });
    $('.alert_speed3').on('click', function () {
        $.confirm({
            animationSpeed: 500
        });
    });
//    --------------Alert Types---------
    $(".alert_type1").on("click",function() {

        $.alert({
            title: 'Warning!',
            type: 'orange',
            content: ' Better check yourself, you are not looking too good.'
        });
    });
    $(".alert_type2").on("click",function() {

        $.alert({
            title: 'Heads up!',
            type: 'blue',
            content: 'This alert needs your attention, but it is not super important.'
        });
    });
    $(".alert_type3").on("click",function() {

        $.alert({
            title: 'Well done!',
            type: 'green',
            content: ' You successfull yead this important alert message.'
        });
    });
    $(".alert_type4").on("click",function() {

        $.alert({
            title: 'Oh snap!',
            type: 'red',
            content: 'Change a few things up and try submitting again.'
        });
    });
});