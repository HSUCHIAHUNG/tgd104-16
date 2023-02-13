/* ----------banner---------- */
var swiper = new Swiper(".index_Swiper", {
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".arrow_right",
        prevEl: ".arrow_left",
    },
});

/* ----------slide menu---------- */
var swiper = new Swiper(".mysmenu", {
  speed: 1500,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
  },
  autoplay: {
    disableOnInteraction: false,
  }
});


/* ----------slide news---------- */
var swiper = new Swiper(".mySwiper", {
  loop: true,  
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow_right_news",
    prevEl: ".arrow_left_news",
},
});

// nav bar子選單按鈕
let dropdown_btn = document.getElementsByClassName("dropdown_btn")[0];
dropdown_btn.addEventListener("click", function(){
  dropdown_ol = dropdown_btn.nextElementSibling;
  dropdown_ol.classList.toggle("dropdown_active");
});