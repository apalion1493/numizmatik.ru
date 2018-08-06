jQuery(document).ready(function($) {

    // Calc
    $('.cart-table').change(function(){cartTableCalc();});
    $('button[data-minus]').click(function(){elPlusMin($(this).data('minus'));});
    $('button[data-plus]').click(function(){elPlusMin($(this).data('plus'),true);});
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
        cartTableCalc();
	}
    
});