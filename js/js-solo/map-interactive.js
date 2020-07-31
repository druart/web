/**
 * map interactive
 */
$(document).ready(function() {
    
    /**
    type (string): data-* [e.g. item, area]
    id (string): id of data- area or item to toggle
    show (boolean): true = show info, false = hide info
    **/
    //[1] where this function is used
    function toggleMapInfo(type, id, show) {
        var showClass = 'show-info  active';
        
        // reset all [data-area] elements
        $('[data-area]').removeClass(showClass);
        $('[data-item]').removeClass(showClass);

        // set visibility on selected [data-<type>]
        $('[data-' + type + '="' + id + '"]').addClass(showClass);
    }

    //show button list
    $('.js-show-list').on('click', function() {
        //remove menu bar active clases
        $('.nav-icon').removeClass('is-open');
        $('.menu-bar--slide').removeClass('is-show');

        $(this).closest('.btn').find('.btn--subnav').toggleClass('is-active');
        $(this).closest('.btn').find('.show-more').toggleClass('is-open');
    });

    //highlighting map areas on button click
    $('.js-area').on('click', function() {
        //remove menu bar active clases
        $('.show-more').removeClass('is-open');
        $('.nav-icon').removeClass('is-open');
        $('.menu-bar--slide').removeClass('is-show');
        $('.btn--subnav').removeClass('is-active');

        var area = $(this).attr('data-area-id');
        toggleMapInfo('area', area, true);//[1]
    });

    //highlighting map areas on button hover
    $('.js-item').on('mouseleave', function() {
        $('[data-item]').removeClass('highlight  waves');
        $('.highlight-indicator').removeClass('active');
        var item_id = $(this).attr('data-item-id');
        toggleMapInfo('item', item_id, false);//[1]
    });
    
    //active item-area dinamically when mouse enter
    $('.js-item').on('mouseenter', function() {
        var item_id = $(this).attr('data-item-id');
        //[5] dynamic variable loop to js toggle class = highlight waves, when mouse enter
        var $area = $('[data-item="' + item_id + '"]');
        $area.addClass('highlight  waves');//[5]
        
        //reset class = highlight waves
        $('.map__info').removeClass('highlight  waves');
        
        //hepls to get the correct svg element
        var areaSize = $area.get(0).getBoundingClientRect();//don´t use bbox when element is resizing, it does not work well.

        //create variables to use in [3]
        // width of element
        var elementWidth = areaSize.width;
        // height of element
        var elementHeight = areaSize.height;
        
        toggleMapInfo('item', item_id, true);//[1]
        
        
        //define max-size of the area to display animation
        if(elementWidth < 15 && elementHeight < 15) {
            //create variable for [4]
            var $indicator = $('.highlight-indicator').addClass('active');
            
            //get coordinates "top-left corner" of an element
            var positionX = $area.offset().left; 
            var positionY = $area.offset().top;
            
            //[3] define center position of the element outline
            var centerX = positionX + elementWidth / 2;  
            var centerY = positionY + elementHeight / 2;
            
            //dinamically active the animation on top of the selected element
            $indicator.css('left', centerX).css('top', centerY);//[4]
        
            //debug mode function
            console.log(positionX, positionY);
            console.log(centerX, centerY);
            console.log(elementWidth, elementHeight);
            console.log(typeof positionX);
            console.log($area);
        }
    });
    
    //changing maps
    $('.js-show-map').on('click', function() {
        // hide all maps
        $('[data-map]').removeClass('show');
        
        // show selected map
        var mapID = $(this).attr('data-map-id');
        $('[data-map="' + mapID + '"]').addClass('show');

        if(mapID == "galapagos") {
            $('.map__menu').addClass("is-show");
        } else {
            $('.map__menu').removeClass("is-show");
        }
    });

    //map menu hamburger
    $('.js-toggle').on('click', function(e) {
		e.preventDefault();
        $(this).toggleClass('is-open');
        $('.menu-bar--slide').toggleClass('is-show');
        $('.show-more').removeClass('is-open');
        $('.btn--subnav').removeClass('is-active');
    });
    
    $('.js-show-gmr').on('click', function() {
        $('[data-gmr]').toggleClass('is-show');
        $('.nav-icon').removeClass('is-open');
        $('.menu-bar--slide').removeClass('is-show');

        if($('[data-gmr]').hasClass('is-show')) {
            $(this).text('Hide GMR');
        } else {
            $(this).text('Show GMR');
        }
    });
});