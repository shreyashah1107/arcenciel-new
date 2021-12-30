$(document).ready(function() {
    $("#header").load('header.html');    
    $("#footer").load('footer.html');

    $(window).on('scroll',function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("header").removeClass("sticky");
        } else {
            $("header").addClass("sticky");
        }
    });

    // Amenities Swiper
    var swiper = new Swiper('.amenities-slider--suggestions', {
        slidesPerView: 4,
        spaceBetween: 20,
        // autoplay: true,
        speed: 1000,
        delay: 5000,

        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    var swiper = new Swiper('.amenities-slider--kids', {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: true,
        speed: 1000,
        delay: 5000,

        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    var swiper = new Swiper('.amenities-slider--parents', {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: true,
        speed: 1000,
        delay: 5000,

        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2.2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    // "use strict";

    // Easy selector helper function
    // const select = (el, all = false) => {
    //     el = el.trim()
    //     if (all) {
    //         return [...document.querySelectorAll(el)]
    //     } else {
    //         return document.querySelector(el)
    //     }
    // }

    // // Easy event listener function
    // const on = (type, el, listener, all = false) => {
    //     let selectEl = select(el, all)
    //     if (selectEl) {
    //         if (all) {
    //             selectEl.forEach(e => e.addEventListener(type, listener))
    //         } else {
    //             selectEl.addEventListener(type, listener)
    //         }
    //     }
    // }

    // // Easy on scroll event listener 
    // const onscroll = (el, listener) => {
    //     el.addEventListener('scroll', listener)
    // }

    // // Navbar links active state on scroll
    // let navbarlinks = select('#navbar .scrollto', true);
    // const navbarlinksActive = () => {
    //     let position = window.scrollY + 200;
    //     navbarlinks.forEach(navbarlink => {
    //         if (!navbarlink.hash) 
    //             return
    //         let section = select(navbarlink.hash);
    //         if (!section) 
    //             return
    //         if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
    //             navbarlink.classList.add('active')
    //         } else {
    //             navbarlink.classList.remove('active')
    //         }
    //     });
    // }
    // window.addEventListener('load', navbarlinksActive)
    // onscroll(document, navbarlinksActive)

    // // Scrolls to an element with header offset
    // const scrollto = (el) => {
    //     let header = select('#header');
    //     let offset = header.offsetHeight;
    //     if (!header.classList.contains('header-scrolled')) {
    //         offset -= 20
    //     }

    //     let elementPos = select(el).offsetTop;
    //     window.scrollTo({
    //         top: elementPos - offset,
    //         behavior: 'smooth'
    //     });
    // }

    // // Toggle .header-scrolled class to #header when page is scrolled
    // let selectHeader = select('#header');
    // if (selectHeader) {
    //     const headerScrolled = () => {
    //         if (window.scrollY > 100) {
    //             selectHeader.classList.add('header-scrolled');
    //         } else {
    //             selectHeader.classList.remove('header-scrolled');
    //         }
    //     }
    //     window.addEventListener('load', headerScrolled)
    //     onscroll(document, headerScrolled)
    // }

    // // Mobile nav toggle
    // on('click', '.mobile-nav-toggle', function(e) {
    //     select('#navbar').classList.toggle('navbar-mobile');
    //     this.classList.toggle('is-active');
    // });

    // // Scroll with offset on links with a class name .scrollto
    // on('click', '.scrollto', function(e) {
    //     if (select(this.hash)) {
    //         e.preventDefault();
    //         let navbar = select('#navbar');
    //         if (navbar.classList.contains('navbar-mobile')) {
    //             navbar.classList.remove('navbar-mobile');
    //             let navbarToggle = select('.mobile-nav-toggle');
    //             navbarToggle.classList.toggle('is-active');
    //         }
    //         scrollto(this.hash);
    //     }
    // }, true);

    // // Scroll with ofset on page load with hash links in the url
    // window.addEventListener('load', () => {
    //     if (window.location.hash) {
    //         if (select(window.location.hash)) {
    //             scrollto(window.location.hash)
    //         }
    //     }
    // });
});