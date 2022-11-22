
document.querySelector(".next-button").addEventListener("click", nextEtapa);


async function nextEtapa(){
    if(document.querySelector(".etapa-deslocamento").classList.contains("step-1")){
        showAllButtons();
        document.querySelector(".texto-instrucao").textContent = "A";
        document.querySelector(".texto-instrucao1").textContent = "R";
        document.querySelector(".etapa-deslocamento").classList.remove("step-1");
        document.querySelector(".etapa-deslocamento").classList.add("step-1-1");
    } else if(document.querySelector(".etapa-deslocamento").classList.contains("step-1-1")){
        showAllButtons();
        document.querySelector(".etapa-deslocamento").classList.remove("step-1-1");
        document.querySelector(".etapa-deslocamento").classList.add("step-2");
    } else if(document.querySelector(".etapa-deslocamento").classList.contains("step-2")){
        showAllButtons();
        document.querySelector(".etapa-deslocamento").classList.remove("step-2");
        document.querySelector(".etapa-deslocamento").classList.add("step-3");
        document.querySelector(".texto-instrucao1").textContent = "Instrução";
        document.querySelector(".texto-instrucao").textContent = "";
    } else if(document.querySelector(".etapa-deslocamento").classList.contains("step-3")){
        showOnlyPrevButton();
        document.querySelector(".etapa-deslocamento").classList.remove("step-3");
        document.querySelector(".etapa-deslocamento").classList.add("step-4");
        sleep(1000).then(() => {
            document.querySelector(".texto-instrucao1").textContent = "Operando...";
            document.querySelector(".texto-instrucao").textContent = "";
        });
    }
}

document.querySelector(".prev-button").addEventListener("click", prevEtapa);

async function prevEtapa(){
    if(document.querySelector(".etapa-deslocamento").classList.contains("step-4")){
        showAllButtons();
        document.querySelector(".etapa-deslocamento").classList.remove("step-4");
        document.querySelector(".etapa-deslocamento").classList.add("step-3");  
        document.querySelector(".texto-instrucao").textContent = "";
        document.querySelector(".texto-instrucao1").textContent = "Instrução";
    }
    else if(document.querySelector(".etapa-deslocamento").classList.contains("step-3")){
        showAllButtons();
        document.querySelector(".etapa-deslocamento").classList.remove("step-3");
        document.querySelector(".etapa-deslocamento").classList.add("step-2");
        document.querySelector(".texto-instrucao").textContent = "A";
        document.querySelector(".texto-instrucao1").textContent = "R";
    }else if(document.querySelector(".etapa-deslocamento").classList.contains("step-2")){
        showAllButtons();
        document.querySelector(".etapa-deslocamento").classList.remove("step-2");
        document.querySelector(".etapa-deslocamento").classList.add("step-1-1");
    }else{
        showOnlyNextButton();
        document.querySelector(".etapa-deslocamento").classList.add("step-1");
        document.querySelector(".texto-instrucao1").textContent = "Instrução";
        document.querySelector(".texto-instrucao").textContent = "";
    }
}


document.querySelector("#deslocamento").style.fontWeight = "600";
document.querySelector("#deslocamento").style.color = "#cc253b";