const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", ()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", ()=>menuOpenButton.click());


// https://www.youtube.com/watch?v=MYFgtnKMDp4 
// 23:09