// Capturando números vindos do terminal
/*const firstNumber = Number(process.argv[2])
const secondNumber = Number(process.argv[3])
const thirdNumber = Number(process.argv[4])
// Obtendo valor total
const total = firstNumber + secondNumber + thirdNumber;
// Logando como foi pedido pelo exercício
console.log(`O valor total é: ${total}`);*/

/*const today = new Date();
const christmas = new Date("12/24/2019"); // Formato americano de data!
const timeUntilChristmas = christmas - today;
const timeInSeconds = timeUntilChristmas / 1000; // Transformando millisegundos em segundos
const timeInMinutes = timeInSeconds / 60
const timeInHours = timeInMinutes / 60
const timeInDays = timeInHours / 24
console.log(`Faltam ${timeInDays} dias até o natal`)*/

/*const fs = require('fs');
const fileName = "users.json";
try {
  const data = fs.readFileSync(fileName);
  // Os dados são retornados em um formato
  // especial, por isso precisamos chamar o
  // método toString.
  const treatedData = data.toString()
  const allUsers = JSON.parse(treatedData);
  const onlyUsernamesAndEmails = allUsers.map(user => `${user.username} - ${user.email}`)
  console.log(`Total de Usuários ${onlyUsernamesAndEmails.length}`)
  console.log(onlyUsernamesAndEmails)
} catch(err) {
  console.log(err)
}*/