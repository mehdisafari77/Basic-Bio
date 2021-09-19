$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});

 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["IOS Developer", "Web-Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["IOS Developer", "Web-Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// hamburger menu focus
var menuToggle = document.querySelector("#menu-toggle");
var menu = document.querySelector("#menu");

menuToggle.addEventListener("click", function(event) {
    var menuOpen = menu.checked;

    if(menuOpen) {
        menu.checked = false;
    } else {
        menu.checked = true;
    }
});
if(navOpen) {
    nav.checked = false;
    navToggle.setAttribute("aria-expanded", false);
} else {
    nav.checked = true;
    navToggle.setAttribute("aria-expanded", true);
}
navToggle.addEventListener("click", function(event) {
    var navOpen = nav.classList.contains("active");
    var newNavOpenStatus = !navOpen;

    navToggle.setAttribute("aria-expanded", newNavOpenStatus);
    nav.classList.toggle("active");
});