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
        $('.images_tabs, #tab1').toggleClass('active')
    });
    setTimeout(function(){
        $('#tab1').trigger('click');
      }, 10);
})