$(document).ready(function () {
    $(".slider").owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    var $owl = $(".products-slider").owlCarousel({
        center: true,
        loop: true,
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 2,
                center: false
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });

    $(".products-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            425: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    $(".brands-carousel").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 6,
                margin: 10
            },
            992: {
                items: 8
            }
        }
    });

    document.getElementById('next-slide').addEventListener('click', function () {
        $owl.trigger('next.owl.carousel');
    });

    document.getElementById('prev-slide').addEventListener('click', function () {
        $owl.trigger('prev.owl.carousel');
    });

    // Tabs
    $('.tablinks').on('click', function () {
        $('.tablinks').removeClass('active');
        $(this).addClass('active');
        $('.tabcontent').hide();
        $('.tabcontent').eq($(this).attr('data-val')).show();
    });

    // change tab with select list option
    $('#select-tab').on('change', function () {
        $('.tablinks').eq($(this).val()).trigger('click');
    });

    // open/close mobile bottom menu
    $('.footer-main-menu-wrapper button').on('click', function () {
        $('.footer-main-menu').toggleClass('open');
    });

    // open default tab
    $('#defaultOpen').click();

});
