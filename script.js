const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
 
// close menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=>menuOpenButton.click());

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });
  
// https://www.youtube.com/watch?v=MYFgtnKMDp4
// 41