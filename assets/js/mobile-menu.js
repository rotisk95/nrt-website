$('.menu__mobile-button, .mobile-menu__close').on('click', function () {
    $('.mobile-menu').toggleClass('active');
});
$('.mobile-menu__wrapper ul li a').on('click', function () {
    $('.mobile-menu').removeClass('active');
});