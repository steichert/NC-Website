/**
 * Created by stephen on 2017/06/28.
 */
$(document).ready(function() {
    $("nav div ul li a").css('color','#fff');
    $("#nav-list").hide();
    $("#collapse-btn").show();

    function toggleNavBar() {
        var navbar = $("#homeNav");
        var offset = document.getElementById("service-visitor-row").offsetTop;

        if ($(window).scrollTop() >= offset) {
            $("#welcome-banner").css('margin-top','-19px');
            $("#nav-list").show();
            $("#collapse-btn").hide();

            setTimeout(function () {
                $("#arrow-up-btn").css({'visibility': 'visible'});
            });

            navbar.css('background', 'rgba(255, 255, 255, 0.75)');

            $("#nav-logo").css({
                'height':'60px',
                'color':'#3c3c3c',
                'marginTop':'-35%'
            }).attr('src','assets/logos/nc%20logo-gry.png');

            $("nav div ul li a").css('color','#3c3c3c');
            $("nav div ul li").css('margin-top',0);

            if (!navbar.hasClass('navbar-fixed-top')) {
                navbar.addClass('navbar-fixed-top');
                navbar.css('margin-top', -offset);
                navbar.animate({ marginTop: 0 }, 500, function() {
                    $(window).one('scroll', toggleNavBar);
                });
            } else {
                $(window).one('scroll', toggleNavBar);
            }
        } else {
            $("#nav-list").hide();
            $("#collapse-btn").show();
            $("#welcome-banner").css('margin-top', '-100px');
            $("#arrow-up-btn").css({'visibility': 'hidden'});

            navbar.css('background', 'none');

            $("#nav-logo").css({
                'height':'120px',
                'color':'#fff',
                'marginTop':'-10%'
            }).attr('src','assets/logos/nc%20logo%20full%20(TOP).png');

            $("nav div ul li a").css('color','#fff');
            $("nav div ul li").css('margin-top','2%');

            if (navbar.hasClass('navbar-fixed-top')) {
                navbar.removeClass('navbar-fixed-top');
            }

            $(window).one('scroll', toggleNavBar);
        }
    }
    $(window).one('scroll', toggleNavBar);
});