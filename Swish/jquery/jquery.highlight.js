(function($){
    $.fn.highlightMenu = function(options) {
        var defaults = $.extend({
           'backgroundColor' : 'black',
           'padd' : '1em',
           'size' : '1.1em',
           'color' : '#ffffff',
           'hoverColor' : '#cc1c0d',
           'linkWidth' : '125px',
        }, options);
        
        return this.each(function(){
            var item =$("#menu_nav");
            var o = defaults;
            item.css('background-color', o.backgroundColor)
                .css('padding', o.padd);
        
            var items = $("#menu_nav li a");
            items.css('font-family', 'arial, helvetica, sans-serif')
                 .css('font-weight', 'bold')
                 .css('font-size', o.size)
                 .css('text-decoration', 'none')
                 .css('color', o.color)
                 .css('width', o.linkWidth);
            items.mouseover(function() {
                $(this).css('color', o.hoverColor);
            });
            items.mouseout(function() {
                $(this).css('color', o.color);
            });
        });
    }
})(jQuery);
