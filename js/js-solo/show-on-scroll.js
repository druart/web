//show element with scroll
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