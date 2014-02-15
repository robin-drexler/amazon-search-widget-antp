function resize() {
    var width = $(window).width(),
        height = $(window).height();

    $('body').css({
        width:width,
        height:height
    });
}

$(function () {

    $(window).bind("resize", resize);

    resize();

});
