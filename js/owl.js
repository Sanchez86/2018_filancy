  $(document).ready(function () {

    $('.owl-carousel_about_us').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
    }).owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            992:{
                items:3
            },
            1500:{
                items:4
            },
            1600:{
                items:5
            }
        }
    })
     
  });