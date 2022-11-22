document.querySelector(".next-button").addEventListener("click", nextEtapa);

async function nextEtapa(){
    if (document.querySelector(".etapa-registrador").classList.contains("step-1")){
        showOnlyPrevButton();
        document.querySelector(".etapa-registrador").classList.remove("step-1");
        document.querySelector(".etapa-registrador").classList.add("step-2");
        sleep(1000).then(() =>
            document.querySelector(".texto-instrucao").textContent = "Operando..."
        );
    }
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    if(document.querySelector(".etapa-registrador").classList.contains("step-2")){
        showOnlyNextButton();
        document.querySelector(".etapa-registrador").classList.remove("step-2");
        document.querySelector(".etapa-registrador").classList.add("step-1");
        document.querySelector(".texto-instrucao").textContent = "Instrução";
    }
}

document.querySelector("#registrador").style.fontWeight = "600";
document.querySelector("#registrador").style.color = "#cc253b";