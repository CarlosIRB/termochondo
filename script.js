var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    mousewheel: {
        invert: false
    },
    on: {
        init: function () {
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#' + target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#' + target).addClass('active');

    if (swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if (swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }

    updateBackground(index);
});

function updateBackground(index) {
    var backgrounds = [
        "./src/background/muertos-bg.jpg",
        "https://images3.alphacoders.com/129/1295531.jpg",
        "./src/background/loteria-bg.jpg",
        "https://media.timeout.com/images/105284922/image.jpg",
        "https://img.freepik.com/foto-gratis/espacio-oficina-moderno-escritorios-computadoras-modernas-creadas-tecnologia-ia-generativa_185193-110089.jpg"
    ];

    var background = backgrounds[index % backgrounds.length];
    $('.wrapper').css('background-image', 'url(' + background + ')');
}

$(".js-fav").on("click", function () {
    $(this).find('.heart').toggleClass("is-active");
});