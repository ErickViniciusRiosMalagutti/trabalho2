let umporce = document.querySelector("#umporce");
let bttest = document.querySelector("#bttest");
let resp1 = document.querySelector("#resp1");
let resp2 = document.querySelector("#resp2");
let resp3 = document.querySelector("#resp3");
let resp4 = document.querySelector("#resp4");

function aumento(){
    let n1 = Number(umporce.value);
 
    let resp11 = ((n1 * 0.01) + (5.10));
    let resp22 = ((n1 * 0.02) + (5.10));
    let resp33 = ((n1 * 0.05) + (5.10));
    let resp44 = ((n1 * 0.10)+ (5.10));

    resp1.textContent = resp11.toFixed(2);
    resp2.textContent = resp22.toFixed(2);
    resp3.textContent = resp33.toFixed(2);
    resp4.textContent = resp44.toFixed(2);
    
    
    
}

bttest.onclick = function(){
    aumento();
}