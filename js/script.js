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


let sideC = document.querySelector('.sideleft');
let btnpayer = document.querySelector('.btnPaier');
let addbtn = document.querySelectorAll('.btnAjouter');
let txtshldbehidde = document.querySelector('.lastdivSide');
let total = 0
let totalDiv = document.createElement('div');
totalDiv.classList.add('totaldivside')
let buy = document.createElement('button');
buy.classList.add('btnBuY');


let lastfrm = document.querySelector('.thelastForm');
let inptLastnom = document.querySelector('#firstname');
let inptlastLocation = document.querySelector('#locationFirst');
let inputNumber = document.querySelector('.numberFirst');

if (theForm) {
    theForm.style.display = "none";
    btnSuccess.textContent = "Confirmer la commande"; 
}
addbtn.forEach((btn) => {
    btn.addEventListener('click',(e) =>{
e.preventDefault();
lastfrm.style.display = "none"
let countAdd =  btnpayer.querySelector('span') 

let countvarbl = Number(countAdd.textContent) || 0

countAdd.textContent = countvarbl + 1


btn.style.background = "green"
btn.style.color = "white"
btn.innerHTML = `<p><i class="bi bi-check2"></i> ajouter</p> `

let theParent = btn.closest('.cards');

let pizzaName = theParent.querySelector('h2 strong').textContent;
let pizzaPriceText = theParent.querySelector('.priceAjouter h2').childNodes[0].textContent.trim()
let pizzaPricenum = parseFloat(pizzaPriceText) || 0;
let pizzaimg = theParent.querySelector('.imageM').src

total += pizzaPricenum;
let divajouter = document.createElement('div');
divajouter.classList.add('thedivside');

// let total = 0
// for (let i = 0; i < cardsPizza.length; i++) {
    //     total += Number(cardsPizza[i].pizzaPrice) 
    
    // }
    divajouter.innerHTML = `
    <div>
    <img src="${pizzaimg}" alt="${pizzaName}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
    <div style="flex-grow: 1;">
    <p style=" font-size: 10px;width: 50%;">Name : ${pizzaName}</p>
    <p style=" color: red; font-weight: bold; font-size: 10px;"> Price : ${pizzaPriceText} MAD</p>
    </div>
    </div>
    <div class="plusMinus">
    <button class="minus">-</button><input class="inptPM" value="1" type="number"><button class="plus">+</button>
</div>
    
    `;
 totalDiv.style.display = "flex";
        buy.style.display = "block";

    sideC.appendChild(buy);
    sideC.insertBefore(totalDiv,buy);
    sideC.insertBefore(divajouter , totalDiv);
    // sideC.insertBefore(totalDiv);
     totalDiv.innerHTML = `
        <span> Total :</span>
        <span> ${total} MAD</span>
        ` 

    let btnminus = divajouter.querySelector('.minus');
    let btnplus = divajouter.querySelector('.plus');
    let inptpm = divajouter.querySelector('.inptPM');
    
    btnplus.addEventListener('click',(e)=>{
        e.preventDefault()

        let amount =  parseFloat(inptpm.value)
        inptpm.value = amount + 1
        
        total += pizzaPricenum
        countAdd.textContent = Number(countAdd.textContent) + 1
        totalDiv.innerHTML = `
        <span> Total :</span>
        <span> ${total} MAD</span>
        ` 
    });
    btnminus.addEventListener('click',(e)=>{
        e.preventDefault();
        let amount =  parseFloat(inptpm.value)
            inptpm.value = amount - 1

            total -= pizzaPricenum
            countAdd.textContent = Number(countAdd.textContent) - 1
            totalDiv.innerHTML = `
    <span> Total :</span>
    <span> ${total} MAD</span>
    ` ;
    if (amount > 1) {
        inptpm.value = amount - 1
    }else{
        divajouter.remove();
        btn.style.background = "";
        btn.style.color = "";
        btn.innerHTML = `Ajouter`;

    }
    totalDiv.innerHTML = `
      <span> Total :</span>
      <span> ${total} MAD</span>
      ` 
      if (Number(countAdd.textContent) === 0 ){
        if(txtshldbehidde) txtshldbehidde.style.display = "block";  
         txtshldbehidde.style.width = "100%";
         txtshldbehidde.style.display = "flex";
             txtshldbehidde.style.textAlign = "center";
             txtshldbehidde.style.gap = "5%";
          
           buy.style.display = "none";
           totalDiv.style.display = "none";
      } 
     
    });
   
   if (txtshldbehidde) {
      txtshldbehidde.style.display = "none" 
      buy.innerHTML = `<div class="btnBuY"><button class="btnBuy">Demande</button></div>`
} 
    
})

});

buy.addEventListener('click',(e)=>{
    e.preventDefault();

        document.querySelectorAll('.thedivside').forEach(pizza => pizza.style.display = "none");
   
    
    divajouter.style.display = "none";
    buy.style.display = "none";
    totalDiv.style.display = "none";
    txtshldbehidde.style.display = "none" 
  
    if (lastfrm) lastfrm.style.display = "block";
});
  

    


})


let theMain = document.querySelector('main');
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


buy.addEventListener('click', (e)=>{
    e.preventDefault();
    buy.style.background = "green"
buy.style.color = "white"
buy.style.height = "5vh";
buy.style.width = "33%";
buy.style.marginTop = "3%";
buy.style.borderRadius = "10px";
buy.style.placeSelf = "center";
buy.innerHTML = `<p><i class="bi bi-check2"></i> Demonde</p> `
})