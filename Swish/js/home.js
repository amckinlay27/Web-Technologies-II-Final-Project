"use strict";
$(document).ready(function() {
    //load nav plugin
    $("#menu_nav").highlightMenu();
    
    // preload images
    $("#img_list1 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list1 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img1").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // preload images
    $("#img_list2 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list2 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img2").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault(); 
    }); // end click
    
    // preload images
    $("#img_list3 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list3 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img3").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // preload images
    $("#img_list4 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list4 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img4").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();  // jQuery cross-browser method
    }); // end click
    
    // preload images
    $("#img_list5 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list5 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img5").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // preload images
    $("#img_list6 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list6 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img6").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // preload images
    $("#img_list7 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list7 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img7").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault(); 
    }); // end click
    
    // preload images
    $("#img_list8 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list8 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img8").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // preload images
    $("#img_list9 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list9 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img9").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();  // jQuery cross-browser method
    }); // end click
    
    // preload images
    $("#img_list10 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list10 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img10").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault();
    }); // end click
    
    // preload images
    $("#img_list11 a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    // set up event handlers for links    
    $("#img_list11 a").click(function(evt) {
        // swap image
        var imageURL = $(this).attr("href");
        $("#canopener_img11").attr("src", imageURL);
        
        // cancel the default action of the link
        evt.preventDefault(); 
    }); // end click
    
    
    //This method allows a user to click a predefined area to get a 20% discount
    $("#home_banner img").click(function(evt){
       //get offset
       var offsets = $(this).offset();
       
       //get x and y cords
       var x = (evt.pageX - offsets.left);
       var y = (evt.pageY - offsets.top);
       
       //determine if user click is wihtin area
       if((x >= 217 && x <= 257) && (y >=360 && y <= 398)){
           alert("$20.00 discuout code: C84AJ6");
       }
    });
}); // end ready
