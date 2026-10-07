let inptSrch = document.querySelector('.inputSearch');
let typePiza = document.querySelector('#pizaSelect');
let cardsPizza = document.querySelectorAll('.cards');
let containerCards = document.querySelector('.conta4')

inptSrch.addEventListener('input',(e)=>{
e.preventDefault()
let searchValue = e.target.value.toLowerCase().trim();
       
      cardsPizza.forEach((card) => {

        let ziel = card.querySelector('h2').textContent.toLowerCase().trim()

        if (ziel.includes(searchValue)) {
            card.style.display = "block";
            pizzaAddArray.push(card)
        }else{
            card.style.display = "none"
        }
      })
    
})

// function type(){
//     let v = typePiza.value.toLowerCase().trim()
//     cardsPizza.forEach((card) =>{
        
//         let pizzaname = card.querySelector('h2').textContent.toLowerCase().trim();
//         if (v === "" || v === "choose" || pizzaname === v) {
//         card.style.display = "block";
      
//     }else{
//         card.style.display = "none";
      
//     }
//     })

  
    
// }
// typePiza.addEventListener('change', type);

typePiza.addEventListener('change',()=>{
   

    let v = typePiza.value.toLowerCase().trim()

    cardsPizza.forEach((card)=>{
        let pizzaName = card.querySelector('h2').textContent.toLowerCase().trim()

        if (v === "" || v === "choose" || pizzaName === v ) {
            card.style.display = " block"
        }else{
            card.style.display = "none"
        }
    })

})

let btnchoi = document.querySelector('.btnChois');

btnchoi.addEventListener('click',(e)=>{
e.preventDefault()
  document.querySelector('main').style.filter = "blur(0px)"; 

    containerCards.scrollIntoView({
        behavior : "smooth",
        block : "start"
    });
})


let btnpayer = document.querySelector('.btnPaier');
let addbtn = document.querySelectorAll('.btnAjouter');

addbtn.forEach((btn) => {
btn.addEventListener('click',(e) =>{
e.preventDefault();
  let countAdd =  btnpayer.querySelector('span') 

  let countvarbl = Number(countAdd.textContent) || 0

  countAdd.textContent = countvarbl + 1

})
})



let htMl = document.querySelector('html');
let sideC = document.querySelector('.sideleft');
let xSquare = document.querySelector('.xbtn')
const pizzaAddArray = [];


btnpayer.addEventListener('click',(e) => {
e.preventDefault();

sideC.style.display = "block"

 document.querySelector('main').style.filter = "blur(8px)"; 


});
xSquare.addEventListener('click',(e)=>{
    e.preventDefault();

sideC.style.display = "none"

  document.querySelector('main').style.filter = "blur(0px)"; 

})

let aTagcards =document.querySelector('.smoothCards');

aTagcards.addEventListener('click',(e) => {
    e.preventDefault()

    containerCards.scrollIntoView({
        behavior : "smooth",
        block : "start"
    })

})

let btnChois2 =document.querySelector('.btnChois1');

btnChois2.addEventListener('click',(e) => {
    e.preventDefault()

    containerCards.scrollIntoView({
        behavior : "smooth",
        block : "start"
    })

})