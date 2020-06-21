$(document).ready(function(){
    var $div=$('.tabs'),//Блок, доскроллив до которого анимация должна стартовать.
	inited=false;

    $(window).scroll(function(){
        if(inited) return;
        
        var $t=$(this),
            s_top=$t.scrollTop();
        
        if(s_top+$t.height()-700<$div.offset().top)
            return;
        
        $('.tabs').addClass('anim')
        
        inited=true
    });
})