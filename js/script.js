let next = document.querySelector(".btn-next");
let prev = document.querySelector(".btn-prev");

let images = document.querySelectorAll(".slider_images img");

let i = 0;

next .addEventListener("click", () => {
    images[i].classList.remove("active");
    i++;
    if(i > images.length - 1) {
        i = 0;
    } 
    images[i].classList.add("active");
});

prev.addEventListener("click", () => {
    images[i].classList.remove("active");
    i--;
    if(i < 0) {
        i = images.length - 1;
    } 
    images[i].classList.add("active");
});
