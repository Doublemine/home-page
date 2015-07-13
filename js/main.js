$(document).ready(function () {

    //Code to center the content div
    $box = $('.content');
    $ht = $box.height() + 175;
    $win_ht = $(window).height();

    if ($win_ht > $ht) {
        $box.css({
            'left': '50%',
            'top': '50%',
            'margin-left': -$box.width() / 2 + 'px',
            'margin-top': -$ht / 2 + 'px'
        });
    } else {
        $box.css({
            'left': '50%',
            'margin-left': -$box.width() / 2 + 'px',
            'margin-top': '60px',
            'margin-bottom': '60px'
        });
    }


    //code for the background slider
    $.backstretch([
        "img/bg1.JPG",
        "img/bg2.JPG",
        "img/bg3.JPG",
        "img/bg4.JPG"

    ], {
        fade: 1500,
        duration: 5000
    });

    $(".counter").TimeCircles({
        "animation": "smooth",
        "bg_width": 1.2,
        "fg_width": 0.03,
        "circle_bg_color": "rgba(255, 255, 255, 0)",
        "circle_bg_fill_color": "rgba(255, 255, 255, 0.1)",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#FFCC66",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#99CCFF",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#BBFFBB",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#FF9999",
                "show": true
            }
        }
    });

    //Hide ToolTip
    function hide_tooltip() {

        var tooltip = $(".tooltip");
        tooltip.animate({
            opacity: 0
        }, 300, function () {
            tooltip.remove();
        });

    }

});

//animate
$(document).ready(function () {
    var delay = 1;
    var DELAY_STEP = 200;
    var animationOptions = {opacity: 1, top: 0};

    $('h1').animate(animationOptions).promise()
        .pipe(animateMain)
        .pipe(animateLocationIcon);

    function animateMain() {
        var dfd = $.Deferred();
        var els = $('.animate-init');
        var size = els.size();

        els.each(function (index, el) {
            delay++;
            $(el).delay(index * DELAY_STEP)
                .animate(animationOptions);
            (size - 1 === index) && dfd.resolve();
        });
        return dfd.promise();
    }

    function animateLocationIcon() {
        $('.location-icon').delay(delay * DELAY_STEP).animate({
            opacity: 1,
            top: 0
        }).promise().done(animationQuote);
    }

    function animationQuote() {
    }
});