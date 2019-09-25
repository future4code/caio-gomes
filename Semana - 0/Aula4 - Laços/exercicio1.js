let chutando = Number(prompt("Chute um número de 1 a 20"));
let numeroCerto = 12;
let tentativas = 1;
    
  while (chutando !== numeroCerto){
      tentativas = tentativas + 1;
      if (numeroCerto < chutando){
        chutando = Number(prompt("Número Acima, tente de novo"));
      } else {
        chutando = Number(prompt("Número Abaixo, tente de novo"));
      }
    }
  
  alert("Parabéns, Você Acertou o número é : " + numeroCerto);
  alert("Número de tentativas: " + tentativas);
  
