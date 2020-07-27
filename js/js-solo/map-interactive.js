/**
 * map interactive
 */
$(document).ready(function() {
    
    /**
    type (string): data-* [e.g. item, area]
    id (string): id of data- aarea or item to toggle
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
    
    //displaying menus
    $('.js-area').on('click', function() {
        //reset all submenus
        $('.btn--subnav').removeClass('is-active');
        //reset menu
        $('.btn').removeClass('keep-highlighted');
        //display submenu with js toggle class = is-active
        $(this).find('.btn--subnav').toggleClass('is-active');
        //keep highlight menu button with submanu displayed js toggle class = keep-highlighted
        $('.btn--subnav.is-active').closest('.btn--subnav').toggleClass('keep-highlighted');
        
        var area = $(this).attr('data-area-id');
        toggleMapInfo('area', area, true);//[1]
    });
    
    //highlighting map areas
    $('.js-item').on('mouseleave', function() {
        $('[data-item]').removeClass('highlight waves');
        $('.highlight-indicator').removeClass('active');
        var item_id = $(this).attr('data-item-id');
        toggleMapInfo('item', item_id, false);//[1]
    });
    
    //active item-area dinamically when mouse enter
    $('.js-item').on('mouseenter', function() {
        var item_id = $(this).attr('data-item-id');
        //[5] dynamic variable loop to js toggle class = highlight waves, when mouse enter
        var $area = $('[data-item="' + item_id + '"]');
        $area.addClass('highlight waves');//[5]
        
        //reset class = highlight waves
        $('.map__info').removeClass('highlight waves');
        
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
    });
});