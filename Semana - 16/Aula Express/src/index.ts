import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'USUARIO',
    password : 'SENHA',
    database : 'exercicios'
  }
});

app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/ping': 'retorna o texto pong',
      '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
    }
  };

  // Exemplo de retorno de um JSON
  res.send(resposta)
});

app.get('/ping', (req: Request, res: Response) => {
  const hasQueryString = Object.values(req.query).length > 0;

  if(hasQueryString){
    // Exemplo de retorno de um JSON
    res.send(req.query);
  } else {
    // Exemplo de retorno de texto "puro"
    res.send('pong (nenhuma query string foi passada)');
  }
});

app.get('/hello/:name', (req: Request, res: Response) => {
  const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;

  // Exemplo de retorno de HTML
  res.send(resposta)
});

app.post('/mirror/:cor', (req: Request, res: Response) => {
  let responseBody;

  if(req.params.cor !== "0"){
    responseBody = { ...req.body, corPredileta: req.params.cor };
  } else {
    responseBody = { ...req.body, corPredileta: "NAO INFORMADA" };
  }

  res.send(responseBody);
});

// CT - Ex1
app.get('/getAllBrazilianClients', async (req: Request, res: Response) => {
  const query = connection.select('primeiro_nome')
                          .from('correntistas')
                          .where('pais', 'Brazil');
  const result = await query;
  res.send(result);
});
// CT - Ex2
app.get('/searchClientByName', (req: Request, res: Response) => {
  const nameToSearch = req.query.name;
  if(!nameToSearch){
    res.status(400).end();
    return;
  }
  const query = connection.raw(`SELECT primeiro_nome FROM correntistas WHERE primeiro_nome LIKE "%${nameToSearch}%"`)
  query.then(result => {
    res.send(result)
  })
});
// CT - Ex3
app.get('/getBirthdaysAfterDate/:date', (req: Request, res: Response) => {
  const dateToBeCompared = req.params.date;
  const query = connection.raw(`SELECT primeiro_nome, aniversario FROM correntistas WHERE aniversario < "${dateToBeCompared}"`)
  query.then(result => {
    res.send(result);
  })
});
// CT - Ex4
app.post('/createClient', (req: Request, res: Response) => {
  const newCliente = {
    ...req.body,
    divida_perdoada: 0,
    conta_corrente: 0,
  };
  const query = connection('correntistas').insert(newCliente);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
});


// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
