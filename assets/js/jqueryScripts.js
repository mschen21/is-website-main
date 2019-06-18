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

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

