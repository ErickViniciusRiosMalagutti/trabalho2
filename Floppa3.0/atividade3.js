let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let respo1 = document.querySelector("#respo1");
let respo2 = document.querySelector("#respo2");
let respo3 = document.querySelector("#respo3");
let respo4 = document.querySelector("#respo4");
let bttsla = document.querySelector("#bttsla");

function sla(){
 let n1 = Number(v1.value);
 let n2 = Number(v2.value);
 let resp1 =(n1 + n2);
 let resp2 =(n1 - n2);
 let resp3 =(n1 * n2);
 let resp4 =(n1 / n2);

 respo1.textContent = resp1
 respo2.textContent = resp2
 respo3.textContent = resp3
 respo4.textContent = resp4
}

bttsla.onclick = function(){
    sla();
}