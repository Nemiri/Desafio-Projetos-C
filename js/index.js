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


function mudaChange(div){

    el = document.getElementById(div);
    el.classList.toggle('d-none');
}