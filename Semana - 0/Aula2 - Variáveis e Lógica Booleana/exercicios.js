//Exercícios Aula 2

//1a)

const monitor = 399.90;
const cadeira = 699.90;
const mouse = 189.90;
const teclado = 399.90;
const soma = monitor + cadeira + mouse + teclado;
console.log("A soma dos seus produtos é :","R$" + soma);

//1b) Fahrenheit para Kelvin e Celsius.


const fahren = 75
const kel = (fahren - 32) * 5/9 + 273.15;
const cel = (fahren - 32) * 5/9;
console.log("Kelvin:", kel.toFixed(2));
console.log("Celsius:", cel.toFixed(1) + "" + " graus");

//2a)

let fahrenheit = Number(prompt("Informe a temperatura em Fahrenheit :"));
let kelvin = (fahrenheit - 32) * 5/9 + 273.15;
let celsius = (fahrenheit - 32) * 5/9;
console.log("A temperatura em Kelvin é :", kelvin.toFixed(2));
console.log("A temperatura em Celsius é :", celsius.toFixed(1) + "" + " graus");


//2b)

const nome = prompt("Digite seu primeiro nome!");
const ultimoNome = prompt("Digite seu último nome!");
console.log("Olá, " + nome + " " + ultimoNome);

//2c)

const rua = prompt("Qual o nome da sua Rua?");
const numero = prompt("Qual o número da sua casa?");
const complemento = prompt("Informe o complemento da sua casa");
const bairro = prompt("Qual o seu bairro?");
const cidade = prompt("Qual é a sua cidade?");
console.log("Rua " + rua + "," + " " + "Número " + " " + numero + " " + " - " + " " + "Complemento: " + " " + complemento + " - " + "Bairro:" + " " + bairro + "," + " " + "Cidade:" + " " + cidade);

//3a)

const estaAberta = confirm("A casa está destrancada?");
const temChave = confirm("Você tem a chave da casa?");
const resultado = (estaAberta || temChave);
console.log("O usuário consegue entrar na casa? " + " " + resultado);

//3b)

const estaChovendo = confirm("Está chovendo?");
const temGuardaChuva = confirm("Tem Guarda-Chuva?")
const result = (estaChovendo && !temGuardaChuva);
console.log("O usuário vai se molhar ?" + " " + result);

//4)

const salario = prompt("Qual seu salário?")
const quilowatt = prompt("Qual a quantidade de quilowatts por mês?");
const custoQuilo = salario/5;
const quantQuilowatt = quilowatt * custoQuilo;
const desconto = quantQuilowatt - (quantQuilowatt*15) / 100;
const valorQuilo = console.log("Cada Quilowatt custa" + " " + "R$" + custoQuilo);
const valorPago = console.log("Você irá pagar: " + "R$" + quantQuilowatt);
const descontoPago = console.log("O valor que irá pagar com 15% de desconto é : " + "R$" + desconto);



// -----------------------------------------------------------------------------------


/*const casa = confirm("A casa está destrancada?");
const chave = confirm("Voce está com a chave");
const result = (casa || chave);
console.log("O usuário pode entrar na casa?", result);*/

const chuva = confirm("Está chovendo?");
const guardaChuva = confirm("Tem Guarda-Chuva?");
const resultado = (chuva && !guardaChuva);
console.log("O usuário vai se molhar? ",  resultado);


