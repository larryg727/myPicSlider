/**
 * Created by larryg on 5/12/17.
 */
"use strict";
$(document).ready(function () {
    "use strict";

    var initial = 1; //sets initial frame being shown
    var slideVar = "#slide-"; //variable for slides
    var current = initial; // tracks  current slide



    $(slideVar + initial).fadeIn();   // initial picture shown


    function currentSlide(){
        for(var i = 1; i <= 4; i++) {
            var display = $(slideVar + i).css("display");
            if (display === "inline") {
                current = i;
            }
        }
            return current;
    }

    // function for next button click
    $("#next").click(function(){
        if(current < 4){
            $(slideVar + current).hide();
            $(slideVar + (current+1)).fadeIn();
            current += 1;
        }else if(current = 4){
            $(slideVar + current).hide();
            $("#slide-1").fadeIn();
            current = 1;
        }
    });

    $("#prev").click(function(){
        if(current > 1){
            $(slideVar + current).hide();
            $(slideVar + (current-1)).fadeIn();
            current -= 1;
        }else if(current = 1){
            $(slideVar + current).hide();
            $("#slide-4").fadeIn();
            current = 4;
        }
    });


});