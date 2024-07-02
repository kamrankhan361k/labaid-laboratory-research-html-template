var swiper = new Swiper(".mainslider", {
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
});

var swiper = new Swiper(".mainslider2", {
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
});

var swiper = new Swiper(".carousel", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".carousel-1", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".carousel-2", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".carousel-3", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 74,
        },
    },
});

var swiper = new Swiper(".carousel-4", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: false,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".carousel-5", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: false,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});

var swiper = new Swiper(".carousel-6", {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     },
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: false,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


var swiper = new Swiper(".trusted-swiper", {
    loop: false,

    spaceBetween: 0,
    breakpoints: {
        
        0: {
            slidesPerView: 2,
            spaceBetween: 24,
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1300: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});
var swiper = new Swiper(".post-box-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 5,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});
var swiper = new Swiper(".team-mb-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 17,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 17,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});
var swiper = new Swiper(".service-st-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 14,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        720: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".special-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 17,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 17,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});
var swiper = new Swiper(".member-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});
