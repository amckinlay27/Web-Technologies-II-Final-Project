"use strict";
$(document).ready(function() {
    //load nav plugin
    $("#menu_nav").highlightMenu();
    
    //Search using flicker API and Dispay images in div:imageGal
    $("#searchBtn").click(function(){
        var tag = $("#searchTags").val();
        var url ="http://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="+tag+"";
        
        //get JSON from flickr API
        $.getJSON(url, function(data) {
                var html = "";
                $.each(data.items, function(i, item){
                        html += "<a href="+item.media.m+" data-lightbox=\""+ item.title + "\"><img src=" + item.media.m + "></a>";
                });
                $("#imagesGal").html(html);
        });
    });
}); // end ready
