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
    
    
    // Search Filter
    countryFilter = $('.country-filter__radio-group input');
    $('.country-filter-search__form').keyup(function(){
        
        switch($('.country-filter__radio-group input:checked').val()) {
            case 'alphabet':
                field='.country-filter__main';
                break;
            case 'krause':
                field='.continents-filter__main-krause';
                break;
            case 'continents':
            default:
                return false;
        }
        
        var r=$(field).find(' .form-check'),th=this;

        r.each(function(i,v){
            if($(v).text().toLowerCase().indexOf($(th).val().toLowerCase())==-1)
                r.eq(i).hide(); 
            else r.eq(i).show();
        })
    });

});