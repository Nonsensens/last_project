$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows:false,
        autoplay:true
    });
    $('.burger').on('click', function(){
        $('.burger, .navi_mobile').toggleClass('active')
    });
    

    $('#tab1').on('click', function(){
        $('#i_t2, #tab2').removeClass('active')
    });
    $('#tab1').on('click', function(){
        $('#i_t3, #tab3').removeClass('active')
    });
    $('#tab1').on('click', function(){
        $('#i_t4, #tab4').removeClass('active')
    });
    $('#tab1').on('click', function(){
        $('#i_t5, #tab5').removeClass('active')
    });

    $('#tab2').on('click', function(){
        $('#i_t1, #tab1').removeClass('active')
    });
    $('#tab2').on('click', function(){
        $('#i_t3, #tab3').removeClass('active')
    });
    $('#tab2').on('click', function(){
        $('#i_t4, #tab4').removeClass('active')
    });
    $('#tab2').on('click', function(){
        $('#i_t5, #tab5').removeClass('active')
    });

    $('#tab3').on('click', function(){
        $('#i_t2, #tab2').removeClass('active')
    });
    $('#tab3').on('click', function(){
        $('#i_t1, #tab1').removeClass('active')
    });
    $('#tab3').on('click', function(){
        $('#i_t4, #tab4').removeClass('active')
    });
    $('#tab3').on('click', function(){
        $('#i_t5, #tab5').removeClass('active')
    });

    $('#tab4').on('click', function(){
        $('#i_t2, #tab2').removeClass('active')
    });
    $('#tab4').on('click', function(){
        $('#i_t3, #tab3').removeClass('active')
    });
    $('#tab4').on('click', function(){
        $('#i_t1, #tab1').removeClass('active')
    });
    $('#tab4').on('click', function(){
        $('#i_t5, #tab5').removeClass('active')
    });

    $('#tab5').on('click', function(){
        $('#i_t2, #tab2').removeClass('active')
    });
    $('#tab5').on('click', function(){
        $('#i_t3, #tab3').removeClass('active')
    });
    $('#tab5').on('click', function(){
        $('#i_t4, #tab4').removeClass('active')
    });
    $('#tab5').on('click', function(){
        $('#i_t1, #tab1').removeClass('active')
    });


    $('#tab1').on('click', function(){
        $('#i_t1, #tab1').toggleClass('active')
    });
    $('#tab2').on('click', function(){
        $('#i_t2, #tab2').toggleClass('active')
    });
    $('#tab3').on('click', function(){
        $('#i_t3, #tab3').toggleClass('active')
    });
    $('#tab4').on('click', function(){
        $('#i_t4, #tab4').toggleClass('active')
    });
    $('#tab5').on('click', function(){
        $('#i_t5, #tab5').toggleClass('active')
    });
    
    
    
    setTimeout(function(){
        $('#tab1').trigger('click');
      }, 10);
})