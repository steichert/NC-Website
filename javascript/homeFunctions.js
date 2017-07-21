/**
 * Created by stephen on 2017/07/08.
 */

$(document).ready(function() {

    $("#navItem-dropdown").css({
        'visibility':'visible',
        'height':'0'
    }).hide();

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var scrollTop;

            if (hash == "#media-title") {
                scrollTop = $("#media-title").offset().top - 100;
            }
            else {
                scrollTop = $(hash).offset().top;
            }

            $('html,body').animate({
                scrollTop: scrollTop
            }, 500, function () {
                // window.location.hash = hash;
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
                    Navbar Item Select
         *************************************/

        if($(window).scrollTop() >= 0 && $(window).scrollTop() < document.getElementById("event-row").offsetTop-20)
            $("#nav-about-us").css({'font-weight': 'bolder'});
        else
            $("#nav-about-us").css({'font-weight': 'normal'});
        if ($(window).scrollTop() >= document.getElementById("event-row").offsetTop-20 && $(window).scrollTop() < document.getElementById("activities-row").offsetTop)
            $("#nav-events").css({'font-weight': 'bolder'});
        else
            $("#nav-events").css({'font-weight': 'normal'});
        if ($(window).scrollTop() >= document.getElementById("activities-row").offsetTop && $(window).scrollTop() < document.getElementById("media-row").offsetTop)
            $("#nav-activities").css({'font-weight': 'bolder'});
        else
            $("#nav-activities").css({'font-weight': 'normal'});
        if ($(window).scrollTop() >= document.getElementById("media-row").offsetTop && $(window).scrollTop() < document.getElementById("ministries-row").offsetTop)
            $("#nav-media").css({'font-weight': 'bolder'});
        else
            $("#nav-media").css({'font-weight': 'normal'});
        if ($(window).scrollTop() >= document.getElementById("ministries-row").offsetTop && $(window).scrollTop() < document.getElementById("contact-row").offsetTop-50)
            $("#nav-ministries").css({'font-weight': 'bolder'});
        else
            $("#nav-ministries").css({'font-weight': 'normal'});
        if ($(window).scrollTop() >= document.getElementById("contact-row").offsetTop-50)
            $("#nav-contact").css({'font-weight': 'bolder'});
        else
            $("#nav-contact").css({'font-weight': 'normal'});
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

    $("#photo-link")
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

    $("#camera-title").on('mouseenter',function(){
        $("#camera-photo").css('-webkit-filter','blur(6px)');
    }).on('mouseleave',function() {
        $("#camera-photo").css('-webkit-filter','');
    });

    $("#sermon-link")
        .on('mouseenter', function() {
            $("#mic-title").animate({
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

    $("#mic-title").on('mouseenter',function(){
        $("#mic-photo").css('-webkit-filter','blur(6px)');
    }).on('mouseleave',function() {
        $("#mic-photo").css('-webkit-filter','');
    });

    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    }).on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
});

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}