jQuery(document).ready(function($) {
    $('.img-coin-block__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-coin-block__list-nav'
    });

    $('.img-coin-block__list-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.img-coin-block__list',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});