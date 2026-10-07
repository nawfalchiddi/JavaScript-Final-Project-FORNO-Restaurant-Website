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
  sideC.style.display = "none"
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


btn.style.background = "green"
btn.style.color = "white"
btn.innerHTML = `<p><i class="bi bi-check2"></i> ajouter</p> `

let theParent = btn.closest('.cards');

let pizzaName = theParent.querySelector('h2 strong').textContent;
let pizzaPrice = theParent.querySelector('.priceAjouter h2').childNodes[0].textContent.trim()
let pizzaimg = theParent.querySelector('.imageM').src

let divajouter = document.createElement('div');
// divajouter.classList('thedivside');

 divajouter.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
        <img src="${pizzaimg}" alt="${pizzaName}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
        <div style="flex-grow: 1;">
          <h4 style="margin: 0; font-size: 14px;">${pizzaName}</h4>
          <p style="margin: 0; color: red; font-weight: bold; font-size: 13px;">${pizzaPrice} MAD</p>
        </div>
      </div>
    `;

    sideC.appendChild(divajouter)
})

})



let theMain = document.querySelector('main');
let sideC = document.querySelector('.sideleft');
let xSquare = document.querySelector('.xbtn')
const pizzaAddArray = [];


btnpayer.addEventListener('click',(e) => {
e.preventDefault();

sideC.style.display = "block"

 document.querySelector('main').style.filter = "blur(8px)"; 


});         

theMain.addEventListener('click',(e)=>{
    e.preventDefault();

sideC.style.display = "none"

  document.querySelector('main').style.filter = "blur(0px)"; 

})

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