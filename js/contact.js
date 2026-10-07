let frm = document.querySelector('#theForm');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let error = document.querySelector('.wrong');
let error1 = document.querySelector('.wrong1');
let error2 = document.querySelector('.wrong2');
let error3 = document.querySelector('.wrong3');
let error4 = document.querySelector('.wrong4');
let locatSelct = document.querySelector('#locationslct');
let radioinpt = document.querySelectorAll('.inptRadio');
let message = document.querySelector('#textmeassage');
let container = document.querySelector('.conta2')

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    
    if (name.value.trim() === "" || !isNaN(name.value.trim()) ) {
        error.style.color = 'red';
        error.textContent = "please enter your name";
       
    }  if (email.value.trim() === "") {
         error1.style.color = 'red';
        error1.textContent = "please enter your emial";
       
    }  if(locatSelct.value === "" || locatSelct.value === "select"){
          error2.style.color = 'red';
        error2.textContent = "please select the location";
      
    }
    // else if (!(radioinpt.cheked)) {
    //       error3.style.color = 'red';
    //     error3.textContent = "please select one";
    //     tError = true
    // }
     if (message.value === "") {
          error4.style.color = 'red';
        error4.textContent = "please enter a message";
       
    }
    else{
        let thecard = document.createElement('div') 
        thecard.classList.add('successMessage')
        thecard.innerHTML = `<h1 style=" color: green; font-size: 400%; font-weight: bolder;">your registration was seccessful </h1>
        <br> <p> your name : ${name.value}</p><br>
        <p>-------------------------------------------------</p>
        <br> <p> your email : ${email.value}</p><br>
        <p>-------------------------------------------------</p><br>
        <p> the location selected is : ${locatSelct.value}</p> <br> 
        <p>-------------------------------------------------</p><br>
        <p> your message was : ${message.value}</p> <br> 
        `
        container.appendChild(thecard)
        frm.style.display = "none"
        
        
    }
})