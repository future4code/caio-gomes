const fs = require('fs');
const fileName = 'tarefas.txt';
const data = `${process.argv[2]}\n`;
const colors = require('colors');

try{
	if(typeof data !== 'string'){
		console.log('Tarefa deve ser um texto'.red)
	} else if (data === undefined) {
		console.log('Insira uma tarefa válida'.red)
	} else {
		fs.appendFileSync(fileName, data, 'utf-8');
		console.log('Tarefa adicionada com sucesso!'.green);
	}
	}catch(err) {
		console.log(err.red)
}