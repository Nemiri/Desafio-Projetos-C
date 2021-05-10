/* Custom Javascript */

/* NAVBAR - Mouse Scroll Active Link Navbar */
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

/* ABOUT US - Buttons */
var prev = 1;
var ult_texto = $(".mission-text");
function showHide(valor) {
    if(prev === valor){
        return;
    }
    else{

        ult_texto.css("transform", "scaleY(0)");

        if(prev === 1){
            var botao = $('.mission');
            var texto = $('.mission-text');
            var remove = 'mission-text';
        }
        else if(prev === 2){
            var botao = $('.vision');
            var texto = $('.vision-text');
            var remove = 'vision-text';
        }
        else{
            var botao = $('.values');
            var texto = $('.values-text');
            var remove = 'values-text';
        }

        if(valor === 1){
            setTimeout(function(){
                texto.css("transform", "scaleY(1)");
                texto.addClass("mission-text");
                texto.removeClass(remove);

                $(".mission-text div").remove();

                $(".mission-text").append("<div class='box-text'><p>Apresentar soluções de marketing digital inovadoras e de qualidade, objetivando o fortalecimento das marcas/produtos de nossos clientes diretos e indiretos, aproximando e aprimorando as relações entre a empresa — cliente — e seu público-alvo, contribuindo assim em seu crescimento e lucratividade.</p></div>");
            }, 500);

            botao.removeClass("btnactive");
            $('.mission').addClass("btnactive");
        }
        else if(valor === 2){
            setTimeout(function(){
                texto.css("transform", "scaleY(1)");
                texto.addClass("vision-text");
                texto.removeClass(remove);

                $(".vision-text div").remove();

                $(".vision-text").append("<div class='box-text'><p>Estar entre as 12 melhores agências de consultoria de marketing atuantes no mercado brasileiro</p></div>");
            }, 500);

            botao.removeClass("btnactive");
            $('.vision').addClass("btnactive");
        }
        else{
            setTimeout(function(){
                texto.css("transform", "scaleY(1)");
                texto.addClass("values-text");
                texto.removeClass(remove);

                $(".values-text div").remove();

                $(".values-text").append("<div class='box-text'><ul><li>Satisfação do ciente</li><li>Competência</li><li>Seriedade</li><li>Inovação</li><li>Ética</li></div>")
            }, 500);

            botao.removeClass("btnactive");
            $('.values').addClass("btnactive");
        }
    }

    prev = valor;
    ult_texto = texto;
}

/* CONTACT - Confirm - Error box*/
window.onload = CapturaParametrosUrl();

function CapturaParametrosUrl() {
    var url = window.location.href;

    var res = url.split('?');
    if (res[1] === undefined) {
        return;
    } else {
        var parametros = res[1].split('&');
        var parametroEncontrado = new Array(); 
		var valorParametro = new Array();
		
		for (var cont = 0; cont<=1; cont++)
		{
			if (parametros[cont] !== undefined) 
			{
				captura = parametros[cont].split('=');				
				
				parametroEncontrado[cont] = captura[0];
				valorParametro[cont] = captura[1];
			}
		}

        if (valorParametro[0] === '1') {
            $("#contact .sucess").css("display", "flex");
        } else if (valorParametro[0] === '0') {
            $("#contact .error").css("display", "flex");
        }
    }
}