$(function(){

// ハンバーガーメニュー

    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .nav').toggleClass('show');
    });

// スワイバー

    var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 300,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
    });


// FAQアコーディオン

    $('.question1').click(function (){
        if($('.answer1').hasClass('open')) {
            $('.answer1').removeClass('open');
            $('.answer1').slideUp();
        } else {
            $('.answer1').addClass('open');
            $('.answer1').slideDown();
        }
    }); 

    $('.question2').click(function (){
        if($('.answer2').hasClass('open')) {
            $('.answer2').removeClass('open');
            $('.answer2').slideUp();
        } else {
            $('.answer2').addClass('open');
            $('.answer2').slideDown();
        }
    }); 

    $('.question3').click(function (){
        if($('.answer3').hasClass('open')) {
            $('.answer3').removeClass('open');
            $('.answer3').slideUp();
        } else {
            $('.answer3').addClass('open');
            $('.answer3').slideDown();
        }
    }); 

    // AOS
    AOS.init({
        duration: 1000,
    });

    // スムーススクロール
    $('.scroll').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        position -= 94;
        $('html,body').animate({
            'scrollTop' : position
        },800);
    });

});