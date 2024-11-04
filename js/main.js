

$(function($){
    "use strict";

    $(".left-slidebar-trigger").on("click", function(){
        $(".left-slidebar").addClass("left-slidebar-show");
        $(".shade").addClass("active");
    });

    $(".left-slidebar-close, .shade").on("click", function(){
        $(".left-slidebar").removeClass("left-slidebar-show");
        $(".shade").removeClass("active");
    });


    $(".right-sidebar-trigger").on("click", function() {
        $(".right-sidebar").addClass("right-sidebar-show");
        $(".shade").addClass("active");
    });

    $(".right-sidebar-close, .shade").on("click", function() {
        $(".right-sidebar").removeClass("right-sidebar-show");
        $(".shade").removeClass("active");
    });



})(jQuery);