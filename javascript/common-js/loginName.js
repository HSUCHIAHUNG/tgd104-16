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
 
  

  
