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
        cssEase: 'linear'
    });
});

