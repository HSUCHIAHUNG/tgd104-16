/* ----------banner---------- */
var swiper = new Swiper(".index_Swiper", {
  loop: true,
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".arrow_right",
      prevEl: ".arrow_left",
  },
});




// 頁面上的按鈕
let lightbox_el = document.getElementById("lightbox");
let btn_modal = document.getElementsByClassName("btn_modal")[0];
btn_modal.addEventListener("click", function(){
  console.log("aaa");
  lightbox_el.classList.remove("none");
});


let btn_modal_close = document.getElementsByClassName("btn_modal_close")[0];
btn_modal_close.addEventListener("click", function(){
  lightbox_el.classList.add("none");
});


lightbox_el.addEventListener("click", function(){
  this.classList.add("none");
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});




    
