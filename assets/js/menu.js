$(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
});


function fixedHeader() {
    var ww = $(window).scrollTop();
    if(ww > 0){
        $('.menu').addClass('menu--active');
    }else{
        $('.menu').removeClass('menu--active');
    }
}
fixedHeader();
$(window).on('scroll', function () {
    fixedHeader();
});