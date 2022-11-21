document.querySelector(".next-button").addEventListener("click", nextEtapa);

async function nextEtapa(){
    if (document.querySelector(".etapa-direto").classList.contains("step-1")){
        showAllButtons();
        document.querySelector(".etapa-direto").classList.remove("step-1");
        document.querySelector(".etapa-direto").classList.add("step-2");
    } else if (document.querySelector(".etapa-direto").classList.contains("step-2")){
        showOnlyPrevButton();
        document.querySelector(".etapa-direto").classList.remove("step-2");
        document.querySelector(".etapa-direto").classList.add("step-3");
        sleep(1000).then(() =>
        document.querySelector(".texto-instrucao").textContent = "Operando...");
    }
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    if(document.querySelector(".etapa-direto").classList.contains("step-3")){
        showAllButtons();
        document.querySelector(".etapa-direto").classList.remove("step-3");
        document.querySelector(".etapa-direto").classList.add("step-2");
        document.querySelector(".texto-instrucao").textContent = "Instrução";
    }else if(document.querySelector(".etapa-direto").classList.contains("step-2")){
        showOnlyNextButton();
        document.querySelector(".etapa-direto").classList.remove("step-2");
        document.querySelector(".etapa-direto").classList.add("step-1");
        document.querySelector(".texto-instrucao").textContent = "Instrução";
    }
}