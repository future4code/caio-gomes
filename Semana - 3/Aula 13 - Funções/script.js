function gerarTarefa (){
    const valorDoInput = document.querySelector("input").value;
    console.log(valorDoInput);
    const diaEscolhido = document.querySelector("select").value;
    console.log(diaEscolhido);
    
    const segundaFeira = document.getElementById("segunda");
    const tercaFeira = document.getElementById("terca");
    const quartaFeira = document.getElementById("quarta");
    const quintaFeira = document.getElementById("quinta");
    const sextaFeira = document.getElementById("sexta");
    const sabadao = document.getElementById("sabado");
    const domingueira = document.getElementById("domingo")
    document.querySelector("input").value = "";

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

        
}
