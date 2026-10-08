let inptSrch = document.querySelector('.inputSearch');
let typePiza = document.querySelector('#pizaSelect');
let cardsPizza = document.querySelectorAll('.cards');
let containerCards = document.querySelector('.conta4');
let sideC = document.querySelector('.sideleft');
let btnpayer = document.querySelector('.btnPaier');
let addbtn = document.querySelectorAll('.btnAjouter');
let txtshldbehidde = document.querySelector('.lastdivSide');
let btnchoi = document.querySelector('.btnChois');
let lastfrm = document.querySelector('.thelastForm');
let inptLastnom = document.querySelector('#firstname');
let inptlastLocation = document.querySelector('#locationFirst');
let inputNumber = document.querySelector('.numberFirst');
let theMain = document.querySelector('main');
let xSquare = document.querySelector('.xbtn');
let aTagcards = document.querySelector('.smoothCards');

const pizzaAddArray = [];
let total = 0;

const totalDiv = document.createElement('div');
totalDiv.classList.add('totaldivside');

const buy = document.createElement('button');
buy.classList.add('btnBuY');
buy.textContent = "Demande"; 

if (typeof theForm !== 'undefined' && theForm) {
    theForm.style.display = "none";
    if (typeof btnSuccess !== 'undefined' && btnSuccess) {
        btnSuccess.textContent = "Confirmer la commande"; 
    }
}

inptSrch.addEventListener('input', (e) => {
    e.preventDefault();
    let searchValue = e.target.value.toLowerCase().trim();
       
    cardsPizza.forEach((card) => {
        let ziel = card.querySelector('h2').textContent.toLowerCase().trim();
        if (ziel.includes(searchValue)) {
            card.style.display = "block";
            if (!pizzaAddArray.includes(card)) pizzaAddArray.push(card);
        } else {
            card.style.display = "none";
        }
    });
});

