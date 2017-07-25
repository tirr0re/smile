$(document).ready(function(){
    $(".products-slider").owlCarousel({
        center: true,
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:6,
            },
            992:{
                items:6,
            }
        }
    });

    $(".products-carousel").owlCarousel({
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:6,
            },
            992:{
                items:4,
            }
        }
    });

    $(".brands-carousel").owlCarousel({
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:6,
            },
            992:{
                items:8,
            }
        }
    });
});

function openSlider(evt, sliderName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sliderName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();