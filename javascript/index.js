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
  slidesPerView: "auto",
  speed: 1500,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    disableOnInteraction: false,
  }
});


/* ----------hover menu---------- */
var swiper = new Swiper(".Rmyhmenu", {
  slidesPerView: "auto",
  speed: 1500,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    disableOnInteraction: false,
  }
});


/* ----------slide news---------- */
var swiper = new Swiper(".mynews", {
  loop: true,  
  slidesPerView: "auto",
  centeredSlides: true,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow_right_news",
    prevEl: ".arrow_left_news",
},
});

/* ----------RWDslide news---------- */
var swiper = new Swiper(".Rmynews", {
  loop: true,  
  slidesPerView: "auto",
  centeredSlides: true,
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