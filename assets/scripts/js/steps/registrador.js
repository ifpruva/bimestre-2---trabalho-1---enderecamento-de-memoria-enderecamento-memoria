
document.querySelector(".next-button").addEventListener("click", nextEtapa);


async function nextEtapa(){
    // if(document.querySelector(".etapa-registrador").classList.contains("step-1")){
    //     document.querySelector(".texto-instrucao").textContent = "R";
    //     document.querySelector(".etapa-registrador").classList.remove("step-1");
    //     document.querySelector(".etapa-registrador").classList.add("step-1-1");
    // }
    if (document.querySelector(".etapa-registrador").classList.contains("step-1")){
    document.querySelector(".etapa-registrador").classList.remove("step-1");
    document.querySelector(".etapa-registrador").classList.add("step-2");
    sleep(1000).then(() =>
    document.querySelector(".texto-instrucao").textContent = "OPERANDO...");
    }
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    if(document.querySelector(".etapa-registrador").classList.contains("step-2")){
    document.querySelector(".etapa-registrador").classList.remove("step-2");
    document.querySelector(".etapa-registrador").classList.add("step-1");
    document.querySelector(".texto-instrucao").textContent = "INSTRUÇÃO";
}else{
    document.querySelector(".etapa-registrador").classList.remove("step-1");
    document.querySelector(".etapa-registrador").classList.add("step-1");
    document.querySelector(".texto-instrucao").textContent = "INSTRUÇÃO";
}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }