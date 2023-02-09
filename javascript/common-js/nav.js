// nav bar子選單按鈕
let dropdown_btn = document.getElementsByClassName("dropdown_btn")[0];
dropdown_btn.addEventListener("click", function(){
  dropdown_ol = dropdown_btn.nextElementSibling;
  dropdown_ol.classList.toggle("dropdown_active");
});

//filter_btn
let filter_btn_title = document.getElementsByClassName("filter_btn_title")[0];
filter_btn_title.addEventListener("click", function(){
  let filter_btn = document.getElementsByClassName("filter_btn")[0];
  filter_btn.classList.toggle("act")
});

