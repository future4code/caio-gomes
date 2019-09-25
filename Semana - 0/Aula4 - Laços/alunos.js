const alunos = ["Amanda", "Ana", "André", "Augusto", "Beatriz", "Benjamim", "Bianca", "Bruna", "Bruno", "Camila", "Cláudia", "Daniel", "Diego", "Diogo", "Eduarda", "Eduardo", "Emanuel", "Enzo", "Fernanda", "Filipe", "Gabriela", "Giovana", "Heitor", "Igor", "Isabela", "João", "Júlia", "Kevin", "Larissa", "Leonardo", "Letícia", "Luana", "Lúcia", "Luis", "Maria", "Mariana", "Marli", "Miguel", "Pablo", "Rafaela", "Rita", "Rodrigo", "Samuel", "Sara", "Tiago", "Tomás", "Vera", "Vinicios", "Vitória", "Yuri"]
let indice = 0;

// Exemplo com for of
/*for (indice of alunos){
  console.log(indice);
  console.log("Presente!");
}
*/

//Exemplo com for
/*for (let i = 0; i < alunos.length; i = i + 1) {
  console.log(alunos[i]);
  console.log("Presente!");
}*/

//Exercício 1:
//Escreva um programa JS que imprima na tela os
//números ímpares entre 1 e 5 (inclusos).
for (let i = 1; i <= 5; i += 1) {
 if(i % 2 !== 0) { // Verifica se o resto da divisão
//por 2 é diferente de zero
 console.log(i);
 }
}
