 $(document).ready(function() {
     
/*    setTimeout(function(){
        $(".hero .hero-wrap .hero-content .left h1 span:first-child span").css({"opacity": "1", "transform":"translate3d(0,0,0)"});
    }, 7200);
    setTimeout(function(){
        $(".hero .hero-wrap .hero-content .left h1 span:last-child span").css({"opacity": "1", "transform":"translate3d(0,0,0)"});
    }, 7350);
     */
    setTimeout(function(){
        $(".work-info li:first-child strong").css({"opacity": ".55", "transform":"translate3d(0,0,0)"});
    }, 150);
    setTimeout(function(){
        $(".work-info li:first-child span").css({"opacity": "1", "transform":"translate3d(0,0,0)"});
    }, 300);
    setTimeout(function(){
        $(".work-info li:nth-child(2) strong").css({"opacity": ".55", "transform":"translate3d(0,0,0)"});
    }, 450); 
    setTimeout(function(){
        $(".work-info li:nth-child(2) span").css({"opacity": "1", "transform":"translate3d(0,0,0)"});
    }, 600); 
    setTimeout(function(){
        $(".work-info li:last-child strong").css({"opacity": ".55", "transform":"translate3d(0,0,0)"});
    }, 750); 
    setTimeout(function(){
        $(".work-info li:last-child span").css({"opacity": "1", "transform":"translate3d(0,0,0)"});
    }, 900); 
     
    setTimeout(function(){
        $(".work-info .btn").removeClass('btn-animate');
    }, 1000);
     
    $(".related a").hover(function () {
        $(".related").toggleClass('hover');
    });
     
    var video = $('.videop').get(0);
    $('.work-video').click(function(e) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

        $('.work-video').toggleClass('open');

        e.preventDefault();
    });
     
     
});
