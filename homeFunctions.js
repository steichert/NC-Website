/**
 * Created by stephen on 2017/07/08.
 */

$(document).ready(function() {
    $("#navItem-dropdown").css({
        'visibility':'visible', 'height':'0'
    }).hide();

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    $("#collapse-btn").on('click',function() {
        if ($(window).scrollTop() < 700) {
            if ($("#navItem-dropdown").height() == 0) {
                $("#navItem-dropdown").animate({
                    height: '280px'
                }, 400);
                setTimeout(function(){
                    $("#navItem-dropdown").show()
                }, 100);
            }
            else {
                $("#navItem-dropdown").animate({
                    height: '-280px'
                }, 400);
                setTimeout(function(){
                    $("#navItem-dropdown").hide()
                }, 200);
            }
        }
        else {
            $("#nav-list").toggle();
        }
    });


    $(window).on('scroll', function () {


        /**************************************
                SEASONAL BANNER FIXATION
         *************************************/


        if ($(window).scrollTop() >= 1500 && $(window).scrollTop() < 2800) {
            $("#background2").css({
                'position': 'fixed',
                'top': '30px'
            });

            $("#background2-title").css({
                'position': 'fixed',
                'top': '705px'
            });

            $("#sermon-series-label").css({
                'position': 'fixed',
                'top': '705px'
            });

            $("#listen-btn").css({
                'position': 'fixed',
                'top': '705px'
            });

            $("#event-row").css('margin-top', '80%');
        }
        else {
            $("#background2").css({
                'position': 'relative',
                'top': '0'
            });

            $("#background2-title").css({
                'position': 'relative',
                'top': '0'
            });

            $("#sermon-series-label").css({
                'position': 'absolute',
                'top': ''
            });

            $("#listen-btn").css({
                'position': 'absolute',
                'top': ''
            });

            $("#event-row").css('margin-top', '49%');
        }



        /**************************************
                MEDIA BANNER FIXATION
         *************************************/



        if ($(window).scrollTop() >= 3935 && $(window).scrollTop() < 4800) {
            $("#media-background").css({
                'position': 'fixed',
                'top': '0'
            });

            $("#media-title").css({
                'position': 'fixed',
                'top': '0'
            });

            $("#media-border-sm").css({
                'position': 'fixed',
                'top': '0'
            });

            $("#cam-mic-cont").css({
                'position': 'fixed',
                'top': '0'
            });

            $("#social-media").css({
                'position': 'fixed',
                'top': '0'
            });

            $("#ministries-row").css('margin-top', '70%');
        }
        else {
            $("#media-background").css({
                'position': 'relative',
                'top': '0'
            });

            $("#media-title").css({
                'position': 'absolute',
                'top': ''
            });

            $("#media-border-sm").css({
                'position': 'absolute',
                'top': ''
            });

            $("#cam-mic-cont").css({
                'position': 'absolute',
                'top': ''
            });

            $("#social-media").css({
                'position': 'absolute',
                'top': ''
            });

            $("#ministries-row").css('margin-top', '5%');
        }



        /**************************************
                SEASONAL Z-INDEX CHANGES
         *************************************/



        if ($(window).scrollTop() >= 1950) {
            $("#listen-btn").css({'z-index':'-1'});
        }
        else{
            $("#listen-btn").css({'z-index':'0'});
        }



        /**************************************
                MEDIA ITEM Z-INDEX CHANGES
         *************************************/



        if ($(window).scrollTop() >= 4320) {
            $("#cam-mic-cont").css({'z-index':'-1'});
        }
        else {
            $("#cam-mic-cont").css({'z-index':'0'});
        }

        if ($(window).scrollTop() >= 4125) {
            $("#social-media").css({'z-index': '-1'});
        }
        else {
            $("#social-media").css({'z-index': '0'});
        }



        /**************************************
                    NAVBAR ITEM SELECT
         *************************************/



        if($(window).scrollTop() >= 700 && $(window).scrollTop() < 2500) {
            $("#nav-about-us").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-about-us").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 2500 && $(window).scrollTop() < 3170) {
            $("#nav-events").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-events").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 3170 && $(window).scrollTop() < 3905) {
            $("#nav-activities").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-activities").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 3905 && $(window).scrollTop() < 4780) {
            $("#nav-media").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-media").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 4780 && $(window).scrollTop() < 5350) {
            $("#nav-ministries").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-ministries").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 5350) {
            $("#nav-contact").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-contact").css({'font-weight': 'normal'});
        }
    });

    $(".menuDown-ministries").on('click', function () {
        if ($(this).hasClass('glyphicon-menu-down')) {
            $(this).removeClass('glyphicon-menu-down');
            $(this).addClass('glyphicon-menu-up');
            $("this.card-block").slideToggle();
        }
        else {
            $(this).removeClass('glyphicon-menu-up');
            $(this).addClass('glyphicon-menu-down');
        }
    });

    $("#camera-photo")
        .on('mouseenter', function() {
            $("#camera-title").animate({
                marginLeft: '70%',
                width: '80px'
            }, 500).css({'visibility': 'visible'});
        }).on('mouseleave', function() {
        $("#camera-title").animate({
            width: '0',
            marginLeft: '120%'
        }, 300)
        setTimeout(function () {
            $("#camera-title").css({'visibility': 'hidden'});
        },300);
    });

    $("#mic-photo")
        .on('mouseenter', function() {
            $("#mic-title").clearQueue().animate({
                width: '100px',
                marginLeft: '32%'
            }, 500).css({'visibility': 'visible'});
        }).on('mouseleave', function() {
        $("#mic-title").animate({
            width: '0',
            marginLeft: '80%'
        }, 300);
        setTimeout(function () {
            $("#mic-title").css({'visibility': 'hidden'});
        },300);
    });

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    }).on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
});