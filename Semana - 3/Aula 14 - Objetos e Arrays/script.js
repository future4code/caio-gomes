function buscaItem(chave) {
    const valor = window.localStorage.getItem(chave);
    if (valor) {
      return JSON.parse(valor);
    }
    return [];
  }
  
  function salvaItem(chave, item) {
    if(item && chave) {
      window.localStorage.setItem(chave, JSON.stringify(item));
    }
  }



  function cadastrar() {
    const cadastro = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        email: document.getElementById("email").value
    }
    console.log(cadastro);
        salvaItem("Alunos", cadastro);
}

function alunosInscritos() {
    const inscritos = buscaItem("Alunos");
    inscritos = document.createElement("div");
}


