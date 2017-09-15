$(document).ready(function() {
    $("#activities-find-more-btn").hide();

    $.get("/data/connect-groups.json", function(data) {
        var template = "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 connect-col'><div class='connect-image'><a class='connect-link' href=''><img class='img-circle' src='assets/images/";

        var connectImg = template;
        var getConnected = "";

        var x;
        for (x = 0 ; x < 4 ; x++) {
            connectImg += data.connect[x].image + "' width='300'>";
            connectImg += "<div class='connect-text'><h4 class='connect-label'><b>";
            connectImg += data.connect[x].label;
            connectImg += "</b></h4></div></a></div></div>";

            getConnected += connectImg;
            connectImg = template;
        }

        document.getElementById("get-connected-dropzone1").innerHTML = getConnected;
    });

    $("#activities-view-more-btn").click(function() {

        $.get("/data/connect-groups.json", function(data) {
            var connectImg = "";
            var getConnected = "";

            var x;
            for (x = 4 ; x < data.connect.length ; x++) {
                connectImg = "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 connect-col'><div class='connect-image'><a class='connect-link' href=''><img class='img-circle' src='assets/images/";

                connectImg += data.connect[x].image + "' width='300'>";
                connectImg += "<div class='connect-text'><h4 class='connect-label'><b> ";
                connectImg += data.connect[x].label;
                connectImg += "</b></h4></div></a></div></div>";

                if (x == data.connect.length-3 || x == data.connect.length-1)
                    connectImg += "<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12 connect-col'></div>";

                getConnected += connectImg;
            }

            document.getElementById("get-connected-dropzone2").innerHTML = getConnected;
            $("#get-connected-dropzone2").hide();
            setTimeout(function() {
                $("#get-connected-dropzone2").fadeIn(800);
                $("#activities-view-more-btn").hide();
                $("#activities-find-more-btn").show();
                jQuery(window).trigger('resize').trigger('scroll');
            }, 100);
        });
    });
});
