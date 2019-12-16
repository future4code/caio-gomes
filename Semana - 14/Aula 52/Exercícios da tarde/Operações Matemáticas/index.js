const typeOperation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const colors = require('colors');

const checkValidationParam = (typeOperation, num1, num2) => {
	if(typeOperation === undefined) {
		console.log('São esperados 3 argumentos'.red)
	} else {
		if(isNaN(num1) || isNaN(num2)) {
			console.log('São esperados 2 números para a operação!'.red) 
		} else {
			return myCalculator(typeOperation, num1, num2)
		}
	}
}

const myCalculator = (operation, number1, number2) => {
  switch (operation){
		case 'add':
			return number1 + number2;
			break;
		case 'sub':
			return number1 - number2;
			break;
		case 'mult':
			return number1 * number2;
			break;
		case 'div':
			return number1 / number2;
			break;
		default: 
			return 'No primeiro parâmetro é esperado uma das seguintes operações: add, sub, mult, div.'.red
	}
}

console.log('Resposta: '.green, checkValidationParam(typeOperation, num1, num2));