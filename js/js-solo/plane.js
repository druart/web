//plane
var dataModal = [
    {
        dataImg: "background-image: url(images/png/eutrophierung_BUND_2016-01.png);"
    },
    {
        dataImg: "background-image: url(images/png/unterwasserlaerm_BUND_2020-01.png);"
    }
]

$('.js-start-trip').on('click', function (e) {
    e.preventDefault();
    $('.plane').addClass('is-flying');
    var plane = new Plane();
    plane.startAnimation();
    console.log('start');
});

$('.js-stop-trip').on('click', function (e) {
    e.preventDefault();
    $('.plane').removeClass('is-flying');
});

$('.js-next-trip').on('click', function (e) {
    e.preventDefault();
    console.log('change background');
});

function Plane() {
    var animatvarartTime = 0;
    var animationDuration = 18000;
    var target = document.querySelector('.plane');

    this.startAnimation = function () {
        animatvarartTime = Date.now();
        requestAnimationFrame(update);
    };

    function update() {
        var currentTime = Date.now();
        var positionInAnimation = (currentTime - animatvarartTime) / animationDuration;
        var objectWidth = $('.section').width() - $('.plane').width();
        var xPosition = positionInAnimation * objectWidth;
        var yPosition = positionInAnimation * 0;
        target.style.WebKitTransform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';
        target.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)';
        if (positionInAnimation <= 5 && objectWidth > xPosition) {
            requestAnimationFrame(update);
            $('.js-start-trip').addClass('disabled reset');
            $('.js-stop-trip').addClass('disabled');
            $('.js-next-trip').addClass('disabled');
        } else {
            $('.js-start-trip').removeClass('disabled');
            $('.js-stop-trip').removeClass('disabled');
            $('.js-next-trip').removeClass('disabled');
        }
        if (objectWidth < xPosition)
            console.log('end');
            changeBtnText('.js-start-trip');
    };
};

function changeBtnText(selector) {
    var x = document.querySelector(selector);
    if (x.classList.contains('reset')) {
        x.classList.remove('reset');
        x.value = 'start trip';
    } else {
        x.value = 'reset trip';
    }
};