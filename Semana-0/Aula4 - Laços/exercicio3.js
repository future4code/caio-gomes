let pcChute = Math.floor(Math.random() * 100);
let numeroCerto = Math.floor(Math.random() * 100);
let tentativas = 1;  


while (pcChute !== numeroCerto) {
    tentativas = tentativas + 1

    if (pcChute > numeroCerto){
    pcChute = Math.floor(Math.random() * 100 );
    console.log("Está acima: " + pcChute);
    } else {
      pcChute = Math.floor(Math.random() * 100);
      console.log("Está abaixo : " + pcChute);
    }
}

console.log("O Computador acertou, o número é: " + numeroCerto);
console.log("Número de tentativas: " + tentativas);