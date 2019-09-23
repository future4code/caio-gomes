function semInput() {
    if (document.querySelector("input").value === ""){
        alert("Por favor, insira uma tarefa!");
    }else {
        gerarTarefa();
    }
}

function gerarTarefa(){
    const valorDoInput = document.querySelector("input").value;
    const diaEscolhido = document.querySelector("select").value;
    const segundaFeira = document.getElementById("segunda");
    const tercaFeira = document.getElementById("terca");
    const quartaFeira = document.getElementById("quarta");
    const quintaFeira = document.getElementById("quinta");
    const sextaFeira = document.getElementById("sexta");
    const sabadao = document.getElementById("sabado");
    const domingueira = document.getElementById("domingo")
    
        if (diaEscolhido === "segunda"){
            segundaFeira.innerHTML += "<li>" + valorDoInput + "</li>";
        }else if (diaEscolhido === "terca"){
            tercaFeira.innerHTML += "<li>" + valorDoInput + "</li>";
        }else if (diaEscolhido === "quarta"){
                quartaFeira.innerHTML += "<li>" + valorDoInput + "</li>";
            }else if (diaEscolhido === "quinta"){
                quintaFeira.innerHTML += "<li>" + valorDoInput + "</li>";
            }else if (diaEscolhido === "sexta"){
                sextaFeira.innerHTML += "<li>" + valorDoInput + "</li>";
            }else if (diaEscolhido === "sabado"){
                sabadao.innerHTML += "<li>" + valorDoInput + "</li>";
            }else {
                domingueira.innerHTML += "<li>" + valorDoInput + "</li>";
            }
        
        document.querySelector("input").value = "";
}
