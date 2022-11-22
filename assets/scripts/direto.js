document.querySelector(".next-button").addEventListener("click", nextEtapa);

async function nextEtapa(){
    if(document.querySelector(".etapa-direto").classList.contains("step-1")) {
        showOnlyPrevButton();
        document.querySelector(".etapa-direto").classList.remove("step-1");
        document.querySelector(".etapa-direto").classList.add("step-2");
        sleep(1000).then(() => 
            document.querySelector(".texto-instrucao").textContent = "Operando..."
        );
    }
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    showOnlyNextButton();
    if(document.querySelector(".etapa-direto").classList.contains("step-2")){
        document.querySelector(".etapa-direto").classList.remove("step-2");
        document.querySelector(".etapa-direto").classList.add("step-1");
        document.querySelector(".texto-instrucao").textContent = "Instrução";
    }
}


document.querySelector("#direto").style.fontWeight = "600";
document.querySelector("#direto").style.color = "#cc253b";