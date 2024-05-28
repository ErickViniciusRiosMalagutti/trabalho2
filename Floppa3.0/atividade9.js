let alunos = document.querySelector("#alunos");
let turmas = document.querySelector("#turmas");
let btt = document.querySelector("#btt");
let resp1 = document.querySelector("#resp1");
let resp2 = document.querySelector("#resp2");

function sla(){
    let nr1 = Number(alunos.value);
    let nr2 = Number(turmas.value);
    let resp11 = (nr1 / nr2);
    let resp22 = (nr1 % nr2);

resp1.textContent = resp11;
resp2.textContent = resp22;
}

btt.onclick = function(){
    sla();
}