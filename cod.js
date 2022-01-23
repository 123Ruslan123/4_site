$(function(){

    $('[data-scroll]').on('click', function(event){

        event.preventDefault();
       let dataS = $(this).data('scroll');
       let scMenu = $(dataS).offset().top;
        
       $('html, body').animate({
        scrollTop: scMenu - 25
       });
    });

    //********************************* */

    let but = $('.up_button');
    let main = $('#main');
    let scMain = main.innerHeight();

    $(window).on('scroll', function(){

        scrollPos = $(this).scrollTop();
        if (scrollPos > scMain){
            but.css('opacity','1');
        } else {
            but.css('opacity','0');
        }
    });
   

   $('.up_button').on('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0},800);
   });











});