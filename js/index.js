/* Custom Javascript */

/* Mouse Scroll Active Link Navbar */
$(function() {
    var links = $("#navbarNav a");

    $(window).scroll(function() {
        var topScroll = $(window).scrollTop();
        links.each(function() {
            var href = $(this).attr('href');
            var el = $(href);
            var posSection = el.offset().top;
            var hSection = el.height();
            
            if(posSection <= topScroll && (posSection + hSection) > topScroll){
                links.removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});

/* ABOUT US - Changing Div Missao/Visao/Valor */
function showHide(valor) {
    if(valor === 1){
        $('.mission').addClass("active");
        $('.vision').removeClass("active");
        $('.value').removeClass("active");
    } else if(valor === 2){
        $('.vision').addClass("active");
        $('.value').removeClass("active");
        $('.mission').removeClass("active");
    } else {
        $('.value').addClass("active");
        $('.vision').removeClass("active");
        $('.mission').removeClass("active");
    }
}