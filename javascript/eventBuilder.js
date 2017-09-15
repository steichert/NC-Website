$(document).ready(function() {
    var numEventCards = 3;
    $("#see-all-event-btn").hide();

    $.get("/data/events.json", function(data) {
         var template = "<div class='col-lg-4 col-sm-6 col-xs-12'><div class='card'><img class='card-img-top' src='assets/images/";
         var cardEvents = "";
         var card = template;

         for (var x = 0 ; x < numEventCards ; x++) {
             card += data.events[x].image + "'>";
             card += "<div class='card-block'><p class='card-text' style='font-size: 120%'>";
             card += data.events[x].shortDesc += "</p></div><div class='card-footer'><a href='#' class='btn btn-default'>Read more</a></div></div></div>";

             cardEvents += card;
             card = template;
         }

         document.getElementById("cardEvents-dropzone1").innerHTML = cardEvents;
         setTimeout(function() {
              jQuery(window).trigger('resize').trigger('scroll');
         }, 200);
     });

     $("#see-more-event-btn").click(function() {

         $.get("/data/events.json", function(data) {
             var template = "<div class='col-lg-4 col-sm-6 col-xs-12'><div class='card'><img class='card-img-top' src='assets/images/";
             var cardEvents = "";
             var card = template;

             for (var x = numEventCards ; x < numEventCards*2 && x < data.events.length ; x++) {
                 card += data.events[x].image + "'>";
                 card += "<div class='card-block'><p class='card-text' style='font-size: 120%'>";
                 card += data.events[x].shortDesc += "</p></div><div class='card-footer'><a href='#' class='btn btn-default'>Read more</a></div></div></div>";

                 cardEvents += card;
                 card = template;
             }

             document.getElementById("cardEvents-dropzone2").innerHTML = cardEvents;
             $("#cardEvents-dropzone2").hide();
             setTimeout(function() {
                 $("#cardEvents-dropzone2").fadeIn(800);
                 $("#see-more-event-btn").hide();
                 $("#see-all-event-btn").show();
                 jQuery(window).trigger('resize').trigger('scroll');
             }, 100);

         });
     });

});
