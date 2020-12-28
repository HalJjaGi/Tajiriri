$("#range").on("input", function (e) { 
    e.preventDefault();
    
    $('#tajiriri').attr("src", "./lib/capture/cap" + $(this).val() + ".png" );
});