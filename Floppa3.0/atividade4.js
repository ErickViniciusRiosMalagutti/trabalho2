let pitissa = document.querySelector("#pitissa");
let refri = document.querySelector("#refri");
let respo1 = document.querySelector("#respo1");
let respo2 = document.querySelector("#respo2");
let respo3 = document.querySelector("#respo3");
let btver = document.querySelector("#btver");

function pizza(){
    let n1 = Number(pitissa.value);
    let n2 = Number(refri.value);
    
    let resp1 = (n1 * 12);
    let resp2 = (n2 * 7);
    let resp3 = ((n1 * 12) + (n2 * 7));

    respo1.textContent = resp1 + " -valor da pizza";
    respo2.textContent = resp2 + " -valor do refrigerante";
    respo3.textContent = resp3 + " -valor deles em conjunto";
}
btver.onclick = function(){
    pizza();
}