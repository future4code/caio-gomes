function semInput() {
    if (document.querySelector("input").value === ""){
        alert("Por favor, insira uma tarefa!");
    }else {
        gerarTarefa();
    }
}

function gerarTarefa(){
    const nomeDaNovaTarefa = document.getElementById("novaTarefa").value;
    const diaDaSemanaSelecionado = document.getElementById("diasDaSemana").value;
    const listaDeTarefasSelecionada = document.querySelector("#" + diaDaSemanaSelecionado + " > .content");

    const novasTarefas = document.createElement("li");
        novasTarefas.innerText = nomeDaNovaTarefa
        novasTarefas.onclick = riscaTarefa;
        
        if(nomeDaNovaTarefa !== ""){
            listaDeTarefasSelecionada.append(novasTarefas);
            limpaCampo();
        } else {
            alert("Insira o nome da tarefa");
        }

    }

function limpaCampo(){
    document.getElementById("novaTask").value = "";
}
        
function riscaTarefa(event){
    const target = event.target;
    target.classList.toggle("tarefa-feita");
}

function apagaTarefa(){
    const todasAsTarefas = document.querySelectorAll(".content");
        if(confirm("Quer apagar tudo?")){
            for(let diaDaSemana of todasAsTarefas){
                diaDaSemana.innerHTML = "";
            }
        }
        
}
