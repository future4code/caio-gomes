function semInput() {
    if (document.querySelector("input").value === ""){
        alert("Por favor, insira uma tarefa!");
    }else {
        gerarTarefa();
    }
}

function gerarTarefa(){
    const valorDoInput = document.querySelector("input").value;
    const diaEscolhido = document.getElementById("diasDaSemana").value;
    const novoItem = document.createElement('li');
    novoItem.textContent = valorDoInput;
        
        if (diaEscolhido === "segunda") {
            document.getElementById("segunda").appendChild(novoItem);
        }else if (diaEscolhido === "terca") {
            document.getElementById("terca").appendChild(novoItem);
        }else if (diaEscolhido === "quarta") {
            document.getElementById("quarta").appendChild(novoItem);
        }else if (diaEscolhido === "quinta") {
            document.getElementById("quinta").appendChild(novoItem);
        }else if (diaEscolhido === "sexta") {
            document.getElementById("sexta").appendChild(novoItem);
        }else if (diaEscolhido === "sabado") {
            document.getElementById("sabado").appendChild(novoItem);
        }else {
            document.getElementById("domingo").appendChild(novoItem);
        }
        document.querySelector("input").value = "";
}

