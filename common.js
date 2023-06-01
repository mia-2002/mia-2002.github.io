$(function(){
    setTimeout(function(){
        $('.card.active').addClass('animation');
    }, 2000)
    setTimeout(function(){
        $('.card.active').removeClass('active');
    }, 2500);
})

$(document).ready(function(){
    $('.carousel').carousel();
});
