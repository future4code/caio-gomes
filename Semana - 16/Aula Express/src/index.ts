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
    password: process.env.SENHA_BANCO,
    database: 'caio',
  },
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

app.put('/editNickname/:id', (req: Request, res: Response) => {
  const newnickname = req.body.nickname
  const idcompare = req.params.id
  const query = connection('users').where({id: idcompare}).update({nickname: newnickname})
  query.then(result => {
    res.send(result);
  }).catch(err => res.status(500).send(err));
});

app.delete('/deleteUser/:id', (req: Request, res: Response) => {
  const id = req.params.id
  const query = connection('users').where({id: id}).del()
  query.then(result => {
    res.send(result);
  }).catch(err => res.status(500).send(err));
})

app.get('/getAllUsers', (req: Request, res: Response) => {
  const query = connection.select('*').from('users');
  query.then(result => {
    res.send(result);
  });
});

app.get('/getUser/', (req: Request, res: Response) => {
  let id = req.params.id;
  let name = req.query.name;
  const query = connection.select('*').from('users').where({id: id}).orWhere({name: name});
  query.then(result => {
    res.send(result);
  }).catch(err => res.status(500).send(err));
})

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
