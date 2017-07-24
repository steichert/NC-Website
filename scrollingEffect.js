/**
 * Created by stephen on 2017/07/08.
 */

$(document).ready(function(){

    $("a").on('click', function(event) {
        console.log("Clicked");
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
});