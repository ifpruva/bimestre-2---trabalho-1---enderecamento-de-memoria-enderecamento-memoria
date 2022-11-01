


document.querySelector(".next-button").addEventListener("click", nextEtapa);


async function nextEtapa(){
    if(document.querySelector(".etapa-pilha").classList.contains("step-1")){
        document.querySelector(".etapa-pilha").classList.remove("step-1");
        document.querySelector(".etapa-pilha").classList.add("step-2");
}}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    if(document.querySelector(".etapa-pilha").classList.contains("step-2")){
    document.querySelector(".etapa-pilha").classList.remove("step-2");
    document.querySelector(".etapa-pilha").classList.add("step-1");
    }
}
