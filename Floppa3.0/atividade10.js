let vend = document.querySelector("#vend");
let bttv = document.querySelector("#bttv");

function metas(){
    let n1 = Number(vend.value)
    if(n1 >= 2500 ){
     alert ("bateu a meta 2500/2500")
    }else if (n1>= 1250){
        alert ("bateu meta minima 1250/2500")
    } else{
        alert ("meta nao atingida (meta 2500)")
    }
    

}

bttv.onclick = function(){
    metas();
}