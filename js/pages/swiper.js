"use dtrict";
$(document).ready(function () {

//     ==============================   Basic swiper====================================
    var swiper1 = new Swiper('.swiper1');
//     ====================================   End of basic swiper=========================

//     ===========================   Swiper with pagination====================================
    var swiper2 = new Swiper('.swiper2', {
        pagination: '.swiper_pagination2',
        paginationClickable: true
    });
//     ============================   End of swiper with pagination============================

//     =================================   Vertical swiper====================================
    var swiper3 = new Swiper('.swiper3', {
        pagination: '.swiper_pagination3',
        paginationClickable: true,
        autoplay: 2000,
        loop:true,
        autoplayDisableOnInteraction: false
    });
//     ================================   End of vertical swiper==============================

//     =================================   Space between slides==============================
    var swiper4 = new Swiper('.swiper4', {
        pagination: '.swiper_pagination4',
        paginationClickable: true,
        spaceBetween: 30
    });
//     ==================================   End of space between slides========================

//     =================================   centered slides================================
    var swiper5 = new Swiper('.swiper5', {
        pagination: '.swiper_pagination5',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 5
    });
//     =========================   End of centered slides=================================

//     ==================================   Multi row slides====================================
    var swiper6 = new Swiper('.swiper6', {
        pagination: '.swiper_pagination6',
        slidesPerView: 3,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 10
    });
//     ==================================   End of multi row slides=============================

//     ================================   Loop mode navigation buttons=============================
    var swiper7 = new Swiper('.swiper7', {
        pagination: '.swiper_pagination7',
        nextButton: '.swiper-button-next7',
        prevButton: '.swiper-button-prev7',
        paginationClickable: true,
        spaceBetween: 15,
        loop: true
    });
//     ===================================   End of loop mode navigation buttons=======================

//     ================================   3D cube effect=========================================
    var swiper8 = new Swiper('.swiper8', {
        pagination: '.swiper_pagination8',
        effect: 'cube',
        grabCursor: true,
        nextButton: '.swiper-button-next8',
        prevButton: '.swiper-button-prev8',
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        },
        loop: true
    });
    var width8=$(".swiper_height_3d").width();
    $(".swiper_height_3d").css('height',width8);
//     ===============================   End of 3D cube effect===================================

//     ================================   3D coverflow effect===================================
    var swiper9 = new Swiper('.swiper9', {
        pagination: '.swiper_pagination9',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
    var width9=$(".swiper_width_coverflow").width();
    $(".swiper_width_coverflow").css('height',width8);
//     =============================   End of 3D coverflow effect===============================

//     =================================   Thumbs with gallery===============================
    var swiper10_1;
    var swiper10_2;
    swiper10_1 = new Swiper('.swiper10_1', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 5
    });
    swiper10_2 = new Swiper('.swiper10_2', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: '4',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    swiper10_1.params.control = swiper10_2;
    swiper10_2.params.control = swiper10_1;
//     ===========================   End of thumbs with gallery==============================

//     =================================   Progress pagination==================================
    var swiper11=new Swiper('.swiper11', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        loop: true
    });
//     ==================================   End of progress pagination=============================

    // ========================parallax swiper===============================================
    var swiper12 = new Swiper('.parallax_swiper', {
        pagination: '.parallax_pagination',
        paginationClickable: true,
        nextButton: '.parallax_button_next',
        prevButton: '.parallax_button_prev',
        parallax: true,
        speed: 600
    });
    // ==================================End of parallax swiper=====================================

    // ========================Nested swiper=========================================
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 50
    });
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        direction: 'vertical',
        spaceBetween: 50
    });
    // ====================================End of nested swiper=========================

    $(".sidebar-toggle").on("click", function() {
        setTimeout(function() {
            swiper1.update();
            swiper2.update();
            swiper3.update();
            swiper4.update();
            swiper5.update();
            swiper5.slideTo();
            swiper6.update();
            swiper7.update();
            swiper7.slideTo(1);
            swiper8.update();
            swiper8.slideTo();
            swiper9.update();
            swiper10_1.update();
            swiper10_1.slideTo();
            swiper10_2.update();
            swiper10_2.slideTo();
            swiper11.update();
            swiper11.slideTo(1);
            swiper12.update();
            swiperH.update();
        }, 200);
    })
});