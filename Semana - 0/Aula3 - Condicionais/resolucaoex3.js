
// RESOLUÇÃO EXERCíCIO 3 QUE NÃO CONSEGUI FAZER


const nomeDoCliente = prompt("Informe o seu nome:");
const tipoDeJogo = prompt("Informe o tipo de jogo: (IN/NA)");
const etapaDoJogo = prompt("Informe a etapa do jogo: (SF, DT, FI)");
const categoria = Number(prompt("Informe o tipo de jogo: (1, 2, 3, 4)"));
const quantidadeDeIngressos = prompt("Informe a quantidade de ingressos:");

const cotacaoDoDolar = 4.1;

let precoIndividualDoIngresso;

if(tipoDeJogo === "IN"){
	if(etapaDoJogo === "SF"){
		if(categoria === 1){
			precoIndividualDoIngresso = 1320 / cotacaoDoDolar;
		} else if(categoria === 2){
			precoIndividualDoIngresso = 880 / cotacaoDoDolar;
		} else if(categoria === 3){
			precoIndividualDoIngresso = 550 / cotacaoDoDolar;
		} else if(categoria === 4){
			precoIndividualDoIngresso = 220 / cotacaoDoDolar;
		}
	} else if(etapaDoJogo === "DT"){
		if(categoria === 1){
			precoIndividualDoIngresso = 660 / cotacaoDoDolar;
		} else if(categoria === 2){
			precoIndividualDoIngresso = 440 / cotacaoDoDolar;
		} else if(categoria === 3){
			precoIndividualDoIngresso = 330 / cotacaoDoDolar;
		} else if(categoria === 4){
			precoIndividualDoIngresso = 170 / cotacaoDoDolar;
		}
	} else if(etapaDoJogo === "FI"){
		if(categoria === 1){
			precoIndividualDoIngresso = 1980 / cotacaoDoDolar;
		} else if(categoria === 2){
			precoIndividualDoIngresso = 1320 / cotacaoDoDolar;
		} else if(categoria === 3){
			precoIndividualDoIngresso = 880 / cotacaoDoDolar;
		} else if(categoria === 4){
			precoIndividualDoIngresso = 330 / cotacaoDoDolar;
		}
	}
} else if(tipoDeJogo === "NA"){
	if(etapaDoJogo === "SF"){
		if(categoria === 1){
			precoIndividualDoIngresso = 1320;
		} else if(categoria === 2){
			precoIndividualDoIngresso = 880;
		} else if(categoria === 3){
			precoIndividualDoIngresso = 550;
		} else if(categoria === 4){
			precoIndividualDoIngresso = 220;
		}
	} else if(etapaDoJogo === "DT"){
		if(categoria === 1){
			precoIndividualDoIngresso = 660;
		} else if(categoria === 2){
			precoIndividualDoIngresso = 440;
		} else if(categoria === 3){
			precoIndividualDoIngresso = 330;
		} else if(categoria === 4){
			precoIndividualDoIngresso = 170;
		}
	} else if(etapaDoJogo === "FI"){
		if(categoria === 1){
			precoIndividualDoIngresso = 1980;
		} else if(categoria === 2){
			precoIndividualDoIngresso = 1320;
		} else if(categoria === 3){
			precoIndividualDoIngresso = 880;
		} else if(categoria === 4){
			precoIndividualDoIngresso = 330;
		}
	}
} else {
	console.log('Ooops, tipo de jogo informado inválido');
}

console.log("---Dados da compra---");
console.log("Nome do cliente:", nomeDoCliente);
console.log("Tipo de Jogo:", tipoDeJogo);
console.log("Etapa do Jogo:", etapaDoJogo);
console.log("Categoria:", categoria);
console.log("Quantidade de Ingressos:", quantidadeDeIngressos, "ingressos");
console.log(); // Isso é só para quebrar a uma linha.
console.log("---Valores---");

if(tipoDeJogo === "IN"){
	console.log("Valor do ingresso em US$:", precoIndividualDoIngresso);
	console.log("Valor do ingresso em R$:", precoIndividualDoIngresso * cotacaoDoDolar);
	console.log("Valor total da compra em US$:", "US$", precoIndividualDoIngresso * quantidadeDeIngressos);
	console.log("Valor total da compra em R$:", "R$", precoIndividualDoIngresso * cotacaoDoDolar * quantidadeDeIngressos);
} else if(tipoDeJogo === "NA"){
	console.log("Valor do ingresso:", "R$", precoIndividualDoIngresso);
	console.log("Valor total da compra:", "R$", precoIndividualDoIngresso * quantidadeDeIngressos);
}