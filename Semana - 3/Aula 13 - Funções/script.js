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

        if (diaEscolhido === "segunda"){
            alert("oi segunda");
        }else if (diaEscolhido === "terca"){
            alert("oi terça");
        }else if (diaEscolhido === "quarta"){
            alert("oi quarta");
        }else if (diaEscolhido === "quinta"){
            alert("oi quinta");
        }else if (diaEscolhido === "sexta"){
            alert("oi sexta");
        }else if (diaEscolhido === "sabado"){
            alert("oi sabado");
        }else {
            alert("oi domingo");
        }
}
