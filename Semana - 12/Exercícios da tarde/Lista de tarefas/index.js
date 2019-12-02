const fs = require('fs');
const data = `\n${process.argv[3]}`;
const fileName = 'tarefas.txt';

try{
	fs.appendFileSync(fileName, data, 'utf-8');
	console.log('Tarefa adicionada com sucesso!');
} catch(err) {
	console.log(err);
}