typePiza.addEventListener('change', () => {
    let v = typePiza.value.toLowerCase().trim();

    cardsPizza.forEach((card) => {
        let pizzaName = card.querySelector('h2').textContent.toLowerCase().trim();
        if (v === "" || v === "choose" || pizzaName === v) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

if (btnchoi) {
    btnchoi.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('main').style.filter = "blur(0px)"; 
        sideC.style.display = "none";
        containerCards.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

addbtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (lastfrm) lastfrm.style.display = "none";
        
        let countAdd = btnpayer.querySelector('span'); 
        let countvarbl = Number(countAdd.textContent) || 0;
        countAdd.textContent = countvarbl + 1;

        btn.style.background = "green";
        btn.style.color = "white";
        btn.innerHTML = `<p><i class="bi bi-check2"></i> ajouter</p>`;

        let theParent = btn.closest('.cards');

        let pizzaNameElem = theParent.querySelector('h2 strong') || theParent.querySelector('h2');
        let pizzaName = pizzaNameElem ? pizzaNameElem.textContent.trim() : "Pizza";
        
        let imgElem = theParent.querySelector('.imageM');
        let pizzaimg = imgElem ? imgElem.src : "";

        let priceTarget = theParent.querySelector('.priceAjouter h2');
        let pizzaPriceText = priceTarget ? priceTarget.innerText.replace(/[^\d.]/g, '') : "0";
        let pizzaPricenum = parseFloat(pizzaPriceText) || 0;

        total += pizzaPricenum;
        
        let divajouter = document.createElement('div');
        divajouter.classList.add('thedivside');

        divajouter.innerHTML = `
            <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 10px;">
                <img src="${pizzaimg}" alt="${pizzaName}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">
                <div style="flex-grow: 1;">
                    <p style="font-size: 11px; margin: 0; font-weight: bold;">Name : ${pizzaName}</p>
                    <p style="color: red; font-weight: bold; font-size: 11px; margin: 0;">Price : ${pizzaPricenum} MAD</p>
                </div>
            </div>
            <div class="plusMinus">
                <button class="minus">-</button>
                <input class="inptPM" value="1" type="number" readonly>
                <button class="plus">+</button>
            </div>
        `;
        
        totalDiv.style.display = "flex";
        buy.style.display = "block";

        sideC.appendChild(buy);
        sideC.insertBefore(totalDiv, buy);
        sideC.insertBefore(divajouter, totalDiv);
        
        totalDiv.innerHTML = `<span> Total :</span> <span> ${total} MAD</span>`;

        let btnminus = divajouter.querySelector('.minus');
        let btnplus = divajouter.querySelector('.plus');
        let inptpm = divajouter.querySelector('.inptPM');
        
        btnplus.addEventListener('click', (e) => {
            e.preventDefault();
            let amount = parseFloat(inptpm.value) || 1;
            inptpm.value = amount + 1;
            
            total += pizzaPricenum;
            countAdd.textContent = Number(countAdd.textContent) + 1;
            totalDiv.innerHTML = `<span> Total :</span> <span> ${total} MAD</span>`;
        });

        btnminus.addEventListener('click', (e) => {
            e.preventDefault();
            let amount = parseFloat(inptpm.value) || 1;
            
            if (amount > 1) {
                inptpm.value = amount - 1;
                total -= pizzaPricenum;
                countAdd.textContent = Number(countAdd.textContent) - 1;
            } else {
                divajouter.remove();
                total -= pizzaPricenum;
                countAdd.textContent = Number(countAdd.textContent) - 1;

                btn.style.background = "";
                btn.style.color = "";
                btn.innerHTML = `Ajouter`;
            }
            
            totalDiv.innerHTML = `<span> Total :</span> <span> ${total} MAD</span>`;
          
            if (Number(countAdd.textContent) === 0) {
                if (txtshldbehidde) {
                    txtshldbehidde.style.display = "flex";  
                    txtshldbehidde.style.width = "100%";
                    txtshldbehidde.style.textAlign = "center";
                    txtshldbehidde.style.gap = "5%";
                }
                buy.style.display = "none";
                totalDiv.style.display = "none";
            } 
        });
       
        if (txtshldbehidde) {
            txtshldbehidde.style.display = "none"; 
        } 
    });
});

buy.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.thedivside').forEach(pizza => {
        pizza.style.display = "none";
    });
   
    buy.style.display = "none";
    totalDiv.style.display = "none";
    
    if (txtshldbehidde) {
        txtshldbehidde.style.display = "none"; 
    }
    
    if (lastfrm) {
        lastfrm.style.display = "block";
    }
});
  
if (lastfrm) {
    lastfrm.addEventListener('submit', (e) => {
        e.preventDefault();

        let nameVLue = inptLastnom.value.trim();
        let locationvLue = inptlastLocation.value.trim();
        let phoneValue = inputNumber.value.trim();

        if (nameVLue === "" || locationvLue === "" || phoneValue === "") {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        let moroccoPhone = /^(?:\+212|212|0)[5-7]\d{8}\$/;

        if (!moroccoPhone.test(phoneValue)) {
            alert('Veuillez entrer un numéro de téléphone marocain valide.');
            inputNumber.style.border = "2px solid red";
            return;
        }
        inputNumber.style.border = "";
        alert(`Commande validée avec succès pour ${nameVLue} ! Total : ${total} MAD.`);
    });
}

btnpayer.addEventListener('click', (e) => {
    e.preventDefault();
    sideC.style.display = "block";
    document.querySelector('main').style.filter = "blur(8px)"; 
});         

theMain.addEventListener('click', (e) => {
    if (e.target === theMain) {
        sideC.style.display = "none";
        document.querySelector('main').style.filter = "blur(0px)"; 
    }
});

if (xSquare) {
    xSquare.addEventListener('click', (e) => {
        e.preventDefault();
        sideC.style.display = "none";
        document.querySelector('main').style.filter = "blur(0px)"; 
    });
}

if (aTagcards) {
    aTagcards.addEventListener('click', (e) => {
        e.preventDefault();
        containerCards.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
