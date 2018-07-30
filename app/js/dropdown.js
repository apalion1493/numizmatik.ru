jQuery(document).ready(function($) {

    if (window.outerWidth > 768) {
        $('.contact-info__communications-menu').on('mouseenter', function() {
            $(this).dropdown('toggle');
        });
    }

});