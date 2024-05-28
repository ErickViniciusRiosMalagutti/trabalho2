let ipMedia = document.querySelector("#ipMedia");
let btverificar = document.querySelector("#btverificar");

function verificarmedia(){
    let media = Number(ipMedia.value);
    
    
    if(media >= 6){
        alert("aluno APROVADO")
 
    }else if (media >= 4){
        alert("Aluno precisa de recuperacao");
    }else{
        alert("reprovado");
    }
}

btverificar.onclick = function(){
    verificarmedia();
}