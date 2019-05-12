$(document).ready(function () {
    $('.carousel').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true
    });

    $('.reviews-carousel').slick({
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>'
    });
});

