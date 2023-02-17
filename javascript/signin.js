  // get
  function firstRnder() {
    const loginName = document.querySelector('#login_name')    
    let username = document.getElementById("username");
    const storageMemory = localStorage.getItem('Username')
    if(storageMemory){
        loginName.textContent = storageMemory
    }
  }
  
    firstRnder();


let inform = document.getElementById("inform");

inform.addEventListener("submit", function(e){
    let inmail = document.getElementById("mail");
    let inpassword = document.getElementById("password");
    
    let send_data = true;

    // email用第三方套件
    if (is.email(inmail.value)) {
        inmail.classList.remove("-error");
    } else {
        inmail.classList.add("-error");
        alert("信箱格式不正確")
        send_data = false;
    }

    // 密碼驗證
    if (inmail.value) {
        inmail.classList.remove("-error");
    } else {
        inmail.classList.add("-error");
        send_data = false;
    }
    // 密碼驗證
    if (((inpassword.value).match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/))){
        
        inpassword.classList.remove("-error");
    }else {
        inpassword.classList.add("-error");
        alert( "your password : "+ (inpassword.value) );
        send_data = false;
    }


    if (!send_data) {
        e.preventDefault();
    }

});