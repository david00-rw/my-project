$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    dots: true,
    loop: true,
    items: 1
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const myDiv = document.getElementById('navBar');

    if (scrollPosition > 200) {
        myDiv.style.backgroundColor = 'white';
    } else {
        myDiv.style.backgroundColor = 'white';
    }
});
