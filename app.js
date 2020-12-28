document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var x = e.pageX - $('#tajiriri').offset().left;
    pos = parseInt(x / 15) + 1;
    if(pos >= 1 && pos <= 32) {
        $('#tajiriri').attr("src", "./lib/capture/cap" + pos + ".png" );
    }
}