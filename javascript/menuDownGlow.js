/**
 * Created by stephen on 2017/07/07.
 */

var glyphColor = [[77,77,77],[89,89,89],[102,102,102],[115,115,115],[128,128,128],[140,140,140],[153,153,153],[166,166,166]];

function animate() {
    var arrow = document.getElementById("menuDown");
    id = setInterval(glow,70);
    var x = 0, y = 220;
    var inc = true;
    function glow() {
        arrow.style.color = "rgb(" + glyphColor[x][0] + "," + glyphColor[x][1] + "," + glyphColor[x][2] + ")";
        arrow.style.fontSize = y + "%";

        if (inc) {
            x++;
            y+=2;
        }
        else {
            x--;
            y-=2;
        }

        if (x == 8) {
            inc = false;
            x--;
            y-=2;
        }
        else if (x == 0)
            inc = true;
    }
}