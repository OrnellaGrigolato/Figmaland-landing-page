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


//Forms handling
let emailInput = document.forms["emailForm"]["email"]

if (window.matchMedia("(min-width: 1100px)").matches) {
    /* desktop */
    var contactForm = document.forms["contactForm"]
    var fname = document.forms["contactForm"]["fname"]
    console.log("desktop")
  } else {
    /* mobile */
    var contactForm = document.forms["contactMobileForm"]
    var fname = document.forms["contactMobileForm"]["fname"]
  }

function confirmInput(form) {
    if(form==="email"){
        alert("We have received your email. Thank you!");
        emailInput.value = ""
    } else{
        alert("Thank you " + fname.value + "! We have received your message. We will contact you soon");
        for(let i =0; i<=2 ;i++){
            contactForm[i].value = ""
        }
    }
}