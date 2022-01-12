const menu = document.querySelector('.menu-btn');
const topLeftSlider = document.querySelector('.top-left-slide');
const bottomLeftSlider = document.querySelector('.bottom-left-slide');
const clipPath = document.querySelector('.clip-path');
const topRightSlider = document.querySelector('.top-right-slide');
const middleRightSlider = document.querySelector('.middle-right-slide');
const bottomRightSlider = document.querySelector('.bottom-right-slide');

const eksOne = document.querySelector('.eks-one');
const eksTwo = document.querySelector('.eks-two');
const eksThree = document.querySelector('.eks-three');
const links = document.querySelectorAll(".nav-links")

let isOpen = false;

const openAndClose = () => {
    clipPath.classList.toggle('clip-path');
    document.body.classList.toggle("overflow");
    topLeftSlider.classList.toggle('top-left-slide-show');
    bottomLeftSlider.classList.toggle('bottom-left-slide-show');
    topRightSlider.classList.toggle('top-right-slide-show');
    middleRightSlider.classList.toggle('middle-right-slide-show');
    bottomRightSlider.classList.toggle('bottom-right-slide-show');
    eksTwo.classList.toggle('eks-two-fade');
    const tl = gsap.timeline();
    const tlEksThree = gsap.timeline();
    if (!isOpen) {
        tl.to('.eks-one', {
                y: isOpen ? 0 : 9,
            })
            .to('.eks-one', {
                rotate: isOpen ? 0 : 45
            })

        tlEksThree.to('.eks-three', {
                y: isOpen ? 0 : -9,
            })
            .to('.eks-three', {
                rotate: isOpen ? 0 : -45
            })
    } else {
        tl.to('.eks-one', {
                rotate: isOpen ? 0 : 45,
            })
            .to('.eks-one', {
                y: isOpen ? 0 : 9,
            })

        tlEksThree.to('.eks-three', {
                rotate: isOpen ? 0 : -45
            })
            .to('.eks-three', {
                y: isOpen ? 0 : -9
            })
    }
    isOpen = !isOpen
}


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        openAndClose()
    });
}


menu.addEventListener('click', () => {
    openAndClose()
})