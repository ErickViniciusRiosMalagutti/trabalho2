let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let resposta = document.querySelector("#resposta");
let bt = document.querySelector("#bt");

function sla(){
    let nr1 = Number(n1.value);
    let nr2 = Number(n2.value);
    let nr3 = Number(n3.value);


let menorvalor = nr1
if(nr2 < menorvalor){
    menorvalor = nr2;
}if(nr3 < menorvalor){
    menorvalor = nr3;
} 
resposta.textContent = + menorvalor + " o ano de nascimento"
}

bt.onclick = function(){
    sla();
}




