// $.getJSON('maps/map-data.json', function(data) {
//     console.log(data);
// });

// const { data } = require("autoprefixer");

$.ajax({
    url: 'map-data.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data) {
        $(data.infoMap).each(function(key, value) {

            document.querySelector('.js-area').addEventListener("click", function() {
                console.log(value.id);
                console.log(value.title);
                console.log(value.description);

                document.querySelector('.map__info').setAttribute('data-area', value.id);
                document.querySelector('.info-title').innerHTML = value.title;
                document.querySelector('.info-text').innerHTML = value.description;
            });
        });
    }
});