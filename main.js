document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('fas-times');
        navbar.classList.remove('active');
    };

});



let slides = document.querySelectorAll('.home .slide')
let index=0

function next(){
    slides[index].classList.remove('active');
    index= (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index= (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}