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
    
    
    
    // Calc
    $('.cart-table').change(function(){cartTableCalc();});
    $('button[data-minus]').click(function(){elPlusMin($(this).data('minus'));cartTableCalc();});
    $('button[data-plus]').click(function(){elPlusMin($(this).data('plus'),true);cartTableCalc();});
    $('.cart-table__last-cell-link').click(function(){$(this).parents('tr').eq(0).remove();cartTableCalc();});
    $('.cart-table__last-cell').click(function(){$('.cart-table tr.cart-table__lines').remove();cartTableCalc();});
    
    function cartTableCalc() {
		var total = 0;
		
		$('input[data-id]').each(function() {
			var idElement = '#'+$(this).data('id'),
				price = parseInt($(idElement+'_price').text()),
				sum = parseInt($(this).val());
			
			$(idElement+'_sum').text(price * sum);
			total += price * sum;
		});
		$('.cart-table__totals-price b').text(total);
	}
    
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

});