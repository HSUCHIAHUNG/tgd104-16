
let menu = document.querySelector("#menu_bar");
let nevbar = document.querySelector(".nav_bar");

//按下按鈕產生的變化
menu.addEventListener("click",function(){
    menu.classList.toggle('fa-times');
    nevbar.classList.toggle('active')
}); 