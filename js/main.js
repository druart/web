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
});// modal
$(document).ready(function() {
    var dataCard = [
        {
            dataTitle: "Illustrations",
            dataContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, consequatur.",
            dataImg: "background-image: url(images/png/marti-pulgas.png)"
        }
    ];

    var dataModal = [
        {
            dataTitle: "Lorem ipsum",
            dataContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aut rem quod unde deserunt id provident asperiores tempore, modi totam, vel placeat tempora dolor voluptatem! Ipsa nemo, modi vero excepturi!",
            dataImg: "background-image: url(images/png/eutrophierung_BUND_2016-01.png);",
            dataThumb: "background-image: url(images/png/eutrophierung_mascots_BUND_2016-02.png);"
        },
        {
            dataTitle: "Lorem ipsum",
            dataContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, consequatur.",
            dataImg: "background-image: url(images/png/unterwasserlaerm_BUND_2020-01.png); background-position: left",
            dataThumb: "background-image: url(images/png/unterwasserlaerm_BUND_2020-02.png);"
        },
    ];

/******
*card
*/
    //loop length
    var dataLength = dataModal.length;

    //Create card structure:
    var cardElements =
        '<div class="card">' +
            '<div class="card__img" style="' + dataCard[0].dataImg + '"></div>' +
            '<div class="card__content">' +
                '<h3 class="card__title">' + dataCard[0].dataTitle + '</h3>' +
                '<p class="card__description">' + dataCard[0].dataContent + '</p>' +
            '</div>' +
            '<div class="card__footer  card__footer--pop-up">' +
                '<div class="underline__btn  [ js-modal ]" data-obj="' + 0 +'">more about</div>' +
            '</div>' +
        '</div>';

    //empty container
    $(".js-card-builder").empty();
    //append thumb
    $(".js-card-builder").append(cardElements);

/*
*modal
*/
    var thisElement = 0;
    function modalContent(content) {
        $(".modal__img").attr("style", dataModal[content].dataImg);
        $(".modal__title").html(dataModal[content].dataTitle);
        $(".modal__description").html(dataModal[content].dataContent);
        $(".modal__thumb").attr("style", dataModal[content].dataThumb);
        if(dataModal[content].dataThumb == "") {
            $(".global-flex__item--small").hide();
        } else {
            $(".global-flex__item--small").show();
        }
    }

//open modal
    $(".js-modal").click(function(e) {
        e.preventDefault();
        thisElement = $(this).attr("data-obj");
        modalContent(thisElement);
        $(".overlay").css({ display: "block" });
        $('body').addClass("overflow-stop");
        dissBtn();
    });

//close modal
    $(".js-close").click(function() {
        $(".overlay").css({ display: "none" });
        $('body').removeClass("overflow-stop");
    });

//next modal
    $(".js-next").click(function(e) {
        e.preventDefault();
        if (thisElement < dataLength - 1) {
            thisElement = parseInt(thisElement) + 1;
            modalContent(thisElement);
            dissBtn();
        }
    });

//prev modal
    $(".js-prev").click(function(e) {
        e.preventDefault();
        if (thisElement > 0) {
            thisElement = parseInt(thisElement) - 1;
            modalContent(thisElement);
            dissBtn();
        }
    });

//button disabled
    var dissBtn = function() {
        $(".js-prev, .js-next").removeClass("disabled");
        if (thisElement <= 0) {
            $(".js-prev").addClass("disabled");
        } else if (thisElement >= dataLength - 1) {
            $(".js-next").addClass("disabled");
        }
    }
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