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


//  show gifs when mouse over
