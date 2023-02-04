
let menu = document.querySelector("#menu_bar");
let navbar = document.querySelector(".nav_bar");

//按下按鈕產生的變化
menu.addEventListener("click",function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}); 