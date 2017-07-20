/**
 * Created by stephen on 2017/06/28.
 */

function myMap() {

    var mapOptions = {
        center: new google.maps.LatLng(-26.114039, 27.980182),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-26.114039, 27.980182),
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content:"New Creation Family Church"
    });

    infowindow.open(map,marker);

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}