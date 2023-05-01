$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });
    //end
    //top sale owl carousel 
    $("#top-sale .owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                item:1

            },
            600:{
                item:3
            },
            1000:{
                items:5
            }

        }


    });
    

});