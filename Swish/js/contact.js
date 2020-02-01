"use strict";
$(document).ready(function() {
    //load nav plugin
    $("#menu_nav").highlightMenu();
    
    //Validate user form
    $("#contactForm").validate({
        rules:{
            fName:{
                required: true,
                minlength: 3
            },
            lName:{
                required: true,
                minlength: 3
            },
            email:{
                required: true,
                email: true
            },
            contactReason:{
                required: true
            },
            description:{
                required: true,
                minlength: 20
            }
        },
        message:{
            fName:{
                required: "This field is required.",
                fName: "Please enter your name."
            },
            lName:{
                required: "This field is required.",
                minlength: "Please enter your name."
            },
            email:{
                required: "This field is required.",
                email: "This is not a valid email."
            },
            contactReason:{
                required: "This field is required."
            },
            description:{
                required: "This field is required.",
                minlength: "Your comment is not long enough.",
            }
        }
    });
}); // end ready

