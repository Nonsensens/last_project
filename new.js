$(document).ready(function(){
    var $div=$('.realization'),//Блок, доскроллив до которого анимация должна стартовать.
	inited=false;

    $(window).scroll(function(){
        if(inited) return;
        
        var $t=$(this),
            s_top=$t.scrollTop();
        
        if(s_top+$t.height()-870<$div.offset().top)
            return;
        
        $('.text_realization, .img_realization, .wrapper_bottom').addClass('anim')
        
        inited=true
    });
})