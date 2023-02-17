//filter_btn
let filter_btn_title = document.getElementsByClassName("filter_btn_title")[0];
filter_btn_title.addEventListener("click", function(){
  let filter_btn = document.getElementsByClassName("filter_btn")[0];
  filter_btn.classList.toggle("act")
});