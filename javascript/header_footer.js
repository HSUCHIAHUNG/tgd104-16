
let menu = document.querySelector("#menu_bar");
let navbar = document.querySelector(".nav_bar");
let nav_icons = document.querySelector(".nav_icons")
let header_main = document.querySelector(".header_main")

//按下按鈕產生的變化
menu.addEventListener("click",function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    nav_icons.classList.toggle('active');
    header_main.classList.toggle('activeh');
    navbar.classList.toggle('activeh');
}); 

