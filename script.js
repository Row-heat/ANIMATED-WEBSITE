const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
    fixed.style.backgroundImage = "";
})
var elems = document.querySelectorAll(".elem")
elems.forEach(e => {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});

}
 function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

 }

 swiperAnimation();
 page4Animation();


var loader = document.querySelector("#loader");
var main = document.querySelector("#main");
setTimeout(function () {
    loader.style.display = "none";
    main.style.display = "block";
}, 4000);