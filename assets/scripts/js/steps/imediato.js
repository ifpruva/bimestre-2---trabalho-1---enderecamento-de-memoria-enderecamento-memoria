document.querySelector(".next-button").addEventListener("click", nextEtapa);


async function nextEtapa(){
    if(document.querySelector(".etapa-direto").classList.contains("step-1")){
        document.querySelector(".texto-instrucao").textContent = "OPERANDO...";}
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    document.querySelector(".texto-instrucao").textContent = "";

}