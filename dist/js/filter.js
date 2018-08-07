jQuery(document).ready(function($) {

countryFilter = $('.country-filter__radio-group input');

countryFilter.on('change',function(){radioStatement($(this));});
    
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

});

//country-filter__radio-group
//radio-alphabet    :   country-filter__main
//radio-krause      :   continents-filter__main
//radio-continent   :   continents-filter__main-krause


/*
$( "input" ).on( "click", function() {
        $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
});
$( "#x" ).prop( "checked", true ); //false
*/