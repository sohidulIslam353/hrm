"use strict";
$(document).ready(function () {
    var bar1 = new ProgressBar.Line(progress_bar1, {
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        color: '#329cff',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    });
    bar1.animate(1.0);

//        progress bar2
    var bar2 = new ProgressBar.Line(progress_bar2, {
        strokeWidth: 2,
        easing: 'easeInOut',
        duration: 1400,
        color: '#329cff',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        text: {
            style: {
                color: '#999',
                position: 'absolute',
                right: '40px',
                top: '30px',
                padding: 0,
                margin: 0,
                transform: null
            },
            autoStyleContainer: false
        },
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: function(state, bartext) {
            bartext.setText(Math.round(bartext.value() * 100) + ' %');
        }
    });
    bar2.animate(1.0);

//        progress bar3
    var bar3 = new ProgressBar.Circle(progress_bar3, {
        strokeWidth: 5,
        easing: 'bounce',
        duration: 1400,
        color: '#329cff',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width:'150px', height:'150px'}
    });

    bar3.animate(1.0);

//        progress bar4
    var bar = new ProgressBar.Circle(progress_bar4, {
        color: '#937eff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        svgStyle: {width:'150px', height:'150px'},
        text: {
            autoStyleContainer: false
        },
        from: { color: '#329cff', width: 1 },
        to: { color: '#937eff', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = (Math.round(circle.value() * 100) + '%');
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(1.0);

//        progress bar5
    var bar = new ProgressBar.SemiCircle(progress_bar5, {
        strokeWidth: 5,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fcb410',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width:'150px', height:'150px'}
    });

    bar.animate(1.0);

    //    progress bar6
    var bar = new ProgressBar.Path('#heart-path', {
        easing: 'easeInOut',
        duration: 1400,
    });

    bar.set(0);
    bar.animate(1.0);
});
