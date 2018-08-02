jQuery(document).ready(function($) {

    var _header_h=$('.page-header').height();



    //** MENU (Scroll)
    function backTop_Scroll(){
        if (jQuery(this).scrollTop()>_header_h) {
            $('.back-to-top').show();
        }else{
            $('.back-to-top').hide();
        }
    }
    
    backTop_Scroll();
    
    jQuery(window).scroll(function(){backTop_Scroll();});

    $('.back-to-top').click(function(){$('html,body').animate({scrollTop:0},999);return false;});
});