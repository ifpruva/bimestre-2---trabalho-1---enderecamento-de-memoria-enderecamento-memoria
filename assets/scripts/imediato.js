document.querySelector(".next-button").addEventListener("click", nextEtapa);

async function nextEtapa(){
    document.querySelector(".texto-instrucao").textContent = "Operando...";
    showOnlyPrevButton();
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    document.querySelector(".texto-instrucao").textContent = "Instrução";
    showOnlyNextButton();
}