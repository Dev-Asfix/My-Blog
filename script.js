let serviceCard1 = document.querySelector('.service_1');
let serviceCard2 = document.querySelector('.service_2');
let serviceCard3 = document.querySelector('.service_3');

let serviceLink1 = document.querySelector('.service_link1');
let serviceLink2 = document.querySelector('.service_link2');
let serviceLink3 = document.querySelector('.service_link3');

serviceLink1.addEventListener('click', () => {
    serviceCard1.style.display = 'flex';
    serviceCard2.style.display = 'none';
    serviceCard3.style.display = 'none';
});
serviceLink2.addEventListener('click', () => {
    serviceCard1.style.display = 'none';
    serviceCard2.style.display = 'flex';
    serviceCard3.style.display = 'none';
});
serviceLink3.addEventListener('click', () => {
    serviceCard1.style.display = 'none';
    serviceCard2.style.display = 'none';
    serviceCard3.style.display = 'flex';
});


var swiper = new Swiper('.RecentWorkSwiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1400: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    navigation: {
        nextEl: '.swiper-button-prev2',
        prevEl: '.swiper-button-next2'
    },
});

let testImg1 = document.querySelector('.test_img1');
let testImg2 = document.querySelector('.test_img2');
let testImg3 = document.querySelector('.test_img3');
let testImg4 = document.querySelector('.test_img4');
let testImg5 = document.querySelector('.test_img5');

let mainImg = document.querySelector('#main_image');

testImg1.addEventListener('click', () => {
    mainImg.src = 'images/work-2.jpg';
});
testImg2.addEventListener('click', () => {
    mainImg.src = 'images/work-3.jpg';
});
testImg3.addEventListener('click', () => {
    mainImg.src = 'images/work-4.jpg';
});
testImg4.addEventListener('click', () => {
    mainImg.src = 'images/work-5.jpg';
});
testImg5.addEventListener('click', () => {
    mainImg.src = 'images/work-6.jpg';
});

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
});