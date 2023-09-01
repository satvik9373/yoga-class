$(document).ready(function() {

    if (typeof screen_to_show_tablet !== typeof undefined) {
        $("#owl-demo").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            autoplay: true,
            rewind: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: screen_to_show_tablet,
                    // nav: true,
                    loop: false
                },
                1024: {
                    items: screen_to_show_laptop,
                    // nav: true,
                    loop: false
                },
                1199: {
                    items: screen_to_show,
                    // nav: true,
                    loop: false
                },

            },
        });
    } else {
        $("#owl-demo").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            autoplay: true,
            rewind: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 2,
                    // nav: true,
                    loop: false
                },
                1024: {
                    items: 4,
                    // nav: true,
                    loop: false
                },
                1199: {
                    items: 4,
                    // nav: true,
                    loop: false
                },

            },
        });
    }

});


$("#elementor-control-default-c3939").change(function() {
    var end = this.value;
    console.log("tegdgtdfhgsjhdf");
});