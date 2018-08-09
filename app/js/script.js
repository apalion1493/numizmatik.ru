jQuery(document).ready(function($) {

    // Scroll To Top
    var _header_h=$('.page-header').height();
    
    function backTop_Scroll(){
        if (jQuery(this).scrollTop()>_header_h) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    }
    
    backTop_Scroll();
    
    jQuery(window).scroll(function(){
        backTop_Scroll();
    });

    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},999);return false;
    });
    
    
    // Add discount
    $('.btn-discount-code-ext').click(function() {
        $('.discount-code__forms-block').last().clone().appendTo($('.discount-code__forms'));
    });
    
    
    
    
    // Search Filter
    
    countryFilter = $('.country-filter__radio-group input');

    countryFilter.on('change',function(){
        radioStatement($(this));
    });
    
    function radioStatement(e){
        $('.country-filter__main, .continents-filter__main, .continents-filter__main-krause').hide();
        
        switch(e.val()) {
            case 'krause':
                $('.continents-filter__main-krause').show();
                break;
            case 'continents':
                $('.continents-filter__main').show();
                break;
            case 'alphabet':
                default:
                $('.country-filter__main').show();
            break;
        }
    }

    radioStatement(countryFilter);
    
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
            if($(v).text().toLowerCase().indexOf($(th).val().toLowerCase())==-1){
                r.eq(i).hide();
                $('.country-filter__navigation, .country-group-list__check').hide();
            } else {
                r.eq(i).show();
                $('.country-filter__navigation, .country-group-list__check').show()
            }
        })
    });
    
    
    
    
    // Calc
    $('.cart-table').each(function(){
        
        var cart = $(this);
        
        cart.change(function(){
            cartTableCalc();
        });
        
        cart.find('button[data-minus]').each(function(){
            $(this).click(function(){
                elPlusMin($(this).data('minus'));
                cartTableCalc();
            });
        });
        
        cart.find('button[data-plus]').each(function(){
            $(this).click(function(){
                elPlusMin($(this).data('plus'),true);
                cartTableCalc();
            });
        });
        
        cart.find('.cart-table__last-cell-link').each(function(){
            $(this).click(function(){
                $(this).parents('tr').eq(0).remove();
                cartTableCalc();
            });
        });
        
        cart.find('.cart-table__last-cell').each(function(){
            $(this).click(function(){
                $('.cart-table tr.cart-table__lines').remove();
                cartTableCalc();
            });
        });
    
        function cartTableCalc() {
            var total = 0;
		
            cart.find('input[data-id]').each(function() {
                var idElement = $(this).data('id'),
                    sum = parseInt($(this).val());
                    price = parseInt($('[data-price="'+idElement+'"]').text()),
			
                $('[data-sum="'+idElement+'"]').text(price * sum);
                total += price * sum;
            });
            cart.find('.cart-table__totals-price b').text(total);
        }
    
    });
    
    function elPlusMin(el,plus=false){
            var that=$('input[data-id="'+el+'"]'),count=that.val();
            if (plus==true) count++; else if (count>0) count--;
            that.val(count);
    }
    
    
    
    
    // Cart Button
    $('.card-coins__footer-btn-basket').each(function(){
        $(this).click(function(){
            var parId = $(this).parents('.card-coins__footer-btn-block').data('id');
            $('div[data-id="'+parId+'"] .card-coins__footer-btn-basket,div[data-id="'+parId+'"] .card-coins__footer-btn-star').hide(); 
            $('div[data-id="'+parId+'"] .card-coins__footer-btn-counter').css( 'display', 'flex' );
        });
    });
    
    $('.card-coins__footer-btn').find('button[data-minus]').each(function(){
            $(this).click(function(){
                elPlusMin($(this).data('minus'));
            });
        });
        
    $('.card-coins__footer-btn').find('button[data-plus]').each(function(){
            $(this).click(function(){
                elPlusMin($(this).data('plus'),true);
            });
        });

});
