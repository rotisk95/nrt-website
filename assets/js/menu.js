$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
        console.log("sddfs");
        return false;
    });
});


function fixedHeader() {
    var ww = $(window).scrollTop();
    if(ww > 0){
        $('.menu').addClass('menu--active');
        $('.mobile-menu').addClass('mobile-menu--active');
    }else{
        $('.menu').removeClass('menu--active');
        $('.mobile-menu').removeClass('mobile-menu--active');
    }
}
fixedHeader();
$(window).on('scroll', function () {
    fixedHeader();
});