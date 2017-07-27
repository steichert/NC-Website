/**
 * Created by stephen on 2017/06/28.
 */

function myMap() {

    var mapOptions = {
        center: new google.maps.LatLng(-26.114039, 27.980182),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-26.114039, 27.980182),
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content:"<b>New Creation Family Church</b><br>4 Gemsbok Rd<br>Robin Hills<br>" +
        "<a href='https://www.google.co.za/maps/place/New+Creation+Family+Church/@-26.1143132,27.9779713,17z/data=!3m1!4b1!4m5!3m4!1s0x1e9574da78d5c4ed:0xd66ca2e53f1688d7!8m2!3d-26.114318!4d27.98016?hl=en' target='_blank'>" +
        "Google Maps</a>"
    });

    infowindow.open(map,marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}