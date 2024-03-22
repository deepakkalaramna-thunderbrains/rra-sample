// 'use client'
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../../node_modules/jquery/dist/jquery'
// import "../../node_modules/slick-carousel/slick/slick"


// $(document).ready(function () {
//     $('.counter').each(function () {
//         var $this = $(this),
//             countTo = $this.attr('data-count');
//         $({ countNum: $this.text() }).animate({
//             countNum: countTo
//         },
//             {
//                 duration: 2000,
//                 easing: 'linear',
//                 step: function () {
//                     $this.text(Math.floor(this.countNum));
//                 },
//                 complete: function () {
//                     $this.text(this.countNum);
//                 }
//             })
//     })

//     $('.hero').slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         fade: !0,
//         cssEase: 'linear',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 8000,
//         draggable: true,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     draggable: true,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     draggable: true,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     draggable: true,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     })

//     const sections = document.querySelectorAll("section[id]");

//     // Add an event listener listening for scroll
//     window.addEventListener("scroll", navHighlighter);

//     function navHighlighter() {

//         // Get current scroll position
//         let scrollY = window.pageYOffset;

//         // Now we loop through sections to get height, top and ID values for each
//         sections.forEach(current => {
//             const sectionHeight = current.offsetHeight;
//             const sectionTop = current.offsetTop - 50;
//          const sectionId = current.getAttribute("id");

//             /*
//             - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//             - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//             */
//             if (
//                 scrollY > sectionTop &&
//                 scrollY <= sectionTop + sectionHeight
//             ) {
//                 document.querySelector(".side-bar .navigation a[href*=" + sectionId + "]").classList.add("active");
//             } else {
//                 document.querySelector(".side-bar .navigation a[href*=" + sectionId + "]").classList.remove("active");
//             }
//         })
//     }
// });


