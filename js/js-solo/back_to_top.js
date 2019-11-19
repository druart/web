// back to top buttom show and hidde after scroll
var amountScrolled = 480;
$(window).scroll(function() {
	if ($(this).scrollTop() > amountScrolled) {
		$(".back-top-btn").addClass("is-show");
	} else {
		$(".back-top-btn").removeClass("is-show  is-actived");
	}
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
});