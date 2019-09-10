let chutando = Number(prompt("Chute um número de 1 a 100"));
let numeroCerto = Math.floor((Math.random() * 100) + 1);
let tentativas = 1;   
    
  while (chutando !== numeroCerto){
      tentativas = tentativas + 1;
      if (numeroCerto < chutando){
        chutando = Number(prompt("Número Acima, tente de novo"));
      } else {
        chutando = Number(prompt("Número Abaixo, tente de novo"));
        }
    }
    alert("Parabéns, você acertou o número é: " + numeroCerto);
    alert("Número de tentativas: " + tentativas);

