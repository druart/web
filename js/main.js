// back to top buttom show and hidde after scroll to top
var amountScrolled = 480;
var windowsHeight = $(window).height();
$(window).scroll(function() {
    if ($(this).scrollTop() > amountScrolled) {
        $(".back-top-btn").addClass("is-show");
    } else {
        $(".back-top-btn").removeClass("is-show  is-actived");
    }
    console.log(windowsHeight);
});

$(".back-top-btn").on('click',function() {
    $("html, body").animate(
        {
            scrollTop: 0
        },
        600
    );
    return false;
});

//add and remove animation with mouse
$('.back-top-btn').on('mouseleave', function() {
    $(this).removeClass('is-actived');
});
$('.back-top-btn').on('mouseenter', function() {
    $(this).addClass('is-actived');
});//smooth Scrolling
$('a[href*="#"]:not([href="#"])').on("click", function() {
	var speed = 1200;
	if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
		if (target.length) {
			$("html, body").animate(
				{scrollTop: target.offset().top},
				speed
			);
			return false;
		}
	}
});//show element with scroll
$(document).ready(function() {
    $(window).scroll( function(){
        $('.section__element--hidden').each( function(){
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            if((windowBottom + objectBottom) > objectBottom){
                $(this).animate({'opacity':'1'},1200);
            }
        }); 
    });
});