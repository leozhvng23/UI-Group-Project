$( document ).ready(function(){
    let palette = $("<div class = 'color-circle main-palette-circle palette-circle palette-circle-big'></div>")
    $(".center-image-left").append(palette)

    let colors_list = ["#FF0000","#0000FF","#FFFF00","#ff8100","#099420","#7400b6"]
    $.each(colors_list, function(index, value) {
        let color_circle = "<div class = 'color-circle' style='background: "+value+";'></div>"
        if (index <= 2) {
            $(".center-image-right-1").append(color_circle)
        }
        else {
            $(".center-image-right-2").append(color_circle)
        }
    })
})