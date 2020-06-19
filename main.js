$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows:true,
        autoplay:true
    });
    $('.burger').on('click', function(){
        $('.burger, .navi_mobile').toggleClass('active')
    })
})