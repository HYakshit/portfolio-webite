$('.owl-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 800,
    loop:false,
    dots: true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})