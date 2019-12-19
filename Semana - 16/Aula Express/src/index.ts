import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'caio',
    password: '6ac0e893475514c1449c7bf672657293',
    database: 'caio'
  }
});

app.post('/createUser', (req: Request, res: Response) => {
  const newUser = { ...req.body };
  const query = connection('users').insert(newUser);
  query
    .then(result => {
      res.send(result);
    })
    .catch(e => {
      res.send(e);
    });
});

app.get('/getAllBrazilianClients', async (req: Request, res: Response) => {
  const query = connection.select('primeiro_nome')
                          .from('correntistas')
                          .where('pais', 'Brazil');
  const result = await query;
  res.send(result);
});




// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
