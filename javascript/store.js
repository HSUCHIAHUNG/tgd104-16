// nav bar按鈕
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


/* ----------banner---------- */
var swiper = new Swiper(".index_Swiper", {
  loop: true,
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },
/*   navigation: {
      nextEl: ".arrow_right",
      prevEl: ".arrow_left",
  }, */
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



