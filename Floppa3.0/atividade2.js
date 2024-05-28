let quantos = document.querySelector("#quantos");
let btenter = document.querySelector("#btenter");
let resposta = document.querySelector("#resposta");

//oi professor :D
function ovo(){
    let ovo1 = Number(quantos.value);
    resp1 = (ovo1 * 2);
    resp2 = (ovo1 * 0.50);
    resposta.textContent = "quantidade de ovos "+ resp1 +" quantidade de queijo "+ resp2;
    
}

btenter.onclick = function(){
    ovo();
}