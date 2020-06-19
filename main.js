$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows:false,
        autoplay:true
    });
    $('.burger').on('click', function(){
        $('.burger, .navi_mobile').toggleClass('active')
    })
    $('.spisok_mobile li').on('click', function(){
        $('.burger, .navi_mobile').removeClass('active')
    })
})