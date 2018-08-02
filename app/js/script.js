jQuery(document).ready(function($) {

    // Scroll To Top
    var _header_h=$('.page-header').height();
    
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
    
    
    // Add discount
    $('.btn-discount-code-ext').click(function() {
        $('.discount-code__forms-block').last().clone().appendTo($('.discount-code__forms'));
    });
    
    
});