// NAVBAR
window.onscroll = function() {
    stickyNavbar(); 
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// SPONSORS
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({   
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        center: true,
        nav:true,
        loop:true,      
        responsive: {
            600: {
                items: 4
            }
        }  
    });  
});

$(function(){

    let start = 0;
    let end = $(".feature").html();
    let speed = 100;

    setInterval(function(){
        if (start<end){
            start++;
        }
        $(".feature").html(start);
    }, speed);
});

// products
$(function(){

    let start = 0;
    let end = $(".products").html();
    let speed = 100;

    setInterval(function(){
        if (start<end){
            start++;
        }
        $(".products").html(start);
    }, speed);
});

// experience
$(function(){

    let start = 0;
    let end = $(".experience").html();
    let speed = 500;

    setInterval(function(){
        if (start<end){
            start++;
        }
        $(".experience").html(start);
    }, speed);
});

// clients
$(function(){

    let start = 0;
    let end = $(".clients").html();
    let speed = 10;

    setInterval(function(){
            if (start<end){
                start++;
            }
            $(".clients").html(start);
        }, speed);
});



