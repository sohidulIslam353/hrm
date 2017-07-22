"use strict";
$(document).ready(function(){
    function testAnim(x, str) {
        $('#animationSandbox' + str).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    function testAnim1(str) {
        var x = document.getElementById('s' + str).value;

        $('#animationSandbox' + str).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
    }

    $(".knob").knob({
        change: function(value) {
            //console.log("change : " + value);
        },
        release: function(value) {
            //console.log(this.$.attr('value'));
            console.log("release : " + value);
        },
        cancel: function() {
            console.log("cancel : ", this);
        },
        /*format : function (value) {
         return value + '%';
         },*/
        draw: function() {
            // "tron" case
            if (this.$.data('skin') == 'tron') {

                this.cursorExt = 0.3;

                var a = this.arc(this.cv) // Arc
                    ,
                    pa // Previous arc
                    , r = 1;

                this.g.lineWidth = this.lineWidth;

                if (this.o.displayPrevious) {
                    pa = this.arc(this.v);
                    this.g.beginPath();
                    this.g.strokeStyle = this.pColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                    this.g.stroke();
                }
                this.g.beginPath();
                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                this.g.stroke();

                this.g.lineWidth = 2;
                this.g.beginPath();
                this.g.strokeStyle = this.o.fgColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                this.g.stroke();

                return false;
            }
        }
    });
    // Example of infinite knob, iPod click wheel
    var v, up = 0,
        down = 0,
        i = 0,
        $idir = $("div.idir"),
        $ival = $("div.ival"),
        incr = function() {
            i++;
            $idir.show().html("+").fadeOut();
            $ival.html(i);
        },
        decr = function() {
            i--;
            $idir.show().html("-").fadeOut();
            $ival.html(i);
        };
    $("input.infinite").knob({
        min: 0,
        max: 20,
        stopper: false,
        change: function() {
            if (v > this.cv) {
                if (up) {
                    decr();
                    up = 0;
                } else {
                    up = 1;
                    down = 0;
                }
            } else {
                if (v < this.cv) {
                    if (down) {
                        incr();
                        down = 0;
                    } else {
                        down = 1;
                        up = 0;
                    }
                }
            }
            v = this.cv;
        }
    });

// ======================transitions========================

//        bounce in
    $("#bi").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#bi').closest(".card").addClass('animated bounceIn').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated bounceIn');
        });
        return false;
    });
//        bounceinleft
    $("#bil").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#bil').closest(".card").addClass('animated bounceInLeft').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated bounceInLeft');
        });
        return false;
    });

//    bounceinright
    $("#bir").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#bir').closest(".card").addClass('animated bounceInRight').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated bounceInRight');
        });
        return false;
    });
//    bounce out
    $("#bo").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#bo').closest(".card").addClass('animated bounceOut').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated bounceOut');
        });
        return false;
    });
// pulse
    $("#pul").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#pul').closest(".card").addClass('animated pulse').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated pulse');
        });
        return false;
    });
// tada
    $("#tad").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#tad').closest(".card").addClass('animated tada').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated tada');
        });
        return false;
    });
    // Rubber band
    $("#rubber").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rubber').closest(".card").addClass('animated rubberBand').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated rubberBand');
        });
        return false;
    });
//swing
    $("#swing").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#swing').closest(".card").addClass('animated swing').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated swing');
        });
        return false;
    });
//        wobble
    $("#wobble").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#wobble').closest(".card").addClass('animated wobble').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated wobble');
        });
        return false;
    });

//fade effects
    $("#fadein").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#fadein').closest(".card").addClass('animated fadeIn').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated fadeIn');
        });
        return false;
    });
    $("#fadeleft").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#fadeleft').closest(".card").addClass('animated fadeInLeft').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated fadeInLeft');
        });
        return false;
    });
    $("#faderight").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#faderight').closest(".card").addClass('animated fadeInRight').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated fadeInRight');
        });
        return false;
    });
    $("#fadeout").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#fadeout').closest(".card").addClass('animated fadeOut').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated fadeOut');
        });
        return false;
    });
//flip effect
    $("#flip").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#flip').closest(".card").addClass('animated flip').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated flip');
        });
        return false;
    });
    $("#flipy").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#flipy').closest(".card").addClass('animated flipInY').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated flipInY');
        });
        return false;
    });
    $("#flipoutx").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#flipoutx').closest(".card").addClass('animated flipOutX').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated flipOutX');
        });
        return false;
    });
    $("#flipouty").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#flipouty').closest(".card").addClass('animated flipOutY').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated flipOutY');
        });
        return false;
    });
//rotate
    $("#rotatein").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rotatein').closest(".card").addClass('animated rotateIn').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated rotateIn');
        });
        return false;
    });
    $("#rotatedownright").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rotatedownright').closest(".card").addClass('animated rotateInDownRight').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated rotateInDownRight');
        });
        return false;
    });
    $("#rotateout").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rotateout').closest(".card").addClass('animated rotateOut').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated rotateOut');
        });
        return false;
    });
//        zoom effect
    $("#zoomin").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#zoomin').closest(".card").addClass('animated zoomIn').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated zoomIn');
        });
        return false;
    });
    $("#zoominleft").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#zoominleft').closest(".card").addClass('animated zoomInLeft').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated zoomInLeft');
        });
        return false;
    });
    $("#zoomoutdown").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#zoomoutdown').closest(".card").addClass('animated zoomOutDown').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated zoomOutDown');
        });
        return false;
    });
    $("#zoomoutright").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#zoomoutright').closest(".card").addClass('animated zoomOutRight').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated zoomOutRight');
        });
        return false;
    });
//special effects
    $("#hinge").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#hinge').closest(".card").addClass('animated hinge').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated hinge');
        });
        return false;
    });
    $("#rollin").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rollin').closest(".card").addClass('animated rollIn').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated rollIn');
        });
        return false;
    });
    $("#rollout").on("click", function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('#rollout').closest(".card").addClass('animated rollOut').one(animationEnd, function() {
            $(this).closest(".card").removeClass('animated rollOut');
        });
        return false;
    });
});