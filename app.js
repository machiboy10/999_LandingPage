const navwhite = document.querySelector("nav.white");
const navyellow = document.querySelector("nav.yellow");
const navblue = document.querySelector("nav.blue");
const navred = document.querySelector("nav.red");
const search = document.querySelector(".nav.menu .search i")

window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log(window.scrollY);
    if (window.scrollY > navwhite.offsetHeight + 30) {
        navwhite.classList.add('active');
        navyellow.classList.add('active');
        navblue.classList.add('active');
        navred.classList.add('active');
    } else {
        navwhite.classList.remove('active');
        navyellow.classList.remove('active');
        navblue.classList.remove('active');
        navred.classList.remove('active');
    }
}

const rightBtn = document.querySelector(".btn.right");
const leftBtn = document.querySelector(".btn.left");
const imgs = document.querySelector("#imgs");
const img = document.querySelectorAll("#imgs > img")
let idx = 0;
let interval = setInterval(run, 2000);

function run() {
    idx++
    changeImage()
}

function changeImage() {

    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1
    }
    console.log(idx)
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

const boxes = document.querySelectorAll('.program-box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}