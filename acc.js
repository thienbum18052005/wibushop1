$(document).ready(function(){
    $('.eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('<i class="fa-solid fa-eye fa-eye-slash"></i>');
        if($(this).toggleClass('open')){
            $(this).prev().attr('type','text');
        }else{
            $(this).prev().attr('type','password');
        }
    });
});