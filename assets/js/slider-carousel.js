$('.carousel').carousel({
    pause: "hover",
    interval: 5000
});

$(".carousel-control-prev").click(function(){
    $(".carousel").carousel("prev");
});

$(".carousel-control-next").click(function(){
    $(".carousel").carousel("next");
});