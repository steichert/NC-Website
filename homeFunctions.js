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
                    NAVBAR ITEM SELECT
         *************************************/


        if($(window).scrollTop() >= 700 && $(window).scrollTop() < 2300) {
            $("#nav-about-us").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-about-us").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 2300 && $(window).scrollTop() < 2970) {
            $("#nav-events").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-events").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 2970 && $(window).scrollTop() < 3705) {
            $("#nav-activities").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-activities").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 3705 && $(window).scrollTop() < 4580) {
            $("#nav-media").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-media").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 4580 && $(window).scrollTop() < 5150) {
            $("#nav-ministries").css({'font-weight': 'bolder'});
        }
        else {
            $("#nav-ministries").css({'font-weight': 'normal'});
        }

        if ($(window).scrollTop() >= 5150) {
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
                marginLeft: '45%',
                width: '80px'
            }, 500).css({'visibility': 'visible'});
        }).on('mouseleave', function() {
        $("#camera-title").animate({
            width: '0',
            marginLeft: '90%'
        }, 300);
        setTimeout(function () {
            $("#camera-title").css({'visibility': 'hidden'});
        },300);
    });

    $("#mic-photo")
        .on('mouseenter', function() {
            $("#mic-title").clearQueue().animate({
                width: '100px',
                marginLeft: '10%'
            }, 500).css({'visibility': 'visible'});
        }).on('mouseleave', function() {
        $("#mic-title").animate({
            width: '0',
            marginLeft: '65%'
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