$(document).ready(function() {

    $.get("/data/ministries.json", function(data) {
        var min = "";
        var ministryGroup = "";

        var x;
        for (x = 0 ; x < data.ministry.length ; x++) {
            min += "<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12'><div class='panel-group ministry-panel' id='accordian" + x + "'>";
            min += "<div class='panel panel-default'><div class='panel-heading'><h2 class='panel-title'><a data-toggle='collapse' data-parent='#accordian" + x + "' href='#collapse" + x + "'><img src='assets/logos/";
            min += data.ministry[x].image + "' width='290'>";
            min += "<br><br><b><span class='glyphicon glyphicon-triangle-bottom'></span></b></a></h2></div><div id='collapse" + x + "' class='panel-collapse collapse'><div class='panel-body'><h3>";
            min += data.ministry[x].title;
            min += "</h3><h4>";
            min += data.ministry[x].desc;
            min += "</h4></div><div class='panel-footer' href='#'><button class='btn btn-default'>Find out more</button></div></div></div></div></div>";

            ministryGroup += min;
            min = "";
        }

        document.getElementById("ministry-dropzone").innerHTML = ministryGroup;
    });
});
