$(document).ready(function(){
    var $div=$('.realization'),//Блок, доскроллив до которого анимация должна стартовать.
	inited=false;

    $(window).scroll(function(){
        if(inited) return;
        
        var $t=$(this),
            s_top=$t.scrollTop();
        
        if(s_top+$t.height()-970<$div.offset().top)
            return;
        
        $('.text_realization, .img_realization').addClass('anim')
        
        inited=true
    });
})