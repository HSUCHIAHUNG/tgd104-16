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






/* PC fi */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("store_text");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



