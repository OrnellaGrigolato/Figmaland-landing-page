// Sliders
const topLeftSlider = document.querySelector('.top-left-slide');
const bottomLeftSlider = document.querySelector('.bottom-left-slide');
const topRightSlider = document.querySelector('.top-right-slide');
const middleRightSlider = document.querySelector('.middle-right-slide');
const bottomRightSlider = document.querySelector('.bottom-right-slide');

// Extras
const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelectorAll(".nav-links")
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo")
const clipPath = document.querySelector('.clip-path');

let isOpen = false;

const openAndClose = () => {
    // Extras
    nav.classList.toggle("width");
    logo.classList.toggle("logo-when-menu-opens")
    clipPath.classList.toggle('clip-path');
    document.body.classList.toggle("overflow");
    // Sliders
    topLeftSlider.classList.toggle('top-left-slide-show');
    bottomLeftSlider.classList.toggle('bottom-left-slide-show');
    topRightSlider.classList.toggle('top-right-slide-show');
    middleRightSlider.classList.toggle('middle-right-slide-show');
    bottomRightSlider.classList.toggle('bottom-right-slide-show');

    if (isOpen) {
        isOpen = !isOpen
    }
}

// Open and close menu when the button is clicked
menuBtn.addEventListener('click', () => {
    openAndClose()
})

// Close menu when a link is clicked
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        openAndClose()
    });
}

// Nav fixed when scroll
window.addEventListener("scroll", () => {
    nav.classList.toggle("sticky", window.scrollY > 100)
})