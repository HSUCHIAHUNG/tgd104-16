// nav bar子選單按鈕
let dropdown_btn = document.getElementsByClassName("dropdown_btn")[0];
dropdown_btn.addEventListener("click", function(){
  dropdown_ol = dropdown_btn.nextElementSibling;
  dropdown_ol.classList.toggle("dropdown_active");
});


//localstorege-login
//重整頁面
function firstRnder() {
  const sayHiElement = document.querySelector('.sayHi')
  const storageMemory = localStorage.getItem('MemoryAccount')
  let status = localStorage.getItem('status')
  !status && localStorage.setItem('status', 'login')
  if(storageMemory){
    sayHiElement.textContent = storageMemory
  }
  changePage()
}

function changePage(e){
  const yellowBox = document.querySelector('.yellowbox')
  const lightblueBox = document.querySelector('.lightbluebox')
  const helloContent = document.querySelector('.hello')
  const wlecome = document.querySelector('.welcome')
  const loginBox = document.querySelector('.login-box')
  const singUpBox = document.querySelector('.signup-box')
  let status = localStorage.getItem('status')

  function addClass() {
    lightblueBox.classList.add('right')
    yellowBox.classList.add('left')
    helloContent.classList.add('InBoxRight')
    wlecome.classList.add('InBoxRight')
    loginBox.classList.add('InBoxRight')
    singUpBox.classList.add('InBoxRight')
  }

  function removeClass() {
    lightblueBox.classList.remove('right')
    yellowBox.classList.remove('left')
    helloContent.classList.remove('InBoxRight')
    wlecome.classList.remove('InBoxRight')
    loginBox.classList.remove('InBoxRight')
    singUpBox.classList.remove('InBoxRight')
  }

  if(!e && status === 'signup') {
    addClass()
  } else if (e && status === 'signup'){
    removeClass()
    localStorage.setItem('status', 'login')
  } else if(e) {
    addClass()
    localStorage.setItem('status', 'signup')
  }
}

window.addEventListener('DOMContentLoaded', function(){
  const buttons = document.querySelectorAll('.signup-btn')
  const signUpBtn = document.querySelector('#signUpBtn')
  const loginBtn = document.querySelector('#loginBtn')
  const logOutLink = document.querySelector('#logout')

  firstRnder()

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      changePage(e)
    })
  })

  // sign up button 
  // 創建帳號
  signUpBtn.addEventListener('click', () => {
    const signUpName = document.querySelector('#signUpName')
    const signUpEmail = document.querySelector('#signUpEmail')
    const signUpPassword = document.querySelector('#signUpPassword')
    const storageKey = signUpEmail.value + signUpPassword.value 
    const checkUser = Boolean(localStorage.getItem(storageKey))//如果尚未創建會得到false
    console.log(localStorage.getItem(storageKey));

    function successAction() { 
      if(checkUser) { //如果是true代表已創建就alert
        return alert('信箱已創建請重新輸入')
      }
      localStorage.setItem(storageKey, signUpName.value) //將輸入的key(信箱、密碼)、value(使用者名稱)存入local
      signUpName.value = ''
      signUpEmail.value = ''
      signUpPassword.value = ''
      alert('創建成功請至登入頁面登入')
    }

    if(signUpEmail.value === '' || signUpPassword.value === ''){
      alert('輸入欄位請勿空白')
    } else {
      successAction()
    }
  })

  // login button
  // 登陸
  loginBtn.addEventListener('click', () => {
    const loginEmail = document.querySelector('#loginEmail') 
    const loginPassword = document.querySelector('#loginPassword')
    const sayHiElement = document.querySelector('.sayHi')
    const storageKey = loginEmail.value + loginPassword.value 
    const userName = localStorage.getItem(storageKey) //使用者註冊時輸入的key、value
    const checkUser = Boolean(userName) // 布林判斷使用者是否有輸入值
    

    function loginAction() {
      if(!checkUser) { //如果false代表未創建帳戶就alert
        return alert('請先創立帳戶')
      } 

      const confirmMemory = confirm('你想要保存這個密碼嗎?') 
      loginEmail.value = ''
      loginPassword.value = ''
      alert('登入成功')
      sayHiElement.textContent = `Hi~ ${userName}`
      if(confirmMemory){
        localStorage.setItem('MemoryAccount', `Hi~ ${userName}`)
      }
    }

    if(!loginEmail.value || !loginPassword.value){
      alert('輸入欄位請勿空白')
    } else {
      loginAction()
    }
  })

  // logOut
  //登出
  logOutLink.addEventListener('click', () => {
    const sayHiElement = document.querySelector('.sayHi')
    localStorage.clear()
    sayHiElement.textContent = 'Hello, Friend !'
  })
})